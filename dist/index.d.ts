/// <reference types="node" />
declare module "antlr/gcodeListener" {
    import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
    import { ProgramContext } from "antlr/gcodeParser";
    import { LineContext } from "antlr/gcodeParser";
    import { SegmentContext } from "antlr/gcodeParser";
    import { CommentContext } from "antlr/gcodeParser";
    import { ParameterSettingContext } from "antlr/gcodeParser";
    import { ParameterContext } from "antlr/gcodeParser";
    import { DesignatorContext } from "antlr/gcodeParser";
    import { Oword_labelContext } from "antlr/gcodeParser";
    import { Oword_statementContext } from "antlr/gcodeParser";
    import { ParameterListContext } from "antlr/gcodeParser";
    import { OptReturnValueContext } from "antlr/gcodeParser";
    import { WordContext } from "antlr/gcodeParser";
    import { AxisWordContext } from "antlr/gcodeParser";
    import { AContext } from "antlr/gcodeParser";
    import { BContext } from "antlr/gcodeParser";
    import { CContext } from "antlr/gcodeParser";
    import { IContext } from "antlr/gcodeParser";
    import { JContext } from "antlr/gcodeParser";
    import { KContext } from "antlr/gcodeParser";
    import { RContext } from "antlr/gcodeParser";
    import { XContext } from "antlr/gcodeParser";
    import { YContext } from "antlr/gcodeParser";
    import { ZContext } from "antlr/gcodeParser";
    import { DimensionWordContext } from "antlr/gcodeParser";
    import { FContext } from "antlr/gcodeParser";
    import { ExContext } from "antlr/gcodeParser";
    import { DContext } from "antlr/gcodeParser";
    import { GContext } from "antlr/gcodeParser";
    import { HContext } from "antlr/gcodeParser";
    import { LContext } from "antlr/gcodeParser";
    import { MContext } from "antlr/gcodeParser";
    import { PContext } from "antlr/gcodeParser";
    import { QContext } from "antlr/gcodeParser";
    import { SContext } from "antlr/gcodeParser";
    import { TContext } from "antlr/gcodeParser";
    import { WordLetterContext } from "antlr/gcodeParser";
    import { GWordContext } from "antlr/gcodeParser";
    import { Group1Context } from "antlr/gcodeParser";
    import { Group2Context } from "antlr/gcodeParser";
    import { Group3Context } from "antlr/gcodeParser";
    import { Group5Context } from "antlr/gcodeParser";
    import { Group6Context } from "antlr/gcodeParser";
    import { Group7Context } from "antlr/gcodeParser";
    import { Group8Context } from "antlr/gcodeParser";
    import { Group10Context } from "antlr/gcodeParser";
    import { Group12Context } from "antlr/gcodeParser";
    import { Group13Context } from "antlr/gcodeParser";
    import { Group0Context } from "antlr/gcodeParser";
    import { G0Context } from "antlr/gcodeParser";
    import { G1Context } from "antlr/gcodeParser";
    import { G2Context } from "antlr/gcodeParser";
    import { G3Context } from "antlr/gcodeParser";
    import { G4Context } from "antlr/gcodeParser";
    import { G10Context } from "antlr/gcodeParser";
    import { G17Context } from "antlr/gcodeParser";
    import { G18Context } from "antlr/gcodeParser";
    import { G19Context } from "antlr/gcodeParser";
    import { G20Context } from "antlr/gcodeParser";
    import { G21Context } from "antlr/gcodeParser";
    import { G28Context } from "antlr/gcodeParser";
    import { G30Context } from "antlr/gcodeParser";
    import { G38_2Context } from "antlr/gcodeParser";
    import { G40Context } from "antlr/gcodeParser";
    import { G41Context } from "antlr/gcodeParser";
    import { G42Context } from "antlr/gcodeParser";
    import { G43Context } from "antlr/gcodeParser";
    import { G49Context } from "antlr/gcodeParser";
    import { G53Context } from "antlr/gcodeParser";
    import { G54Context } from "antlr/gcodeParser";
    import { G55Context } from "antlr/gcodeParser";
    import { G56Context } from "antlr/gcodeParser";
    import { G57Context } from "antlr/gcodeParser";
    import { G58Context } from "antlr/gcodeParser";
    import { G59Context } from "antlr/gcodeParser";
    import { G59_1Context } from "antlr/gcodeParser";
    import { G59_2Context } from "antlr/gcodeParser";
    import { G59_3Context } from "antlr/gcodeParser";
    import { G61Context } from "antlr/gcodeParser";
    import { G61_1Context } from "antlr/gcodeParser";
    import { G64Context } from "antlr/gcodeParser";
    import { G80Context } from "antlr/gcodeParser";
    import { G81Context } from "antlr/gcodeParser";
    import { G82Context } from "antlr/gcodeParser";
    import { G83Context } from "antlr/gcodeParser";
    import { G84Context } from "antlr/gcodeParser";
    import { G85Context } from "antlr/gcodeParser";
    import { G86Context } from "antlr/gcodeParser";
    import { G87Context } from "antlr/gcodeParser";
    import { G88Context } from "antlr/gcodeParser";
    import { G89Context } from "antlr/gcodeParser";
    import { G90Context } from "antlr/gcodeParser";
    import { G91Context } from "antlr/gcodeParser";
    import { G92Context } from "antlr/gcodeParser";
    import { G92_1Context } from "antlr/gcodeParser";
    import { G92_2Context } from "antlr/gcodeParser";
    import { G92_3Context } from "antlr/gcodeParser";
    import { G93Context } from "antlr/gcodeParser";
    import { G94Context } from "antlr/gcodeParser";
    import { G98Context } from "antlr/gcodeParser";
    import { G99Context } from "antlr/gcodeParser";
    import { MWordContext } from "antlr/gcodeParser";
    import { Mgroup4Context } from "antlr/gcodeParser";
    import { Mgroup6Context } from "antlr/gcodeParser";
    import { Mgroup7Context } from "antlr/gcodeParser";
    import { Mgroup8Context } from "antlr/gcodeParser";
    import { Mgroup9Context } from "antlr/gcodeParser";
    import { Mgroup10Context } from "antlr/gcodeParser";
    import { Mgroup11Context } from "antlr/gcodeParser";
    import { Mgroup12Context } from "antlr/gcodeParser";
    import { M0Context } from "antlr/gcodeParser";
    import { M1Context } from "antlr/gcodeParser";
    import { M2Context } from "antlr/gcodeParser";
    import { M3Context } from "antlr/gcodeParser";
    import { M4Context } from "antlr/gcodeParser";
    import { M5Context } from "antlr/gcodeParser";
    import { M6Context } from "antlr/gcodeParser";
    import { M7Context } from "antlr/gcodeParser";
    import { M8Context } from "antlr/gcodeParser";
    import { M9Context } from "antlr/gcodeParser";
    import { M30Context } from "antlr/gcodeParser";
    import { M48Context } from "antlr/gcodeParser";
    import { M49Context } from "antlr/gcodeParser";
    import { M60Context } from "antlr/gcodeParser";
    import { M82Context } from "antlr/gcodeParser";
    import { M84Context } from "antlr/gcodeParser";
    import { M104Context } from "antlr/gcodeParser";
    import { M105Context } from "antlr/gcodeParser";
    import { M106Context } from "antlr/gcodeParser";
    import { M107Context } from "antlr/gcodeParser";
    import { M109Context } from "antlr/gcodeParser";
    import { M140Context } from "antlr/gcodeParser";
    import { M141Context } from "antlr/gcodeParser";
    import { M190Context } from "antlr/gcodeParser";
    import { M201Context } from "antlr/gcodeParser";
    import { M203Context } from "antlr/gcodeParser";
    import { M204Context } from "antlr/gcodeParser";
    import { M205Context } from "antlr/gcodeParser";
    import { M220Context } from "antlr/gcodeParser";
    import { M221Context } from "antlr/gcodeParser";
    import { EContext } from "antlr/gcodeParser";
    import { LogicalExpressionContext } from "antlr/gcodeParser";
    import { ComparisonExpressionContext } from "antlr/gcodeParser";
    import { PlusMinExpressionContext } from "antlr/gcodeParser";
    import { AggregateExpressionContext } from "antlr/gcodeParser";
    import { PowerExpressionContext } from "antlr/gcodeParser";
    import { UnaryExpressionContext } from "antlr/gcodeParser";
    import { BracketExpressionContext } from "antlr/gcodeParser";
    import { PrimitiveExpressionContext } from "antlr/gcodeParser";
    import { LineNumberContext } from "antlr/gcodeParser";
    import { EndOfLineContext } from "antlr/gcodeParser";
    /**
     * This interface defines a complete listener for a parse tree produced by
     * `gcodeParser`.
     */
    export interface gcodeListener extends ParseTreeListener {
        /**
         * Enter a parse tree produced by `gcodeParser.program`.
         * @param ctx the parse tree
         */
        enterProgram?: (ctx: ProgramContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.program`.
         * @param ctx the parse tree
         */
        exitProgram?: (ctx: ProgramContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.line`.
         * @param ctx the parse tree
         */
        enterLine?: (ctx: LineContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.line`.
         * @param ctx the parse tree
         */
        exitLine?: (ctx: LineContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.segment`.
         * @param ctx the parse tree
         */
        enterSegment?: (ctx: SegmentContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.segment`.
         * @param ctx the parse tree
         */
        exitSegment?: (ctx: SegmentContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.comment`.
         * @param ctx the parse tree
         */
        enterComment?: (ctx: CommentContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.comment`.
         * @param ctx the parse tree
         */
        exitComment?: (ctx: CommentContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.parameterSetting`.
         * @param ctx the parse tree
         */
        enterParameterSetting?: (ctx: ParameterSettingContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.parameterSetting`.
         * @param ctx the parse tree
         */
        exitParameterSetting?: (ctx: ParameterSettingContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.parameter`.
         * @param ctx the parse tree
         */
        enterParameter?: (ctx: ParameterContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.parameter`.
         * @param ctx the parse tree
         */
        exitParameter?: (ctx: ParameterContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.designator`.
         * @param ctx the parse tree
         */
        enterDesignator?: (ctx: DesignatorContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.designator`.
         * @param ctx the parse tree
         */
        exitDesignator?: (ctx: DesignatorContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.oword_label`.
         * @param ctx the parse tree
         */
        enterOword_label?: (ctx: Oword_labelContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.oword_label`.
         * @param ctx the parse tree
         */
        exitOword_label?: (ctx: Oword_labelContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.oword_statement`.
         * @param ctx the parse tree
         */
        enterOword_statement?: (ctx: Oword_statementContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.oword_statement`.
         * @param ctx the parse tree
         */
        exitOword_statement?: (ctx: Oword_statementContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.parameterList`.
         * @param ctx the parse tree
         */
        enterParameterList?: (ctx: ParameterListContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.parameterList`.
         * @param ctx the parse tree
         */
        exitParameterList?: (ctx: ParameterListContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.optReturnValue`.
         * @param ctx the parse tree
         */
        enterOptReturnValue?: (ctx: OptReturnValueContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.optReturnValue`.
         * @param ctx the parse tree
         */
        exitOptReturnValue?: (ctx: OptReturnValueContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.word`.
         * @param ctx the parse tree
         */
        enterWord?: (ctx: WordContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.word`.
         * @param ctx the parse tree
         */
        exitWord?: (ctx: WordContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.axisWord`.
         * @param ctx the parse tree
         */
        enterAxisWord?: (ctx: AxisWordContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.axisWord`.
         * @param ctx the parse tree
         */
        exitAxisWord?: (ctx: AxisWordContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.a`.
         * @param ctx the parse tree
         */
        enterA?: (ctx: AContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.a`.
         * @param ctx the parse tree
         */
        exitA?: (ctx: AContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.b`.
         * @param ctx the parse tree
         */
        enterB?: (ctx: BContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.b`.
         * @param ctx the parse tree
         */
        exitB?: (ctx: BContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.c`.
         * @param ctx the parse tree
         */
        enterC?: (ctx: CContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.c`.
         * @param ctx the parse tree
         */
        exitC?: (ctx: CContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.i`.
         * @param ctx the parse tree
         */
        enterI?: (ctx: IContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.i`.
         * @param ctx the parse tree
         */
        exitI?: (ctx: IContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.j`.
         * @param ctx the parse tree
         */
        enterJ?: (ctx: JContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.j`.
         * @param ctx the parse tree
         */
        exitJ?: (ctx: JContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.k`.
         * @param ctx the parse tree
         */
        enterK?: (ctx: KContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.k`.
         * @param ctx the parse tree
         */
        exitK?: (ctx: KContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.r`.
         * @param ctx the parse tree
         */
        enterR?: (ctx: RContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.r`.
         * @param ctx the parse tree
         */
        exitR?: (ctx: RContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.x`.
         * @param ctx the parse tree
         */
        enterX?: (ctx: XContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.x`.
         * @param ctx the parse tree
         */
        exitX?: (ctx: XContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.y`.
         * @param ctx the parse tree
         */
        enterY?: (ctx: YContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.y`.
         * @param ctx the parse tree
         */
        exitY?: (ctx: YContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.z`.
         * @param ctx the parse tree
         */
        enterZ?: (ctx: ZContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.z`.
         * @param ctx the parse tree
         */
        exitZ?: (ctx: ZContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.dimensionWord`.
         * @param ctx the parse tree
         */
        enterDimensionWord?: (ctx: DimensionWordContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.dimensionWord`.
         * @param ctx the parse tree
         */
        exitDimensionWord?: (ctx: DimensionWordContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.f`.
         * @param ctx the parse tree
         */
        enterF?: (ctx: FContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.f`.
         * @param ctx the parse tree
         */
        exitF?: (ctx: FContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.ex`.
         * @param ctx the parse tree
         */
        enterEx?: (ctx: ExContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.ex`.
         * @param ctx the parse tree
         */
        exitEx?: (ctx: ExContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.d`.
         * @param ctx the parse tree
         */
        enterD?: (ctx: DContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.d`.
         * @param ctx the parse tree
         */
        exitD?: (ctx: DContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g`.
         * @param ctx the parse tree
         */
        enterG?: (ctx: GContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g`.
         * @param ctx the parse tree
         */
        exitG?: (ctx: GContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.h`.
         * @param ctx the parse tree
         */
        enterH?: (ctx: HContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.h`.
         * @param ctx the parse tree
         */
        exitH?: (ctx: HContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.l`.
         * @param ctx the parse tree
         */
        enterL?: (ctx: LContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.l`.
         * @param ctx the parse tree
         */
        exitL?: (ctx: LContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m`.
         * @param ctx the parse tree
         */
        enterM?: (ctx: MContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m`.
         * @param ctx the parse tree
         */
        exitM?: (ctx: MContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.p`.
         * @param ctx the parse tree
         */
        enterP?: (ctx: PContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.p`.
         * @param ctx the parse tree
         */
        exitP?: (ctx: PContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.q`.
         * @param ctx the parse tree
         */
        enterQ?: (ctx: QContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.q`.
         * @param ctx the parse tree
         */
        exitQ?: (ctx: QContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.s`.
         * @param ctx the parse tree
         */
        enterS?: (ctx: SContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.s`.
         * @param ctx the parse tree
         */
        exitS?: (ctx: SContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.t`.
         * @param ctx the parse tree
         */
        enterT?: (ctx: TContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.t`.
         * @param ctx the parse tree
         */
        exitT?: (ctx: TContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.wordLetter`.
         * @param ctx the parse tree
         */
        enterWordLetter?: (ctx: WordLetterContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.wordLetter`.
         * @param ctx the parse tree
         */
        exitWordLetter?: (ctx: WordLetterContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.gWord`.
         * @param ctx the parse tree
         */
        enterGWord?: (ctx: GWordContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.gWord`.
         * @param ctx the parse tree
         */
        exitGWord?: (ctx: GWordContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group1`.
         * @param ctx the parse tree
         */
        enterGroup1?: (ctx: Group1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group1`.
         * @param ctx the parse tree
         */
        exitGroup1?: (ctx: Group1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group2`.
         * @param ctx the parse tree
         */
        enterGroup2?: (ctx: Group2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group2`.
         * @param ctx the parse tree
         */
        exitGroup2?: (ctx: Group2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group3`.
         * @param ctx the parse tree
         */
        enterGroup3?: (ctx: Group3Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group3`.
         * @param ctx the parse tree
         */
        exitGroup3?: (ctx: Group3Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group5`.
         * @param ctx the parse tree
         */
        enterGroup5?: (ctx: Group5Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group5`.
         * @param ctx the parse tree
         */
        exitGroup5?: (ctx: Group5Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group6`.
         * @param ctx the parse tree
         */
        enterGroup6?: (ctx: Group6Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group6`.
         * @param ctx the parse tree
         */
        exitGroup6?: (ctx: Group6Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group7`.
         * @param ctx the parse tree
         */
        enterGroup7?: (ctx: Group7Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group7`.
         * @param ctx the parse tree
         */
        exitGroup7?: (ctx: Group7Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group8`.
         * @param ctx the parse tree
         */
        enterGroup8?: (ctx: Group8Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group8`.
         * @param ctx the parse tree
         */
        exitGroup8?: (ctx: Group8Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group10`.
         * @param ctx the parse tree
         */
        enterGroup10?: (ctx: Group10Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group10`.
         * @param ctx the parse tree
         */
        exitGroup10?: (ctx: Group10Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group12`.
         * @param ctx the parse tree
         */
        enterGroup12?: (ctx: Group12Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group12`.
         * @param ctx the parse tree
         */
        exitGroup12?: (ctx: Group12Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group13`.
         * @param ctx the parse tree
         */
        enterGroup13?: (ctx: Group13Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group13`.
         * @param ctx the parse tree
         */
        exitGroup13?: (ctx: Group13Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.group0`.
         * @param ctx the parse tree
         */
        enterGroup0?: (ctx: Group0Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.group0`.
         * @param ctx the parse tree
         */
        exitGroup0?: (ctx: Group0Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g0`.
         * @param ctx the parse tree
         */
        enterG0?: (ctx: G0Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g0`.
         * @param ctx the parse tree
         */
        exitG0?: (ctx: G0Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g1`.
         * @param ctx the parse tree
         */
        enterG1?: (ctx: G1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g1`.
         * @param ctx the parse tree
         */
        exitG1?: (ctx: G1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g2`.
         * @param ctx the parse tree
         */
        enterG2?: (ctx: G2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g2`.
         * @param ctx the parse tree
         */
        exitG2?: (ctx: G2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g3`.
         * @param ctx the parse tree
         */
        enterG3?: (ctx: G3Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g3`.
         * @param ctx the parse tree
         */
        exitG3?: (ctx: G3Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g4`.
         * @param ctx the parse tree
         */
        enterG4?: (ctx: G4Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g4`.
         * @param ctx the parse tree
         */
        exitG4?: (ctx: G4Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g10`.
         * @param ctx the parse tree
         */
        enterG10?: (ctx: G10Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g10`.
         * @param ctx the parse tree
         */
        exitG10?: (ctx: G10Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g17`.
         * @param ctx the parse tree
         */
        enterG17?: (ctx: G17Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g17`.
         * @param ctx the parse tree
         */
        exitG17?: (ctx: G17Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g18`.
         * @param ctx the parse tree
         */
        enterG18?: (ctx: G18Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g18`.
         * @param ctx the parse tree
         */
        exitG18?: (ctx: G18Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g19`.
         * @param ctx the parse tree
         */
        enterG19?: (ctx: G19Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g19`.
         * @param ctx the parse tree
         */
        exitG19?: (ctx: G19Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g20`.
         * @param ctx the parse tree
         */
        enterG20?: (ctx: G20Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g20`.
         * @param ctx the parse tree
         */
        exitG20?: (ctx: G20Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g21`.
         * @param ctx the parse tree
         */
        enterG21?: (ctx: G21Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g21`.
         * @param ctx the parse tree
         */
        exitG21?: (ctx: G21Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g28`.
         * @param ctx the parse tree
         */
        enterG28?: (ctx: G28Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g28`.
         * @param ctx the parse tree
         */
        exitG28?: (ctx: G28Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g30`.
         * @param ctx the parse tree
         */
        enterG30?: (ctx: G30Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g30`.
         * @param ctx the parse tree
         */
        exitG30?: (ctx: G30Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g38_2`.
         * @param ctx the parse tree
         */
        enterG38_2?: (ctx: G38_2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g38_2`.
         * @param ctx the parse tree
         */
        exitG38_2?: (ctx: G38_2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g40`.
         * @param ctx the parse tree
         */
        enterG40?: (ctx: G40Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g40`.
         * @param ctx the parse tree
         */
        exitG40?: (ctx: G40Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g41`.
         * @param ctx the parse tree
         */
        enterG41?: (ctx: G41Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g41`.
         * @param ctx the parse tree
         */
        exitG41?: (ctx: G41Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g42`.
         * @param ctx the parse tree
         */
        enterG42?: (ctx: G42Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g42`.
         * @param ctx the parse tree
         */
        exitG42?: (ctx: G42Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g43`.
         * @param ctx the parse tree
         */
        enterG43?: (ctx: G43Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g43`.
         * @param ctx the parse tree
         */
        exitG43?: (ctx: G43Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g49`.
         * @param ctx the parse tree
         */
        enterG49?: (ctx: G49Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g49`.
         * @param ctx the parse tree
         */
        exitG49?: (ctx: G49Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g53`.
         * @param ctx the parse tree
         */
        enterG53?: (ctx: G53Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g53`.
         * @param ctx the parse tree
         */
        exitG53?: (ctx: G53Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g54`.
         * @param ctx the parse tree
         */
        enterG54?: (ctx: G54Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g54`.
         * @param ctx the parse tree
         */
        exitG54?: (ctx: G54Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g55`.
         * @param ctx the parse tree
         */
        enterG55?: (ctx: G55Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g55`.
         * @param ctx the parse tree
         */
        exitG55?: (ctx: G55Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g56`.
         * @param ctx the parse tree
         */
        enterG56?: (ctx: G56Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g56`.
         * @param ctx the parse tree
         */
        exitG56?: (ctx: G56Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g57`.
         * @param ctx the parse tree
         */
        enterG57?: (ctx: G57Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g57`.
         * @param ctx the parse tree
         */
        exitG57?: (ctx: G57Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g58`.
         * @param ctx the parse tree
         */
        enterG58?: (ctx: G58Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g58`.
         * @param ctx the parse tree
         */
        exitG58?: (ctx: G58Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g59`.
         * @param ctx the parse tree
         */
        enterG59?: (ctx: G59Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g59`.
         * @param ctx the parse tree
         */
        exitG59?: (ctx: G59Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g59_1`.
         * @param ctx the parse tree
         */
        enterG59_1?: (ctx: G59_1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g59_1`.
         * @param ctx the parse tree
         */
        exitG59_1?: (ctx: G59_1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g59_2`.
         * @param ctx the parse tree
         */
        enterG59_2?: (ctx: G59_2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g59_2`.
         * @param ctx the parse tree
         */
        exitG59_2?: (ctx: G59_2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g59_3`.
         * @param ctx the parse tree
         */
        enterG59_3?: (ctx: G59_3Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g59_3`.
         * @param ctx the parse tree
         */
        exitG59_3?: (ctx: G59_3Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g61`.
         * @param ctx the parse tree
         */
        enterG61?: (ctx: G61Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g61`.
         * @param ctx the parse tree
         */
        exitG61?: (ctx: G61Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g61_1`.
         * @param ctx the parse tree
         */
        enterG61_1?: (ctx: G61_1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g61_1`.
         * @param ctx the parse tree
         */
        exitG61_1?: (ctx: G61_1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g64`.
         * @param ctx the parse tree
         */
        enterG64?: (ctx: G64Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g64`.
         * @param ctx the parse tree
         */
        exitG64?: (ctx: G64Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g80`.
         * @param ctx the parse tree
         */
        enterG80?: (ctx: G80Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g80`.
         * @param ctx the parse tree
         */
        exitG80?: (ctx: G80Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g81`.
         * @param ctx the parse tree
         */
        enterG81?: (ctx: G81Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g81`.
         * @param ctx the parse tree
         */
        exitG81?: (ctx: G81Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g82`.
         * @param ctx the parse tree
         */
        enterG82?: (ctx: G82Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g82`.
         * @param ctx the parse tree
         */
        exitG82?: (ctx: G82Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g83`.
         * @param ctx the parse tree
         */
        enterG83?: (ctx: G83Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g83`.
         * @param ctx the parse tree
         */
        exitG83?: (ctx: G83Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g84`.
         * @param ctx the parse tree
         */
        enterG84?: (ctx: G84Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g84`.
         * @param ctx the parse tree
         */
        exitG84?: (ctx: G84Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g85`.
         * @param ctx the parse tree
         */
        enterG85?: (ctx: G85Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g85`.
         * @param ctx the parse tree
         */
        exitG85?: (ctx: G85Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g86`.
         * @param ctx the parse tree
         */
        enterG86?: (ctx: G86Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g86`.
         * @param ctx the parse tree
         */
        exitG86?: (ctx: G86Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g87`.
         * @param ctx the parse tree
         */
        enterG87?: (ctx: G87Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g87`.
         * @param ctx the parse tree
         */
        exitG87?: (ctx: G87Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g88`.
         * @param ctx the parse tree
         */
        enterG88?: (ctx: G88Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g88`.
         * @param ctx the parse tree
         */
        exitG88?: (ctx: G88Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g89`.
         * @param ctx the parse tree
         */
        enterG89?: (ctx: G89Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g89`.
         * @param ctx the parse tree
         */
        exitG89?: (ctx: G89Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g90`.
         * @param ctx the parse tree
         */
        enterG90?: (ctx: G90Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g90`.
         * @param ctx the parse tree
         */
        exitG90?: (ctx: G90Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g91`.
         * @param ctx the parse tree
         */
        enterG91?: (ctx: G91Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g91`.
         * @param ctx the parse tree
         */
        exitG91?: (ctx: G91Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g92`.
         * @param ctx the parse tree
         */
        enterG92?: (ctx: G92Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g92`.
         * @param ctx the parse tree
         */
        exitG92?: (ctx: G92Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g92_1`.
         * @param ctx the parse tree
         */
        enterG92_1?: (ctx: G92_1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g92_1`.
         * @param ctx the parse tree
         */
        exitG92_1?: (ctx: G92_1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g92_2`.
         * @param ctx the parse tree
         */
        enterG92_2?: (ctx: G92_2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g92_2`.
         * @param ctx the parse tree
         */
        exitG92_2?: (ctx: G92_2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g92_3`.
         * @param ctx the parse tree
         */
        enterG92_3?: (ctx: G92_3Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g92_3`.
         * @param ctx the parse tree
         */
        exitG92_3?: (ctx: G92_3Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g93`.
         * @param ctx the parse tree
         */
        enterG93?: (ctx: G93Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g93`.
         * @param ctx the parse tree
         */
        exitG93?: (ctx: G93Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g94`.
         * @param ctx the parse tree
         */
        enterG94?: (ctx: G94Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g94`.
         * @param ctx the parse tree
         */
        exitG94?: (ctx: G94Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g98`.
         * @param ctx the parse tree
         */
        enterG98?: (ctx: G98Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g98`.
         * @param ctx the parse tree
         */
        exitG98?: (ctx: G98Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.g99`.
         * @param ctx the parse tree
         */
        enterG99?: (ctx: G99Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.g99`.
         * @param ctx the parse tree
         */
        exitG99?: (ctx: G99Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mWord`.
         * @param ctx the parse tree
         */
        enterMWord?: (ctx: MWordContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mWord`.
         * @param ctx the parse tree
         */
        exitMWord?: (ctx: MWordContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup4`.
         * @param ctx the parse tree
         */
        enterMgroup4?: (ctx: Mgroup4Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup4`.
         * @param ctx the parse tree
         */
        exitMgroup4?: (ctx: Mgroup4Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup6`.
         * @param ctx the parse tree
         */
        enterMgroup6?: (ctx: Mgroup6Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup6`.
         * @param ctx the parse tree
         */
        exitMgroup6?: (ctx: Mgroup6Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup7`.
         * @param ctx the parse tree
         */
        enterMgroup7?: (ctx: Mgroup7Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup7`.
         * @param ctx the parse tree
         */
        exitMgroup7?: (ctx: Mgroup7Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup8`.
         * @param ctx the parse tree
         */
        enterMgroup8?: (ctx: Mgroup8Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup8`.
         * @param ctx the parse tree
         */
        exitMgroup8?: (ctx: Mgroup8Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup9`.
         * @param ctx the parse tree
         */
        enterMgroup9?: (ctx: Mgroup9Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup9`.
         * @param ctx the parse tree
         */
        exitMgroup9?: (ctx: Mgroup9Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup10`.
         * @param ctx the parse tree
         */
        enterMgroup10?: (ctx: Mgroup10Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup10`.
         * @param ctx the parse tree
         */
        exitMgroup10?: (ctx: Mgroup10Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup11`.
         * @param ctx the parse tree
         */
        enterMgroup11?: (ctx: Mgroup11Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup11`.
         * @param ctx the parse tree
         */
        exitMgroup11?: (ctx: Mgroup11Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.mgroup12`.
         * @param ctx the parse tree
         */
        enterMgroup12?: (ctx: Mgroup12Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.mgroup12`.
         * @param ctx the parse tree
         */
        exitMgroup12?: (ctx: Mgroup12Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m0`.
         * @param ctx the parse tree
         */
        enterM0?: (ctx: M0Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m0`.
         * @param ctx the parse tree
         */
        exitM0?: (ctx: M0Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m1`.
         * @param ctx the parse tree
         */
        enterM1?: (ctx: M1Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m1`.
         * @param ctx the parse tree
         */
        exitM1?: (ctx: M1Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m2`.
         * @param ctx the parse tree
         */
        enterM2?: (ctx: M2Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m2`.
         * @param ctx the parse tree
         */
        exitM2?: (ctx: M2Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m3`.
         * @param ctx the parse tree
         */
        enterM3?: (ctx: M3Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m3`.
         * @param ctx the parse tree
         */
        exitM3?: (ctx: M3Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m4`.
         * @param ctx the parse tree
         */
        enterM4?: (ctx: M4Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m4`.
         * @param ctx the parse tree
         */
        exitM4?: (ctx: M4Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m5`.
         * @param ctx the parse tree
         */
        enterM5?: (ctx: M5Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m5`.
         * @param ctx the parse tree
         */
        exitM5?: (ctx: M5Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m6`.
         * @param ctx the parse tree
         */
        enterM6?: (ctx: M6Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m6`.
         * @param ctx the parse tree
         */
        exitM6?: (ctx: M6Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m7`.
         * @param ctx the parse tree
         */
        enterM7?: (ctx: M7Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m7`.
         * @param ctx the parse tree
         */
        exitM7?: (ctx: M7Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m8`.
         * @param ctx the parse tree
         */
        enterM8?: (ctx: M8Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m8`.
         * @param ctx the parse tree
         */
        exitM8?: (ctx: M8Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m9`.
         * @param ctx the parse tree
         */
        enterM9?: (ctx: M9Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m9`.
         * @param ctx the parse tree
         */
        exitM9?: (ctx: M9Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m30`.
         * @param ctx the parse tree
         */
        enterM30?: (ctx: M30Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m30`.
         * @param ctx the parse tree
         */
        exitM30?: (ctx: M30Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m48`.
         * @param ctx the parse tree
         */
        enterM48?: (ctx: M48Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m48`.
         * @param ctx the parse tree
         */
        exitM48?: (ctx: M48Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m49`.
         * @param ctx the parse tree
         */
        enterM49?: (ctx: M49Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m49`.
         * @param ctx the parse tree
         */
        exitM49?: (ctx: M49Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m60`.
         * @param ctx the parse tree
         */
        enterM60?: (ctx: M60Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m60`.
         * @param ctx the parse tree
         */
        exitM60?: (ctx: M60Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m82`.
         * @param ctx the parse tree
         */
        enterM82?: (ctx: M82Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m82`.
         * @param ctx the parse tree
         */
        exitM82?: (ctx: M82Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m84`.
         * @param ctx the parse tree
         */
        enterM84?: (ctx: M84Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m84`.
         * @param ctx the parse tree
         */
        exitM84?: (ctx: M84Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m104`.
         * @param ctx the parse tree
         */
        enterM104?: (ctx: M104Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m104`.
         * @param ctx the parse tree
         */
        exitM104?: (ctx: M104Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m105`.
         * @param ctx the parse tree
         */
        enterM105?: (ctx: M105Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m105`.
         * @param ctx the parse tree
         */
        exitM105?: (ctx: M105Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m106`.
         * @param ctx the parse tree
         */
        enterM106?: (ctx: M106Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m106`.
         * @param ctx the parse tree
         */
        exitM106?: (ctx: M106Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m107`.
         * @param ctx the parse tree
         */
        enterM107?: (ctx: M107Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m107`.
         * @param ctx the parse tree
         */
        exitM107?: (ctx: M107Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m109`.
         * @param ctx the parse tree
         */
        enterM109?: (ctx: M109Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m109`.
         * @param ctx the parse tree
         */
        exitM109?: (ctx: M109Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m140`.
         * @param ctx the parse tree
         */
        enterM140?: (ctx: M140Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m140`.
         * @param ctx the parse tree
         */
        exitM140?: (ctx: M140Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m141`.
         * @param ctx the parse tree
         */
        enterM141?: (ctx: M141Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m141`.
         * @param ctx the parse tree
         */
        exitM141?: (ctx: M141Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m190`.
         * @param ctx the parse tree
         */
        enterM190?: (ctx: M190Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m190`.
         * @param ctx the parse tree
         */
        exitM190?: (ctx: M190Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m201`.
         * @param ctx the parse tree
         */
        enterM201?: (ctx: M201Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m201`.
         * @param ctx the parse tree
         */
        exitM201?: (ctx: M201Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m203`.
         * @param ctx the parse tree
         */
        enterM203?: (ctx: M203Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m203`.
         * @param ctx the parse tree
         */
        exitM203?: (ctx: M203Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m204`.
         * @param ctx the parse tree
         */
        enterM204?: (ctx: M204Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m204`.
         * @param ctx the parse tree
         */
        exitM204?: (ctx: M204Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m205`.
         * @param ctx the parse tree
         */
        enterM205?: (ctx: M205Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m205`.
         * @param ctx the parse tree
         */
        exitM205?: (ctx: M205Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m220`.
         * @param ctx the parse tree
         */
        enterM220?: (ctx: M220Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m220`.
         * @param ctx the parse tree
         */
        exitM220?: (ctx: M220Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.m221`.
         * @param ctx the parse tree
         */
        enterM221?: (ctx: M221Context) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.m221`.
         * @param ctx the parse tree
         */
        exitM221?: (ctx: M221Context) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.e`.
         * @param ctx the parse tree
         */
        enterE?: (ctx: EContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.e`.
         * @param ctx the parse tree
         */
        exitE?: (ctx: EContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.logicalExpression`.
         * @param ctx the parse tree
         */
        enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.logicalExpression`.
         * @param ctx the parse tree
         */
        exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.comparisonExpression`.
         * @param ctx the parse tree
         */
        enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.comparisonExpression`.
         * @param ctx the parse tree
         */
        exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.plusMinExpression`.
         * @param ctx the parse tree
         */
        enterPlusMinExpression?: (ctx: PlusMinExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.plusMinExpression`.
         * @param ctx the parse tree
         */
        exitPlusMinExpression?: (ctx: PlusMinExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.aggregateExpression`.
         * @param ctx the parse tree
         */
        enterAggregateExpression?: (ctx: AggregateExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.aggregateExpression`.
         * @param ctx the parse tree
         */
        exitAggregateExpression?: (ctx: AggregateExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.powerExpression`.
         * @param ctx the parse tree
         */
        enterPowerExpression?: (ctx: PowerExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.powerExpression`.
         * @param ctx the parse tree
         */
        exitPowerExpression?: (ctx: PowerExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.unaryExpression`.
         * @param ctx the parse tree
         */
        enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.unaryExpression`.
         * @param ctx the parse tree
         */
        exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.bracketExpression`.
         * @param ctx the parse tree
         */
        enterBracketExpression?: (ctx: BracketExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.bracketExpression`.
         * @param ctx the parse tree
         */
        exitBracketExpression?: (ctx: BracketExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.primitiveExpression`.
         * @param ctx the parse tree
         */
        enterPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.primitiveExpression`.
         * @param ctx the parse tree
         */
        exitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.lineNumber`.
         * @param ctx the parse tree
         */
        enterLineNumber?: (ctx: LineNumberContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.lineNumber`.
         * @param ctx the parse tree
         */
        exitLineNumber?: (ctx: LineNumberContext) => void;
        /**
         * Enter a parse tree produced by `gcodeParser.endOfLine`.
         * @param ctx the parse tree
         */
        enterEndOfLine?: (ctx: EndOfLineContext) => void;
        /**
         * Exit a parse tree produced by `gcodeParser.endOfLine`.
         * @param ctx the parse tree
         */
        exitEndOfLine?: (ctx: EndOfLineContext) => void;
    }
}
declare module "antlr/gcodeVisitor" {
    import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
    import { ProgramContext } from "antlr/gcodeParser";
    import { LineContext } from "antlr/gcodeParser";
    import { SegmentContext } from "antlr/gcodeParser";
    import { CommentContext } from "antlr/gcodeParser";
    import { ParameterSettingContext } from "antlr/gcodeParser";
    import { ParameterContext } from "antlr/gcodeParser";
    import { DesignatorContext } from "antlr/gcodeParser";
    import { Oword_labelContext } from "antlr/gcodeParser";
    import { Oword_statementContext } from "antlr/gcodeParser";
    import { ParameterListContext } from "antlr/gcodeParser";
    import { OptReturnValueContext } from "antlr/gcodeParser";
    import { WordContext } from "antlr/gcodeParser";
    import { AxisWordContext } from "antlr/gcodeParser";
    import { AContext } from "antlr/gcodeParser";
    import { BContext } from "antlr/gcodeParser";
    import { CContext } from "antlr/gcodeParser";
    import { IContext } from "antlr/gcodeParser";
    import { JContext } from "antlr/gcodeParser";
    import { KContext } from "antlr/gcodeParser";
    import { RContext } from "antlr/gcodeParser";
    import { XContext } from "antlr/gcodeParser";
    import { YContext } from "antlr/gcodeParser";
    import { ZContext } from "antlr/gcodeParser";
    import { DimensionWordContext } from "antlr/gcodeParser";
    import { FContext } from "antlr/gcodeParser";
    import { ExContext } from "antlr/gcodeParser";
    import { DContext } from "antlr/gcodeParser";
    import { GContext } from "antlr/gcodeParser";
    import { HContext } from "antlr/gcodeParser";
    import { LContext } from "antlr/gcodeParser";
    import { MContext } from "antlr/gcodeParser";
    import { PContext } from "antlr/gcodeParser";
    import { QContext } from "antlr/gcodeParser";
    import { SContext } from "antlr/gcodeParser";
    import { TContext } from "antlr/gcodeParser";
    import { WordLetterContext } from "antlr/gcodeParser";
    import { GWordContext } from "antlr/gcodeParser";
    import { Group1Context } from "antlr/gcodeParser";
    import { Group2Context } from "antlr/gcodeParser";
    import { Group3Context } from "antlr/gcodeParser";
    import { Group5Context } from "antlr/gcodeParser";
    import { Group6Context } from "antlr/gcodeParser";
    import { Group7Context } from "antlr/gcodeParser";
    import { Group8Context } from "antlr/gcodeParser";
    import { Group10Context } from "antlr/gcodeParser";
    import { Group12Context } from "antlr/gcodeParser";
    import { Group13Context } from "antlr/gcodeParser";
    import { Group0Context } from "antlr/gcodeParser";
    import { G0Context } from "antlr/gcodeParser";
    import { G1Context } from "antlr/gcodeParser";
    import { G2Context } from "antlr/gcodeParser";
    import { G3Context } from "antlr/gcodeParser";
    import { G4Context } from "antlr/gcodeParser";
    import { G10Context } from "antlr/gcodeParser";
    import { G17Context } from "antlr/gcodeParser";
    import { G18Context } from "antlr/gcodeParser";
    import { G19Context } from "antlr/gcodeParser";
    import { G20Context } from "antlr/gcodeParser";
    import { G21Context } from "antlr/gcodeParser";
    import { G28Context } from "antlr/gcodeParser";
    import { G30Context } from "antlr/gcodeParser";
    import { G38_2Context } from "antlr/gcodeParser";
    import { G40Context } from "antlr/gcodeParser";
    import { G41Context } from "antlr/gcodeParser";
    import { G42Context } from "antlr/gcodeParser";
    import { G43Context } from "antlr/gcodeParser";
    import { G49Context } from "antlr/gcodeParser";
    import { G53Context } from "antlr/gcodeParser";
    import { G54Context } from "antlr/gcodeParser";
    import { G55Context } from "antlr/gcodeParser";
    import { G56Context } from "antlr/gcodeParser";
    import { G57Context } from "antlr/gcodeParser";
    import { G58Context } from "antlr/gcodeParser";
    import { G59Context } from "antlr/gcodeParser";
    import { G59_1Context } from "antlr/gcodeParser";
    import { G59_2Context } from "antlr/gcodeParser";
    import { G59_3Context } from "antlr/gcodeParser";
    import { G61Context } from "antlr/gcodeParser";
    import { G61_1Context } from "antlr/gcodeParser";
    import { G64Context } from "antlr/gcodeParser";
    import { G80Context } from "antlr/gcodeParser";
    import { G81Context } from "antlr/gcodeParser";
    import { G82Context } from "antlr/gcodeParser";
    import { G83Context } from "antlr/gcodeParser";
    import { G84Context } from "antlr/gcodeParser";
    import { G85Context } from "antlr/gcodeParser";
    import { G86Context } from "antlr/gcodeParser";
    import { G87Context } from "antlr/gcodeParser";
    import { G88Context } from "antlr/gcodeParser";
    import { G89Context } from "antlr/gcodeParser";
    import { G90Context } from "antlr/gcodeParser";
    import { G91Context } from "antlr/gcodeParser";
    import { G92Context } from "antlr/gcodeParser";
    import { G92_1Context } from "antlr/gcodeParser";
    import { G92_2Context } from "antlr/gcodeParser";
    import { G92_3Context } from "antlr/gcodeParser";
    import { G93Context } from "antlr/gcodeParser";
    import { G94Context } from "antlr/gcodeParser";
    import { G98Context } from "antlr/gcodeParser";
    import { G99Context } from "antlr/gcodeParser";
    import { MWordContext } from "antlr/gcodeParser";
    import { Mgroup4Context } from "antlr/gcodeParser";
    import { Mgroup6Context } from "antlr/gcodeParser";
    import { Mgroup7Context } from "antlr/gcodeParser";
    import { Mgroup8Context } from "antlr/gcodeParser";
    import { Mgroup9Context } from "antlr/gcodeParser";
    import { Mgroup10Context } from "antlr/gcodeParser";
    import { Mgroup11Context } from "antlr/gcodeParser";
    import { Mgroup12Context } from "antlr/gcodeParser";
    import { M0Context } from "antlr/gcodeParser";
    import { M1Context } from "antlr/gcodeParser";
    import { M2Context } from "antlr/gcodeParser";
    import { M3Context } from "antlr/gcodeParser";
    import { M4Context } from "antlr/gcodeParser";
    import { M5Context } from "antlr/gcodeParser";
    import { M6Context } from "antlr/gcodeParser";
    import { M7Context } from "antlr/gcodeParser";
    import { M8Context } from "antlr/gcodeParser";
    import { M9Context } from "antlr/gcodeParser";
    import { M30Context } from "antlr/gcodeParser";
    import { M48Context } from "antlr/gcodeParser";
    import { M49Context } from "antlr/gcodeParser";
    import { M60Context } from "antlr/gcodeParser";
    import { M82Context } from "antlr/gcodeParser";
    import { M84Context } from "antlr/gcodeParser";
    import { M104Context } from "antlr/gcodeParser";
    import { M105Context } from "antlr/gcodeParser";
    import { M106Context } from "antlr/gcodeParser";
    import { M107Context } from "antlr/gcodeParser";
    import { M109Context } from "antlr/gcodeParser";
    import { M140Context } from "antlr/gcodeParser";
    import { M141Context } from "antlr/gcodeParser";
    import { M190Context } from "antlr/gcodeParser";
    import { M201Context } from "antlr/gcodeParser";
    import { M203Context } from "antlr/gcodeParser";
    import { M204Context } from "antlr/gcodeParser";
    import { M205Context } from "antlr/gcodeParser";
    import { M220Context } from "antlr/gcodeParser";
    import { M221Context } from "antlr/gcodeParser";
    import { EContext } from "antlr/gcodeParser";
    import { LogicalExpressionContext } from "antlr/gcodeParser";
    import { ComparisonExpressionContext } from "antlr/gcodeParser";
    import { PlusMinExpressionContext } from "antlr/gcodeParser";
    import { AggregateExpressionContext } from "antlr/gcodeParser";
    import { PowerExpressionContext } from "antlr/gcodeParser";
    import { UnaryExpressionContext } from "antlr/gcodeParser";
    import { BracketExpressionContext } from "antlr/gcodeParser";
    import { PrimitiveExpressionContext } from "antlr/gcodeParser";
    import { LineNumberContext } from "antlr/gcodeParser";
    import { EndOfLineContext } from "antlr/gcodeParser";
    /**
     * This interface defines a complete generic visitor for a parse tree produced
     * by `gcodeParser`.
     *
     * @param <Result> The return type of the visit operation. Use `void` for
     * operations with no return type.
     */
    export interface gcodeVisitor<Result> extends ParseTreeVisitor<Result> {
        /**
         * Visit a parse tree produced by `gcodeParser.program`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitProgram?: (ctx: ProgramContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.line`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitLine?: (ctx: LineContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.segment`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitSegment?: (ctx: SegmentContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.comment`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitComment?: (ctx: CommentContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.parameterSetting`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitParameterSetting?: (ctx: ParameterSettingContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.parameter`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitParameter?: (ctx: ParameterContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.designator`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitDesignator?: (ctx: DesignatorContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.oword_label`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitOword_label?: (ctx: Oword_labelContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.oword_statement`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitOword_statement?: (ctx: Oword_statementContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.parameterList`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitParameterList?: (ctx: ParameterListContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.optReturnValue`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitOptReturnValue?: (ctx: OptReturnValueContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.word`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitWord?: (ctx: WordContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.axisWord`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitAxisWord?: (ctx: AxisWordContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.a`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitA?: (ctx: AContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.b`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitB?: (ctx: BContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.c`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitC?: (ctx: CContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.i`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitI?: (ctx: IContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.j`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitJ?: (ctx: JContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.k`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitK?: (ctx: KContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.r`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitR?: (ctx: RContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.x`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitX?: (ctx: XContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.y`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitY?: (ctx: YContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.z`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitZ?: (ctx: ZContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.dimensionWord`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitDimensionWord?: (ctx: DimensionWordContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.f`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitF?: (ctx: FContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.ex`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitEx?: (ctx: ExContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.d`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitD?: (ctx: DContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG?: (ctx: GContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.h`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitH?: (ctx: HContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.l`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitL?: (ctx: LContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM?: (ctx: MContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.p`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitP?: (ctx: PContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.q`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitQ?: (ctx: QContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.s`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitS?: (ctx: SContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.t`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitT?: (ctx: TContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.wordLetter`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitWordLetter?: (ctx: WordLetterContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.gWord`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGWord?: (ctx: GWordContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup1?: (ctx: Group1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup2?: (ctx: Group2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group3`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup3?: (ctx: Group3Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group5`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup5?: (ctx: Group5Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group6`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup6?: (ctx: Group6Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group7`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup7?: (ctx: Group7Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group8`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup8?: (ctx: Group8Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group10`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup10?: (ctx: Group10Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group12`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup12?: (ctx: Group12Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group13`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup13?: (ctx: Group13Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.group0`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitGroup0?: (ctx: Group0Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g0`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG0?: (ctx: G0Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG1?: (ctx: G1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG2?: (ctx: G2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g3`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG3?: (ctx: G3Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g4`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG4?: (ctx: G4Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g10`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG10?: (ctx: G10Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g17`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG17?: (ctx: G17Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g18`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG18?: (ctx: G18Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g19`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG19?: (ctx: G19Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g20`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG20?: (ctx: G20Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g21`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG21?: (ctx: G21Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g28`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG28?: (ctx: G28Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g30`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG30?: (ctx: G30Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g38_2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG38_2?: (ctx: G38_2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g40`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG40?: (ctx: G40Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g41`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG41?: (ctx: G41Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g42`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG42?: (ctx: G42Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g43`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG43?: (ctx: G43Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g49`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG49?: (ctx: G49Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g53`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG53?: (ctx: G53Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g54`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG54?: (ctx: G54Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g55`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG55?: (ctx: G55Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g56`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG56?: (ctx: G56Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g57`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG57?: (ctx: G57Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g58`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG58?: (ctx: G58Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g59`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG59?: (ctx: G59Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g59_1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG59_1?: (ctx: G59_1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g59_2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG59_2?: (ctx: G59_2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g59_3`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG59_3?: (ctx: G59_3Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g61`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG61?: (ctx: G61Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g61_1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG61_1?: (ctx: G61_1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g64`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG64?: (ctx: G64Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g80`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG80?: (ctx: G80Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g81`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG81?: (ctx: G81Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g82`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG82?: (ctx: G82Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g83`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG83?: (ctx: G83Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g84`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG84?: (ctx: G84Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g85`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG85?: (ctx: G85Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g86`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG86?: (ctx: G86Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g87`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG87?: (ctx: G87Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g88`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG88?: (ctx: G88Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g89`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG89?: (ctx: G89Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g90`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG90?: (ctx: G90Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g91`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG91?: (ctx: G91Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g92`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG92?: (ctx: G92Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g92_1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG92_1?: (ctx: G92_1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g92_2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG92_2?: (ctx: G92_2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g92_3`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG92_3?: (ctx: G92_3Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g93`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG93?: (ctx: G93Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g94`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG94?: (ctx: G94Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g98`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG98?: (ctx: G98Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.g99`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitG99?: (ctx: G99Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mWord`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMWord?: (ctx: MWordContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup4`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup4?: (ctx: Mgroup4Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup6`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup6?: (ctx: Mgroup6Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup7`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup7?: (ctx: Mgroup7Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup8`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup8?: (ctx: Mgroup8Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup9`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup9?: (ctx: Mgroup9Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup10`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup10?: (ctx: Mgroup10Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup11`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup11?: (ctx: Mgroup11Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.mgroup12`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitMgroup12?: (ctx: Mgroup12Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m0`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM0?: (ctx: M0Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m1`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM1?: (ctx: M1Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m2`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM2?: (ctx: M2Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m3`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM3?: (ctx: M3Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m4`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM4?: (ctx: M4Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m5`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM5?: (ctx: M5Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m6`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM6?: (ctx: M6Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m7`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM7?: (ctx: M7Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m8`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM8?: (ctx: M8Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m9`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM9?: (ctx: M9Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m30`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM30?: (ctx: M30Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m48`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM48?: (ctx: M48Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m49`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM49?: (ctx: M49Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m60`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM60?: (ctx: M60Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m82`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM82?: (ctx: M82Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m84`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM84?: (ctx: M84Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m104`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM104?: (ctx: M104Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m105`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM105?: (ctx: M105Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m106`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM106?: (ctx: M106Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m107`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM107?: (ctx: M107Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m109`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM109?: (ctx: M109Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m140`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM140?: (ctx: M140Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m141`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM141?: (ctx: M141Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m190`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM190?: (ctx: M190Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m201`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM201?: (ctx: M201Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m203`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM203?: (ctx: M203Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m204`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM204?: (ctx: M204Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m205`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM205?: (ctx: M205Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m220`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM220?: (ctx: M220Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.m221`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitM221?: (ctx: M221Context) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.e`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitE?: (ctx: EContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.logicalExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.comparisonExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.plusMinExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitPlusMinExpression?: (ctx: PlusMinExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.aggregateExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitAggregateExpression?: (ctx: AggregateExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.powerExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitPowerExpression?: (ctx: PowerExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.unaryExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.bracketExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitBracketExpression?: (ctx: BracketExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.primitiveExpression`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.lineNumber`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitLineNumber?: (ctx: LineNumberContext) => Result;
        /**
         * Visit a parse tree produced by `gcodeParser.endOfLine`.
         * @param ctx the parse tree
         * @return the visitor result
         */
        visitEndOfLine?: (ctx: EndOfLineContext) => Result;
    }
}
declare module "antlr/gcodeParser" {
    import { ATN } from "antlr4ts/atn/ATN";
    import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
    import { Parser } from "antlr4ts/Parser";
    import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
    import { TerminalNode } from "antlr4ts/tree/TerminalNode";
    import { Token } from "antlr4ts/Token";
    import { TokenStream } from "antlr4ts/TokenStream";
    import { Vocabulary } from "antlr4ts/Vocabulary";
    import { gcodeListener } from "antlr/gcodeListener";
    import { gcodeVisitor } from "antlr/gcodeVisitor";
    export class gcodeParser extends Parser {
        static readonly T__0 = 1;
        static readonly T__1 = 2;
        static readonly T__2 = 3;
        static readonly T__3 = 4;
        static readonly T__4 = 5;
        static readonly T__5 = 6;
        static readonly T__6 = 7;
        static readonly T__7 = 8;
        static readonly T__8 = 9;
        static readonly T__9 = 10;
        static readonly T__10 = 11;
        static readonly T__11 = 12;
        static readonly T__12 = 13;
        static readonly T__13 = 14;
        static readonly T__14 = 15;
        static readonly T__15 = 16;
        static readonly T__16 = 17;
        static readonly T__17 = 18;
        static readonly T__18 = 19;
        static readonly T__19 = 20;
        static readonly T__20 = 21;
        static readonly T__21 = 22;
        static readonly T__22 = 23;
        static readonly T__23 = 24;
        static readonly T__24 = 25;
        static readonly T__25 = 26;
        static readonly T__26 = 27;
        static readonly T__27 = 28;
        static readonly T__28 = 29;
        static readonly T__29 = 30;
        static readonly T__30 = 31;
        static readonly T__31 = 32;
        static readonly T__32 = 33;
        static readonly T__33 = 34;
        static readonly T__34 = 35;
        static readonly T__35 = 36;
        static readonly T__36 = 37;
        static readonly T__37 = 38;
        static readonly T__38 = 39;
        static readonly T__39 = 40;
        static readonly T__40 = 41;
        static readonly T__41 = 42;
        static readonly T__42 = 43;
        static readonly T__43 = 44;
        static readonly MESSAGE_COMMENT = 45;
        static readonly IGNORED_COMMENT = 46;
        static readonly LINE_COMMENT = 47;
        static readonly G0 = 48;
        static readonly G1 = 49;
        static readonly G2 = 50;
        static readonly G3 = 51;
        static readonly G4 = 52;
        static readonly G10 = 53;
        static readonly G17 = 54;
        static readonly G18 = 55;
        static readonly G19 = 56;
        static readonly G20 = 57;
        static readonly G21 = 58;
        static readonly G28 = 59;
        static readonly G30 = 60;
        static readonly G38_2 = 61;
        static readonly G40 = 62;
        static readonly G41 = 63;
        static readonly G42 = 64;
        static readonly G43 = 65;
        static readonly G49 = 66;
        static readonly G53 = 67;
        static readonly G54 = 68;
        static readonly G55 = 69;
        static readonly G56 = 70;
        static readonly G57 = 71;
        static readonly G58 = 72;
        static readonly G59 = 73;
        static readonly G59_1 = 74;
        static readonly G59_2 = 75;
        static readonly G59_3 = 76;
        static readonly G61 = 77;
        static readonly G61_1 = 78;
        static readonly G64 = 79;
        static readonly G80 = 80;
        static readonly G81 = 81;
        static readonly G82 = 82;
        static readonly G83 = 83;
        static readonly G84 = 84;
        static readonly G85 = 85;
        static readonly G86 = 86;
        static readonly G87 = 87;
        static readonly G88 = 88;
        static readonly G89 = 89;
        static readonly G90 = 90;
        static readonly G91 = 91;
        static readonly G92 = 92;
        static readonly G92_1 = 93;
        static readonly G92_2 = 94;
        static readonly G92_3 = 95;
        static readonly G93 = 96;
        static readonly G94 = 97;
        static readonly G98 = 98;
        static readonly G99 = 99;
        static readonly M0 = 100;
        static readonly M1 = 101;
        static readonly M2 = 102;
        static readonly M3 = 103;
        static readonly M4 = 104;
        static readonly M5 = 105;
        static readonly M6 = 106;
        static readonly M7 = 107;
        static readonly M8 = 108;
        static readonly M9 = 109;
        static readonly M30 = 110;
        static readonly M48 = 111;
        static readonly M49 = 112;
        static readonly M60 = 113;
        static readonly M82 = 114;
        static readonly M84 = 115;
        static readonly M104 = 116;
        static readonly M105 = 117;
        static readonly M106 = 118;
        static readonly M107 = 119;
        static readonly M109 = 120;
        static readonly M140 = 121;
        static readonly M141 = 122;
        static readonly M190 = 123;
        static readonly M201 = 124;
        static readonly M203 = 125;
        static readonly M204 = 126;
        static readonly M205 = 127;
        static readonly M220 = 128;
        static readonly M221 = 129;
        static readonly WHITESPACE = 130;
        static readonly LINE_NUMBER = 131;
        static readonly END_OF_LINE = 132;
        static readonly NUMBER = 133;
        static readonly NAME = 134;
        static readonly SUB = 135;
        static readonly ENDSUB = 136;
        static readonly CALL = 137;
        static readonly DO = 138;
        static readonly WHILE = 139;
        static readonly ELSEIF = 140;
        static readonly ELSE = 141;
        static readonly ENDIF = 142;
        static readonly IF = 143;
        static readonly BREAK = 144;
        static readonly CONTINUE = 145;
        static readonly ENDWHILE = 146;
        static readonly RETURN = 147;
        static readonly REPEAT = 148;
        static readonly ENDREPEAT = 149;
        static readonly ABS = 150;
        static readonly ACOS = 151;
        static readonly ASIN = 152;
        static readonly ATAN = 153;
        static readonly SIN = 154;
        static readonly COS = 155;
        static readonly TAN = 156;
        static readonly AND = 157;
        static readonly OR = 158;
        static readonly XOR = 159;
        static readonly EXP = 160;
        static readonly FIX = 161;
        static readonly FUP = 162;
        static readonly MOD = 163;
        static readonly ROUND = 164;
        static readonly SQRT = 165;
        static readonly LN = 166;
        static readonly EXISTS = 167;
        static readonly EQ = 168;
        static readonly NE = 169;
        static readonly GT = 170;
        static readonly GE = 171;
        static readonly LT = 172;
        static readonly LE = 173;
        static readonly POWER = 174;
        static readonly PLUS = 175;
        static readonly MINUS = 176;
        static readonly TIMES = 177;
        static readonly SLASH = 178;
        static readonly HASH = 179;
        static readonly EQUALS = 180;
        static readonly LBRACKET = 181;
        static readonly RBRACKET = 182;
        static readonly PERCENT = 183;
        static readonly LESS = 184;
        static readonly GREATER = 185;
        static readonly DOT = 186;
        static readonly ATSIGN = 187;
        static readonly CARET = 188;
        static readonly BLOCK_DELETE = 189;
        static readonly RULE_program = 0;
        static readonly RULE_line = 1;
        static readonly RULE_segment = 2;
        static readonly RULE_comment = 3;
        static readonly RULE_parameterSetting = 4;
        static readonly RULE_parameter = 5;
        static readonly RULE_designator = 6;
        static readonly RULE_oword_label = 7;
        static readonly RULE_oword_statement = 8;
        static readonly RULE_parameterList = 9;
        static readonly RULE_optReturnValue = 10;
        static readonly RULE_word = 11;
        static readonly RULE_axisWord = 12;
        static readonly RULE_a = 13;
        static readonly RULE_b = 14;
        static readonly RULE_c = 15;
        static readonly RULE_i = 16;
        static readonly RULE_j = 17;
        static readonly RULE_k = 18;
        static readonly RULE_r = 19;
        static readonly RULE_x = 20;
        static readonly RULE_y = 21;
        static readonly RULE_z = 22;
        static readonly RULE_dimensionWord = 23;
        static readonly RULE_f = 24;
        static readonly RULE_ex = 25;
        static readonly RULE_d = 26;
        static readonly RULE_g = 27;
        static readonly RULE_h = 28;
        static readonly RULE_l = 29;
        static readonly RULE_m = 30;
        static readonly RULE_p = 31;
        static readonly RULE_q = 32;
        static readonly RULE_s = 33;
        static readonly RULE_t = 34;
        static readonly RULE_wordLetter = 35;
        static readonly RULE_gWord = 36;
        static readonly RULE_group1 = 37;
        static readonly RULE_group2 = 38;
        static readonly RULE_group3 = 39;
        static readonly RULE_group5 = 40;
        static readonly RULE_group6 = 41;
        static readonly RULE_group7 = 42;
        static readonly RULE_group8 = 43;
        static readonly RULE_group10 = 44;
        static readonly RULE_group12 = 45;
        static readonly RULE_group13 = 46;
        static readonly RULE_group0 = 47;
        static readonly RULE_g0 = 48;
        static readonly RULE_g1 = 49;
        static readonly RULE_g2 = 50;
        static readonly RULE_g3 = 51;
        static readonly RULE_g4 = 52;
        static readonly RULE_g10 = 53;
        static readonly RULE_g17 = 54;
        static readonly RULE_g18 = 55;
        static readonly RULE_g19 = 56;
        static readonly RULE_g20 = 57;
        static readonly RULE_g21 = 58;
        static readonly RULE_g28 = 59;
        static readonly RULE_g30 = 60;
        static readonly RULE_g38_2 = 61;
        static readonly RULE_g40 = 62;
        static readonly RULE_g41 = 63;
        static readonly RULE_g42 = 64;
        static readonly RULE_g43 = 65;
        static readonly RULE_g49 = 66;
        static readonly RULE_g53 = 67;
        static readonly RULE_g54 = 68;
        static readonly RULE_g55 = 69;
        static readonly RULE_g56 = 70;
        static readonly RULE_g57 = 71;
        static readonly RULE_g58 = 72;
        static readonly RULE_g59 = 73;
        static readonly RULE_g59_1 = 74;
        static readonly RULE_g59_2 = 75;
        static readonly RULE_g59_3 = 76;
        static readonly RULE_g61 = 77;
        static readonly RULE_g61_1 = 78;
        static readonly RULE_g64 = 79;
        static readonly RULE_g80 = 80;
        static readonly RULE_g81 = 81;
        static readonly RULE_g82 = 82;
        static readonly RULE_g83 = 83;
        static readonly RULE_g84 = 84;
        static readonly RULE_g85 = 85;
        static readonly RULE_g86 = 86;
        static readonly RULE_g87 = 87;
        static readonly RULE_g88 = 88;
        static readonly RULE_g89 = 89;
        static readonly RULE_g90 = 90;
        static readonly RULE_g91 = 91;
        static readonly RULE_g92 = 92;
        static readonly RULE_g92_1 = 93;
        static readonly RULE_g92_2 = 94;
        static readonly RULE_g92_3 = 95;
        static readonly RULE_g93 = 96;
        static readonly RULE_g94 = 97;
        static readonly RULE_g98 = 98;
        static readonly RULE_g99 = 99;
        static readonly RULE_mWord = 100;
        static readonly RULE_mgroup4 = 101;
        static readonly RULE_mgroup6 = 102;
        static readonly RULE_mgroup7 = 103;
        static readonly RULE_mgroup8 = 104;
        static readonly RULE_mgroup9 = 105;
        static readonly RULE_mgroup10 = 106;
        static readonly RULE_mgroup11 = 107;
        static readonly RULE_mgroup12 = 108;
        static readonly RULE_m0 = 109;
        static readonly RULE_m1 = 110;
        static readonly RULE_m2 = 111;
        static readonly RULE_m3 = 112;
        static readonly RULE_m4 = 113;
        static readonly RULE_m5 = 114;
        static readonly RULE_m6 = 115;
        static readonly RULE_m7 = 116;
        static readonly RULE_m8 = 117;
        static readonly RULE_m9 = 118;
        static readonly RULE_m30 = 119;
        static readonly RULE_m48 = 120;
        static readonly RULE_m49 = 121;
        static readonly RULE_m60 = 122;
        static readonly RULE_m82 = 123;
        static readonly RULE_m84 = 124;
        static readonly RULE_m104 = 125;
        static readonly RULE_m105 = 126;
        static readonly RULE_m106 = 127;
        static readonly RULE_m107 = 128;
        static readonly RULE_m109 = 129;
        static readonly RULE_m140 = 130;
        static readonly RULE_m141 = 131;
        static readonly RULE_m190 = 132;
        static readonly RULE_m201 = 133;
        static readonly RULE_m203 = 134;
        static readonly RULE_m204 = 135;
        static readonly RULE_m205 = 136;
        static readonly RULE_m220 = 137;
        static readonly RULE_m221 = 138;
        static readonly RULE_e = 139;
        static readonly RULE_logicalExpression = 140;
        static readonly RULE_comparisonExpression = 141;
        static readonly RULE_plusMinExpression = 142;
        static readonly RULE_aggregateExpression = 143;
        static readonly RULE_powerExpression = 144;
        static readonly RULE_unaryExpression = 145;
        static readonly RULE_bracketExpression = 146;
        static readonly RULE_primitiveExpression = 147;
        static readonly RULE_lineNumber = 148;
        static readonly RULE_endOfLine = 149;
        static readonly ruleNames: string[];
        private static readonly _LITERAL_NAMES;
        private static readonly _SYMBOLIC_NAMES;
        static readonly VOCABULARY: Vocabulary;
        get vocabulary(): Vocabulary;
        get grammarFileName(): string;
        get ruleNames(): string[];
        get serializedATN(): string;
        protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
        constructor(input: TokenStream);
        program(): ProgramContext;
        line(): LineContext;
        segment(): SegmentContext;
        comment(): CommentContext;
        parameterSetting(): ParameterSettingContext;
        parameter(): ParameterContext;
        designator(): DesignatorContext;
        oword_label(): Oword_labelContext;
        oword_statement(): Oword_statementContext;
        parameterList(): ParameterListContext;
        optReturnValue(): OptReturnValueContext;
        word(): WordContext;
        axisWord(): AxisWordContext;
        a(): AContext;
        b(): BContext;
        c(): CContext;
        i(): IContext;
        j(): JContext;
        k(): KContext;
        r(): RContext;
        x(): XContext;
        y(): YContext;
        z(): ZContext;
        dimensionWord(): DimensionWordContext;
        f(): FContext;
        ex(): ExContext;
        d(): DContext;
        g(): GContext;
        h(): HContext;
        l(): LContext;
        m(): MContext;
        p(): PContext;
        q(): QContext;
        s(): SContext;
        t(): TContext;
        wordLetter(): WordLetterContext;
        gWord(): GWordContext;
        group1(): Group1Context;
        group2(): Group2Context;
        group3(): Group3Context;
        group5(): Group5Context;
        group6(): Group6Context;
        group7(): Group7Context;
        group8(): Group8Context;
        group10(): Group10Context;
        group12(): Group12Context;
        group13(): Group13Context;
        group0(): Group0Context;
        g0(): G0Context;
        g1(): G1Context;
        g2(): G2Context;
        g3(): G3Context;
        g4(): G4Context;
        g10(): G10Context;
        g17(): G17Context;
        g18(): G18Context;
        g19(): G19Context;
        g20(): G20Context;
        g21(): G21Context;
        g28(): G28Context;
        g30(): G30Context;
        g38_2(): G38_2Context;
        g40(): G40Context;
        g41(): G41Context;
        g42(): G42Context;
        g43(): G43Context;
        g49(): G49Context;
        g53(): G53Context;
        g54(): G54Context;
        g55(): G55Context;
        g56(): G56Context;
        g57(): G57Context;
        g58(): G58Context;
        g59(): G59Context;
        g59_1(): G59_1Context;
        g59_2(): G59_2Context;
        g59_3(): G59_3Context;
        g61(): G61Context;
        g61_1(): G61_1Context;
        g64(): G64Context;
        g80(): G80Context;
        g81(): G81Context;
        g82(): G82Context;
        g83(): G83Context;
        g84(): G84Context;
        g85(): G85Context;
        g86(): G86Context;
        g87(): G87Context;
        g88(): G88Context;
        g89(): G89Context;
        g90(): G90Context;
        g91(): G91Context;
        g92(): G92Context;
        g92_1(): G92_1Context;
        g92_2(): G92_2Context;
        g92_3(): G92_3Context;
        g93(): G93Context;
        g94(): G94Context;
        g98(): G98Context;
        g99(): G99Context;
        mWord(): MWordContext;
        mgroup4(): Mgroup4Context;
        mgroup6(): Mgroup6Context;
        mgroup7(): Mgroup7Context;
        mgroup8(): Mgroup8Context;
        mgroup9(): Mgroup9Context;
        mgroup10(): Mgroup10Context;
        mgroup11(): Mgroup11Context;
        mgroup12(): Mgroup12Context;
        m0(): M0Context;
        m1(): M1Context;
        m2(): M2Context;
        m3(): M3Context;
        m4(): M4Context;
        m5(): M5Context;
        m6(): M6Context;
        m7(): M7Context;
        m8(): M8Context;
        m9(): M9Context;
        m30(): M30Context;
        m48(): M48Context;
        m49(): M49Context;
        m60(): M60Context;
        m82(): M82Context;
        m84(): M84Context;
        m104(): M104Context;
        m105(): M105Context;
        m106(): M106Context;
        m107(): M107Context;
        m109(): M109Context;
        m140(): M140Context;
        m141(): M141Context;
        m190(): M190Context;
        m201(): M201Context;
        m203(): M203Context;
        m204(): M204Context;
        m205(): M205Context;
        m220(): M220Context;
        m221(): M221Context;
        e(): EContext;
        logicalExpression(): LogicalExpressionContext;
        comparisonExpression(): ComparisonExpressionContext;
        plusMinExpression(): PlusMinExpressionContext;
        aggregateExpression(): AggregateExpressionContext;
        powerExpression(): PowerExpressionContext;
        unaryExpression(): UnaryExpressionContext;
        bracketExpression(): BracketExpressionContext;
        primitiveExpression(): PrimitiveExpressionContext;
        lineNumber(): LineNumberContext;
        endOfLine(): EndOfLineContext;
        private static readonly _serializedATNSegments;
        private static readonly _serializedATNSegment0;
        private static readonly _serializedATNSegment1;
        static readonly _serializedATN: string;
        static __ATN: ATN;
        static get _ATN(): ATN;
    }
    export class ProgramContext extends ParserRuleContext {
        PERCENT(): TerminalNode[];
        PERCENT(i: number): TerminalNode;
        END_OF_LINE(): TerminalNode[];
        END_OF_LINE(i: number): TerminalNode;
        line(): LineContext[];
        line(i: number): LineContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class LineContext extends ParserRuleContext {
        endOfLine(): EndOfLineContext;
        BLOCK_DELETE(): TerminalNode | undefined;
        lineNumber(): LineNumberContext | undefined;
        segment(): SegmentContext[];
        segment(i: number): SegmentContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class SegmentContext extends ParserRuleContext {
        word(): WordContext | undefined;
        parameterSetting(): ParameterSettingContext | undefined;
        comment(): CommentContext | undefined;
        oword_label(): Oword_labelContext | undefined;
        oword_statement(): Oword_statementContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class CommentContext extends ParserRuleContext {
        MESSAGE_COMMENT(): TerminalNode | undefined;
        IGNORED_COMMENT(): TerminalNode | undefined;
        LINE_COMMENT(): TerminalNode | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ParameterSettingContext extends ParserRuleContext {
        parameter(): ParameterContext;
        EQUALS(): TerminalNode;
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ParameterContext extends ParserRuleContext {
        HASH(): TerminalNode;
        designator(): DesignatorContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class DesignatorContext extends ParserRuleContext {
        NUMBER(): TerminalNode | undefined;
        NAME(): TerminalNode | undefined;
        parameter(): ParameterContext | undefined;
        bracketExpression(): BracketExpressionContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Oword_labelContext extends ParserRuleContext {
        NUMBER(): TerminalNode | undefined;
        NAME(): TerminalNode | undefined;
        parameter(): ParameterContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Oword_statementContext extends ParserRuleContext {
        SUB(): TerminalNode | undefined;
        RETURN(): TerminalNode | undefined;
        bracketExpression(): BracketExpressionContext[];
        bracketExpression(i: number): BracketExpressionContext;
        ENDSUB(): TerminalNode | undefined;
        CALL(): TerminalNode | undefined;
        DO(): TerminalNode | undefined;
        WHILE(): TerminalNode | undefined;
        IF(): TerminalNode | undefined;
        ELSEIF(): TerminalNode | undefined;
        ELSE(): TerminalNode | undefined;
        ENDIF(): TerminalNode | undefined;
        BREAK(): TerminalNode | undefined;
        CONTINUE(): TerminalNode | undefined;
        ENDWHILE(): TerminalNode | undefined;
        REPEAT(): TerminalNode | undefined;
        ENDREPEAT(): TerminalNode | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ParameterListContext extends ParserRuleContext {
        bracketExpression(): BracketExpressionContext[];
        bracketExpression(i: number): BracketExpressionContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class OptReturnValueContext extends ParserRuleContext {
        bracketExpression(): BracketExpressionContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class WordContext extends ParserRuleContext {
        gWord(): GWordContext | undefined;
        mWord(): MWordContext | undefined;
        axisWord(): AxisWordContext | undefined;
        dimensionWord(): DimensionWordContext | undefined;
        wordLetter(): WordLetterContext | undefined;
        e(): EContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class AxisWordContext extends ParserRuleContext {
        a(): AContext | undefined;
        b(): BContext | undefined;
        c(): CContext | undefined;
        i(): IContext | undefined;
        j(): JContext | undefined;
        k(): KContext | undefined;
        r(): RContext | undefined;
        x(): XContext | undefined;
        y(): YContext | undefined;
        z(): ZContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class AContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class BContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class CContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class IContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class JContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class KContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class RContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class XContext extends ParserRuleContext {
        e(): EContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class YContext extends ParserRuleContext {
        e(): EContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ZContext extends ParserRuleContext {
        e(): EContext | undefined;
        LINE_COMMENT(): TerminalNode | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class DimensionWordContext extends ParserRuleContext {
        f(): FContext | undefined;
        ex(): ExContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class FContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ExContext extends ParserRuleContext {
        e(): EContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class DContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class GContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class HContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class LContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class MContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class PContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class QContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class SContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class TContext extends ParserRuleContext {
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class WordLetterContext extends ParserRuleContext {
        d(): DContext | undefined;
        g(): GContext | undefined;
        h(): HContext | undefined;
        l(): LContext | undefined;
        m(): MContext | undefined;
        p(): PContext | undefined;
        q(): QContext | undefined;
        s(): SContext | undefined;
        t(): TContext | undefined;
        ATSIGN(): TerminalNode | undefined;
        CARET(): TerminalNode | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class GWordContext extends ParserRuleContext {
        group0(): Group0Context | undefined;
        group1(): Group1Context | undefined;
        group2(): Group2Context | undefined;
        group3(): Group3Context | undefined;
        group5(): Group5Context | undefined;
        group6(): Group6Context | undefined;
        group7(): Group7Context | undefined;
        group8(): Group8Context | undefined;
        group10(): Group10Context | undefined;
        group12(): Group12Context | undefined;
        group13(): Group13Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group1Context extends ParserRuleContext {
        g0(): G0Context | undefined;
        g1(): G1Context | undefined;
        g2(): G2Context | undefined;
        g3(): G3Context | undefined;
        g38_2(): G38_2Context | undefined;
        g80(): G80Context | undefined;
        g81(): G81Context | undefined;
        g82(): G82Context | undefined;
        g83(): G83Context | undefined;
        g84(): G84Context | undefined;
        g85(): G85Context | undefined;
        g86(): G86Context | undefined;
        g87(): G87Context | undefined;
        g88(): G88Context | undefined;
        g89(): G89Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group2Context extends ParserRuleContext {
        g17(): G17Context | undefined;
        g18(): G18Context | undefined;
        g19(): G19Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group3Context extends ParserRuleContext {
        g90(): G90Context | undefined;
        g91(): G91Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group5Context extends ParserRuleContext {
        g93(): G93Context | undefined;
        g94(): G94Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group6Context extends ParserRuleContext {
        g20(): G20Context | undefined;
        g21(): G21Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group7Context extends ParserRuleContext {
        g40(): G40Context | undefined;
        g41(): G41Context | undefined;
        g42(): G42Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group8Context extends ParserRuleContext {
        g43(): G43Context | undefined;
        g49(): G49Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group10Context extends ParserRuleContext {
        g98(): G98Context | undefined;
        g99(): G99Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group12Context extends ParserRuleContext {
        g54(): G54Context | undefined;
        g55(): G55Context | undefined;
        g56(): G56Context | undefined;
        g57(): G57Context | undefined;
        g58(): G58Context | undefined;
        g59(): G59Context | undefined;
        g59_1(): G59_1Context | undefined;
        g59_2(): G59_2Context | undefined;
        g59_3(): G59_3Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group13Context extends ParserRuleContext {
        g61(): G61Context | undefined;
        g61_1(): G61_1Context | undefined;
        g64(): G64Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Group0Context extends ParserRuleContext {
        g4(): G4Context | undefined;
        g10(): G10Context | undefined;
        g28(): G28Context | undefined;
        g30(): G30Context | undefined;
        g53(): G53Context | undefined;
        g92(): G92Context | undefined;
        g92_1(): G92_1Context | undefined;
        g92_2(): G92_2Context | undefined;
        g92_3(): G92_3Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G0Context extends ParserRuleContext {
        G0(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G1Context extends ParserRuleContext {
        G1(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G2Context extends ParserRuleContext {
        G2(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G3Context extends ParserRuleContext {
        G3(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G4Context extends ParserRuleContext {
        G4(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G10Context extends ParserRuleContext {
        G10(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G17Context extends ParserRuleContext {
        G17(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G18Context extends ParserRuleContext {
        G18(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G19Context extends ParserRuleContext {
        G19(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G20Context extends ParserRuleContext {
        G20(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G21Context extends ParserRuleContext {
        G21(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G28Context extends ParserRuleContext {
        G28(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G30Context extends ParserRuleContext {
        G30(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G38_2Context extends ParserRuleContext {
        G38_2(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G40Context extends ParserRuleContext {
        G40(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G41Context extends ParserRuleContext {
        G41(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G42Context extends ParserRuleContext {
        G42(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G43Context extends ParserRuleContext {
        G43(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G49Context extends ParserRuleContext {
        G49(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G53Context extends ParserRuleContext {
        G53(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G54Context extends ParserRuleContext {
        G54(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G55Context extends ParserRuleContext {
        G55(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G56Context extends ParserRuleContext {
        G56(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G57Context extends ParserRuleContext {
        G57(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G58Context extends ParserRuleContext {
        G58(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G59Context extends ParserRuleContext {
        G59(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G59_1Context extends ParserRuleContext {
        G59_1(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G59_2Context extends ParserRuleContext {
        G59_2(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G59_3Context extends ParserRuleContext {
        G59_3(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G61Context extends ParserRuleContext {
        G61(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G61_1Context extends ParserRuleContext {
        G61_1(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G64Context extends ParserRuleContext {
        G64(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G80Context extends ParserRuleContext {
        G80(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G81Context extends ParserRuleContext {
        G81(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G82Context extends ParserRuleContext {
        G82(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G83Context extends ParserRuleContext {
        G83(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G84Context extends ParserRuleContext {
        G84(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G85Context extends ParserRuleContext {
        G85(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G86Context extends ParserRuleContext {
        G86(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G87Context extends ParserRuleContext {
        G87(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G88Context extends ParserRuleContext {
        G88(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G89Context extends ParserRuleContext {
        G89(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G90Context extends ParserRuleContext {
        G90(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G91Context extends ParserRuleContext {
        G91(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G92Context extends ParserRuleContext {
        G92(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G92_1Context extends ParserRuleContext {
        G92_1(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G92_2Context extends ParserRuleContext {
        G92_2(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G92_3Context extends ParserRuleContext {
        G92_3(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G93Context extends ParserRuleContext {
        G93(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G94Context extends ParserRuleContext {
        G94(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G98Context extends ParserRuleContext {
        G98(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class G99Context extends ParserRuleContext {
        G99(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class MWordContext extends ParserRuleContext {
        mgroup4(): Mgroup4Context | undefined;
        mgroup6(): Mgroup6Context | undefined;
        mgroup7(): Mgroup7Context | undefined;
        mgroup8(): Mgroup8Context | undefined;
        mgroup9(): Mgroup9Context | undefined;
        mgroup10(): Mgroup10Context | undefined;
        mgroup11(): Mgroup11Context | undefined;
        mgroup12(): Mgroup12Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup4Context extends ParserRuleContext {
        m0(): M0Context | undefined;
        m1(): M1Context | undefined;
        m2(): M2Context | undefined;
        m30(): M30Context | undefined;
        m60(): M60Context | undefined;
        m84(): M84Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup6Context extends ParserRuleContext {
        m6(): M6Context;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup7Context extends ParserRuleContext {
        m3(): M3Context | undefined;
        m4(): M4Context | undefined;
        m5(): M5Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup8Context extends ParserRuleContext {
        m7(): M7Context | undefined;
        m8(): M8Context | undefined;
        m9(): M9Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup9Context extends ParserRuleContext {
        m48(): M48Context | undefined;
        m49(): M49Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup10Context extends ParserRuleContext {
        m82(): M82Context;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup11Context extends ParserRuleContext {
        m201(): M201Context | undefined;
        m203(): M203Context | undefined;
        m204(): M204Context | undefined;
        m205(): M205Context | undefined;
        m220(): M220Context | undefined;
        m221(): M221Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class Mgroup12Context extends ParserRuleContext {
        m104(): M104Context | undefined;
        m105(): M105Context | undefined;
        m106(): M106Context | undefined;
        m107(): M107Context | undefined;
        m109(): M109Context | undefined;
        m140(): M140Context | undefined;
        m141(): M141Context | undefined;
        m190(): M190Context | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M0Context extends ParserRuleContext {
        M0(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M1Context extends ParserRuleContext {
        M1(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M2Context extends ParserRuleContext {
        M2(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M3Context extends ParserRuleContext {
        M3(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M4Context extends ParserRuleContext {
        M4(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M5Context extends ParserRuleContext {
        M5(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M6Context extends ParserRuleContext {
        M6(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M7Context extends ParserRuleContext {
        M7(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M8Context extends ParserRuleContext {
        M8(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M9Context extends ParserRuleContext {
        M9(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M30Context extends ParserRuleContext {
        M30(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M48Context extends ParserRuleContext {
        M48(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M49Context extends ParserRuleContext {
        M49(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M60Context extends ParserRuleContext {
        M60(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M82Context extends ParserRuleContext {
        M82(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M84Context extends ParserRuleContext {
        M84(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M104Context extends ParserRuleContext {
        M104(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M105Context extends ParserRuleContext {
        M105(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M106Context extends ParserRuleContext {
        M106(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M107Context extends ParserRuleContext {
        M107(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M109Context extends ParserRuleContext {
        M109(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M140Context extends ParserRuleContext {
        M140(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M141Context extends ParserRuleContext {
        M141(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M190Context extends ParserRuleContext {
        M190(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M201Context extends ParserRuleContext {
        M201(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M203Context extends ParserRuleContext {
        M203(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M204Context extends ParserRuleContext {
        M204(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M205Context extends ParserRuleContext {
        M205(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M220Context extends ParserRuleContext {
        M220(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class M221Context extends ParserRuleContext {
        M221(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class EContext extends ParserRuleContext {
        v: number;
        _logicalExpression: LogicalExpressionContext;
        logicalExpression(): LogicalExpressionContext;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class LogicalExpressionContext extends ParserRuleContext {
        v: number;
        _comparisonExpression: ComparisonExpressionContext;
        comparisonExpression(): ComparisonExpressionContext[];
        comparisonExpression(i: number): ComparisonExpressionContext;
        OR(): TerminalNode[];
        OR(i: number): TerminalNode;
        XOR(): TerminalNode[];
        XOR(i: number): TerminalNode;
        AND(): TerminalNode[];
        AND(i: number): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class ComparisonExpressionContext extends ParserRuleContext {
        v: number;
        _plusMinExpression: PlusMinExpressionContext;
        plusMinExpression(): PlusMinExpressionContext[];
        plusMinExpression(i: number): PlusMinExpressionContext;
        EQ(): TerminalNode[];
        EQ(i: number): TerminalNode;
        NE(): TerminalNode[];
        NE(i: number): TerminalNode;
        GT(): TerminalNode[];
        GT(i: number): TerminalNode;
        GE(): TerminalNode[];
        GE(i: number): TerminalNode;
        LT(): TerminalNode[];
        LT(i: number): TerminalNode;
        LE(): TerminalNode[];
        LE(i: number): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class PlusMinExpressionContext extends ParserRuleContext {
        v: number;
        _aggregateExpression: AggregateExpressionContext;
        aggregateExpression(): AggregateExpressionContext[];
        aggregateExpression(i: number): AggregateExpressionContext;
        PLUS(): TerminalNode[];
        PLUS(i: number): TerminalNode;
        MINUS(): TerminalNode[];
        MINUS(i: number): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class AggregateExpressionContext extends ParserRuleContext {
        v: number;
        _powerExpression: PowerExpressionContext;
        powerExpression(): PowerExpressionContext[];
        powerExpression(i: number): PowerExpressionContext;
        TIMES(): TerminalNode[];
        TIMES(i: number): TerminalNode;
        SLASH(): TerminalNode[];
        SLASH(i: number): TerminalNode;
        MOD(): TerminalNode[];
        MOD(i: number): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class PowerExpressionContext extends ParserRuleContext {
        v: number;
        _unaryExpression: UnaryExpressionContext;
        _powerExpression: PowerExpressionContext;
        unaryExpression(): UnaryExpressionContext;
        POWER(): TerminalNode | undefined;
        powerExpression(): PowerExpressionContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class UnaryExpressionContext extends ParserRuleContext {
        v: number;
        _bracketExpression: BracketExpressionContext;
        _primitiveExpression: PrimitiveExpressionContext;
        ACOS(): TerminalNode | undefined;
        bracketExpression(): BracketExpressionContext[];
        bracketExpression(i: number): BracketExpressionContext;
        ASIN(): TerminalNode | undefined;
        COS(): TerminalNode | undefined;
        SIN(): TerminalNode | undefined;
        TAN(): TerminalNode | undefined;
        LN(): TerminalNode | undefined;
        EXP(): TerminalNode | undefined;
        SQRT(): TerminalNode | undefined;
        FIX(): TerminalNode | undefined;
        FUP(): TerminalNode | undefined;
        ROUND(): TerminalNode | undefined;
        ABS(): TerminalNode | undefined;
        EXISTS(): TerminalNode | undefined;
        ATAN(): TerminalNode | undefined;
        SLASH(): TerminalNode | undefined;
        parameter(): ParameterContext | undefined;
        primitiveExpression(): PrimitiveExpressionContext | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class BracketExpressionContext extends ParserRuleContext {
        v: number;
        _e: EContext;
        LBRACKET(): TerminalNode;
        e(): EContext;
        RBRACKET(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class PrimitiveExpressionContext extends ParserRuleContext {
        v: number;
        _bracketExpression: BracketExpressionContext;
        _NUMBER: Token;
        bracketExpression(): BracketExpressionContext | undefined;
        parameter(): ParameterContext | undefined;
        NUMBER(): TerminalNode | undefined;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class LineNumberContext extends ParserRuleContext {
        LINE_NUMBER(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
    export class EndOfLineContext extends ParserRuleContext {
        END_OF_LINE(): TerminalNode;
        constructor(parent: ParserRuleContext | undefined, invokingState: number);
        get ruleIndex(): number;
        enterRule(listener: gcodeListener): void;
        exitRule(listener: gcodeListener): void;
        accept<Result>(visitor: gcodeVisitor<Result>): Result;
    }
}
declare module "JSONGeometry" {
    export interface JSONPosition {
        x: number;
        y: number;
        z: number;
    }
    export interface JSONError {
        isSkipped: boolean;
        line: number;
        message: string;
    }
    export interface JSONGeometryLine {
        lineNumber: number;
        type: 'G1' | 'G0' | 'G3' | 'G2';
        start?: Partial<JSONPosition>;
        end?: Partial<JSONPosition>;
        beziers?: {
            p0: Partial<JSONPosition>;
            p1: Partial<JSONPosition>;
            p2: Partial<JSONPosition>;
            p3: Partial<JSONPosition>;
        }[];
        feedrate: number;
    }
    export interface JSONBoundingBox {
        min: JSONPosition;
        max: JSONPosition;
    }
    export interface JSONGeometry {
        gcode: string[];
        lines: JSONGeometryLine[];
        size: JSONBoundingBox;
        displayInInch: boolean;
        errorList: JSONError[];
    }
    export enum JSONGeometryEvent {
        BEGIN = 0,
        ERROR = 1,
        GCODE = 2,
        LINE = 3,
        ARC = 4,
        END = 5
    }
}
declare module "util" {
    /**
     * Namespace for the library.
     *
     * @namespace
     */
    class Util {
        /**
         * Constant for converting inches values into millimeters values.
         */
        INCH_TO_MILLIMETER: number;
        /**
         * Constant for converting millimeters values into inches values.
         */
        MILLIMETER_TO_INCH: number;
        FLOAT_PRECISION: number;
        calculateFeedrate(feedrate: number, inMm: boolean): number;
        /**
         * Checks if two numbers are nearly equal. This function is used to avoid
         * to have too much precision when checking values between floating-point
         * numbers.
         *
         * @param {number} a - Number A.
         * @param {number} b - Number B.
         * @param {number} [precision=util.FLOAT_PRECISION] - The precision
         * of the comparaison.
         * @return {boolean} True if the two values are nearly equal.
         */
        nearlyEqual(a: number, b: number, precision?: number): boolean;
        /**
         * Swaps two objects. It has to be the same objects, too bad if it's not.
         *
         * @param {object} obj1 - The first object.
         * @param {object} obj2 - The second object.
        */
        swapObjects(obj1: any, obj2: any): void;
        /**
         * Returns the copy of the object.
         *
         * @param {object} object - The object.
         * @return {object} The copy of the object.
        */
        copyObject(object: any): {};
        /**
         * Moves the point according to the vector.
         *
         * @param {Point} point - The point to move.
         * @param {Point} vector - The vector.
         */
        movePoint(point: any, vector: any): void;
        /**
         * Does a 2D dot product.
         *
         * @param {Point} v1 - The first vector.
         * @param {Point} v2 - The second vector.
         * @return {number} The result.
         */
        dotProduct2(v1: any, v2: any): number;
        /**
         * Does a 2D cross product.
         *
         * @param {Point} v1 - The first vector.
         * @param {Point} v2 - The second vector.
         * @return {number} The result on the Z axis.
         */
        crossProduct2(v1: any, v2: any): number;
        /**
         * Calculates the length of a 3D vector.
         *
         * @param {Point} v - The vector.
         * @return {number} The vector length.
         */
        lengthVector3(v: any): number;
        /**
         * Returns object of 3 axes:
         *  re is the axes for REal numbers;
         *  im for the IMaginary numbers;
         *  cr for the CRoss axis
         *
         * @param {string} crossAxe The name of the axis given by the cross product of
         * the vectors defining the plane. Should be "x", "y" or "z", considered "z" if
         * not "x" or "y".
         * @return {Axes} The object defining the real, imaginary and cross axis.
         */
        findAxes(crossAxe: any): {
            re: string;
            im: string;
            cr: string;
        };
        /**
         * Does a rotation and scale of point according to center. Stores the result in
         * newPoint.
         *
         * @param {Point} center - The center of the rotation and scale.
         * @param {Point} point - The point to modify.
         * @param {Point} newPoint - The point storying the result.
         * @param {number} angle - The angle in radians.
         * @param {number} length - The scale ratio.
         * @param {string} re - The real axis.
         * @param {string} im - The imaginary axis.
         */
        scaleAndRotation(center: any, point: any, newPoint: any, angle: any, length: any, re: any, im: any): void;
        /**
         * Returns the signed angle in radian in 2D (between -PI and PI).
         *
         * @param {Point} v1 - The first vector.
         * @param {Point} v2 - The second vector.
         * @return {number} The angle in radian.
         */
        findAngleVectors2(v1: any, v2: any): number;
        /**
         * Returns the signed angle in radian in 2d (between -2pi and 2pi).
         *
         * @param {Point} v1 - The first vector.
         * @param {Point} v2 - The second vector.
         * @param {boolean} positive - If the oriented angle goes counter-clockwise.
         * @return {number} The angle in radian.
         */
        findAngleOrientedVectors2(v1: any, v2: any, positive: any): number;
        /**
         * Checks if the value is include between the value a (include) and b (include).
         * Order between a and b does not matter.
         *
         * @param {number} value - The value.
         * @param {number} a - The first boundary.
         * @param {number} b - The second boundary.
         * @return {boolean} The result.
         */
        isInclude(value: any, a: any, b: any): boolean;
    }
    const _default: Util;
    export default _default;
}
declare module "lines" {
    import { JSONPosition } from "JSONGeometry";
    export interface G3Commands {
        r?: number;
        i?: number;
        j?: number;
        k?: number;
    }
    export interface CNCSettings {
        feedrate: number;
        inMm: boolean;
        crossAxe: 'x' | 'y' | 'z';
        oldType?: 'G1' | 'G0' | 'G2' | 'G3';
    }
    /**
     * This file contains the classes managing the lines. The lines are
     * the representation of the G0, G1, G2 and G3 commands.
     */
    /**
     * Creates an instance of the StraightLine class. This class does the
     * computations for the G0 and G1 commands.
     *
     * @class
     * @param {number} index - The line number where this command appears.
     * @param {Point} start - The 3D start point.
     * @param {ParsedCommand} parsedCommand - The parsed command.
     * @param {Settings} settings - The modularity settings.
     * @return {StraightLine} An instance of the StraightLine class.
     *
    export function StraightLine(index, start, end, parsedCommand, settings) {
        "use strict";
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
    
        /**
         * Returns a line object of type "G0" or "G1" (corresponding to
         * parsedCommand).
         *
         * @function returnLine
         * @memberof util.StraightLine
         * @instance
         * @return {Line} The line object.
         *
        that.returnLine = function() {
            return {
                lineNumber : that.index,
                type : that.word,
                start : that.start,
                end : that.end,
                feedrate : that.feedrate
            };
        };
    
        /**
         * Returns the size of the line.
         *
         * @function getSize
         * @memberof util.StraightLine
         * @instance
         * @return {Size} The size.
         *
        that.getSize = function() {
            return {
                min : {
                    x : Math.min(that.start.x, that.end.x),
                    y : Math.min(that.start.y, that.end.y),
                    z : Math.min(that.start.z, that.end.z),
                }, max : {
                    x : Math.max(that.start.x, that.end.x),
                    y : Math.max(that.start.y, that.end.y),
                    z : Math.max(that.start.z, that.end.z),
                }
            };
        };
    
        function initialize(index, start, parsedCommand, settings) {
            that.index = index;
            that.word = parsedCommand.type;
            that.start = { x : start.x, y : start.y, z : start.z };
            that.end = end;
            if(parsedCommand.type === "G0") {
                that.feedrate = 0;
            } else if(parsedCommand.f === undefined) {
                that.feedrate = settings.feedrate;
            } else {
                that.feedrate = util.calculateFeedrate(parsedCommand.f,
                        settings.inMm);
            }
        }
    
        initialize(index, start, parsedCommand, settings);
    }
    
    /**
     * Creates an instance of the CurvedLine class. This class does the computations
     * for the G2 and G3 commands.
     *
     * @class
     * @param {number} index - The line number where this command appears.
     * @param {Point} start - The 3D start point.
     * @param {ParsedCommand} parsedCommand - The parsed command.
     * @param {Settings} settings - The modularity settings.
     * @return {CurvedLine} An instance of the CurvedLine class.
     */
    export function CurvedLine(index: number, start: JSONPosition, end: JSONPosition, parsedCommand: G3Commands, settings: CNCSettings): void;
}
declare module "antlr/gcodeLexer" {
    import { ATN } from "antlr4ts/atn/ATN";
    import { CharStream } from "antlr4ts/CharStream";
    import { Lexer } from "antlr4ts/Lexer";
    import { Vocabulary } from "antlr4ts/Vocabulary";
    export class gcodeLexer extends Lexer {
        static readonly T__0 = 1;
        static readonly T__1 = 2;
        static readonly T__2 = 3;
        static readonly T__3 = 4;
        static readonly T__4 = 5;
        static readonly T__5 = 6;
        static readonly T__6 = 7;
        static readonly T__7 = 8;
        static readonly T__8 = 9;
        static readonly T__9 = 10;
        static readonly T__10 = 11;
        static readonly T__11 = 12;
        static readonly T__12 = 13;
        static readonly T__13 = 14;
        static readonly T__14 = 15;
        static readonly T__15 = 16;
        static readonly T__16 = 17;
        static readonly T__17 = 18;
        static readonly T__18 = 19;
        static readonly T__19 = 20;
        static readonly T__20 = 21;
        static readonly T__21 = 22;
        static readonly T__22 = 23;
        static readonly T__23 = 24;
        static readonly T__24 = 25;
        static readonly T__25 = 26;
        static readonly T__26 = 27;
        static readonly T__27 = 28;
        static readonly T__28 = 29;
        static readonly T__29 = 30;
        static readonly T__30 = 31;
        static readonly T__31 = 32;
        static readonly T__32 = 33;
        static readonly T__33 = 34;
        static readonly T__34 = 35;
        static readonly T__35 = 36;
        static readonly T__36 = 37;
        static readonly T__37 = 38;
        static readonly T__38 = 39;
        static readonly T__39 = 40;
        static readonly T__40 = 41;
        static readonly T__41 = 42;
        static readonly T__42 = 43;
        static readonly T__43 = 44;
        static readonly MESSAGE_COMMENT = 45;
        static readonly IGNORED_COMMENT = 46;
        static readonly LINE_COMMENT = 47;
        static readonly G0 = 48;
        static readonly G1 = 49;
        static readonly G2 = 50;
        static readonly G3 = 51;
        static readonly G4 = 52;
        static readonly G10 = 53;
        static readonly G17 = 54;
        static readonly G18 = 55;
        static readonly G19 = 56;
        static readonly G20 = 57;
        static readonly G21 = 58;
        static readonly G28 = 59;
        static readonly G30 = 60;
        static readonly G38_2 = 61;
        static readonly G40 = 62;
        static readonly G41 = 63;
        static readonly G42 = 64;
        static readonly G43 = 65;
        static readonly G49 = 66;
        static readonly G53 = 67;
        static readonly G54 = 68;
        static readonly G55 = 69;
        static readonly G56 = 70;
        static readonly G57 = 71;
        static readonly G58 = 72;
        static readonly G59 = 73;
        static readonly G59_1 = 74;
        static readonly G59_2 = 75;
        static readonly G59_3 = 76;
        static readonly G61 = 77;
        static readonly G61_1 = 78;
        static readonly G64 = 79;
        static readonly G80 = 80;
        static readonly G81 = 81;
        static readonly G82 = 82;
        static readonly G83 = 83;
        static readonly G84 = 84;
        static readonly G85 = 85;
        static readonly G86 = 86;
        static readonly G87 = 87;
        static readonly G88 = 88;
        static readonly G89 = 89;
        static readonly G90 = 90;
        static readonly G91 = 91;
        static readonly G92 = 92;
        static readonly G92_1 = 93;
        static readonly G92_2 = 94;
        static readonly G92_3 = 95;
        static readonly G93 = 96;
        static readonly G94 = 97;
        static readonly G98 = 98;
        static readonly G99 = 99;
        static readonly M0 = 100;
        static readonly M1 = 101;
        static readonly M2 = 102;
        static readonly M3 = 103;
        static readonly M4 = 104;
        static readonly M5 = 105;
        static readonly M6 = 106;
        static readonly M7 = 107;
        static readonly M8 = 108;
        static readonly M9 = 109;
        static readonly M30 = 110;
        static readonly M48 = 111;
        static readonly M49 = 112;
        static readonly M60 = 113;
        static readonly M82 = 114;
        static readonly M84 = 115;
        static readonly M104 = 116;
        static readonly M105 = 117;
        static readonly M106 = 118;
        static readonly M107 = 119;
        static readonly M109 = 120;
        static readonly M140 = 121;
        static readonly M141 = 122;
        static readonly M190 = 123;
        static readonly M201 = 124;
        static readonly M203 = 125;
        static readonly M204 = 126;
        static readonly M205 = 127;
        static readonly M220 = 128;
        static readonly M221 = 129;
        static readonly WHITESPACE = 130;
        static readonly LINE_NUMBER = 131;
        static readonly END_OF_LINE = 132;
        static readonly NUMBER = 133;
        static readonly NAME = 134;
        static readonly SUB = 135;
        static readonly ENDSUB = 136;
        static readonly CALL = 137;
        static readonly DO = 138;
        static readonly WHILE = 139;
        static readonly ELSEIF = 140;
        static readonly ELSE = 141;
        static readonly ENDIF = 142;
        static readonly IF = 143;
        static readonly BREAK = 144;
        static readonly CONTINUE = 145;
        static readonly ENDWHILE = 146;
        static readonly RETURN = 147;
        static readonly REPEAT = 148;
        static readonly ENDREPEAT = 149;
        static readonly ABS = 150;
        static readonly ACOS = 151;
        static readonly ASIN = 152;
        static readonly ATAN = 153;
        static readonly SIN = 154;
        static readonly COS = 155;
        static readonly TAN = 156;
        static readonly AND = 157;
        static readonly OR = 158;
        static readonly XOR = 159;
        static readonly EXP = 160;
        static readonly FIX = 161;
        static readonly FUP = 162;
        static readonly MOD = 163;
        static readonly ROUND = 164;
        static readonly SQRT = 165;
        static readonly LN = 166;
        static readonly EXISTS = 167;
        static readonly EQ = 168;
        static readonly NE = 169;
        static readonly GT = 170;
        static readonly GE = 171;
        static readonly LT = 172;
        static readonly LE = 173;
        static readonly POWER = 174;
        static readonly PLUS = 175;
        static readonly MINUS = 176;
        static readonly TIMES = 177;
        static readonly SLASH = 178;
        static readonly HASH = 179;
        static readonly EQUALS = 180;
        static readonly LBRACKET = 181;
        static readonly RBRACKET = 182;
        static readonly PERCENT = 183;
        static readonly LESS = 184;
        static readonly GREATER = 185;
        static readonly DOT = 186;
        static readonly ATSIGN = 187;
        static readonly CARET = 188;
        static readonly BLOCK_DELETE = 189;
        static readonly channelNames: string[];
        static readonly modeNames: string[];
        static readonly ruleNames: string[];
        private static readonly _LITERAL_NAMES;
        private static readonly _SYMBOLIC_NAMES;
        static readonly VOCABULARY: Vocabulary;
        get vocabulary(): Vocabulary;
        constructor(input: CharStream);
        get grammarFileName(): string;
        get ruleNames(): string[];
        get serializedATN(): string;
        get channelNames(): string[];
        get modeNames(): string[];
        private static readonly _serializedATNSegments;
        private static readonly _serializedATNSegment0;
        private static readonly _serializedATNSegment1;
        private static readonly _serializedATNSegment2;
        static readonly _serializedATN: string;
        static __ATN: ATN;
        static get _ATN(): ATN;
    }
}
declare module "gcodetogeometry" {
    import { JSONGeometry } from "JSONGeometry";
    import events from 'events';
    export interface GCodeToGeometryOptions {
        exposeParsedGcode: boolean;
        maxErrorsRepoted: number;
        decimals: number;
    }
    /**
     * Parses the GCode into a series of lines and curves and checks if errors.
     *
     * @param {string} code - The GCode.
     * @param {options} option - The parser options
     * @returns {ParsedGCode} The parsed GCode.
     */
    export function pullParser(code: ReadableStream<Uint8Array>, options?: Partial<GCodeToGeometryOptions>): Promise<events.EventEmitter>;
    /**
     * Parses the GCode into a series of lines and curves and checks if errors.
     *
     * @param {string} code - The GCode.
     * @param {options} option - The parser options
     * @returns {ParsedGCode} The parsed GCode.
     */
    export function parse(code: string, options?: Partial<GCodeToGeometryOptions>): JSONGeometry;
}
declare module "InterpreterVisitor" {
    import { FContext, G0Context, G17Context, G18Context, G19Context, G1Context, G20Context, G21Context, G2Context, G3Context, IContext, JContext, LineContext, MWordContext, ProgramContext, RContext, XContext, YContext, ZContext } from "antlr/gcodeParser";
    import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
    import { gcodeVisitor } from "antlr/gcodeVisitor";
    import { JSONGeometry, JSONGeometryLine, JSONPosition } from "JSONGeometry";
    import { CNCSettings } from "lines";
    import { GCodeToGeometryOptions } from "gcodetogeometry";
    import events from "events";
    interface CurrentLine extends JSONGeometryLine {
        r: number;
        i: number;
        j: number;
    }
    export class InterpreterVisitor extends AbstractParseTreeVisitor<JSONGeometry> implements gcodeVisitor<JSONGeometry> {
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
}
