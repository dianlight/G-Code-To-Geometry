import { FContext, G0Context, G17Context, G18Context, G19Context, G1Context, G20Context, G21Context, G2Context, G3Context, GContext, GWordContext, IContext, JContext, LineContext, ProgramContext, RContext, SegmentContext, XContext, YContext, ZContext } from "./antlr/gcodeParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor"
import { gcodeVisitor } from "./antlr/gcodeVisitor"
import { JSONGeometry, JSONGeometryLine, JSONPosition } from "./JSONGeometry";
import { CNCSettings, CurvedLine } from "./lines"


interface CurrentLine extends JSONGeometryLine {
    r: number,
    i: number,
    j: number,
    k: number
}


export class InterpreterVisitor extends AbstractParseTreeVisitor<JSONGeometry> implements gcodeVisitor<JSONGeometry> {

    geometry: JSONGeometry = {
        lines: [],
        displayInInch: true,
        errorList: [],
        gcode: [],
        size: {
            min: { x: 0, y: 0, z: 0 },
            max: { x: 0, y: 0, z: 0 }
        }
    }

    currentLine: Partial<CurrentLine> = {};

    settings: CNCSettings = {
        feedrate:0,
        inMm: false,
        crossAxe: 'z'
    }

    position: JSONPosition = { x: 0, y: 0, z: 0 }
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    shallow<T extends object>(source: T): T {
        return {
          ...source,
        }
    }

    protected defaultResult(): JSONGeometry {
        return this.geometry;
    }

    protected emitCurrentLine(): 'G0'|'G1'|'G2'|'G3' {
        if(!this.currentLine.type)return undefined
        switch (this.currentLine.type) {
            case 'G0':
            case 'G1':
                this.geometry.lines.push(this.shallow(this.currentLine) as JSONGeometryLine);
                return this.currentLine.type
            case 'G2':
            case 'G3': {

                const curvedline = new CurvedLine(this.currentLine.lineNumber,
                    this.currentLine.start as JSONPosition,
                    this.currentLine.end as JSONPosition,
                    this.currentLine, this.settings);
                
                //console.log("------------------------", curvedline);
                if (curvedline.center !== false) {
                    const temp = curvedline.returnLine();
                    if (temp === false) {
                        this.geometry.errorList.push({
                            line: this.currentLine.lineNumber, message: "(error) Impossible to create arc.", isSkipped: true
                        })
                    } else {
                        this.geometry.lines.push(temp);
                        // console.log("-----TM-------------------\n", JSON.stringify(temp,null,2));
                        //   settings.feedrate = line.feedrate;
                        //   settings.previousMoveCommand = command.type;
                        //   checkTotalSize(totalSize, line.getSize());
                        //  lines.push(temp);
                        //  settings.position = util.copyObject(line.end);
                    }
                    
                } else {
                    this.geometry.errorList.push({
                        line: this.currentLine.lineNumber,
                        message: "(error) Physically impossible to do with those values.",
                        isSkipped: true
                    })
                }
                return this.currentLine.type
            }
            default:
                if(this.currentLine.lineNumber)
                    this.geometry.errorList.push({
                        line: this.currentLine.lineNumber,
                        isSkipped: true,
                        message: "Unknown command "+this.currentLine.type
                    })
                break;
        }
        return undefined
    }

