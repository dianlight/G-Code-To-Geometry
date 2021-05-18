import { FContext, G0Context, G17Context, G18Context, G19Context, G1Context, G20Context, G21Context, G2Context, G3Context, IContext, JContext, LineContext, ProgramContext, RContext, SegmentContext, XContext, YContext, ZContext } from "./antlr/gcodeParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { gcodeVisitor } from "./antlr/gcodeVisitor";
import { JSONGeometry, JSONGeometryLine, JSONPosition } from "./JSONGeometry";
import { CNCSettings } from "./lines";
interface CurrentLine extends JSONGeometryLine {
    r: number;
    i: number;
    j: number;
    k: number;
}
export declare class InterpreterVisitor extends AbstractParseTreeVisitor<JSONGeometry> implements gcodeVisitor<JSONGeometry> {
    geometry: JSONGeometry;
    currentLine: Partial<CurrentLine>;
    settings: CNCSettings;
    position: JSONPosition;
    shallow<T extends object>(source: T): T;
    protected defaultResult(): JSONGeometry;
    protected emitCurrentLine(): 'G0' | 'G1' | 'G2' | 'G3';
    /**
     * Visit a parse tree produced by `gcodeParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram(ctx: ProgramContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.line`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLine(ctx: LineContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.segment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSegment(ctx: SegmentContext): JSONGeometry;
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
    visitI(ctx: IContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.j`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJ(ctx: JContext): JSONGeometry;
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
    visitR(ctx: RContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.x`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitX(ctx: XContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.y`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitY(ctx: YContext): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.z`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZ(ctx: ZContext): JSONGeometry;
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
    visitF(ctx: FContext): JSONGeometry;
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
    visitG0(ctx: G0Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG1(ctx: G1Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG2(ctx: G2Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g3`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG3(ctx: G3Context): JSONGeometry;
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
    visitG17(ctx: G17Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g18`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG18(ctx: G18Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g19`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG19(ctx: G19Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g20`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG20(ctx: G20Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g21`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG21(ctx: G21Context): JSONGeometry;
}
export {};
