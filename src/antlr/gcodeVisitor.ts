// Generated from src/antlr/gcode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { ExContext } from "./gcodeParser";
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
import { Mgroup10Context } from "./gcodeParser";
import { Mgroup11Context } from "./gcodeParser";
import { Mgroup12Context } from "./gcodeParser";
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
import { M82Context } from "./gcodeParser";
import { M84Context } from "./gcodeParser";
import { M104Context } from "./gcodeParser";
import { M105Context } from "./gcodeParser";
import { M106Context } from "./gcodeParser";
import { M107Context } from "./gcodeParser";
import { M109Context } from "./gcodeParser";
import { M140Context } from "./gcodeParser";
import { M141Context } from "./gcodeParser";
import { M190Context } from "./gcodeParser";
import { M201Context } from "./gcodeParser";
import { M203Context } from "./gcodeParser";
import { M204Context } from "./gcodeParser";
import { M205Context } from "./gcodeParser";
import { M220Context } from "./gcodeParser";
import { M221Context } from "./gcodeParser";
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