    /**
	 * Visit a parse tree produced by `gcodeParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitProgram(ctx: ProgramContext): JSONGeometry {
        ctx.children?.forEach(ctxx => this.visit(ctxx))
        this.emitCurrentLine()
        return this.geometry
    }


 /**
  * Visit a parse tree produced by `gcodeParser.line`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitLine(ctx: LineContext): JSONGeometry {
//        console.log("LINE", ctx.lineNumber()?.text)
//        const stream = ctx.start.inputStream;
//        this.geometry.gcode.push(stream.getText(new Interval(ctx.start.startIndex, ctx.stop.stopIndex)))
        this.geometry.gcode.push(ctx.text.replace(/\r?\n|\r/,""))
        const oldType = this.emitCurrentLine()
        this.currentLine = {}
        this.currentLine.lineNumber = ctx.start.line
        this.settings.oldType = oldType
//        this.visit(ctx.lineNumber())
        ctx.segment().forEach(ctxx => this.visit(ctxx))
//        this.geometry.lines.push({
//            type: 'G1',
//            feedrate: this.feedrate,
//            lineNumber: ctx.start.line,       
//        })
        return this.geometry
    }
 /**
  * Visit a parse tree produced by `gcodeParser.segment`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitSegment(ctx: SegmentContext): JSONGeometry{
        if (ctx.word()) {
        //    console.log("S[", ctx.word().text,']')
            this.visit(ctx.word())
        }
     return this.geometry
    }

 /**
  * Visit a parse tree produced by `gcodeParser.comment`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitComment?: (ctx: CommentContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.parameterSetting`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitParameterSetting?: (ctx: ParameterSettingContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.parameter`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitParameter?: (ctx: ParameterContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.designator`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitDesignator?: (ctx: DesignatorContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.oword_label`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitOword_label?: (ctx: Oword_labelContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.oword_statement`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitOword_statement?: (ctx: Oword_statementContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.parameterList`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitParameterList?: (ctx: ParameterListContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.optReturnValue`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitOptReturnValue?: (ctx: OptReturnValueContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.word`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitWord?: (ctx: WordContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.axisWord`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitAxisWord?: (ctx: AxisWordContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.a`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitA?: (ctx: AContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.b`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitB?: (ctx: BContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.c`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitC?: (ctx: CContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.i`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitI(ctx: IContext) : JSONGeometry {
    // console.log("\t\tI->",ctx.e().text)
    if (!this.currentLine.end && this.settings.oldType) {
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = this.settings.oldType
        this.currentLine.feedrate = this.settings.feedrate
    }     
    this.currentLine.i = Number.parseFloat(ctx.e().text)
    return this.geometry
}

 /**
  * Visit a parse tree produced by `gcodeParser.j`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitJ(ctx: JContext): JSONGeometry {
    // console.log("\t\tJ->",ctx.e().text)
    if (!this.currentLine.end && this.settings.oldType) {
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = this.settings.oldType
        this.currentLine.feedrate = this.settings.feedrate
    }     
    this.currentLine.j = Number.parseFloat(ctx.e().text)
    return this.geometry
}
 /**
  * Visit a parse tree produced by `gcodeParser.k`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitK?: (ctx: KContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.r`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitR(ctx: RContext): JSONGeometry {
        // console.log("\t\tR->",ctx.e().text)
        if (!this.currentLine.end && this.settings.oldType) {
            this.currentLine.start = this.shallow(this.position)
            this.currentLine.end =  this.shallow(this.position)
            this.currentLine.type = this.settings.oldType
            this.currentLine.feedrate = this.settings.feedrate
        }     
            this.currentLine.r = Number.parseFloat(ctx.e().text)
        return this.geometry
  }

 /**
  * Visit a parse tree produced by `gcodeParser.x`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitX(ctx: XContext): JSONGeometry{
        // console.log("\t\tX->",ctx.e().text)
        if (!this.currentLine.end && this.settings.oldType) {
            this.currentLine.start = this.shallow(this.position)
            this.currentLine.end =  this.shallow(this.position)
            this.currentLine.type = this.settings.oldType
            this.currentLine.feedrate = this.settings.feedrate
        }
        this.currentLine.end.x = Number.parseFloat(ctx.e().text)
        this.position.x = Number.parseFloat(ctx.e().text)
        this.geometry.size.min.x = Math.min(this.geometry.size.min.x,this.position.x) 
        this.geometry.size.max.x = Math.max(this.geometry.size.max.x,this.position.x) 
        return this.geometry
    }

 /**
  * Visit a parse tree produced by `gcodeParser.y`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitY(ctx: YContext):JSONGeometry{
    // console.log("\t\tY->",ctx.e().text)
    if (!this.currentLine.end && this.settings.oldType) {
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = this.settings.oldType
        this.currentLine.feedrate = this.settings.feedrate
    }
this.currentLine.end.y =Number.parseFloat(ctx.e().text)
    this.position.y = Number.parseFloat(ctx.e().text)
     this.geometry.size.min.y = Math.min(this.geometry.size.min.y,this.position.y) 
     this.geometry.size.max.y = Math.max(this.geometry.size.max.y,this.position.y) 
    return this.geometry
 } 
 /**
  * Visit a parse tree produced by `gcodeParser.z`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitZ(ctx: ZContext):JSONGeometry{
    // console.log("\t\tZ->",ctx.e().text)
    if (!this.currentLine.end && this.settings.oldType) {
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = this.settings.oldType
        this.currentLine.feedrate = this.settings.feedrate
    }
     this.currentLine.end.z = Number.parseFloat(ctx.e().text)
     this.position.z = Number.parseFloat(ctx.e().text)
     this.geometry.size.min.z = Math.min(this.geometry.size.min.z,this.position.z) 
     this.geometry.size.max.z = Math.max(this.geometry.size.max.z,this.position.z) 

    return this.geometry
}
 /**
  * Visit a parse tree produced by `gcodeParser.dimensionWord`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitDimensionWord?: (ctx: DimensionWordContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.f`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitF(ctx: FContext):JSONGeometry{
    // console.log("\t\tF->", ctx.e().text)
    if (!this.currentLine.end && this.settings.oldType) {
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = this.settings.oldType
        this.currentLine.feedrate = this.settings.feedrate
    }     
     this.currentLine.feedrate = Number.parseFloat(ctx.e().text);
     this.settings.feedrate = Number.parseFloat(ctx.e().text)
    return this.geometry
}
 /**
  * Visit a parse tree produced by `gcodeParser.d`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitD?: (ctx: DContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
    visitG(ctx: GContext): JSONGeometry {
        console.log("GContex",ctx)
        return 
    }
  */

