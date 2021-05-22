/// <reference types="node" />
import { FContext, G0Context, G17Context, G18Context, G19Context, G1Context, G20Context, G21Context, G2Context, G3Context, IContext, JContext, LineContext, MWordContext, ProgramContext, RContext, XContext, YContext, ZContext } from "./antlr/gcodeParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { gcodeVisitor } from "./antlr/gcodeVisitor";
import { JSONGeometry, JSONGeometryLine, JSONPosition } from "./JSONGeometry";
import { CNCSettings } from "./lines";
import { GCodeToGeometryOptions } from "./gcodetogeometry";
import events from "events";
interface CurrentLine extends JSONGeometryLine {
    r: number;
    i: number;
    j: number;
}
export declare class InterpreterVisitor extends AbstractParseTreeVisitor<JSONGeometry> implements gcodeVisitor<JSONGeometry> {
    private currentOptions;
    private emitter?;
    constructor(currentOptions: GCodeToGeometryOptions, emitter?: events.EventEmitter);
    geometry: JSONGeometry;
    currentLine: Partial<CurrentLine>;
    previusLine: Partial<CurrentLine>;
    settings: CNCSettings;
    position: JSONPosition;
    shallow<T extends object>(source: T): T;
    protected defaultResult(): JSONGeometry;
    protected roundToPrecision(n: number): number;
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
     * /
       visitSegment(ctx: SegmentContext): JSONGeometry{
           if (ctx.word()) {
           //    console.log("S[", ctx.word().text,']')
               this.visit(ctx.word())
           }
        return this.geometry
       }
       */
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
    visitG0(_ctx: G0Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG1(_ctx: G1Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG2(_ctx: G2Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g3`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG3(_ctx: G3Context): JSONGeometry;
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
    visitG17(_ctx: G17Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g18`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG18(_ctx: G18Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g19`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG19(_ctx: G19Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g20`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG20(_ctx: G20Context): JSONGeometry;
    /**
     * Visit a parse tree produced by `gcodeParser.g21`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitG21(_ctx: G21Context): JSONGeometry;
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
     */
    visitMWord(_ctx: MWordContext): JSONGeometry;
}
export {};
