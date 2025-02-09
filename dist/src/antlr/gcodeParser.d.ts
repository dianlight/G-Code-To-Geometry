import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { gcodeListener } from "./gcodeListener";
import { gcodeVisitor } from "./gcodeVisitor";
export declare class gcodeParser extends Parser {
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
export declare class ProgramContext extends ParserRuleContext {
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
export declare class LineContext extends ParserRuleContext {
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
export declare class SegmentContext extends ParserRuleContext {
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
export declare class CommentContext extends ParserRuleContext {
    MESSAGE_COMMENT(): TerminalNode | undefined;
    IGNORED_COMMENT(): TerminalNode | undefined;
    LINE_COMMENT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class ParameterSettingContext extends ParserRuleContext {
    parameter(): ParameterContext;
    EQUALS(): TerminalNode;
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class ParameterContext extends ParserRuleContext {
    HASH(): TerminalNode;
    designator(): DesignatorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class DesignatorContext extends ParserRuleContext {
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
export declare class Oword_labelContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    NAME(): TerminalNode | undefined;
    parameter(): ParameterContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Oword_statementContext extends ParserRuleContext {
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
export declare class ParameterListContext extends ParserRuleContext {
    bracketExpression(): BracketExpressionContext[];
    bracketExpression(i: number): BracketExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class OptReturnValueContext extends ParserRuleContext {
    bracketExpression(): BracketExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class WordContext extends ParserRuleContext {
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
export declare class AxisWordContext extends ParserRuleContext {
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
export declare class AContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class BContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class CContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class IContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class JContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class KContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class RContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class XContext extends ParserRuleContext {
    e(): EContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class YContext extends ParserRuleContext {
    e(): EContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class ZContext extends ParserRuleContext {
    e(): EContext | undefined;
    LINE_COMMENT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class DimensionWordContext extends ParserRuleContext {
    f(): FContext | undefined;
    ex(): ExContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class FContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class ExContext extends ParserRuleContext {
    e(): EContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class DContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class GContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class HContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class LContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class MContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class PContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class QContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class SContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class TContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class WordLetterContext extends ParserRuleContext {
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
export declare class GWordContext extends ParserRuleContext {
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
export declare class Group1Context extends ParserRuleContext {
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
export declare class Group2Context extends ParserRuleContext {
    g17(): G17Context | undefined;
    g18(): G18Context | undefined;
    g19(): G19Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group3Context extends ParserRuleContext {
    g90(): G90Context | undefined;
    g91(): G91Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group5Context extends ParserRuleContext {
    g93(): G93Context | undefined;
    g94(): G94Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group6Context extends ParserRuleContext {
    g20(): G20Context | undefined;
    g21(): G21Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group7Context extends ParserRuleContext {
    g40(): G40Context | undefined;
    g41(): G41Context | undefined;
    g42(): G42Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group8Context extends ParserRuleContext {
    g43(): G43Context | undefined;
    g49(): G49Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group10Context extends ParserRuleContext {
    g98(): G98Context | undefined;
    g99(): G99Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group12Context extends ParserRuleContext {
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
export declare class Group13Context extends ParserRuleContext {
    g61(): G61Context | undefined;
    g61_1(): G61_1Context | undefined;
    g64(): G64Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Group0Context extends ParserRuleContext {
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
export declare class G0Context extends ParserRuleContext {
    G0(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G1Context extends ParserRuleContext {
    G1(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G2Context extends ParserRuleContext {
    G2(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G3Context extends ParserRuleContext {
    G3(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G4Context extends ParserRuleContext {
    G4(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G10Context extends ParserRuleContext {
    G10(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G17Context extends ParserRuleContext {
    G17(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G18Context extends ParserRuleContext {
    G18(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G19Context extends ParserRuleContext {
    G19(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G20Context extends ParserRuleContext {
    G20(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G21Context extends ParserRuleContext {
    G21(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G28Context extends ParserRuleContext {
    G28(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G30Context extends ParserRuleContext {
    G30(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G38_2Context extends ParserRuleContext {
    G38_2(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G40Context extends ParserRuleContext {
    G40(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G41Context extends ParserRuleContext {
    G41(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G42Context extends ParserRuleContext {
    G42(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G43Context extends ParserRuleContext {
    G43(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G49Context extends ParserRuleContext {
    G49(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G53Context extends ParserRuleContext {
    G53(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G54Context extends ParserRuleContext {
    G54(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G55Context extends ParserRuleContext {
    G55(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G56Context extends ParserRuleContext {
    G56(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G57Context extends ParserRuleContext {
    G57(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G58Context extends ParserRuleContext {
    G58(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G59Context extends ParserRuleContext {
    G59(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G59_1Context extends ParserRuleContext {
    G59_1(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G59_2Context extends ParserRuleContext {
    G59_2(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G59_3Context extends ParserRuleContext {
    G59_3(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G61Context extends ParserRuleContext {
    G61(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G61_1Context extends ParserRuleContext {
    G61_1(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G64Context extends ParserRuleContext {
    G64(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G80Context extends ParserRuleContext {
    G80(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G81Context extends ParserRuleContext {
    G81(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G82Context extends ParserRuleContext {
    G82(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G83Context extends ParserRuleContext {
    G83(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G84Context extends ParserRuleContext {
    G84(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G85Context extends ParserRuleContext {
    G85(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G86Context extends ParserRuleContext {
    G86(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G87Context extends ParserRuleContext {
    G87(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G88Context extends ParserRuleContext {
    G88(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G89Context extends ParserRuleContext {
    G89(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G90Context extends ParserRuleContext {
    G90(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G91Context extends ParserRuleContext {
    G91(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G92Context extends ParserRuleContext {
    G92(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G92_1Context extends ParserRuleContext {
    G92_1(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G92_2Context extends ParserRuleContext {
    G92_2(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G92_3Context extends ParserRuleContext {
    G92_3(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G93Context extends ParserRuleContext {
    G93(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G94Context extends ParserRuleContext {
    G94(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G98Context extends ParserRuleContext {
    G98(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class G99Context extends ParserRuleContext {
    G99(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class MWordContext extends ParserRuleContext {
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
export declare class Mgroup4Context extends ParserRuleContext {
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
export declare class Mgroup6Context extends ParserRuleContext {
    m6(): M6Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Mgroup7Context extends ParserRuleContext {
    m3(): M3Context | undefined;
    m4(): M4Context | undefined;
    m5(): M5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Mgroup8Context extends ParserRuleContext {
    m7(): M7Context | undefined;
    m8(): M8Context | undefined;
    m9(): M9Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Mgroup9Context extends ParserRuleContext {
    m48(): M48Context | undefined;
    m49(): M49Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Mgroup10Context extends ParserRuleContext {
    m82(): M82Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class Mgroup11Context extends ParserRuleContext {
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
export declare class Mgroup12Context extends ParserRuleContext {
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
export declare class M0Context extends ParserRuleContext {
    M0(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M1Context extends ParserRuleContext {
    M1(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M2Context extends ParserRuleContext {
    M2(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M3Context extends ParserRuleContext {
    M3(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M4Context extends ParserRuleContext {
    M4(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M5Context extends ParserRuleContext {
    M5(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M6Context extends ParserRuleContext {
    M6(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M7Context extends ParserRuleContext {
    M7(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M8Context extends ParserRuleContext {
    M8(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M9Context extends ParserRuleContext {
    M9(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M30Context extends ParserRuleContext {
    M30(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M48Context extends ParserRuleContext {
    M48(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M49Context extends ParserRuleContext {
    M49(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M60Context extends ParserRuleContext {
    M60(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M82Context extends ParserRuleContext {
    M82(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M84Context extends ParserRuleContext {
    M84(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M104Context extends ParserRuleContext {
    M104(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M105Context extends ParserRuleContext {
    M105(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M106Context extends ParserRuleContext {
    M106(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M107Context extends ParserRuleContext {
    M107(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M109Context extends ParserRuleContext {
    M109(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M140Context extends ParserRuleContext {
    M140(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M141Context extends ParserRuleContext {
    M141(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M190Context extends ParserRuleContext {
    M190(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M201Context extends ParserRuleContext {
    M201(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M203Context extends ParserRuleContext {
    M203(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M204Context extends ParserRuleContext {
    M204(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M205Context extends ParserRuleContext {
    M205(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M220Context extends ParserRuleContext {
    M220(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class M221Context extends ParserRuleContext {
    M221(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class EContext extends ParserRuleContext {
    v: number;
    _logicalExpression: LogicalExpressionContext;
    logicalExpression(): LogicalExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class LogicalExpressionContext extends ParserRuleContext {
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
export declare class ComparisonExpressionContext extends ParserRuleContext {
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
export declare class PlusMinExpressionContext extends ParserRuleContext {
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
export declare class AggregateExpressionContext extends ParserRuleContext {
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
export declare class PowerExpressionContext extends ParserRuleContext {
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
export declare class UnaryExpressionContext extends ParserRuleContext {
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
export declare class BracketExpressionContext extends ParserRuleContext {
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
export declare class PrimitiveExpressionContext extends ParserRuleContext {
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
export declare class LineNumberContext extends ParserRuleContext {
    LINE_NUMBER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
export declare class EndOfLineContext extends ParserRuleContext {
    END_OF_LINE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: gcodeListener): void;
    exitRule(listener: gcodeListener): void;
    accept<Result>(visitor: gcodeVisitor<Result>): Result;
}