 /**
  * Visit a parse tree produced by `gcodeParser.h`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitH?: (ctx: HContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.l`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitL?: (ctx: LContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM?: (ctx: MContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.p`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitP?: (ctx: PContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.q`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitQ?: (ctx: QContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.s`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitS?: (ctx: SContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.t`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitT?: (ctx: TContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.wordLetter`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitWordLetter?: (ctx: WordLetterContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.gWord`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
    visitGWord(ctx: GWordContext): JSONGeometry{
        // console.log("G")
        this.emitCurrentLine()
        this.currentLine = {}
        this.currentLine.lineNumber = ctx.start.line
        ctx.children?.forEach(ctxx => this.visit(ctxx))
        return this.geometry
    };
    /* */

 /**
  * Visit a parse tree produced by `gcodeParser.group1`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup1?: (ctx: Group1Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group2`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup2?: (ctx: Group2Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group3`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup3?: (ctx: Group3Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group5`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup5?: (ctx: Group5Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group6`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup6?: (ctx: Group6Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group7`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup7?: (ctx: Group7Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group8`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup8?: (ctx: Group8Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group10`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup10?: (ctx: Group10Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group12`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup12?: (ctx: Group12Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group13`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup13?: (ctx: Group13Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.group0`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitGroup0?: (ctx: Group0Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g0`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG0(ctx: G0Context): JSONGeometry {
    // console.log('\tG0')
    this.currentLine.start = this.shallow(this.position)
    this.currentLine.end = this.shallow(this.position)
    this.currentLine.type = 'G0'
    this.currentLine.feedrate = 0
    return this.geometry
}

 /**
  * Visit a parse tree produced by `gcodeParser.g1`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitG1(ctx: G1Context): JSONGeometry {
        // console.log('\tG1',this.position)
        this.currentLine.start = this.shallow(this.position)
        this.currentLine.end =  this.shallow(this.position)
        this.currentLine.type = 'G1'
        this.currentLine.feedrate = this.settings.feedrate
        return this.geometry
    }

 /**
  * Visit a parse tree produced by `gcodeParser.g2`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG2(ctx: G2Context):JSONGeometry {
    // console.log('\tG2')
     this.currentLine.type = 'G2'
     this.currentLine.start = this.shallow(this.position)
     this.currentLine.end =  this.shallow(this.position)
    this.currentLine.feedrate = this.settings.feedrate
     return this.geometry
}
 /**
  * Visit a parse tree produced by `gcodeParser.g3`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG3(ctx: G3Context):JSONGeometry {
    // console.log('\tG3')
    this.currentLine.type = 'G3'
    this.currentLine.start = this.shallow(this.position)
    this.currentLine.end =  this.shallow(this.position)
    this.currentLine.feedrate = this.settings.feedrate
    return this.geometry
}

 /**
  * Visit a parse tree produced by `gcodeParser.g4`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG4?: (ctx: G4Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g10`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG10?: (ctx: G10Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g17`.
  * @param ctx the parse tree
  * @return the visitor result
  */
    visitG17(ctx: G17Context): JSONGeometry {
        this.settings.crossAxe = 'z';
     return
 }

