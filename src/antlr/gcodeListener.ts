// Generated from src/antlr/gcode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./gcodeParser";
import { LineContext } from "./gcodeParser";
import { SegmentContext } from "./gcodeParser";
import { CommentContext } from "./gcodeParser";
import { ParameterSettingContext } from "./gcodeParser";
import { ParameterContext } from "./gcodeParser";
import { DesignatorContext } from "./gcodeParser";
import { Oword_labelContext } from "./gcodeParser";
import { Oword_statementContext } from "./gcodeParser";
import { ParameterListContext } from "./gcodeParser";
import { OptReturnValueContext } from "./gcodeParser";
import { WordContext } from "./gcodeParser";
import { AxisWordContext } from "./gcodeParser";
import { AContext } from "./gcodeParser";
import { BContext } from "./gcodeParser";
import { CContext } from "./gcodeParser";
import { IContext } from "./gcodeParser";
import { JContext } from "./gcodeParser";
import { KContext } from "./gcodeParser";
import { RContext } from "./gcodeParser";
import { XContext } from "./gcodeParser";
import { YContext } from "./gcodeParser";
import { ZContext } from "./gcodeParser";
import { DimensionWordContext } from "./gcodeParser";
import { FContext } from "./gcodeParser";
import { DContext } from "./gcodeParser";
import { GContext } from "./gcodeParser";
import { HContext } from "./gcodeParser";
import { LContext } from "./gcodeParser";
import { MContext } from "./gcodeParser";
import { PContext } from "./gcodeParser";
import { QContext } from "./gcodeParser";
import { SContext } from "./gcodeParser";
import { TContext } from "./gcodeParser";
import { WordLetterContext } from "./gcodeParser";
import { GWordContext } from "./gcodeParser";
import { Group1Context } from "./gcodeParser";
import { Group2Context } from "./gcodeParser";
import { Group3Context } from "./gcodeParser";
import { Group5Context } from "./gcodeParser";
import { Group6Context } from "./gcodeParser";
import { Group7Context } from "./gcodeParser";
import { Group8Context } from "./gcodeParser";
import { Group10Context } from "./gcodeParser";
import { Group12Context } from "./gcodeParser";
import { Group13Context } from "./gcodeParser";
import { Group0Context } from "./gcodeParser";
import { G0Context } from "./gcodeParser";
import { G1Context } from "./gcodeParser";
import { G2Context } from "./gcodeParser";
import { G3Context } from "./gcodeParser";
import { G4Context } from "./gcodeParser";
import { G10Context } from "./gcodeParser";
import { G17Context } from "./gcodeParser";
import { G18Context } from "./gcodeParser";
import { G19Context } from "./gcodeParser";
import { G20Context } from "./gcodeParser";
import { G21Context } from "./gcodeParser";
import { G28Context } from "./gcodeParser";
import { G30Context } from "./gcodeParser";
import { G38_2Context } from "./gcodeParser";
import { G40Context } from "./gcodeParser";
import { G41Context } from "./gcodeParser";
import { G42Context } from "./gcodeParser";
import { G43Context } from "./gcodeParser";
import { G49Context } from "./gcodeParser";
import { G53Context } from "./gcodeParser";
import { G54Context } from "./gcodeParser";
import { G55Context } from "./gcodeParser";
import { G56Context } from "./gcodeParser";
import { G57Context } from "./gcodeParser";
import { G58Context } from "./gcodeParser";
import { G59Context } from "./gcodeParser";
import { G59_1Context } from "./gcodeParser";
import { G59_2Context } from "./gcodeParser";
import { G59_3Context } from "./gcodeParser";
import { G61Context } from "./gcodeParser";
import { G61_1Context } from "./gcodeParser";
import { G64Context } from "./gcodeParser";
import { G80Context } from "./gcodeParser";
import { G81Context } from "./gcodeParser";
import { G82Context } from "./gcodeParser";
import { G83Context } from "./gcodeParser";
import { G84Context } from "./gcodeParser";
import { G85Context } from "./gcodeParser";
import { G86Context } from "./gcodeParser";
import { G87Context } from "./gcodeParser";
import { G88Context } from "./gcodeParser";
import { G89Context } from "./gcodeParser";
import { G90Context } from "./gcodeParser";
import { G91Context } from "./gcodeParser";
import { G92Context } from "./gcodeParser";
import { G92_1Context } from "./gcodeParser";
import { G92_2Context } from "./gcodeParser";
import { G92_3Context } from "./gcodeParser";
import { G93Context } from "./gcodeParser";
import { G94Context } from "./gcodeParser";
import { G98Context } from "./gcodeParser";
import { G99Context } from "./gcodeParser";
import { MWordContext } from "./gcodeParser";
import { Mgroup4Context } from "./gcodeParser";
import { Mgroup6Context } from "./gcodeParser";
import { Mgroup7Context } from "./gcodeParser";
import { Mgroup8Context } from "./gcodeParser";
import { Mgroup9Context } from "./gcodeParser";
import { M0Context } from "./gcodeParser";
import { M1Context } from "./gcodeParser";
import { M2Context } from "./gcodeParser";
import { M3Context } from "./gcodeParser";
import { M4Context } from "./gcodeParser";
import { M5Context } from "./gcodeParser";
import { M6Context } from "./gcodeParser";
import { M7Context } from "./gcodeParser";
import { M8Context } from "./gcodeParser";
import { M9Context } from "./gcodeParser";
import { M30Context } from "./gcodeParser";
import { M48Context } from "./gcodeParser";
import { M49Context } from "./gcodeParser";
import { M60Context } from "./gcodeParser";
import { EContext } from "./gcodeParser";
import { LogicalExpressionContext } from "./gcodeParser";
import { ComparisonExpressionContext } from "./gcodeParser";
import { PlusMinExpressionContext } from "./gcodeParser";
import { AggregateExpressionContext } from "./gcodeParser";
import { PowerExpressionContext } from "./gcodeParser";
import { UnaryExpressionContext } from "./gcodeParser";
import { BracketExpressionContext } from "./gcodeParser";
import { PrimitiveExpressionContext } from "./gcodeParser";
import { LineNumberContext } from "./gcodeParser";
import { EndOfLineContext } from "./gcodeParser";


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