 /**
  * Visit a parse tree produced by `gcodeParser.g18`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG18(ctx: G18Context): JSONGeometry {
    this.settings.crossAxe = 'y';
 return
}

 /**
  * Visit a parse tree produced by `gcodeParser.g19`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG19(ctx: G19Context): JSONGeometry {
    this.settings.crossAxe = 'x';
 return
}

 /**
  * Visit a parse tree produced by `gcodeParser.g20`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG20(ctx: G20Context): JSONGeometry {
    this.settings.inMm = false;
 return
}

 /**
  * Visit a parse tree produced by `gcodeParser.g21`.
  * @param ctx the parse tree
  * @return the visitor result
  */
 visitG21(ctx: G21Context): JSONGeometry {
    this.settings.inMm = true;
 return
}
 /**
  * Visit a parse tree produced by `gcodeParser.g28`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG28?: (ctx: G28Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g30`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG30?: (ctx: G30Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g38_2`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG38_2?: (ctx: G38_2Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g40`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG40?: (ctx: G40Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g41`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG41?: (ctx: G41Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g42`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG42?: (ctx: G42Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g43`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG43?: (ctx: G43Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g49`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG49?: (ctx: G49Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g53`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG53?: (ctx: G53Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g54`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG54?: (ctx: G54Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g55`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG55?: (ctx: G55Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g56`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG56?: (ctx: G56Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g57`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG57?: (ctx: G57Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g58`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG58?: (ctx: G58Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g59`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG59?: (ctx: G59Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g59_1`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG59_1?: (ctx: G59_1Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g59_2`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG59_2?: (ctx: G59_2Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g59_3`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG59_3?: (ctx: G59_3Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g61`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG61?: (ctx: G61Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g61_1`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG61_1?: (ctx: G61_1Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g64`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG64?: (ctx: G64Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g80`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG80?: (ctx: G80Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g81`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG81?: (ctx: G81Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g82`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG82?: (ctx: G82Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g83`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG83?: (ctx: G83Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g84`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG84?: (ctx: G84Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g85`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG85?: (ctx: G85Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g86`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG86?: (ctx: G86Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g87`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG87?: (ctx: G87Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g88`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG88?: (ctx: G88Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g89`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG89?: (ctx: G89Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g90`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG90?: (ctx: G90Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g91`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG91?: (ctx: G91Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g92`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG92?: (ctx: G92Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g92_1`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG92_1?: (ctx: G92_1Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g92_2`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG92_2?: (ctx: G92_2Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g92_3`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG92_3?: (ctx: G92_3Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g93`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG93?: (ctx: G93Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g94`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG94?: (ctx: G94Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g98`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG98?: (ctx: G98Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.g99`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitG99?: (ctx: G99Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mWord`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMWord?: (ctx: MWordContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mgroup4`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMgroup4?: (ctx: Mgroup4Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mgroup6`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMgroup6?: (ctx: Mgroup6Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mgroup7`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMgroup7?: (ctx: Mgroup7Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mgroup8`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMgroup8?: (ctx: Mgroup8Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.mgroup9`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitMgroup9?: (ctx: Mgroup9Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m0`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM0?: (ctx: M0Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m1`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM1?: (ctx: M1Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m2`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM2?: (ctx: M2Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m3`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM3?: (ctx: M3Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m4`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM4?: (ctx: M4Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m5`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM5?: (ctx: M5Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m6`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM6?: (ctx: M6Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m7`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM7?: (ctx: M7Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m8`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM8?: (ctx: M8Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m9`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM9?: (ctx: M9Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m30`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM30?: (ctx: M30Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m48`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM48?: (ctx: M48Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m49`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM49?: (ctx: M49Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.m60`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitM60?: (ctx: M60Context) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.e`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitE?: (ctx: EContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.logicalExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.comparisonExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.plusMinExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitPlusMinExpression?: (ctx: PlusMinExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.aggregateExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitAggregateExpression?: (ctx: AggregateExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.powerExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitPowerExpression?: (ctx: PowerExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.unaryExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.bracketExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.primitiveExpression`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.lineNumber`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitLineNumber?: (ctx: LineNumberContext) => Result;

 /**
  * Visit a parse tree produced by `gcodeParser.endOfLine`.
  * @param ctx the parse tree
  * @return the visitor result
  * /
 visitEndOfLine?: (ctx: EndOfLineContext) => Result;    
*/
    

}