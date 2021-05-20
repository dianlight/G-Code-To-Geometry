// Generated from src/antlr/gcode.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { gcodeListener } from "./gcodeListener";
import { gcodeVisitor } from "./gcodeVisitor";


export class gcodeParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly MESSAGE_COMMENT = 45;
	public static readonly IGNORED_COMMENT = 46;
	public static readonly LINE_COMMENT = 47;
	public static readonly G0 = 48;
	public static readonly G1 = 49;
	public static readonly G2 = 50;
	public static readonly G3 = 51;
	public static readonly G4 = 52;
	public static readonly G10 = 53;
	public static readonly G17 = 54;
	public static readonly G18 = 55;
	public static readonly G19 = 56;
	public static readonly G20 = 57;
	public static readonly G21 = 58;
	public static readonly G28 = 59;
	public static readonly G30 = 60;
	public static readonly G38_2 = 61;
	public static readonly G40 = 62;
	public static readonly G41 = 63;
	public static readonly G42 = 64;
	public static readonly G43 = 65;
	public static readonly G49 = 66;
	public static readonly G53 = 67;
	public static readonly G54 = 68;
	public static readonly G55 = 69;
	public static readonly G56 = 70;
	public static readonly G57 = 71;
	public static readonly G58 = 72;
	public static readonly G59 = 73;
	public static readonly G59_1 = 74;
	public static readonly G59_2 = 75;
	public static readonly G59_3 = 76;
	public static readonly G61 = 77;
	public static readonly G61_1 = 78;
	public static readonly G64 = 79;
	public static readonly G80 = 80;
	public static readonly G81 = 81;
	public static readonly G82 = 82;
	public static readonly G83 = 83;
	public static readonly G84 = 84;
	public static readonly G85 = 85;
	public static readonly G86 = 86;
	public static readonly G87 = 87;
	public static readonly G88 = 88;
	public static readonly G89 = 89;
	public static readonly G90 = 90;
	public static readonly G91 = 91;
	public static readonly G92 = 92;
	public static readonly G92_1 = 93;
	public static readonly G92_2 = 94;
	public static readonly G92_3 = 95;
	public static readonly G93 = 96;
	public static readonly G94 = 97;
	public static readonly G98 = 98;
	public static readonly G99 = 99;
	public static readonly M0 = 100;
	public static readonly M1 = 101;
	public static readonly M2 = 102;
	public static readonly M3 = 103;
	public static readonly M4 = 104;
	public static readonly M5 = 105;
	public static readonly M6 = 106;
	public static readonly M7 = 107;
	public static readonly M8 = 108;
	public static readonly M9 = 109;
	public static readonly M30 = 110;
	public static readonly M48 = 111;
	public static readonly M49 = 112;
	public static readonly M60 = 113;
	public static readonly M82 = 114;
	public static readonly M84 = 115;
	public static readonly M104 = 116;
	public static readonly M105 = 117;
	public static readonly M106 = 118;
	public static readonly M107 = 119;
	public static readonly M109 = 120;
	public static readonly M140 = 121;
	public static readonly M141 = 122;
	public static readonly M190 = 123;
	public static readonly M201 = 124;
	public static readonly M203 = 125;
	public static readonly M204 = 126;
	public static readonly M205 = 127;
	public static readonly M220 = 128;
	public static readonly M221 = 129;
	public static readonly WHITESPACE = 130;
	public static readonly LINE_NUMBER = 131;
	public static readonly END_OF_LINE = 132;
	public static readonly NUMBER = 133;
	public static readonly NAME = 134;
	public static readonly SUB = 135;
	public static readonly ENDSUB = 136;
	public static readonly CALL = 137;
	public static readonly DO = 138;
	public static readonly WHILE = 139;
	public static readonly ELSEIF = 140;
	public static readonly ELSE = 141;
	public static readonly ENDIF = 142;
	public static readonly IF = 143;
	public static readonly BREAK = 144;
	public static readonly CONTINUE = 145;
	public static readonly ENDWHILE = 146;
	public static readonly RETURN = 147;
	public static readonly REPEAT = 148;
	public static readonly ENDREPEAT = 149;
	public static readonly ABS = 150;
	public static readonly ACOS = 151;
	public static readonly ASIN = 152;
	public static readonly ATAN = 153;
	public static readonly SIN = 154;
	public static readonly COS = 155;
	public static readonly TAN = 156;
	public static readonly AND = 157;
	public static readonly OR = 158;
	public static readonly XOR = 159;
	public static readonly EXP = 160;
	public static readonly FIX = 161;
	public static readonly FUP = 162;
	public static readonly MOD = 163;
	public static readonly ROUND = 164;
	public static readonly SQRT = 165;
	public static readonly LN = 166;
	public static readonly EXISTS = 167;
	public static readonly EQ = 168;
	public static readonly NE = 169;
	public static readonly GT = 170;
	public static readonly GE = 171;
	public static readonly LT = 172;
	public static readonly LE = 173;
	public static readonly POWER = 174;
	public static readonly PLUS = 175;
	public static readonly MINUS = 176;
	public static readonly TIMES = 177;
	public static readonly SLASH = 178;
	public static readonly HASH = 179;
	public static readonly EQUALS = 180;
	public static readonly LBRACKET = 181;
	public static readonly RBRACKET = 182;
	public static readonly PERCENT = 183;
	public static readonly LESS = 184;
	public static readonly GREATER = 185;
	public static readonly DOT = 186;
	public static readonly ATSIGN = 187;
	public static readonly CARET = 188;
	public static readonly BLOCK_DELETE = 189;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_segment = 2;
	public static readonly RULE_comment = 3;
	public static readonly RULE_parameterSetting = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_designator = 6;
	public static readonly RULE_oword_label = 7;
	public static readonly RULE_oword_statement = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_optReturnValue = 10;
	public static readonly RULE_word = 11;
	public static readonly RULE_axisWord = 12;
	public static readonly RULE_a = 13;
	public static readonly RULE_b = 14;
	public static readonly RULE_c = 15;
	public static readonly RULE_i = 16;
	public static readonly RULE_j = 17;
	public static readonly RULE_k = 18;
	public static readonly RULE_r = 19;
	public static readonly RULE_x = 20;
	public static readonly RULE_y = 21;
	public static readonly RULE_z = 22;
	public static readonly RULE_dimensionWord = 23;
	public static readonly RULE_f = 24;
	public static readonly RULE_ex = 25;
	public static readonly RULE_d = 26;
	public static readonly RULE_g = 27;
	public static readonly RULE_h = 28;
	public static readonly RULE_l = 29;
	public static readonly RULE_m = 30;
	public static readonly RULE_p = 31;
	public static readonly RULE_q = 32;
	public static readonly RULE_s = 33;
	public static readonly RULE_t = 34;
	public static readonly RULE_wordLetter = 35;
	public static readonly RULE_gWord = 36;
	public static readonly RULE_group1 = 37;
	public static readonly RULE_group2 = 38;
	public static readonly RULE_group3 = 39;
	public static readonly RULE_group5 = 40;
	public static readonly RULE_group6 = 41;
	public static readonly RULE_group7 = 42;
	public static readonly RULE_group8 = 43;
	public static readonly RULE_group10 = 44;
	public static readonly RULE_group12 = 45;
	public static readonly RULE_group13 = 46;
	public static readonly RULE_group0 = 47;
	public static readonly RULE_g0 = 48;
	public static readonly RULE_g1 = 49;
	public static readonly RULE_g2 = 50;
	public static readonly RULE_g3 = 51;
	public static readonly RULE_g4 = 52;
	public static readonly RULE_g10 = 53;
	public static readonly RULE_g17 = 54;
	public static readonly RULE_g18 = 55;
	public static readonly RULE_g19 = 56;
	public static readonly RULE_g20 = 57;
	public static readonly RULE_g21 = 58;
	public static readonly RULE_g28 = 59;
	public static readonly RULE_g30 = 60;
	public static readonly RULE_g38_2 = 61;
	public static readonly RULE_g40 = 62;
	public static readonly RULE_g41 = 63;
	public static readonly RULE_g42 = 64;
	public static readonly RULE_g43 = 65;
	public static readonly RULE_g49 = 66;
	public static readonly RULE_g53 = 67;
	public static readonly RULE_g54 = 68;
	public static readonly RULE_g55 = 69;
	public static readonly RULE_g56 = 70;
	public static readonly RULE_g57 = 71;
	public static readonly RULE_g58 = 72;
	public static readonly RULE_g59 = 73;
	public static readonly RULE_g59_1 = 74;
	public static readonly RULE_g59_2 = 75;
	public static readonly RULE_g59_3 = 76;
	public static readonly RULE_g61 = 77;
	public static readonly RULE_g61_1 = 78;
	public static readonly RULE_g64 = 79;
	public static readonly RULE_g80 = 80;
	public static readonly RULE_g81 = 81;
	public static readonly RULE_g82 = 82;
	public static readonly RULE_g83 = 83;
	public static readonly RULE_g84 = 84;
	public static readonly RULE_g85 = 85;
	public static readonly RULE_g86 = 86;
	public static readonly RULE_g87 = 87;
	public static readonly RULE_g88 = 88;
	public static readonly RULE_g89 = 89;
	public static readonly RULE_g90 = 90;
	public static readonly RULE_g91 = 91;
	public static readonly RULE_g92 = 92;
	public static readonly RULE_g92_1 = 93;
	public static readonly RULE_g92_2 = 94;
	public static readonly RULE_g92_3 = 95;
	public static readonly RULE_g93 = 96;
	public static readonly RULE_g94 = 97;
	public static readonly RULE_g98 = 98;
	public static readonly RULE_g99 = 99;
	public static readonly RULE_mWord = 100;
	public static readonly RULE_mgroup4 = 101;
	public static readonly RULE_mgroup6 = 102;
	public static readonly RULE_mgroup7 = 103;
	public static readonly RULE_mgroup8 = 104;
	public static readonly RULE_mgroup9 = 105;
	public static readonly RULE_mgroup10 = 106;
	public static readonly RULE_mgroup11 = 107;
	public static readonly RULE_mgroup12 = 108;
	public static readonly RULE_m0 = 109;
	public static readonly RULE_m1 = 110;
	public static readonly RULE_m2 = 111;
	public static readonly RULE_m3 = 112;
	public static readonly RULE_m4 = 113;
	public static readonly RULE_m5 = 114;
	public static readonly RULE_m6 = 115;
	public static readonly RULE_m7 = 116;
	public static readonly RULE_m8 = 117;
	public static readonly RULE_m9 = 118;
	public static readonly RULE_m30 = 119;
	public static readonly RULE_m48 = 120;
	public static readonly RULE_m49 = 121;
	public static readonly RULE_m60 = 122;
	public static readonly RULE_m82 = 123;
	public static readonly RULE_m84 = 124;
	public static readonly RULE_m104 = 125;
	public static readonly RULE_m105 = 126;
	public static readonly RULE_m106 = 127;
	public static readonly RULE_m107 = 128;
	public static readonly RULE_m109 = 129;
	public static readonly RULE_m140 = 130;
	public static readonly RULE_m141 = 131;
	public static readonly RULE_m190 = 132;
	public static readonly RULE_m201 = 133;
	public static readonly RULE_m203 = 134;
	public static readonly RULE_m204 = 135;
	public static readonly RULE_m205 = 136;
	public static readonly RULE_m220 = 137;
	public static readonly RULE_m221 = 138;
	public static readonly RULE_e = 139;
	public static readonly RULE_logicalExpression = 140;
	public static readonly RULE_comparisonExpression = 141;
	public static readonly RULE_plusMinExpression = 142;
	public static readonly RULE_aggregateExpression = 143;
	public static readonly RULE_powerExpression = 144;
	public static readonly RULE_unaryExpression = 145;
	public static readonly RULE_bracketExpression = 146;
	public static readonly RULE_primitiveExpression = 147;
	public static readonly RULE_lineNumber = 148;
	public static readonly RULE_endOfLine = 149;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "segment", "comment", "parameterSetting", "parameter", 
		"designator", "oword_label", "oword_statement", "parameterList", "optReturnValue", 
		"word", "axisWord", "a", "b", "c", "i", "j", "k", "r", "x", "y", "z", 
		"dimensionWord", "f", "ex", "d", "g", "h", "l", "m", "p", "q", "s", "t", 
		"wordLetter", "gWord", "group1", "group2", "group3", "group5", "group6", 
		"group7", "group8", "group10", "group12", "group13", "group0", "g0", "g1", 
		"g2", "g3", "g4", "g10", "g17", "g18", "g19", "g20", "g21", "g28", "g30", 
		"g38_2", "g40", "g41", "g42", "g43", "g49", "g53", "g54", "g55", "g56", 
		"g57", "g58", "g59", "g59_1", "g59_2", "g59_3", "g61", "g61_1", "g64", 
		"g80", "g81", "g82", "g83", "g84", "g85", "g86", "g87", "g88", "g89", 
		"g90", "g91", "g92", "g92_1", "g92_2", "g92_3", "g93", "g94", "g98", "g99", 
		"mWord", "mgroup4", "mgroup6", "mgroup7", "mgroup8", "mgroup9", "mgroup10", 
		"mgroup11", "mgroup12", "m0", "m1", "m2", "m3", "m4", "m5", "m6", "m7", 
		"m8", "m9", "m30", "m48", "m49", "m60", "m82", "m84", "m104", "m105", 
		"m106", "m107", "m109", "m140", "m141", "m190", "m201", "m203", "m204", 
		"m205", "m220", "m221", "e", "logicalExpression", "comparisonExpression", 
		"plusMinExpression", "aggregateExpression", "powerExpression", "unaryExpression", 
		"bracketExpression", "primitiveExpression", "lineNumber", "endOfLine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'o'", "'a'", "'A'", "'b'", "'B'", "'c'", "'C'", "'i'", "'I'", 
		"'j'", "'J'", "'k'", "'K'", "'r'", "'R'", "'x'", "'X'", "'y'", "'Y'", 
		"'z'", "'Z'", "'f'", "'F'", "'e'", "'E'", "'d'", "'D'", "'g'", "'G'", 
		"'h'", "'H'", "'l'", "'L'", "'m'", "'M'", "'p'", "'P'", "'q'", "'Q'", 
		"'s'", "'S'", "'t'", "'T'", "';'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'**'", 
		"'+'", "'-'", "'*'", undefined, "'#'", "'='", "'['", "']'", "'%'", "'<'", 
		"'>'", "'.'", "'@'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "MESSAGE_COMMENT", "IGNORED_COMMENT", 
		"LINE_COMMENT", "G0", "G1", "G2", "G3", "G4", "G10", "G17", "G18", "G19", 
		"G20", "G21", "G28", "G30", "G38_2", "G40", "G41", "G42", "G43", "G49", 
		"G53", "G54", "G55", "G56", "G57", "G58", "G59", "G59_1", "G59_2", "G59_3", 
		"G61", "G61_1", "G64", "G80", "G81", "G82", "G83", "G84", "G85", "G86", 
		"G87", "G88", "G89", "G90", "G91", "G92", "G92_1", "G92_2", "G92_3", "G93", 
		"G94", "G98", "G99", "M0", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", 
		"M9", "M30", "M48", "M49", "M60", "M82", "M84", "M104", "M105", "M106", 
		"M107", "M109", "M140", "M141", "M190", "M201", "M203", "M204", "M205", 
		"M220", "M221", "WHITESPACE", "LINE_NUMBER", "END_OF_LINE", "NUMBER", 
		"NAME", "SUB", "ENDSUB", "CALL", "DO", "WHILE", "ELSEIF", "ELSE", "ENDIF", 
		"IF", "BREAK", "CONTINUE", "ENDWHILE", "RETURN", "REPEAT", "ENDREPEAT", 
		"ABS", "ACOS", "ASIN", "ATAN", "SIN", "COS", "TAN", "AND", "OR", "XOR", 
		"EXP", "FIX", "FUP", "MOD", "ROUND", "SQRT", "LN", "EXISTS", "EQ", "NE", 
		"GT", "GE", "LT", "LE", "POWER", "PLUS", "MINUS", "TIMES", "SLASH", "HASH", 
		"EQUALS", "LBRACKET", "RBRACKET", "PERCENT", "LESS", "GREATER", "DOT", 
		"ATSIGN", "CARET", "BLOCK_DELETE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gcodeParser._LITERAL_NAMES, gcodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gcodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "gcode.g4"; }

	// @Override
	public get ruleNames(): string[] { return gcodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return gcodeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(gcodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, gcodeParser.RULE_program);
		let _la: number;
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.PERCENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.match(gcodeParser.PERCENT);
				this.state = 301;
				this.match(gcodeParser.END_OF_LINE);
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gcodeParser.T__0) | (1 << gcodeParser.T__1) | (1 << gcodeParser.T__2) | (1 << gcodeParser.T__3) | (1 << gcodeParser.T__4) | (1 << gcodeParser.T__5) | (1 << gcodeParser.T__6) | (1 << gcodeParser.T__7) | (1 << gcodeParser.T__8) | (1 << gcodeParser.T__9) | (1 << gcodeParser.T__10) | (1 << gcodeParser.T__11) | (1 << gcodeParser.T__12) | (1 << gcodeParser.T__13) | (1 << gcodeParser.T__14) | (1 << gcodeParser.T__15) | (1 << gcodeParser.T__16) | (1 << gcodeParser.T__17) | (1 << gcodeParser.T__18) | (1 << gcodeParser.T__19) | (1 << gcodeParser.T__20) | (1 << gcodeParser.T__21) | (1 << gcodeParser.T__22) | (1 << gcodeParser.T__23) | (1 << gcodeParser.T__24) | (1 << gcodeParser.T__25) | (1 << gcodeParser.T__26) | (1 << gcodeParser.T__27) | (1 << gcodeParser.T__28) | (1 << gcodeParser.T__29) | (1 << gcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (gcodeParser.T__31 - 32)) | (1 << (gcodeParser.T__32 - 32)) | (1 << (gcodeParser.T__33 - 32)) | (1 << (gcodeParser.T__34 - 32)) | (1 << (gcodeParser.T__35 - 32)) | (1 << (gcodeParser.T__36 - 32)) | (1 << (gcodeParser.T__37 - 32)) | (1 << (gcodeParser.T__38 - 32)) | (1 << (gcodeParser.T__39 - 32)) | (1 << (gcodeParser.T__40 - 32)) | (1 << (gcodeParser.T__41 - 32)) | (1 << (gcodeParser.T__42 - 32)) | (1 << (gcodeParser.T__43 - 32)) | (1 << (gcodeParser.MESSAGE_COMMENT - 32)) | (1 << (gcodeParser.IGNORED_COMMENT - 32)) | (1 << (gcodeParser.LINE_COMMENT - 32)) | (1 << (gcodeParser.G0 - 32)) | (1 << (gcodeParser.G1 - 32)) | (1 << (gcodeParser.G2 - 32)) | (1 << (gcodeParser.G3 - 32)) | (1 << (gcodeParser.G4 - 32)) | (1 << (gcodeParser.G10 - 32)) | (1 << (gcodeParser.G17 - 32)) | (1 << (gcodeParser.G18 - 32)) | (1 << (gcodeParser.G19 - 32)) | (1 << (gcodeParser.G20 - 32)) | (1 << (gcodeParser.G21 - 32)) | (1 << (gcodeParser.G28 - 32)) | (1 << (gcodeParser.G30 - 32)) | (1 << (gcodeParser.G38_2 - 32)) | (1 << (gcodeParser.G40 - 32)) | (1 << (gcodeParser.G41 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (gcodeParser.G42 - 64)) | (1 << (gcodeParser.G43 - 64)) | (1 << (gcodeParser.G49 - 64)) | (1 << (gcodeParser.G53 - 64)) | (1 << (gcodeParser.G54 - 64)) | (1 << (gcodeParser.G55 - 64)) | (1 << (gcodeParser.G56 - 64)) | (1 << (gcodeParser.G57 - 64)) | (1 << (gcodeParser.G58 - 64)) | (1 << (gcodeParser.G59 - 64)) | (1 << (gcodeParser.G59_1 - 64)) | (1 << (gcodeParser.G59_2 - 64)) | (1 << (gcodeParser.G59_3 - 64)) | (1 << (gcodeParser.G61 - 64)) | (1 << (gcodeParser.G61_1 - 64)) | (1 << (gcodeParser.G64 - 64)) | (1 << (gcodeParser.G80 - 64)) | (1 << (gcodeParser.G81 - 64)) | (1 << (gcodeParser.G82 - 64)) | (1 << (gcodeParser.G83 - 64)) | (1 << (gcodeParser.G84 - 64)) | (1 << (gcodeParser.G85 - 64)) | (1 << (gcodeParser.G86 - 64)) | (1 << (gcodeParser.G87 - 64)) | (1 << (gcodeParser.G88 - 64)) | (1 << (gcodeParser.G89 - 64)) | (1 << (gcodeParser.G90 - 64)) | (1 << (gcodeParser.G91 - 64)) | (1 << (gcodeParser.G92 - 64)) | (1 << (gcodeParser.G92_1 - 64)) | (1 << (gcodeParser.G92_2 - 64)) | (1 << (gcodeParser.G92_3 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (gcodeParser.G93 - 96)) | (1 << (gcodeParser.G94 - 96)) | (1 << (gcodeParser.G98 - 96)) | (1 << (gcodeParser.G99 - 96)) | (1 << (gcodeParser.M0 - 96)) | (1 << (gcodeParser.M1 - 96)) | (1 << (gcodeParser.M2 - 96)) | (1 << (gcodeParser.M3 - 96)) | (1 << (gcodeParser.M4 - 96)) | (1 << (gcodeParser.M5 - 96)) | (1 << (gcodeParser.M6 - 96)) | (1 << (gcodeParser.M7 - 96)) | (1 << (gcodeParser.M8 - 96)) | (1 << (gcodeParser.M9 - 96)) | (1 << (gcodeParser.M30 - 96)) | (1 << (gcodeParser.M48 - 96)) | (1 << (gcodeParser.M49 - 96)) | (1 << (gcodeParser.M60 - 96)) | (1 << (gcodeParser.M82 - 96)) | (1 << (gcodeParser.M84 - 96)) | (1 << (gcodeParser.M104 - 96)) | (1 << (gcodeParser.M105 - 96)) | (1 << (gcodeParser.M106 - 96)) | (1 << (gcodeParser.M107 - 96)) | (1 << (gcodeParser.M109 - 96)) | (1 << (gcodeParser.M140 - 96)) | (1 << (gcodeParser.M141 - 96)) | (1 << (gcodeParser.M190 - 96)) | (1 << (gcodeParser.M201 - 96)) | (1 << (gcodeParser.M203 - 96)) | (1 << (gcodeParser.M204 - 96)) | (1 << (gcodeParser.M205 - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (gcodeParser.M220 - 128)) | (1 << (gcodeParser.M221 - 128)) | (1 << (gcodeParser.LINE_NUMBER - 128)) | (1 << (gcodeParser.END_OF_LINE - 128)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (gcodeParser.HASH - 179)) | (1 << (gcodeParser.ATSIGN - 179)) | (1 << (gcodeParser.CARET - 179)) | (1 << (gcodeParser.BLOCK_DELETE - 179)))) !== 0)) {
					{
					{
					this.state = 302;
					this.line();
					}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				{
				this.state = 308;
				this.match(gcodeParser.PERCENT);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === gcodeParser.END_OF_LINE) {
					{
					this.state = 309;
					this.match(gcodeParser.END_OF_LINE);
					}
				}

				}
				}
				break;
			case gcodeParser.EOF:
			case gcodeParser.T__0:
			case gcodeParser.T__1:
			case gcodeParser.T__2:
			case gcodeParser.T__3:
			case gcodeParser.T__4:
			case gcodeParser.T__5:
			case gcodeParser.T__6:
			case gcodeParser.T__7:
			case gcodeParser.T__8:
			case gcodeParser.T__9:
			case gcodeParser.T__10:
			case gcodeParser.T__11:
			case gcodeParser.T__12:
			case gcodeParser.T__13:
			case gcodeParser.T__14:
			case gcodeParser.T__15:
			case gcodeParser.T__16:
			case gcodeParser.T__17:
			case gcodeParser.T__18:
			case gcodeParser.T__19:
			case gcodeParser.T__20:
			case gcodeParser.T__21:
			case gcodeParser.T__22:
			case gcodeParser.T__23:
			case gcodeParser.T__24:
			case gcodeParser.T__25:
			case gcodeParser.T__26:
			case gcodeParser.T__27:
			case gcodeParser.T__28:
			case gcodeParser.T__29:
			case gcodeParser.T__30:
			case gcodeParser.T__31:
			case gcodeParser.T__32:
			case gcodeParser.T__33:
			case gcodeParser.T__34:
			case gcodeParser.T__35:
			case gcodeParser.T__36:
			case gcodeParser.T__37:
			case gcodeParser.T__38:
			case gcodeParser.T__39:
			case gcodeParser.T__40:
			case gcodeParser.T__41:
			case gcodeParser.T__42:
			case gcodeParser.T__43:
			case gcodeParser.MESSAGE_COMMENT:
			case gcodeParser.IGNORED_COMMENT:
			case gcodeParser.LINE_COMMENT:
			case gcodeParser.G0:
			case gcodeParser.G1:
			case gcodeParser.G2:
			case gcodeParser.G3:
			case gcodeParser.G4:
			case gcodeParser.G10:
			case gcodeParser.G17:
			case gcodeParser.G18:
			case gcodeParser.G19:
			case gcodeParser.G20:
			case gcodeParser.G21:
			case gcodeParser.G28:
			case gcodeParser.G30:
			case gcodeParser.G38_2:
			case gcodeParser.G40:
			case gcodeParser.G41:
			case gcodeParser.G42:
			case gcodeParser.G43:
			case gcodeParser.G49:
			case gcodeParser.G53:
			case gcodeParser.G54:
			case gcodeParser.G55:
			case gcodeParser.G56:
			case gcodeParser.G57:
			case gcodeParser.G58:
			case gcodeParser.G59:
			case gcodeParser.G59_1:
			case gcodeParser.G59_2:
			case gcodeParser.G59_3:
			case gcodeParser.G61:
			case gcodeParser.G61_1:
			case gcodeParser.G64:
			case gcodeParser.G80:
			case gcodeParser.G81:
			case gcodeParser.G82:
			case gcodeParser.G83:
			case gcodeParser.G84:
			case gcodeParser.G85:
			case gcodeParser.G86:
			case gcodeParser.G87:
			case gcodeParser.G88:
			case gcodeParser.G89:
			case gcodeParser.G90:
			case gcodeParser.G91:
			case gcodeParser.G92:
			case gcodeParser.G92_1:
			case gcodeParser.G92_2:
			case gcodeParser.G92_3:
			case gcodeParser.G93:
			case gcodeParser.G94:
			case gcodeParser.G98:
			case gcodeParser.G99:
			case gcodeParser.M0:
			case gcodeParser.M1:
			case gcodeParser.M2:
			case gcodeParser.M3:
			case gcodeParser.M4:
			case gcodeParser.M5:
			case gcodeParser.M6:
			case gcodeParser.M7:
			case gcodeParser.M8:
			case gcodeParser.M9:
			case gcodeParser.M30:
			case gcodeParser.M48:
			case gcodeParser.M49:
			case gcodeParser.M60:
			case gcodeParser.M82:
			case gcodeParser.M84:
			case gcodeParser.M104:
			case gcodeParser.M105:
			case gcodeParser.M106:
			case gcodeParser.M107:
			case gcodeParser.M109:
			case gcodeParser.M140:
			case gcodeParser.M141:
			case gcodeParser.M190:
			case gcodeParser.M201:
			case gcodeParser.M203:
			case gcodeParser.M204:
			case gcodeParser.M205:
			case gcodeParser.M220:
			case gcodeParser.M221:
			case gcodeParser.LINE_NUMBER:
			case gcodeParser.END_OF_LINE:
			case gcodeParser.HASH:
			case gcodeParser.ATSIGN:
			case gcodeParser.CARET:
			case gcodeParser.BLOCK_DELETE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gcodeParser.T__0) | (1 << gcodeParser.T__1) | (1 << gcodeParser.T__2) | (1 << gcodeParser.T__3) | (1 << gcodeParser.T__4) | (1 << gcodeParser.T__5) | (1 << gcodeParser.T__6) | (1 << gcodeParser.T__7) | (1 << gcodeParser.T__8) | (1 << gcodeParser.T__9) | (1 << gcodeParser.T__10) | (1 << gcodeParser.T__11) | (1 << gcodeParser.T__12) | (1 << gcodeParser.T__13) | (1 << gcodeParser.T__14) | (1 << gcodeParser.T__15) | (1 << gcodeParser.T__16) | (1 << gcodeParser.T__17) | (1 << gcodeParser.T__18) | (1 << gcodeParser.T__19) | (1 << gcodeParser.T__20) | (1 << gcodeParser.T__21) | (1 << gcodeParser.T__22) | (1 << gcodeParser.T__23) | (1 << gcodeParser.T__24) | (1 << gcodeParser.T__25) | (1 << gcodeParser.T__26) | (1 << gcodeParser.T__27) | (1 << gcodeParser.T__28) | (1 << gcodeParser.T__29) | (1 << gcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (gcodeParser.T__31 - 32)) | (1 << (gcodeParser.T__32 - 32)) | (1 << (gcodeParser.T__33 - 32)) | (1 << (gcodeParser.T__34 - 32)) | (1 << (gcodeParser.T__35 - 32)) | (1 << (gcodeParser.T__36 - 32)) | (1 << (gcodeParser.T__37 - 32)) | (1 << (gcodeParser.T__38 - 32)) | (1 << (gcodeParser.T__39 - 32)) | (1 << (gcodeParser.T__40 - 32)) | (1 << (gcodeParser.T__41 - 32)) | (1 << (gcodeParser.T__42 - 32)) | (1 << (gcodeParser.T__43 - 32)) | (1 << (gcodeParser.MESSAGE_COMMENT - 32)) | (1 << (gcodeParser.IGNORED_COMMENT - 32)) | (1 << (gcodeParser.LINE_COMMENT - 32)) | (1 << (gcodeParser.G0 - 32)) | (1 << (gcodeParser.G1 - 32)) | (1 << (gcodeParser.G2 - 32)) | (1 << (gcodeParser.G3 - 32)) | (1 << (gcodeParser.G4 - 32)) | (1 << (gcodeParser.G10 - 32)) | (1 << (gcodeParser.G17 - 32)) | (1 << (gcodeParser.G18 - 32)) | (1 << (gcodeParser.G19 - 32)) | (1 << (gcodeParser.G20 - 32)) | (1 << (gcodeParser.G21 - 32)) | (1 << (gcodeParser.G28 - 32)) | (1 << (gcodeParser.G30 - 32)) | (1 << (gcodeParser.G38_2 - 32)) | (1 << (gcodeParser.G40 - 32)) | (1 << (gcodeParser.G41 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (gcodeParser.G42 - 64)) | (1 << (gcodeParser.G43 - 64)) | (1 << (gcodeParser.G49 - 64)) | (1 << (gcodeParser.G53 - 64)) | (1 << (gcodeParser.G54 - 64)) | (1 << (gcodeParser.G55 - 64)) | (1 << (gcodeParser.G56 - 64)) | (1 << (gcodeParser.G57 - 64)) | (1 << (gcodeParser.G58 - 64)) | (1 << (gcodeParser.G59 - 64)) | (1 << (gcodeParser.G59_1 - 64)) | (1 << (gcodeParser.G59_2 - 64)) | (1 << (gcodeParser.G59_3 - 64)) | (1 << (gcodeParser.G61 - 64)) | (1 << (gcodeParser.G61_1 - 64)) | (1 << (gcodeParser.G64 - 64)) | (1 << (gcodeParser.G80 - 64)) | (1 << (gcodeParser.G81 - 64)) | (1 << (gcodeParser.G82 - 64)) | (1 << (gcodeParser.G83 - 64)) | (1 << (gcodeParser.G84 - 64)) | (1 << (gcodeParser.G85 - 64)) | (1 << (gcodeParser.G86 - 64)) | (1 << (gcodeParser.G87 - 64)) | (1 << (gcodeParser.G88 - 64)) | (1 << (gcodeParser.G89 - 64)) | (1 << (gcodeParser.G90 - 64)) | (1 << (gcodeParser.G91 - 64)) | (1 << (gcodeParser.G92 - 64)) | (1 << (gcodeParser.G92_1 - 64)) | (1 << (gcodeParser.G92_2 - 64)) | (1 << (gcodeParser.G92_3 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (gcodeParser.G93 - 96)) | (1 << (gcodeParser.G94 - 96)) | (1 << (gcodeParser.G98 - 96)) | (1 << (gcodeParser.G99 - 96)) | (1 << (gcodeParser.M0 - 96)) | (1 << (gcodeParser.M1 - 96)) | (1 << (gcodeParser.M2 - 96)) | (1 << (gcodeParser.M3 - 96)) | (1 << (gcodeParser.M4 - 96)) | (1 << (gcodeParser.M5 - 96)) | (1 << (gcodeParser.M6 - 96)) | (1 << (gcodeParser.M7 - 96)) | (1 << (gcodeParser.M8 - 96)) | (1 << (gcodeParser.M9 - 96)) | (1 << (gcodeParser.M30 - 96)) | (1 << (gcodeParser.M48 - 96)) | (1 << (gcodeParser.M49 - 96)) | (1 << (gcodeParser.M60 - 96)) | (1 << (gcodeParser.M82 - 96)) | (1 << (gcodeParser.M84 - 96)) | (1 << (gcodeParser.M104 - 96)) | (1 << (gcodeParser.M105 - 96)) | (1 << (gcodeParser.M106 - 96)) | (1 << (gcodeParser.M107 - 96)) | (1 << (gcodeParser.M109 - 96)) | (1 << (gcodeParser.M140 - 96)) | (1 << (gcodeParser.M141 - 96)) | (1 << (gcodeParser.M190 - 96)) | (1 << (gcodeParser.M201 - 96)) | (1 << (gcodeParser.M203 - 96)) | (1 << (gcodeParser.M204 - 96)) | (1 << (gcodeParser.M205 - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (gcodeParser.M220 - 128)) | (1 << (gcodeParser.M221 - 128)) | (1 << (gcodeParser.LINE_NUMBER - 128)) | (1 << (gcodeParser.END_OF_LINE - 128)))) !== 0) || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (gcodeParser.HASH - 179)) | (1 << (gcodeParser.ATSIGN - 179)) | (1 << (gcodeParser.CARET - 179)) | (1 << (gcodeParser.BLOCK_DELETE - 179)))) !== 0)) {
					{
					{
					this.state = 312;
					this.line();
					}
					}
					this.state = 317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, gcodeParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gcodeParser.BLOCK_DELETE) {
				{
				this.state = 320;
				this.match(gcodeParser.BLOCK_DELETE);
				}
			}

			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gcodeParser.LINE_NUMBER) {
				{
				this.state = 323;
				this.lineNumber();
				}
			}

			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gcodeParser.T__0) | (1 << gcodeParser.T__1) | (1 << gcodeParser.T__2) | (1 << gcodeParser.T__3) | (1 << gcodeParser.T__4) | (1 << gcodeParser.T__5) | (1 << gcodeParser.T__6) | (1 << gcodeParser.T__7) | (1 << gcodeParser.T__8) | (1 << gcodeParser.T__9) | (1 << gcodeParser.T__10) | (1 << gcodeParser.T__11) | (1 << gcodeParser.T__12) | (1 << gcodeParser.T__13) | (1 << gcodeParser.T__14) | (1 << gcodeParser.T__15) | (1 << gcodeParser.T__16) | (1 << gcodeParser.T__17) | (1 << gcodeParser.T__18) | (1 << gcodeParser.T__19) | (1 << gcodeParser.T__20) | (1 << gcodeParser.T__21) | (1 << gcodeParser.T__22) | (1 << gcodeParser.T__23) | (1 << gcodeParser.T__24) | (1 << gcodeParser.T__25) | (1 << gcodeParser.T__26) | (1 << gcodeParser.T__27) | (1 << gcodeParser.T__28) | (1 << gcodeParser.T__29) | (1 << gcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (gcodeParser.T__31 - 32)) | (1 << (gcodeParser.T__32 - 32)) | (1 << (gcodeParser.T__33 - 32)) | (1 << (gcodeParser.T__34 - 32)) | (1 << (gcodeParser.T__35 - 32)) | (1 << (gcodeParser.T__36 - 32)) | (1 << (gcodeParser.T__37 - 32)) | (1 << (gcodeParser.T__38 - 32)) | (1 << (gcodeParser.T__39 - 32)) | (1 << (gcodeParser.T__40 - 32)) | (1 << (gcodeParser.T__41 - 32)) | (1 << (gcodeParser.T__42 - 32)) | (1 << (gcodeParser.MESSAGE_COMMENT - 32)) | (1 << (gcodeParser.IGNORED_COMMENT - 32)) | (1 << (gcodeParser.LINE_COMMENT - 32)) | (1 << (gcodeParser.G0 - 32)) | (1 << (gcodeParser.G1 - 32)) | (1 << (gcodeParser.G2 - 32)) | (1 << (gcodeParser.G3 - 32)) | (1 << (gcodeParser.G4 - 32)) | (1 << (gcodeParser.G10 - 32)) | (1 << (gcodeParser.G17 - 32)) | (1 << (gcodeParser.G18 - 32)) | (1 << (gcodeParser.G19 - 32)) | (1 << (gcodeParser.G20 - 32)) | (1 << (gcodeParser.G21 - 32)) | (1 << (gcodeParser.G28 - 32)) | (1 << (gcodeParser.G30 - 32)) | (1 << (gcodeParser.G38_2 - 32)) | (1 << (gcodeParser.G40 - 32)) | (1 << (gcodeParser.G41 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (gcodeParser.G42 - 64)) | (1 << (gcodeParser.G43 - 64)) | (1 << (gcodeParser.G49 - 64)) | (1 << (gcodeParser.G53 - 64)) | (1 << (gcodeParser.G54 - 64)) | (1 << (gcodeParser.G55 - 64)) | (1 << (gcodeParser.G56 - 64)) | (1 << (gcodeParser.G57 - 64)) | (1 << (gcodeParser.G58 - 64)) | (1 << (gcodeParser.G59 - 64)) | (1 << (gcodeParser.G59_1 - 64)) | (1 << (gcodeParser.G59_2 - 64)) | (1 << (gcodeParser.G59_3 - 64)) | (1 << (gcodeParser.G61 - 64)) | (1 << (gcodeParser.G61_1 - 64)) | (1 << (gcodeParser.G64 - 64)) | (1 << (gcodeParser.G80 - 64)) | (1 << (gcodeParser.G81 - 64)) | (1 << (gcodeParser.G82 - 64)) | (1 << (gcodeParser.G83 - 64)) | (1 << (gcodeParser.G84 - 64)) | (1 << (gcodeParser.G85 - 64)) | (1 << (gcodeParser.G86 - 64)) | (1 << (gcodeParser.G87 - 64)) | (1 << (gcodeParser.G88 - 64)) | (1 << (gcodeParser.G89 - 64)) | (1 << (gcodeParser.G90 - 64)) | (1 << (gcodeParser.G91 - 64)) | (1 << (gcodeParser.G92 - 64)) | (1 << (gcodeParser.G92_1 - 64)) | (1 << (gcodeParser.G92_2 - 64)) | (1 << (gcodeParser.G92_3 - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (gcodeParser.G93 - 96)) | (1 << (gcodeParser.G94 - 96)) | (1 << (gcodeParser.G98 - 96)) | (1 << (gcodeParser.G99 - 96)) | (1 << (gcodeParser.M0 - 96)) | (1 << (gcodeParser.M1 - 96)) | (1 << (gcodeParser.M2 - 96)) | (1 << (gcodeParser.M3 - 96)) | (1 << (gcodeParser.M4 - 96)) | (1 << (gcodeParser.M5 - 96)) | (1 << (gcodeParser.M6 - 96)) | (1 << (gcodeParser.M7 - 96)) | (1 << (gcodeParser.M8 - 96)) | (1 << (gcodeParser.M9 - 96)) | (1 << (gcodeParser.M30 - 96)) | (1 << (gcodeParser.M48 - 96)) | (1 << (gcodeParser.M49 - 96)) | (1 << (gcodeParser.M60 - 96)) | (1 << (gcodeParser.M82 - 96)) | (1 << (gcodeParser.M84 - 96)) | (1 << (gcodeParser.M104 - 96)) | (1 << (gcodeParser.M105 - 96)) | (1 << (gcodeParser.M106 - 96)) | (1 << (gcodeParser.M107 - 96)) | (1 << (gcodeParser.M109 - 96)) | (1 << (gcodeParser.M140 - 96)) | (1 << (gcodeParser.M141 - 96)) | (1 << (gcodeParser.M190 - 96)) | (1 << (gcodeParser.M201 - 96)) | (1 << (gcodeParser.M203 - 96)) | (1 << (gcodeParser.M204 - 96)) | (1 << (gcodeParser.M205 - 96)))) !== 0) || _la === gcodeParser.M220 || _la === gcodeParser.M221 || ((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (gcodeParser.HASH - 179)) | (1 << (gcodeParser.ATSIGN - 179)) | (1 << (gcodeParser.CARET - 179)))) !== 0)) {
				{
				{
				this.state = 326;
				this.segment();
				}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 332;
			this.endOfLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, gcodeParser.RULE_segment);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.T__1:
			case gcodeParser.T__2:
			case gcodeParser.T__3:
			case gcodeParser.T__4:
			case gcodeParser.T__5:
			case gcodeParser.T__6:
			case gcodeParser.T__7:
			case gcodeParser.T__8:
			case gcodeParser.T__9:
			case gcodeParser.T__10:
			case gcodeParser.T__11:
			case gcodeParser.T__12:
			case gcodeParser.T__13:
			case gcodeParser.T__14:
			case gcodeParser.T__15:
			case gcodeParser.T__16:
			case gcodeParser.T__17:
			case gcodeParser.T__18:
			case gcodeParser.T__19:
			case gcodeParser.T__20:
			case gcodeParser.T__21:
			case gcodeParser.T__22:
			case gcodeParser.T__23:
			case gcodeParser.T__24:
			case gcodeParser.T__25:
			case gcodeParser.T__26:
			case gcodeParser.T__27:
			case gcodeParser.T__28:
			case gcodeParser.T__29:
			case gcodeParser.T__30:
			case gcodeParser.T__31:
			case gcodeParser.T__32:
			case gcodeParser.T__33:
			case gcodeParser.T__34:
			case gcodeParser.T__35:
			case gcodeParser.T__36:
			case gcodeParser.T__37:
			case gcodeParser.T__38:
			case gcodeParser.T__39:
			case gcodeParser.T__40:
			case gcodeParser.T__41:
			case gcodeParser.T__42:
			case gcodeParser.G0:
			case gcodeParser.G1:
			case gcodeParser.G2:
			case gcodeParser.G3:
			case gcodeParser.G4:
			case gcodeParser.G10:
			case gcodeParser.G17:
			case gcodeParser.G18:
			case gcodeParser.G19:
			case gcodeParser.G20:
			case gcodeParser.G21:
			case gcodeParser.G28:
			case gcodeParser.G30:
			case gcodeParser.G38_2:
			case gcodeParser.G40:
			case gcodeParser.G41:
			case gcodeParser.G42:
			case gcodeParser.G43:
			case gcodeParser.G49:
			case gcodeParser.G53:
			case gcodeParser.G54:
			case gcodeParser.G55:
			case gcodeParser.G56:
			case gcodeParser.G57:
			case gcodeParser.G58:
			case gcodeParser.G59:
			case gcodeParser.G59_1:
			case gcodeParser.G59_2:
			case gcodeParser.G59_3:
			case gcodeParser.G61:
			case gcodeParser.G61_1:
			case gcodeParser.G64:
			case gcodeParser.G80:
			case gcodeParser.G81:
			case gcodeParser.G82:
			case gcodeParser.G83:
			case gcodeParser.G84:
			case gcodeParser.G85:
			case gcodeParser.G86:
			case gcodeParser.G87:
			case gcodeParser.G88:
			case gcodeParser.G89:
			case gcodeParser.G90:
			case gcodeParser.G91:
			case gcodeParser.G92:
			case gcodeParser.G92_1:
			case gcodeParser.G92_2:
			case gcodeParser.G92_3:
			case gcodeParser.G93:
			case gcodeParser.G94:
			case gcodeParser.G98:
			case gcodeParser.G99:
			case gcodeParser.M0:
			case gcodeParser.M1:
			case gcodeParser.M2:
			case gcodeParser.M3:
			case gcodeParser.M4:
			case gcodeParser.M5:
			case gcodeParser.M6:
			case gcodeParser.M7:
			case gcodeParser.M8:
			case gcodeParser.M9:
			case gcodeParser.M30:
			case gcodeParser.M48:
			case gcodeParser.M49:
			case gcodeParser.M60:
			case gcodeParser.M82:
			case gcodeParser.M84:
			case gcodeParser.M104:
			case gcodeParser.M105:
			case gcodeParser.M106:
			case gcodeParser.M107:
			case gcodeParser.M109:
			case gcodeParser.M140:
			case gcodeParser.M141:
			case gcodeParser.M190:
			case gcodeParser.M201:
			case gcodeParser.M203:
			case gcodeParser.M204:
			case gcodeParser.M205:
			case gcodeParser.M220:
			case gcodeParser.M221:
			case gcodeParser.ATSIGN:
			case gcodeParser.CARET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 334;
				this.word();
				}
				break;
			case gcodeParser.HASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
				this.parameterSetting();
				}
				break;
			case gcodeParser.MESSAGE_COMMENT:
			case gcodeParser.IGNORED_COMMENT:
			case gcodeParser.LINE_COMMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 336;
				this.comment();
				}
				break;
			case gcodeParser.T__0:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 337;
				this.oword_label();
				this.state = 338;
				this.oword_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, gcodeParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (gcodeParser.MESSAGE_COMMENT - 45)) | (1 << (gcodeParser.IGNORED_COMMENT - 45)) | (1 << (gcodeParser.LINE_COMMENT - 45)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterSetting(): ParameterSettingContext {
		let _localctx: ParameterSettingContext = new ParameterSettingContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, gcodeParser.RULE_parameterSetting);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.parameter();
			this.state = 345;
			this.match(gcodeParser.EQUALS);
			this.state = 346;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, gcodeParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(gcodeParser.HASH);
			this.state = 349;
			this.designator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, gcodeParser.RULE_designator);
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.match(gcodeParser.NUMBER);
				}
				break;
			case gcodeParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.match(gcodeParser.NAME);
				}
				break;
			case gcodeParser.HASH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.parameter();
				}
				break;
			case gcodeParser.LBRACKET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 354;
				this.bracketExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oword_label(): Oword_labelContext {
		let _localctx: Oword_labelContext = new Oword_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, gcodeParser.RULE_oword_label);
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.match(gcodeParser.T__0);
				this.state = 358;
				this.match(gcodeParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.match(gcodeParser.T__0);
				this.state = 360;
				this.match(gcodeParser.NAME);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 361;
				this.match(gcodeParser.T__0);
				this.state = 362;
				this.parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oword_statement(): Oword_statementContext {
		let _localctx: Oword_statementContext = new Oword_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, gcodeParser.RULE_oword_statement);
		let _la: number;
		try {
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.match(gcodeParser.SUB);
				}
				break;
			case gcodeParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(gcodeParser.RETURN);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === gcodeParser.LBRACKET) {
					{
					this.state = 367;
					this.bracketExpression();
					}
				}

				}
				break;
			case gcodeParser.ENDSUB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 370;
				this.match(gcodeParser.ENDSUB);
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === gcodeParser.LBRACKET) {
					{
					this.state = 371;
					this.bracketExpression();
					}
				}

				}
				break;
			case gcodeParser.CALL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 374;
				this.match(gcodeParser.CALL);
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === gcodeParser.LBRACKET) {
					{
					{
					this.state = 375;
					this.bracketExpression();
					}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case gcodeParser.DO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 381;
				this.match(gcodeParser.DO);
				}
				break;
			case gcodeParser.WHILE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 382;
				this.match(gcodeParser.WHILE);
				this.state = 383;
				this.bracketExpression();
				}
				break;
			case gcodeParser.IF:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 384;
				this.match(gcodeParser.IF);
				this.state = 385;
				this.bracketExpression();
				}
				break;
			case gcodeParser.ELSEIF:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 386;
				this.match(gcodeParser.ELSEIF);
				this.state = 387;
				this.bracketExpression();
				}
				break;
			case gcodeParser.ELSE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 388;
				this.match(gcodeParser.ELSE);
				}
				break;
			case gcodeParser.ENDIF:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 389;
				this.match(gcodeParser.ENDIF);
				}
				break;
			case gcodeParser.BREAK:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 390;
				this.match(gcodeParser.BREAK);
				}
				break;
			case gcodeParser.CONTINUE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 391;
				this.match(gcodeParser.CONTINUE);
				}
				break;
			case gcodeParser.ENDWHILE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 392;
				this.match(gcodeParser.ENDWHILE);
				}
				break;
			case gcodeParser.REPEAT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 393;
				this.match(gcodeParser.REPEAT);
				this.state = 394;
				this.bracketExpression();
				}
				break;
			case gcodeParser.ENDREPEAT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 395;
				this.match(gcodeParser.ENDREPEAT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, gcodeParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gcodeParser.LBRACKET) {
				{
				{
				this.state = 398;
				this.bracketExpression();
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optReturnValue(): OptReturnValueContext {
		let _localctx: OptReturnValueContext = new OptReturnValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, gcodeParser.RULE_optReturnValue);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.bracketExpression();
				}
				break;
			case gcodeParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let _localctx: WordContext = new WordContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, gcodeParser.RULE_word);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G0:
			case gcodeParser.G1:
			case gcodeParser.G2:
			case gcodeParser.G3:
			case gcodeParser.G4:
			case gcodeParser.G10:
			case gcodeParser.G17:
			case gcodeParser.G18:
			case gcodeParser.G19:
			case gcodeParser.G20:
			case gcodeParser.G21:
			case gcodeParser.G28:
			case gcodeParser.G30:
			case gcodeParser.G38_2:
			case gcodeParser.G40:
			case gcodeParser.G41:
			case gcodeParser.G42:
			case gcodeParser.G43:
			case gcodeParser.G49:
			case gcodeParser.G53:
			case gcodeParser.G54:
			case gcodeParser.G55:
			case gcodeParser.G56:
			case gcodeParser.G57:
			case gcodeParser.G58:
			case gcodeParser.G59:
			case gcodeParser.G59_1:
			case gcodeParser.G59_2:
			case gcodeParser.G59_3:
			case gcodeParser.G61:
			case gcodeParser.G61_1:
			case gcodeParser.G64:
			case gcodeParser.G80:
			case gcodeParser.G81:
			case gcodeParser.G82:
			case gcodeParser.G83:
			case gcodeParser.G84:
			case gcodeParser.G85:
			case gcodeParser.G86:
			case gcodeParser.G87:
			case gcodeParser.G88:
			case gcodeParser.G89:
			case gcodeParser.G90:
			case gcodeParser.G91:
			case gcodeParser.G92:
			case gcodeParser.G92_1:
			case gcodeParser.G92_2:
			case gcodeParser.G92_3:
			case gcodeParser.G93:
			case gcodeParser.G94:
			case gcodeParser.G98:
			case gcodeParser.G99:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.gWord();
				}
				break;
			case gcodeParser.M0:
			case gcodeParser.M1:
			case gcodeParser.M2:
			case gcodeParser.M3:
			case gcodeParser.M4:
			case gcodeParser.M5:
			case gcodeParser.M6:
			case gcodeParser.M7:
			case gcodeParser.M8:
			case gcodeParser.M9:
			case gcodeParser.M30:
			case gcodeParser.M48:
			case gcodeParser.M49:
			case gcodeParser.M60:
			case gcodeParser.M82:
			case gcodeParser.M84:
			case gcodeParser.M104:
			case gcodeParser.M105:
			case gcodeParser.M106:
			case gcodeParser.M107:
			case gcodeParser.M109:
			case gcodeParser.M140:
			case gcodeParser.M141:
			case gcodeParser.M190:
			case gcodeParser.M201:
			case gcodeParser.M203:
			case gcodeParser.M204:
			case gcodeParser.M205:
			case gcodeParser.M220:
			case gcodeParser.M221:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 409;
				this.mWord();
				}
				break;
			case gcodeParser.T__1:
			case gcodeParser.T__2:
			case gcodeParser.T__3:
			case gcodeParser.T__4:
			case gcodeParser.T__5:
			case gcodeParser.T__6:
			case gcodeParser.T__7:
			case gcodeParser.T__8:
			case gcodeParser.T__9:
			case gcodeParser.T__10:
			case gcodeParser.T__11:
			case gcodeParser.T__12:
			case gcodeParser.T__13:
			case gcodeParser.T__14:
			case gcodeParser.T__15:
			case gcodeParser.T__16:
			case gcodeParser.T__17:
			case gcodeParser.T__18:
			case gcodeParser.T__19:
			case gcodeParser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.axisWord();
				}
				break;
			case gcodeParser.T__21:
			case gcodeParser.T__22:
			case gcodeParser.T__23:
			case gcodeParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 411;
				this.dimensionWord();
				}
				break;
			case gcodeParser.T__25:
			case gcodeParser.T__26:
			case gcodeParser.T__27:
			case gcodeParser.T__28:
			case gcodeParser.T__29:
			case gcodeParser.T__30:
			case gcodeParser.T__31:
			case gcodeParser.T__32:
			case gcodeParser.T__33:
			case gcodeParser.T__34:
			case gcodeParser.T__35:
			case gcodeParser.T__36:
			case gcodeParser.T__37:
			case gcodeParser.T__38:
			case gcodeParser.T__39:
			case gcodeParser.T__40:
			case gcodeParser.T__41:
			case gcodeParser.T__42:
			case gcodeParser.ATSIGN:
			case gcodeParser.CARET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 412;
				this.wordLetter();
				this.state = 413;
				this.e();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public axisWord(): AxisWordContext {
		let _localctx: AxisWordContext = new AxisWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, gcodeParser.RULE_axisWord);
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.T__1:
			case gcodeParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.a();
				}
				break;
			case gcodeParser.T__3:
			case gcodeParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.b();
				}
				break;
			case gcodeParser.T__5:
			case gcodeParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 419;
				this.c();
				}
				break;
			case gcodeParser.T__7:
			case gcodeParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 420;
				this.i();
				}
				break;
			case gcodeParser.T__9:
			case gcodeParser.T__10:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 421;
				this.j();
				}
				break;
			case gcodeParser.T__11:
			case gcodeParser.T__12:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 422;
				this.k();
				}
				break;
			case gcodeParser.T__13:
			case gcodeParser.T__14:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 423;
				this.r();
				}
				break;
			case gcodeParser.T__15:
			case gcodeParser.T__16:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 424;
				this.x();
				}
				break;
			case gcodeParser.T__17:
			case gcodeParser.T__18:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 425;
				this.y();
				}
				break;
			case gcodeParser.T__19:
			case gcodeParser.T__20:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 426;
				this.z();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public a(): AContext {
		let _localctx: AContext = new AContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, gcodeParser.RULE_a);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__1 || _la === gcodeParser.T__2)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 430;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public b(): BContext {
		let _localctx: BContext = new BContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, gcodeParser.RULE_b);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__3 || _la === gcodeParser.T__4)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 433;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public c(): CContext {
		let _localctx: CContext = new CContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, gcodeParser.RULE_c);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__5 || _la === gcodeParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 436;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i(): IContext {
		let _localctx: IContext = new IContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, gcodeParser.RULE_i);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__7 || _la === gcodeParser.T__8)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 439;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public j(): JContext {
		let _localctx: JContext = new JContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, gcodeParser.RULE_j);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__9 || _la === gcodeParser.T__10)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 442;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public k(): KContext {
		let _localctx: KContext = new KContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, gcodeParser.RULE_k);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__11 || _la === gcodeParser.T__12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 445;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r(): RContext {
		let _localctx: RContext = new RContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, gcodeParser.RULE_r);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__13 || _la === gcodeParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 448;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public x(): XContext {
		let _localctx: XContext = new XContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, gcodeParser.RULE_x);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__15 || _la === gcodeParser.T__16)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 451;
				this.e();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public y(): YContext {
		let _localctx: YContext = new YContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, gcodeParser.RULE_y);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__17 || _la === gcodeParser.T__18)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.e();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public z(): ZContext {
		let _localctx: ZContext = new ZContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, gcodeParser.RULE_z);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__19 || _la === gcodeParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 459;
				this.e();
				}
				break;

			case 2:
				{
				this.state = 460;
				this.match(gcodeParser.LINE_COMMENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionWord(): DimensionWordContext {
		let _localctx: DimensionWordContext = new DimensionWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, gcodeParser.RULE_dimensionWord);
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.T__21:
			case gcodeParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.f();
				}
				break;
			case gcodeParser.T__23:
			case gcodeParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.ex();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f(): FContext {
		let _localctx: FContext = new FContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, gcodeParser.RULE_f);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__21 || _la === gcodeParser.T__22)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 468;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ex(): ExContext {
		let _localctx: ExContext = new ExContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, gcodeParser.RULE_ex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__23 || _la === gcodeParser.T__24)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 471;
			this.e();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d(): DContext {
		let _localctx: DContext = new DContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, gcodeParser.RULE_d);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__25 || _la === gcodeParser.T__26)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g(): GContext {
		let _localctx: GContext = new GContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, gcodeParser.RULE_g);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__27 || _la === gcodeParser.T__28)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public h(): HContext {
		let _localctx: HContext = new HContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, gcodeParser.RULE_h);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__29 || _la === gcodeParser.T__30)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public l(): LContext {
		let _localctx: LContext = new LContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, gcodeParser.RULE_l);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__31 || _la === gcodeParser.T__32)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m(): MContext {
		let _localctx: MContext = new MContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, gcodeParser.RULE_m);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__33 || _la === gcodeParser.T__34)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public p(): PContext {
		let _localctx: PContext = new PContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, gcodeParser.RULE_p);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__35 || _la === gcodeParser.T__36)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public q(): QContext {
		let _localctx: QContext = new QContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, gcodeParser.RULE_q);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__37 || _la === gcodeParser.T__38)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public s(): SContext {
		let _localctx: SContext = new SContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, gcodeParser.RULE_s);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__39 || _la === gcodeParser.T__40)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public t(): TContext {
		let _localctx: TContext = new TContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, gcodeParser.RULE_t);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			_la = this._input.LA(1);
			if (!(_la === gcodeParser.T__41 || _la === gcodeParser.T__42)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wordLetter(): WordLetterContext {
		let _localctx: WordLetterContext = new WordLetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, gcodeParser.RULE_wordLetter);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.T__25:
			case gcodeParser.T__26:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 491;
				this.d();
				}
				break;
			case gcodeParser.T__27:
			case gcodeParser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 492;
				this.g();
				}
				break;
			case gcodeParser.T__29:
			case gcodeParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 493;
				this.h();
				}
				break;
			case gcodeParser.T__31:
			case gcodeParser.T__32:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 494;
				this.l();
				}
				break;
			case gcodeParser.T__33:
			case gcodeParser.T__34:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 495;
				this.m();
				}
				break;
			case gcodeParser.T__35:
			case gcodeParser.T__36:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 496;
				this.p();
				}
				break;
			case gcodeParser.T__37:
			case gcodeParser.T__38:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 497;
				this.q();
				}
				break;
			case gcodeParser.T__39:
			case gcodeParser.T__40:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 498;
				this.s();
				}
				break;
			case gcodeParser.T__41:
			case gcodeParser.T__42:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 499;
				this.t();
				}
				break;
			case gcodeParser.ATSIGN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 500;
				this.match(gcodeParser.ATSIGN);
				}
				break;
			case gcodeParser.CARET:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 501;
				this.match(gcodeParser.CARET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gWord(): GWordContext {
		let _localctx: GWordContext = new GWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, gcodeParser.RULE_gWord);
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G4:
			case gcodeParser.G10:
			case gcodeParser.G28:
			case gcodeParser.G30:
			case gcodeParser.G53:
			case gcodeParser.G92:
			case gcodeParser.G92_1:
			case gcodeParser.G92_2:
			case gcodeParser.G92_3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.group0();
				}
				break;
			case gcodeParser.G0:
			case gcodeParser.G1:
			case gcodeParser.G2:
			case gcodeParser.G3:
			case gcodeParser.G38_2:
			case gcodeParser.G80:
			case gcodeParser.G81:
			case gcodeParser.G82:
			case gcodeParser.G83:
			case gcodeParser.G84:
			case gcodeParser.G85:
			case gcodeParser.G86:
			case gcodeParser.G87:
			case gcodeParser.G88:
			case gcodeParser.G89:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.group1();
				}
				break;
			case gcodeParser.G17:
			case gcodeParser.G18:
			case gcodeParser.G19:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 506;
				this.group2();
				}
				break;
			case gcodeParser.G90:
			case gcodeParser.G91:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 507;
				this.group3();
				}
				break;
			case gcodeParser.G93:
			case gcodeParser.G94:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 508;
				this.group5();
				}
				break;
			case gcodeParser.G20:
			case gcodeParser.G21:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 509;
				this.group6();
				}
				break;
			case gcodeParser.G40:
			case gcodeParser.G41:
			case gcodeParser.G42:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 510;
				this.group7();
				}
				break;
			case gcodeParser.G43:
			case gcodeParser.G49:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 511;
				this.group8();
				}
				break;
			case gcodeParser.G98:
			case gcodeParser.G99:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 512;
				this.group10();
				}
				break;
			case gcodeParser.G54:
			case gcodeParser.G55:
			case gcodeParser.G56:
			case gcodeParser.G57:
			case gcodeParser.G58:
			case gcodeParser.G59:
			case gcodeParser.G59_1:
			case gcodeParser.G59_2:
			case gcodeParser.G59_3:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 513;
				this.group12();
				}
				break;
			case gcodeParser.G61:
			case gcodeParser.G61_1:
			case gcodeParser.G64:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 514;
				this.group13();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group1(): Group1Context {
		let _localctx: Group1Context = new Group1Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, gcodeParser.RULE_group1);
		try {
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 517;
				this.g0();
				}
				break;
			case gcodeParser.G1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 518;
				this.g1();
				}
				break;
			case gcodeParser.G2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 519;
				this.g2();
				}
				break;
			case gcodeParser.G3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 520;
				this.g3();
				}
				break;
			case gcodeParser.G38_2:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 521;
				this.g38_2();
				}
				break;
			case gcodeParser.G80:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 522;
				this.g80();
				}
				break;
			case gcodeParser.G81:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 523;
				this.g81();
				}
				break;
			case gcodeParser.G82:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 524;
				this.g82();
				}
				break;
			case gcodeParser.G83:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 525;
				this.g83();
				}
				break;
			case gcodeParser.G84:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 526;
				this.g84();
				}
				break;
			case gcodeParser.G85:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 527;
				this.g85();
				}
				break;
			case gcodeParser.G86:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 528;
				this.g86();
				}
				break;
			case gcodeParser.G87:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 529;
				this.g87();
				}
				break;
			case gcodeParser.G88:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 530;
				this.g88();
				}
				break;
			case gcodeParser.G89:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 531;
				this.g89();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group2(): Group2Context {
		let _localctx: Group2Context = new Group2Context(this._ctx, this.state);
		this.enterRule(_localctx, 76, gcodeParser.RULE_group2);
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G17:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 534;
				this.g17();
				}
				break;
			case gcodeParser.G18:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this.g18();
				}
				break;
			case gcodeParser.G19:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 536;
				this.g19();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group3(): Group3Context {
		let _localctx: Group3Context = new Group3Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, gcodeParser.RULE_group3);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G90:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.g90();
				}
				break;
			case gcodeParser.G91:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.g91();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group5(): Group5Context {
		let _localctx: Group5Context = new Group5Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, gcodeParser.RULE_group5);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G93:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.g93();
				}
				break;
			case gcodeParser.G94:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.g94();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group6(): Group6Context {
		let _localctx: Group6Context = new Group6Context(this._ctx, this.state);
		this.enterRule(_localctx, 82, gcodeParser.RULE_group6);
		try {
			this.state = 549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G20:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this.g20();
				}
				break;
			case gcodeParser.G21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 548;
				this.g21();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group7(): Group7Context {
		let _localctx: Group7Context = new Group7Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, gcodeParser.RULE_group7);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G40:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 551;
				this.g40();
				}
				break;
			case gcodeParser.G41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this.g41();
				}
				break;
			case gcodeParser.G42:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 553;
				this.g42();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group8(): Group8Context {
		let _localctx: Group8Context = new Group8Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, gcodeParser.RULE_group8);
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 556;
				this.g43();
				}
				break;
			case gcodeParser.G49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.g49();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group10(): Group10Context {
		let _localctx: Group10Context = new Group10Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, gcodeParser.RULE_group10);
		try {
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G98:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 560;
				this.g98();
				}
				break;
			case gcodeParser.G99:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 561;
				this.g99();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group12(): Group12Context {
		let _localctx: Group12Context = new Group12Context(this._ctx, this.state);
		this.enterRule(_localctx, 90, gcodeParser.RULE_group12);
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G54:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 564;
				this.g54();
				}
				break;
			case gcodeParser.G55:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 565;
				this.g55();
				}
				break;
			case gcodeParser.G56:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 566;
				this.g56();
				}
				break;
			case gcodeParser.G57:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 567;
				this.g57();
				}
				break;
			case gcodeParser.G58:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 568;
				this.g58();
				}
				break;
			case gcodeParser.G59:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 569;
				this.g59();
				}
				break;
			case gcodeParser.G59_1:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 570;
				this.g59_1();
				}
				break;
			case gcodeParser.G59_2:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 571;
				this.g59_2();
				}
				break;
			case gcodeParser.G59_3:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 572;
				this.g59_3();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group13(): Group13Context {
		let _localctx: Group13Context = new Group13Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, gcodeParser.RULE_group13);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this.g61();
				}
				break;
			case gcodeParser.G61_1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 576;
				this.g61_1();
				}
				break;
			case gcodeParser.G64:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 577;
				this.g64();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group0(): Group0Context {
		let _localctx: Group0Context = new Group0Context(this._ctx, this.state);
		this.enterRule(_localctx, 94, gcodeParser.RULE_group0);
		try {
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.G4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.g4();
				}
				break;
			case gcodeParser.G10:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.g10();
				}
				break;
			case gcodeParser.G28:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 582;
				this.g28();
				}
				break;
			case gcodeParser.G30:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 583;
				this.g30();
				}
				break;
			case gcodeParser.G53:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 584;
				this.g53();
				}
				break;
			case gcodeParser.G92:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 585;
				this.g92();
				}
				break;
			case gcodeParser.G92_1:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 586;
				this.g92_1();
				}
				break;
			case gcodeParser.G92_2:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 587;
				this.g92_2();
				}
				break;
			case gcodeParser.G92_3:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 588;
				this.g92_3();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g0(): G0Context {
		let _localctx: G0Context = new G0Context(this._ctx, this.state);
		this.enterRule(_localctx, 96, gcodeParser.RULE_g0);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(gcodeParser.G0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g1(): G1Context {
		let _localctx: G1Context = new G1Context(this._ctx, this.state);
		this.enterRule(_localctx, 98, gcodeParser.RULE_g1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(gcodeParser.G1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g2(): G2Context {
		let _localctx: G2Context = new G2Context(this._ctx, this.state);
		this.enterRule(_localctx, 100, gcodeParser.RULE_g2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(gcodeParser.G2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g3(): G3Context {
		let _localctx: G3Context = new G3Context(this._ctx, this.state);
		this.enterRule(_localctx, 102, gcodeParser.RULE_g3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(gcodeParser.G3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g4(): G4Context {
		let _localctx: G4Context = new G4Context(this._ctx, this.state);
		this.enterRule(_localctx, 104, gcodeParser.RULE_g4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(gcodeParser.G4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g10(): G10Context {
		let _localctx: G10Context = new G10Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, gcodeParser.RULE_g10);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(gcodeParser.G10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g17(): G17Context {
		let _localctx: G17Context = new G17Context(this._ctx, this.state);
		this.enterRule(_localctx, 108, gcodeParser.RULE_g17);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(gcodeParser.G17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g18(): G18Context {
		let _localctx: G18Context = new G18Context(this._ctx, this.state);
		this.enterRule(_localctx, 110, gcodeParser.RULE_g18);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.match(gcodeParser.G18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g19(): G19Context {
		let _localctx: G19Context = new G19Context(this._ctx, this.state);
		this.enterRule(_localctx, 112, gcodeParser.RULE_g19);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(gcodeParser.G19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g20(): G20Context {
		let _localctx: G20Context = new G20Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, gcodeParser.RULE_g20);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.match(gcodeParser.G20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g21(): G21Context {
		let _localctx: G21Context = new G21Context(this._ctx, this.state);
		this.enterRule(_localctx, 116, gcodeParser.RULE_g21);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.match(gcodeParser.G21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g28(): G28Context {
		let _localctx: G28Context = new G28Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, gcodeParser.RULE_g28);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(gcodeParser.G28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g30(): G30Context {
		let _localctx: G30Context = new G30Context(this._ctx, this.state);
		this.enterRule(_localctx, 120, gcodeParser.RULE_g30);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.match(gcodeParser.G30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g38_2(): G38_2Context {
		let _localctx: G38_2Context = new G38_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 122, gcodeParser.RULE_g38_2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(gcodeParser.G38_2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g40(): G40Context {
		let _localctx: G40Context = new G40Context(this._ctx, this.state);
		this.enterRule(_localctx, 124, gcodeParser.RULE_g40);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(gcodeParser.G40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g41(): G41Context {
		let _localctx: G41Context = new G41Context(this._ctx, this.state);
		this.enterRule(_localctx, 126, gcodeParser.RULE_g41);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(gcodeParser.G41);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g42(): G42Context {
		let _localctx: G42Context = new G42Context(this._ctx, this.state);
		this.enterRule(_localctx, 128, gcodeParser.RULE_g42);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(gcodeParser.G42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g43(): G43Context {
		let _localctx: G43Context = new G43Context(this._ctx, this.state);
		this.enterRule(_localctx, 130, gcodeParser.RULE_g43);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this.match(gcodeParser.G43);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g49(): G49Context {
		let _localctx: G49Context = new G49Context(this._ctx, this.state);
		this.enterRule(_localctx, 132, gcodeParser.RULE_g49);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.match(gcodeParser.G49);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g53(): G53Context {
		let _localctx: G53Context = new G53Context(this._ctx, this.state);
		this.enterRule(_localctx, 134, gcodeParser.RULE_g53);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(gcodeParser.G53);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g54(): G54Context {
		let _localctx: G54Context = new G54Context(this._ctx, this.state);
		this.enterRule(_localctx, 136, gcodeParser.RULE_g54);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(gcodeParser.G54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g55(): G55Context {
		let _localctx: G55Context = new G55Context(this._ctx, this.state);
		this.enterRule(_localctx, 138, gcodeParser.RULE_g55);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.match(gcodeParser.G55);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g56(): G56Context {
		let _localctx: G56Context = new G56Context(this._ctx, this.state);
		this.enterRule(_localctx, 140, gcodeParser.RULE_g56);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(gcodeParser.G56);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g57(): G57Context {
		let _localctx: G57Context = new G57Context(this._ctx, this.state);
		this.enterRule(_localctx, 142, gcodeParser.RULE_g57);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.match(gcodeParser.G57);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g58(): G58Context {
		let _localctx: G58Context = new G58Context(this._ctx, this.state);
		this.enterRule(_localctx, 144, gcodeParser.RULE_g58);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this.match(gcodeParser.G58);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g59(): G59Context {
		let _localctx: G59Context = new G59Context(this._ctx, this.state);
		this.enterRule(_localctx, 146, gcodeParser.RULE_g59);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(gcodeParser.G59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g59_1(): G59_1Context {
		let _localctx: G59_1Context = new G59_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 148, gcodeParser.RULE_g59_1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.match(gcodeParser.G59_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g59_2(): G59_2Context {
		let _localctx: G59_2Context = new G59_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 150, gcodeParser.RULE_g59_2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(gcodeParser.G59_2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g59_3(): G59_3Context {
		let _localctx: G59_3Context = new G59_3Context(this._ctx, this.state);
		this.enterRule(_localctx, 152, gcodeParser.RULE_g59_3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(gcodeParser.G59_3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g61(): G61Context {
		let _localctx: G61Context = new G61Context(this._ctx, this.state);
		this.enterRule(_localctx, 154, gcodeParser.RULE_g61);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.match(gcodeParser.G61);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g61_1(): G61_1Context {
		let _localctx: G61_1Context = new G61_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 156, gcodeParser.RULE_g61_1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(gcodeParser.G61_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g64(): G64Context {
		let _localctx: G64Context = new G64Context(this._ctx, this.state);
		this.enterRule(_localctx, 158, gcodeParser.RULE_g64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(gcodeParser.G64);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g80(): G80Context {
		let _localctx: G80Context = new G80Context(this._ctx, this.state);
		this.enterRule(_localctx, 160, gcodeParser.RULE_g80);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.match(gcodeParser.G80);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g81(): G81Context {
		let _localctx: G81Context = new G81Context(this._ctx, this.state);
		this.enterRule(_localctx, 162, gcodeParser.RULE_g81);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(gcodeParser.G81);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g82(): G82Context {
		let _localctx: G82Context = new G82Context(this._ctx, this.state);
		this.enterRule(_localctx, 164, gcodeParser.RULE_g82);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.match(gcodeParser.G82);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g83(): G83Context {
		let _localctx: G83Context = new G83Context(this._ctx, this.state);
		this.enterRule(_localctx, 166, gcodeParser.RULE_g83);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(gcodeParser.G83);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g84(): G84Context {
		let _localctx: G84Context = new G84Context(this._ctx, this.state);
		this.enterRule(_localctx, 168, gcodeParser.RULE_g84);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(gcodeParser.G84);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g85(): G85Context {
		let _localctx: G85Context = new G85Context(this._ctx, this.state);
		this.enterRule(_localctx, 170, gcodeParser.RULE_g85);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(gcodeParser.G85);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g86(): G86Context {
		let _localctx: G86Context = new G86Context(this._ctx, this.state);
		this.enterRule(_localctx, 172, gcodeParser.RULE_g86);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(gcodeParser.G86);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g87(): G87Context {
		let _localctx: G87Context = new G87Context(this._ctx, this.state);
		this.enterRule(_localctx, 174, gcodeParser.RULE_g87);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(gcodeParser.G87);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g88(): G88Context {
		let _localctx: G88Context = new G88Context(this._ctx, this.state);
		this.enterRule(_localctx, 176, gcodeParser.RULE_g88);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(gcodeParser.G88);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g89(): G89Context {
		let _localctx: G89Context = new G89Context(this._ctx, this.state);
		this.enterRule(_localctx, 178, gcodeParser.RULE_g89);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			this.match(gcodeParser.G89);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g90(): G90Context {
		let _localctx: G90Context = new G90Context(this._ctx, this.state);
		this.enterRule(_localctx, 180, gcodeParser.RULE_g90);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.match(gcodeParser.G90);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g91(): G91Context {
		let _localctx: G91Context = new G91Context(this._ctx, this.state);
		this.enterRule(_localctx, 182, gcodeParser.RULE_g91);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(gcodeParser.G91);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g92(): G92Context {
		let _localctx: G92Context = new G92Context(this._ctx, this.state);
		this.enterRule(_localctx, 184, gcodeParser.RULE_g92);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.match(gcodeParser.G92);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g92_1(): G92_1Context {
		let _localctx: G92_1Context = new G92_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 186, gcodeParser.RULE_g92_1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(gcodeParser.G92_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g92_2(): G92_2Context {
		let _localctx: G92_2Context = new G92_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 188, gcodeParser.RULE_g92_2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(gcodeParser.G92_2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g92_3(): G92_3Context {
		let _localctx: G92_3Context = new G92_3Context(this._ctx, this.state);
		this.enterRule(_localctx, 190, gcodeParser.RULE_g92_3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(gcodeParser.G92_3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g93(): G93Context {
		let _localctx: G93Context = new G93Context(this._ctx, this.state);
		this.enterRule(_localctx, 192, gcodeParser.RULE_g93);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(gcodeParser.G93);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g94(): G94Context {
		let _localctx: G94Context = new G94Context(this._ctx, this.state);
		this.enterRule(_localctx, 194, gcodeParser.RULE_g94);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(gcodeParser.G94);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g98(): G98Context {
		let _localctx: G98Context = new G98Context(this._ctx, this.state);
		this.enterRule(_localctx, 196, gcodeParser.RULE_g98);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(gcodeParser.G98);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public g99(): G99Context {
		let _localctx: G99Context = new G99Context(this._ctx, this.state);
		this.enterRule(_localctx, 198, gcodeParser.RULE_g99);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(gcodeParser.G99);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mWord(): MWordContext {
		let _localctx: MWordContext = new MWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, gcodeParser.RULE_mWord);
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M0:
			case gcodeParser.M1:
			case gcodeParser.M2:
			case gcodeParser.M30:
			case gcodeParser.M60:
			case gcodeParser.M84:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 695;
				this.mgroup4();
				}
				break;
			case gcodeParser.M6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.mgroup6();
				}
				break;
			case gcodeParser.M3:
			case gcodeParser.M4:
			case gcodeParser.M5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 697;
				this.mgroup7();
				}
				break;
			case gcodeParser.M7:
			case gcodeParser.M8:
			case gcodeParser.M9:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 698;
				this.mgroup8();
				}
				break;
			case gcodeParser.M48:
			case gcodeParser.M49:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 699;
				this.mgroup9();
				}
				break;
			case gcodeParser.M82:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 700;
				this.mgroup10();
				}
				break;
			case gcodeParser.M201:
			case gcodeParser.M203:
			case gcodeParser.M204:
			case gcodeParser.M205:
			case gcodeParser.M220:
			case gcodeParser.M221:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 701;
				this.mgroup11();
				}
				break;
			case gcodeParser.M104:
			case gcodeParser.M105:
			case gcodeParser.M106:
			case gcodeParser.M107:
			case gcodeParser.M109:
			case gcodeParser.M140:
			case gcodeParser.M141:
			case gcodeParser.M190:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 702;
				this.mgroup12();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup4(): Mgroup4Context {
		let _localctx: Mgroup4Context = new Mgroup4Context(this._ctx, this.state);
		this.enterRule(_localctx, 202, gcodeParser.RULE_mgroup4);
		try {
			this.state = 711;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.m0();
				}
				break;
			case gcodeParser.M1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.m1();
				}
				break;
			case gcodeParser.M2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.m2();
				}
				break;
			case gcodeParser.M30:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 708;
				this.m30();
				}
				break;
			case gcodeParser.M60:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 709;
				this.m60();
				}
				break;
			case gcodeParser.M84:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 710;
				this.m84();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup6(): Mgroup6Context {
		let _localctx: Mgroup6Context = new Mgroup6Context(this._ctx, this.state);
		this.enterRule(_localctx, 204, gcodeParser.RULE_mgroup6);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.m6();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup7(): Mgroup7Context {
		let _localctx: Mgroup7Context = new Mgroup7Context(this._ctx, this.state);
		this.enterRule(_localctx, 206, gcodeParser.RULE_mgroup7);
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 715;
				this.m3();
				}
				break;
			case gcodeParser.M4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 716;
				this.m4();
				}
				break;
			case gcodeParser.M5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 717;
				this.m5();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup8(): Mgroup8Context {
		let _localctx: Mgroup8Context = new Mgroup8Context(this._ctx, this.state);
		this.enterRule(_localctx, 208, gcodeParser.RULE_mgroup8);
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
				this.m7();
				}
				break;
			case gcodeParser.M8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this.m8();
				}
				break;
			case gcodeParser.M9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 722;
				this.m9();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup9(): Mgroup9Context {
		let _localctx: Mgroup9Context = new Mgroup9Context(this._ctx, this.state);
		this.enterRule(_localctx, 210, gcodeParser.RULE_mgroup9);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M48:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.m48();
				}
				break;
			case gcodeParser.M49:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 726;
				this.m49();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup10(): Mgroup10Context {
		let _localctx: Mgroup10Context = new Mgroup10Context(this._ctx, this.state);
		this.enterRule(_localctx, 212, gcodeParser.RULE_mgroup10);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.m82();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup11(): Mgroup11Context {
		let _localctx: Mgroup11Context = new Mgroup11Context(this._ctx, this.state);
		this.enterRule(_localctx, 214, gcodeParser.RULE_mgroup11);
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M201:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 731;
				this.m201();
				}
				break;
			case gcodeParser.M203:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 732;
				this.m203();
				}
				break;
			case gcodeParser.M204:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 733;
				this.m204();
				}
				break;
			case gcodeParser.M205:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 734;
				this.m205();
				}
				break;
			case gcodeParser.M220:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 735;
				this.m220();
				}
				break;
			case gcodeParser.M221:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 736;
				this.m221();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mgroup12(): Mgroup12Context {
		let _localctx: Mgroup12Context = new Mgroup12Context(this._ctx, this.state);
		this.enterRule(_localctx, 216, gcodeParser.RULE_mgroup12);
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.M104:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 739;
				this.m104();
				}
				break;
			case gcodeParser.M105:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 740;
				this.m105();
				}
				break;
			case gcodeParser.M106:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 741;
				this.m106();
				}
				break;
			case gcodeParser.M107:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 742;
				this.m107();
				}
				break;
			case gcodeParser.M109:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 743;
				this.m109();
				}
				break;
			case gcodeParser.M140:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 744;
				this.m140();
				}
				break;
			case gcodeParser.M141:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 745;
				this.m141();
				}
				break;
			case gcodeParser.M190:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 746;
				this.m190();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m0(): M0Context {
		let _localctx: M0Context = new M0Context(this._ctx, this.state);
		this.enterRule(_localctx, 218, gcodeParser.RULE_m0);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.match(gcodeParser.M0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m1(): M1Context {
		let _localctx: M1Context = new M1Context(this._ctx, this.state);
		this.enterRule(_localctx, 220, gcodeParser.RULE_m1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(gcodeParser.M1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m2(): M2Context {
		let _localctx: M2Context = new M2Context(this._ctx, this.state);
		this.enterRule(_localctx, 222, gcodeParser.RULE_m2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(gcodeParser.M2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m3(): M3Context {
		let _localctx: M3Context = new M3Context(this._ctx, this.state);
		this.enterRule(_localctx, 224, gcodeParser.RULE_m3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.match(gcodeParser.M3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m4(): M4Context {
		let _localctx: M4Context = new M4Context(this._ctx, this.state);
		this.enterRule(_localctx, 226, gcodeParser.RULE_m4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(gcodeParser.M4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m5(): M5Context {
		let _localctx: M5Context = new M5Context(this._ctx, this.state);
		this.enterRule(_localctx, 228, gcodeParser.RULE_m5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(gcodeParser.M5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m6(): M6Context {
		let _localctx: M6Context = new M6Context(this._ctx, this.state);
		this.enterRule(_localctx, 230, gcodeParser.RULE_m6);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(gcodeParser.M6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m7(): M7Context {
		let _localctx: M7Context = new M7Context(this._ctx, this.state);
		this.enterRule(_localctx, 232, gcodeParser.RULE_m7);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(gcodeParser.M7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m8(): M8Context {
		let _localctx: M8Context = new M8Context(this._ctx, this.state);
		this.enterRule(_localctx, 234, gcodeParser.RULE_m8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(gcodeParser.M8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m9(): M9Context {
		let _localctx: M9Context = new M9Context(this._ctx, this.state);
		this.enterRule(_localctx, 236, gcodeParser.RULE_m9);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(gcodeParser.M9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m30(): M30Context {
		let _localctx: M30Context = new M30Context(this._ctx, this.state);
		this.enterRule(_localctx, 238, gcodeParser.RULE_m30);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(gcodeParser.M30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m48(): M48Context {
		let _localctx: M48Context = new M48Context(this._ctx, this.state);
		this.enterRule(_localctx, 240, gcodeParser.RULE_m48);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(gcodeParser.M48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m49(): M49Context {
		let _localctx: M49Context = new M49Context(this._ctx, this.state);
		this.enterRule(_localctx, 242, gcodeParser.RULE_m49);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(gcodeParser.M49);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m60(): M60Context {
		let _localctx: M60Context = new M60Context(this._ctx, this.state);
		this.enterRule(_localctx, 244, gcodeParser.RULE_m60);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(gcodeParser.M60);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m82(): M82Context {
		let _localctx: M82Context = new M82Context(this._ctx, this.state);
		this.enterRule(_localctx, 246, gcodeParser.RULE_m82);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.match(gcodeParser.M82);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m84(): M84Context {
		let _localctx: M84Context = new M84Context(this._ctx, this.state);
		this.enterRule(_localctx, 248, gcodeParser.RULE_m84);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(gcodeParser.M84);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m104(): M104Context {
		let _localctx: M104Context = new M104Context(this._ctx, this.state);
		this.enterRule(_localctx, 250, gcodeParser.RULE_m104);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.match(gcodeParser.M104);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m105(): M105Context {
		let _localctx: M105Context = new M105Context(this._ctx, this.state);
		this.enterRule(_localctx, 252, gcodeParser.RULE_m105);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(gcodeParser.M105);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m106(): M106Context {
		let _localctx: M106Context = new M106Context(this._ctx, this.state);
		this.enterRule(_localctx, 254, gcodeParser.RULE_m106);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(gcodeParser.M106);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m107(): M107Context {
		let _localctx: M107Context = new M107Context(this._ctx, this.state);
		this.enterRule(_localctx, 256, gcodeParser.RULE_m107);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.match(gcodeParser.M107);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m109(): M109Context {
		let _localctx: M109Context = new M109Context(this._ctx, this.state);
		this.enterRule(_localctx, 258, gcodeParser.RULE_m109);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(gcodeParser.M109);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m140(): M140Context {
		let _localctx: M140Context = new M140Context(this._ctx, this.state);
		this.enterRule(_localctx, 260, gcodeParser.RULE_m140);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.match(gcodeParser.M140);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m141(): M141Context {
		let _localctx: M141Context = new M141Context(this._ctx, this.state);
		this.enterRule(_localctx, 262, gcodeParser.RULE_m141);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(gcodeParser.M141);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m190(): M190Context {
		let _localctx: M190Context = new M190Context(this._ctx, this.state);
		this.enterRule(_localctx, 264, gcodeParser.RULE_m190);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(gcodeParser.M190);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m201(): M201Context {
		let _localctx: M201Context = new M201Context(this._ctx, this.state);
		this.enterRule(_localctx, 266, gcodeParser.RULE_m201);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(gcodeParser.M201);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m203(): M203Context {
		let _localctx: M203Context = new M203Context(this._ctx, this.state);
		this.enterRule(_localctx, 268, gcodeParser.RULE_m203);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(gcodeParser.M203);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m204(): M204Context {
		let _localctx: M204Context = new M204Context(this._ctx, this.state);
		this.enterRule(_localctx, 270, gcodeParser.RULE_m204);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(gcodeParser.M204);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m205(): M205Context {
		let _localctx: M205Context = new M205Context(this._ctx, this.state);
		this.enterRule(_localctx, 272, gcodeParser.RULE_m205);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(gcodeParser.M205);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m220(): M220Context {
		let _localctx: M220Context = new M220Context(this._ctx, this.state);
		this.enterRule(_localctx, 274, gcodeParser.RULE_m220);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(gcodeParser.M220);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m221(): M221Context {
		let _localctx: M221Context = new M221Context(this._ctx, this.state);
		this.enterRule(_localctx, 276, gcodeParser.RULE_m221);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(gcodeParser.M221);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public e(): EContext {
		let _localctx: EContext = new EContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, gcodeParser.RULE_e);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			_localctx._logicalExpression = this.logicalExpression();
			 _localctx.v =  _localctx._logicalExpression.v; 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalExpression(): LogicalExpressionContext {
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, gcodeParser.RULE_logicalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			_localctx._comparisonExpression = this.comparisonExpression();
			 _localctx.v =  _localctx._comparisonExpression.v;
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (gcodeParser.AND - 157)) | (1 << (gcodeParser.OR - 157)) | (1 << (gcodeParser.XOR - 157)))) !== 0)) {
				{
				this.state = 820;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case gcodeParser.OR:
					{
					{
					this.state = 814;
					this.match(gcodeParser.OR);
					this.state = 815;
					_localctx._comparisonExpression = this.comparisonExpression();
					}
					}
					break;
				case gcodeParser.XOR:
					{
					{
					this.state = 816;
					this.match(gcodeParser.XOR);
					this.state = 817;
					_localctx._comparisonExpression = this.comparisonExpression();
					}
					}
					break;
				case gcodeParser.AND:
					{
					{
					this.state = 818;
					this.match(gcodeParser.AND);
					this.state = 819;
					_localctx._comparisonExpression = this.comparisonExpression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let _localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, gcodeParser.RULE_comparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			_localctx._plusMinExpression = this.plusMinExpression();
			 _localctx.v =  _localctx._plusMinExpression.v;
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & ((1 << (gcodeParser.EQ - 168)) | (1 << (gcodeParser.NE - 168)) | (1 << (gcodeParser.GT - 168)) | (1 << (gcodeParser.GE - 168)) | (1 << (gcodeParser.LT - 168)) | (1 << (gcodeParser.LE - 168)))) !== 0)) {
				{
				this.state = 839;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case gcodeParser.EQ:
					{
					{
					this.state = 827;
					this.match(gcodeParser.EQ);
					this.state = 828;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				case gcodeParser.NE:
					{
					{
					this.state = 829;
					this.match(gcodeParser.NE);
					this.state = 830;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				case gcodeParser.GT:
					{
					{
					this.state = 831;
					this.match(gcodeParser.GT);
					this.state = 832;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				case gcodeParser.GE:
					{
					{
					this.state = 833;
					this.match(gcodeParser.GE);
					this.state = 834;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				case gcodeParser.LT:
					{
					{
					this.state = 835;
					this.match(gcodeParser.LT);
					this.state = 836;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				case gcodeParser.LE:
					{
					{
					this.state = 837;
					this.match(gcodeParser.LE);
					this.state = 838;
					_localctx._plusMinExpression = this.plusMinExpression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public plusMinExpression(): PlusMinExpressionContext {
		let _localctx: PlusMinExpressionContext = new PlusMinExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, gcodeParser.RULE_plusMinExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			_localctx._aggregateExpression = this.aggregateExpression();
			 _localctx.v =  _localctx._aggregateExpression.v;
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === gcodeParser.PLUS || _la === gcodeParser.MINUS) {
				{
				this.state = 850;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case gcodeParser.PLUS:
					{
					{
					this.state = 846;
					this.match(gcodeParser.PLUS);
					this.state = 847;
					_localctx._aggregateExpression = this.aggregateExpression();
					}
					}
					break;
				case gcodeParser.MINUS:
					{
					{
					this.state = 848;
					this.match(gcodeParser.MINUS);
					this.state = 849;
					_localctx._aggregateExpression = this.aggregateExpression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateExpression(): AggregateExpressionContext {
		let _localctx: AggregateExpressionContext = new AggregateExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, gcodeParser.RULE_aggregateExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			_localctx._powerExpression = this.powerExpression();
			 _localctx.v =  _localctx._powerExpression.v;
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (gcodeParser.MOD - 163)) | (1 << (gcodeParser.TIMES - 163)) | (1 << (gcodeParser.SLASH - 163)))) !== 0)) {
				{
				this.state = 863;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case gcodeParser.TIMES:
					{
					{
					this.state = 857;
					this.match(gcodeParser.TIMES);
					this.state = 858;
					_localctx._powerExpression = this.powerExpression();
					}
					}
					break;
				case gcodeParser.SLASH:
					{
					{
					this.state = 859;
					this.match(gcodeParser.SLASH);
					this.state = 860;
					_localctx._powerExpression = this.powerExpression();
					}
					}
					break;
				case gcodeParser.MOD:
					{
					{
					this.state = 861;
					this.match(gcodeParser.MOD);
					this.state = 862;
					_localctx._powerExpression = this.powerExpression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public powerExpression(): PowerExpressionContext {
		let _localctx: PowerExpressionContext = new PowerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, gcodeParser.RULE_powerExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			_localctx._unaryExpression = this.unaryExpression();
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gcodeParser.POWER) {
				{
				this.state = 869;
				this.match(gcodeParser.POWER);
				this.state = 870;
				_localctx._powerExpression = this.powerExpression();
				}
			}

			 if(_localctx._powerExpression==null) { _localctx.v =  _localctx._unaryExpression.v; } else { _localctx.v =  Math.pow(_localctx._unaryExpression.v, _localctx._powerExpression.v); }
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, gcodeParser.RULE_unaryExpression);
		try {
			this.state = 932;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 875;
				this.match(gcodeParser.ACOS);
				this.state = 876;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.cos(_localctx._bracketExpression.v);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 879;
				this.match(gcodeParser.ASIN);
				this.state = 880;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.asin(_localctx._bracketExpression.v);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 883;
				this.match(gcodeParser.COS);
				this.state = 884;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.cos(_localctx._bracketExpression.v);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 887;
				this.match(gcodeParser.SIN);
				this.state = 888;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.sin(_localctx._bracketExpression.v);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 891;
				this.match(gcodeParser.TAN);
				this.state = 892;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.tan(_localctx._bracketExpression.v);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 895;
				this.match(gcodeParser.LN);
				this.state = 896;
				this.bracketExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 897;
				this.match(gcodeParser.EXP);
				this.state = 898;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.exp(_localctx._bracketExpression.v);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 901;
				this.match(gcodeParser.SQRT);
				this.state = 902;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.pow(_localctx._bracketExpression.v,0.5);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 905;
				this.match(gcodeParser.FIX);
				this.state = 906;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.floor(_localctx._bracketExpression.v);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 909;
				this.match(gcodeParser.FUP);
				this.state = 910;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.ceil(_localctx._bracketExpression.v);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 913;
				this.match(gcodeParser.ROUND);
				this.state = 914;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.cos(_localctx._bracketExpression.v);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 917;
				this.match(gcodeParser.ABS);
				this.state = 918;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  Math.abs(_localctx._bracketExpression.v);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 921;
				this.match(gcodeParser.EXISTS);
				this.state = 922;
				this.bracketExpression();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 923;
				this.match(gcodeParser.ATAN);
				this.state = 924;
				this.bracketExpression();
				this.state = 925;
				this.match(gcodeParser.SLASH);
				this.state = 926;
				this.bracketExpression();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 928;
				this.parameter();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 929;
				_localctx._primitiveExpression = this.primitiveExpression();
				 _localctx.v =  _localctx._primitiveExpression.v;
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracketExpression(): BracketExpressionContext {
		let _localctx: BracketExpressionContext = new BracketExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, gcodeParser.RULE_bracketExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this.match(gcodeParser.LBRACKET);
			this.state = 935;
			_localctx._e = this.e();
			this.state = 936;
			this.match(gcodeParser.RBRACKET);
			 _localctx.v =  _localctx._e.v; 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveExpression(): PrimitiveExpressionContext {
		let _localctx: PrimitiveExpressionContext = new PrimitiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, gcodeParser.RULE_primitiveExpression);
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.LBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 939;
				_localctx._bracketExpression = this.bracketExpression();
				 _localctx.v =  _localctx._bracketExpression.v; 
				}
				break;
			case gcodeParser.HASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.parameter();
				}
				break;
			case gcodeParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 943;
				_localctx._NUMBER = this.match(gcodeParser.NUMBER);
				 _localctx.v =  Number.parseFloat((_localctx._NUMBER != null ? _localctx._NUMBER.text : undefined)); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineNumber(): LineNumberContext {
		let _localctx: LineNumberContext = new LineNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, gcodeParser.RULE_lineNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(gcodeParser.LINE_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endOfLine(): EndOfLineContext {
		let _localctx: EndOfLineContext = new EndOfLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, gcodeParser.RULE_endOfLine);
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gcodeParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.match(gcodeParser.T__43);
				this.state = 950;
				this.match(gcodeParser.END_OF_LINE);
				}
				break;
			case gcodeParser.END_OF_LINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 951;
				this.match(gcodeParser.END_OF_LINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xBF\u03BD\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x03\x02\x03\x02\x03\x02\x07\x02\u0132\n\x02" +
		"\f\x02\x0E\x02\u0135\v\x02\x03\x02\x03\x02\x05\x02\u0139\n\x02\x03\x02" +
		"\x07\x02\u013C\n\x02\f\x02\x0E\x02\u013F\v\x02\x05\x02\u0141\n\x02\x03" +
		"\x03\x05\x03\u0144\n\x03\x03\x03\x05\x03\u0147\n\x03\x03\x03\x07\x03\u014A" +
		"\n\x03\f\x03\x0E\x03\u014D\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\u0157\n\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\u0166\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u016E\n\t\x03\n" +
		"\x03\n\x03\n\x05\n\u0173\n\n\x03\n\x03\n\x05\n\u0177\n\n\x03\n\x03\n\x07" +
		"\n\u017B\n\n\f\n\x0E\n\u017E\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u018F\n\n\x03" +
		"\v\x07\v\u0192\n\v\f\v\x0E\v\u0195\v\v\x03\f\x03\f\x05\f\u0199\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01A2\n\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u01AE\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u01C7\n\x16" +
		"\x03\x17\x03\x17\x05\x17\u01CB\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u01D0" +
		"\n\x18\x03\x19\x03\x19\x05\x19\u01D4\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%" +
		"\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01F9\n%\x03&" +
		"\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0206\n&\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u0217\n\'\x03(\x03(\x03(\x05(\u021C\n(\x03)\x03)" +
		"\x05)\u0220\n)\x03*\x03*\x05*\u0224\n*\x03+\x03+\x05+\u0228\n+\x03,\x03" +
		",\x03,\x05,\u022D\n,\x03-\x03-\x05-\u0231\n-\x03.\x03.\x05.\u0235\n.\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0240\n/\x030\x030\x03" +
		"0\x050\u0245\n0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x051\u0250" +
		"\n1\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x038\x03" +
		"8\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03" +
		"?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03" +
		"F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03" +
		"M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03" +
		"T\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03" +
		"[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03" +
		"b\x03c\x03c\x03d\x03d\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x05f\u02C2\nf\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u02CA\ng\x03h\x03h" +
		"\x03i\x03i\x03i\x05i\u02D1\ni\x03j\x03j\x03j\x05j\u02D6\nj\x03k\x03k\x05" +
		"k\u02DA\nk\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x05m\u02E4\nm\x03n" +
		"\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x05n\u02EE\nn\x03o\x03o\x03p\x03p" +
		"\x03q\x03q\x03r\x03r\x03s\x03s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03" +
		"w\x03x\x03x\x03y\x03y\x03z\x03z\x03{\x03{\x03|\x03|\x03}\x03}\x03~\x03" +
		"~\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03" +
		"\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03" +
		"\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03" +
		"\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03" +
		"\x8E\x03\x8E\x03\x8E\x03\x8E\x07\x8E\u0337\n\x8E\f\x8E\x0E\x8E\u033A\v" +
		"\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u034A\n\x8F\f\x8F" +
		"\x0E\x8F\u034D\v\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x07" +
		"\x90\u0355\n\x90\f\x90\x0E\x90\u0358\v\x90\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x07\x91\u0362\n\x91\f\x91\x0E\x91" +
		"\u0365\v\x91\x03\x92\x03\x92\x03\x92\x05\x92\u036A\n\x92\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x93\x05\x93\u03A7\n\x93\x03\x94\x03\x94\x03\x94\x03" +
		"\x94\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u03B4" +
		"\n\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x05\x97\u03BB\n\x97\x03" +
		"\x97\x02\x02\x02\x98\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
		"\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
		"\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2" +
		"\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4" +
		"\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6" +
		"\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106" +
		"\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114" +
		"\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122" +
		"\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\x02\x18\x03\x02" +
		"/1\x03\x02\x04\x05\x03\x02\x06\x07\x03\x02\b\t\x03\x02\n\v\x03\x02\f\r" +
		"\x03\x02\x0E\x0F\x03\x02\x10\x11\x03\x02\x12\x13\x03\x02\x14\x15\x03\x02" +
		"\x16\x17\x03\x02\x18\x19\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x03\x02\x1E\x1F" +
		"\x03\x02 !\x03\x02\"#\x03\x02$%\x03\x02&\'\x03\x02()\x03\x02*+\x03\x02" +
		",-\x02\u03D5\x02\u0140\x03\x02\x02\x02\x04\u0143\x03\x02\x02\x02\x06\u0156" +
		"\x03\x02\x02\x02\b\u0158\x03\x02\x02\x02\n\u015A\x03\x02\x02\x02\f\u015E" +
		"\x03\x02\x02\x02\x0E\u0165\x03\x02\x02\x02\x10\u016D\x03\x02\x02\x02\x12" +
		"\u018E\x03\x02\x02\x02\x14\u0193\x03\x02\x02\x02\x16\u0198\x03\x02\x02" +
		"\x02\x18\u01A1\x03\x02\x02\x02\x1A\u01AD\x03\x02\x02\x02\x1C\u01AF\x03" +
		"\x02\x02\x02\x1E\u01B2\x03\x02\x02\x02 \u01B5\x03\x02\x02\x02\"\u01B8" +
		"\x03\x02\x02\x02$\u01BB\x03\x02\x02\x02&\u01BE\x03\x02\x02\x02(\u01C1" +
		"\x03\x02\x02\x02*\u01C4\x03\x02\x02\x02,\u01C8\x03\x02\x02\x02.\u01CC" +
		"\x03\x02\x02\x020\u01D3\x03\x02\x02\x022\u01D5\x03\x02\x02\x024\u01D8" +
		"\x03\x02\x02\x026\u01DB\x03\x02\x02\x028\u01DD\x03\x02\x02\x02:\u01DF" +
		"\x03\x02\x02\x02<\u01E1\x03\x02\x02\x02>\u01E3\x03\x02\x02\x02@\u01E5" +
		"\x03\x02\x02\x02B\u01E7\x03\x02\x02\x02D\u01E9\x03\x02\x02\x02F\u01EB" +
		"\x03\x02\x02\x02H\u01F8\x03\x02\x02\x02J\u0205\x03\x02\x02\x02L\u0216" +
		"\x03\x02\x02\x02N\u021B\x03\x02\x02\x02P\u021F\x03\x02\x02\x02R\u0223" +
		"\x03\x02\x02\x02T\u0227\x03\x02\x02\x02V\u022C\x03\x02\x02\x02X\u0230" +
		"\x03\x02\x02\x02Z\u0234\x03\x02\x02\x02\\\u023F\x03\x02\x02\x02^\u0244" +
		"\x03\x02\x02\x02`\u024F\x03\x02\x02\x02b\u0251\x03\x02\x02\x02d\u0253" +
		"\x03\x02\x02\x02f\u0255\x03\x02\x02\x02h\u0257\x03\x02\x02\x02j\u0259" +
		"\x03\x02\x02\x02l\u025B\x03\x02\x02\x02n\u025D\x03\x02\x02\x02p\u025F" +
		"\x03\x02\x02\x02r\u0261\x03\x02\x02\x02t\u0263\x03\x02\x02\x02v\u0265" +
		"\x03\x02\x02\x02x\u0267\x03\x02\x02\x02z\u0269\x03\x02\x02\x02|\u026B" +
		"\x03\x02\x02\x02~\u026D\x03\x02\x02\x02\x80\u026F\x03\x02\x02\x02\x82" +
		"\u0271\x03\x02\x02\x02\x84\u0273\x03\x02\x02\x02\x86\u0275\x03\x02\x02" +
		"\x02\x88\u0277\x03\x02\x02\x02\x8A\u0279\x03\x02\x02\x02\x8C\u027B\x03" +
		"\x02\x02\x02\x8E\u027D\x03\x02\x02\x02\x90\u027F\x03\x02\x02\x02\x92\u0281" +
		"\x03\x02\x02\x02\x94\u0283\x03\x02\x02\x02\x96\u0285\x03\x02\x02\x02\x98" +
		"\u0287\x03\x02\x02\x02\x9A\u0289\x03\x02\x02\x02\x9C\u028B\x03\x02\x02" +
		"\x02\x9E\u028D\x03\x02\x02\x02\xA0\u028F\x03\x02\x02\x02\xA2\u0291\x03" +
		"\x02\x02\x02\xA4\u0293\x03\x02\x02\x02\xA6\u0295\x03\x02\x02\x02\xA8\u0297" +
		"\x03\x02\x02\x02\xAA\u0299\x03\x02\x02\x02\xAC\u029B\x03\x02\x02\x02\xAE" +
		"\u029D\x03\x02\x02\x02\xB0\u029F\x03\x02\x02\x02\xB2\u02A1\x03\x02\x02" +
		"\x02\xB4\u02A3\x03\x02\x02\x02\xB6\u02A5\x03\x02\x02\x02\xB8\u02A7\x03" +
		"\x02\x02\x02\xBA\u02A9\x03\x02\x02\x02\xBC\u02AB\x03\x02\x02\x02\xBE\u02AD" +
		"\x03\x02\x02\x02\xC0\u02AF\x03\x02\x02\x02\xC2\u02B1\x03\x02\x02\x02\xC4" +
		"\u02B3\x03\x02\x02\x02\xC6\u02B5\x03\x02\x02\x02\xC8\u02B7\x03\x02\x02" +
		"\x02\xCA\u02C1\x03\x02\x02\x02\xCC\u02C9\x03\x02\x02\x02\xCE\u02CB\x03" +
		"\x02\x02\x02\xD0\u02D0\x03\x02\x02\x02\xD2\u02D5\x03\x02\x02\x02\xD4\u02D9" +
		"\x03\x02\x02\x02\xD6\u02DB\x03\x02\x02\x02\xD8\u02E3\x03\x02\x02\x02\xDA" +
		"\u02ED\x03\x02\x02\x02\xDC\u02EF\x03\x02\x02\x02\xDE\u02F1\x03\x02\x02" +
		"\x02\xE0\u02F3\x03\x02\x02\x02\xE2\u02F5\x03\x02\x02\x02\xE4\u02F7\x03" +
		"\x02\x02\x02\xE6\u02F9\x03\x02\x02\x02\xE8\u02FB\x03\x02\x02\x02\xEA\u02FD" +
		"\x03\x02\x02\x02\xEC\u02FF\x03\x02\x02\x02\xEE\u0301\x03\x02\x02\x02\xF0" +
		"\u0303\x03\x02\x02\x02\xF2\u0305\x03\x02\x02\x02\xF4\u0307\x03\x02\x02" +
		"\x02\xF6\u0309\x03\x02\x02\x02\xF8\u030B\x03\x02\x02\x02\xFA\u030D\x03" +
		"\x02\x02\x02\xFC\u030F\x03\x02\x02\x02\xFE\u0311\x03\x02\x02\x02\u0100" +
		"\u0313\x03\x02\x02\x02\u0102\u0315\x03\x02\x02\x02\u0104\u0317\x03\x02" +
		"\x02\x02\u0106\u0319\x03\x02\x02\x02\u0108\u031B\x03\x02\x02\x02\u010A" +
		"\u031D\x03\x02\x02\x02\u010C\u031F\x03\x02\x02\x02\u010E\u0321\x03\x02" +
		"\x02\x02\u0110\u0323\x03\x02\x02\x02\u0112\u0325\x03\x02\x02\x02\u0114" +
		"\u0327\x03\x02\x02\x02\u0116\u0329\x03\x02\x02\x02\u0118\u032B\x03\x02" +
		"\x02\x02\u011A\u032E\x03\x02\x02\x02\u011C\u033B\x03\x02\x02\x02\u011E" +
		"\u034E\x03\x02\x02\x02\u0120\u0359\x03\x02\x02\x02\u0122\u0366\x03\x02" +
		"\x02\x02\u0124\u03A6\x03\x02\x02\x02\u0126\u03A8\x03\x02\x02\x02\u0128" +
		"\u03B3\x03\x02\x02\x02\u012A\u03B5\x03\x02\x02\x02\u012C\u03BA\x03\x02" +
		"\x02\x02\u012E\u012F\x07\xB9\x02\x02\u012F\u0133\x07\x86\x02\x02\u0130" +
		"\u0132\x05\x04\x03\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0135\x03\x02" +
		"\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0136\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0138\x07\xB9" +
		"\x02\x02\u0137\u0139\x07\x86\x02\x02\u0138\u0137\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u0141\x03\x02\x02\x02\u013A\u013C\x05\x04" +
		"\x03\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0141\x03\x02" +
		"\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u012E\x03\x02\x02\x02\u0140" +
		"\u013D\x03\x02\x02\x02\u0141\x03\x03\x02\x02\x02\u0142\u0144\x07\xBF\x02" +
		"\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0146" +
		"\x03\x02\x02\x02\u0145\u0147\x05\u012A\x96\x02\u0146\u0145\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u014B\x03\x02\x02\x02\u0148\u014A" +
		"\x05\x06\x04\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03" +
		"\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u014F\x05\u012C\x97\x02" +
		"\u014F\x05\x03\x02\x02\x02\u0150\u0157\x05\x18\r\x02\u0151\u0157\x05\n" +
		"\x06\x02\u0152\u0157\x05\b\x05\x02\u0153\u0154\x05\x10\t\x02\u0154\u0155" +
		"\x05\x12\n\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0150\x03\x02\x02\x02" +
		"\u0156\u0151\x03\x02\x02\x02\u0156\u0152\x03\x02\x02\x02\u0156\u0153\x03" +
		"\x02\x02\x02\u0157\x07\x03\x02\x02\x02\u0158\u0159\t\x02\x02\x02\u0159" +
		"\t\x03\x02\x02\x02\u015A\u015B\x05\f\x07\x02\u015B\u015C\x07\xB6\x02\x02" +
		"\u015C\u015D\x05\u0118\x8D\x02\u015D\v\x03\x02\x02\x02\u015E\u015F\x07" +
		"\xB5\x02\x02\u015F\u0160\x05\x0E\b\x02\u0160\r\x03\x02\x02\x02\u0161\u0166" +
		"\x07\x87\x02\x02\u0162\u0166\x07\x88\x02\x02\u0163\u0166\x05\f\x07\x02" +
		"\u0164\u0166\x05\u0126\x94\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162" +
		"\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02" +
		"\u0166\x0F\x03\x02\x02\x02\u0167\u0168\x07\x03\x02\x02\u0168\u016E\x07" +
		"\x87\x02\x02\u0169\u016A\x07\x03\x02\x02\u016A\u016E\x07\x88\x02\x02\u016B" +
		"\u016C\x07\x03\x02\x02\u016C\u016E\x05\f\x07\x02\u016D\u0167\x03\x02\x02" +
		"\x02\u016D\u0169\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\x11" +
		"\x03\x02\x02\x02\u016F\u018F\x07\x89\x02\x02\u0170\u0172\x07\x95\x02\x02" +
		"\u0171\u0173\x05\u0126\x94\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173\u018F\x03\x02\x02\x02\u0174\u0176\x07\x8A\x02\x02" +
		"\u0175\u0177\x05\u0126\x94\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177" +
		"\x03\x02\x02\x02\u0177\u018F\x03\x02\x02\x02\u0178\u017C\x07\x8B\x02\x02" +
		"\u0179\u017B\x05\u0126\x94\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017E" +
		"\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u018F\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u018F\x07" +
		"\x8C\x02\x02\u0180\u0181\x07\x8D\x02\x02\u0181\u018F\x05\u0126\x94\x02" +
		"\u0182\u0183\x07\x91\x02\x02\u0183\u018F\x05\u0126\x94\x02\u0184\u0185" +
		"\x07\x8E\x02\x02\u0185\u018F\x05\u0126\x94\x02\u0186\u018F\x07\x8F\x02" +
		"\x02\u0187\u018F\x07\x90\x02\x02\u0188\u018F\x07\x92\x02\x02\u0189\u018F" +
		"\x07\x93\x02\x02\u018A\u018F\x07\x94\x02\x02\u018B\u018C\x07\x96\x02\x02" +
		"\u018C\u018F\x05\u0126\x94\x02\u018D\u018F\x07\x97\x02\x02\u018E\u016F" +
		"\x03\x02\x02\x02\u018E\u0170\x03\x02\x02\x02\u018E\u0174\x03\x02\x02\x02" +
		"\u018E\u0178\x03\x02\x02\x02\u018E\u017F\x03\x02\x02\x02\u018E\u0180\x03" +
		"\x02\x02\x02\u018E\u0182\x03\x02\x02\x02\u018E\u0184\x03\x02\x02\x02\u018E" +
		"\u0186\x03\x02\x02\x02\u018E\u0187\x03\x02\x02\x02\u018E\u0188\x03\x02" +
		"\x02\x02\u018E\u0189\x03\x02\x02\x02\u018E\u018A\x03\x02\x02\x02\u018E" +
		"\u018B\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F\x13\x03\x02\x02" +
		"\x02\u0190\u0192\x05\u0126\x94\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\x15\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x05" +
		"\u0126\x94\x02\u0197\u0199\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02" +
		"\u0198\u0197\x03\x02\x02\x02\u0199\x17\x03\x02\x02\x02\u019A\u01A2\x05" +
		"J&\x02\u019B\u01A2\x05\xCAf\x02\u019C\u01A2\x05\x1A\x0E\x02\u019D\u01A2" +
		"\x050\x19\x02\u019E\u019F\x05H%\x02\u019F\u01A0\x05\u0118\x8D\x02\u01A0" +
		"\u01A2\x03\x02\x02\x02\u01A1\u019A\x03\x02\x02\x02\u01A1\u019B\x03\x02" +
		"\x02\x02\u01A1\u019C\x03\x02\x02\x02\u01A1\u019D\x03\x02\x02\x02\u01A1" +
		"\u019E\x03\x02\x02\x02\u01A2\x19\x03\x02\x02\x02\u01A3\u01AE\x05\x1C\x0F" +
		"\x02\u01A4\u01AE\x05\x1E\x10\x02\u01A5\u01AE\x05 \x11\x02\u01A6\u01AE" +
		"\x05\"\x12\x02\u01A7\u01AE\x05$\x13\x02\u01A8\u01AE\x05&\x14\x02\u01A9" +
		"\u01AE\x05(\x15\x02\u01AA\u01AE\x05*\x16\x02\u01AB\u01AE\x05,\x17\x02" +
		"\u01AC\u01AE\x05.\x18\x02\u01AD\u01A3\x03\x02\x02\x02\u01AD\u01A4\x03" +
		"\x02\x02\x02\u01AD\u01A5\x03\x02\x02\x02\u01AD\u01A6\x03\x02\x02\x02\u01AD" +
		"\u01A7\x03\x02\x02\x02\u01AD\u01A8\x03\x02\x02\x02\u01AD\u01A9\x03\x02" +
		"\x02\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD" +
		"\u01AC\x03\x02\x02\x02\u01AE\x1B\x03\x02\x02\x02\u01AF\u01B0\t\x03\x02" +
		"\x02\u01B0\u01B1\x05\u0118\x8D\x02\u01B1\x1D\x03\x02\x02\x02\u01B2\u01B3" +
		"\t\x04\x02\x02\u01B3\u01B4\x05\u0118\x8D\x02\u01B4\x1F\x03\x02\x02\x02" +
		"\u01B5\u01B6\t\x05\x02\x02\u01B6\u01B7\x05\u0118\x8D\x02\u01B7!\x03\x02" +
		"\x02\x02\u01B8\u01B9\t\x06\x02\x02\u01B9\u01BA\x05\u0118\x8D\x02\u01BA" +
		"#\x03\x02\x02\x02\u01BB\u01BC\t\x07\x02\x02\u01BC\u01BD\x05\u0118\x8D" +
		"\x02\u01BD%\x03\x02\x02\x02\u01BE\u01BF\t\b\x02\x02\u01BF\u01C0\x05\u0118" +
		"\x8D\x02\u01C0\'\x03\x02\x02\x02\u01C1\u01C2\t\t\x02\x02\u01C2\u01C3\x05" +
		"\u0118\x8D\x02\u01C3)\x03\x02\x02\x02\u01C4\u01C6\t\n\x02\x02\u01C5\u01C7" +
		"\x05\u0118\x8D\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02" +
		"\x02\u01C7+\x03\x02\x02\x02\u01C8\u01CA\t\v\x02\x02\u01C9\u01CB\x05\u0118" +
		"\x8D\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"-\x03\x02\x02\x02\u01CC\u01CF\t\f\x02\x02\u01CD\u01D0\x05\u0118\x8D\x02" +
		"\u01CE\u01D0\x071\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01CE\x03" +
		"\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0/\x03\x02\x02\x02\u01D1" +
		"\u01D4\x052\x1A\x02\u01D2\u01D4\x054\x1B\x02\u01D3\u01D1\x03\x02\x02\x02" +
		"\u01D3\u01D2\x03\x02\x02\x02\u01D41\x03\x02\x02\x02\u01D5\u01D6\t\r\x02" +
		"\x02\u01D6\u01D7\x05\u0118\x8D\x02\u01D73\x03\x02\x02\x02\u01D8\u01D9" +
		"\t\x0E\x02\x02\u01D9\u01DA\x05\u0118\x8D\x02\u01DA5\x03\x02\x02\x02\u01DB" +
		"\u01DC\t\x0F\x02\x02\u01DC7\x03\x02\x02\x02\u01DD\u01DE\t\x10\x02\x02" +
		"\u01DE9\x03\x02\x02\x02\u01DF\u01E0\t\x11\x02\x02\u01E0;\x03\x02\x02\x02" +
		"\u01E1\u01E2\t\x12\x02\x02\u01E2=\x03\x02\x02\x02\u01E3\u01E4\t\x13\x02" +
		"\x02\u01E4?\x03\x02\x02\x02\u01E5\u01E6\t\x14\x02\x02\u01E6A\x03\x02\x02" +
		"\x02\u01E7\u01E8\t\x15\x02\x02\u01E8C\x03\x02\x02\x02\u01E9\u01EA\t\x16" +
		"\x02\x02\u01EAE\x03\x02\x02\x02\u01EB\u01EC\t\x17\x02\x02\u01ECG\x03\x02" +
		"\x02\x02\u01ED\u01F9\x056\x1C\x02\u01EE\u01F9\x058\x1D\x02\u01EF\u01F9" +
		"\x05:\x1E\x02\u01F0\u01F9\x05<\x1F\x02\u01F1\u01F9\x05> \x02\u01F2\u01F9" +
		"\x05@!\x02\u01F3\u01F9\x05B\"\x02\u01F4\u01F9\x05D#\x02\u01F5\u01F9\x05" +
		"F$\x02\u01F6\u01F9\x07\xBD\x02\x02\u01F7\u01F9\x07\xBE\x02\x02\u01F8\u01ED" +
		"\x03\x02\x02\x02\u01F8\u01EE\x03\x02\x02\x02\u01F8\u01EF\x03\x02\x02\x02" +
		"\u01F8\u01F0\x03\x02\x02\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8\u01F2\x03" +
		"\x02\x02\x02\u01F8\u01F3\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F8" +
		"\u01F5\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02" +
		"\x02\x02\u01F9I\x03\x02\x02\x02\u01FA\u0206\x05`1\x02\u01FB\u0206\x05" +
		"L\'\x02\u01FC\u0206\x05N(\x02\u01FD\u0206\x05P)\x02\u01FE\u0206\x05R*" +
		"\x02\u01FF\u0206\x05T+\x02\u0200\u0206\x05V,\x02\u0201\u0206\x05X-\x02" +
		"\u0202\u0206\x05Z.\x02\u0203\u0206\x05\\/\x02\u0204\u0206\x05^0\x02\u0205" +
		"\u01FA\x03\x02\x02\x02\u0205\u01FB\x03\x02\x02\x02\u0205\u01FC\x03\x02" +
		"\x02\x02\u0205\u01FD\x03\x02\x02\x02\u0205\u01FE\x03\x02\x02\x02\u0205" +
		"\u01FF\x03\x02\x02\x02\u0205\u0200\x03\x02\x02\x02\u0205\u0201\x03\x02" +
		"\x02\x02\u0205\u0202\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205";
	private static readonly _serializedATNSegment1: string =
		"\u0204\x03\x02\x02\x02\u0206K\x03\x02\x02\x02\u0207\u0217\x05b2\x02\u0208" +
		"\u0217\x05d3\x02\u0209\u0217\x05f4\x02\u020A\u0217\x05h5\x02\u020B\u0217" +
		"\x05|?\x02\u020C\u0217\x05\xA2R\x02\u020D\u0217\x05\xA4S\x02\u020E\u0217" +
		"\x05\xA6T\x02\u020F\u0217\x05\xA8U\x02\u0210\u0217\x05\xAAV\x02\u0211" +
		"\u0217\x05\xACW\x02\u0212\u0217\x05\xAEX\x02\u0213\u0217\x05\xB0Y\x02" +
		"\u0214\u0217\x05\xB2Z\x02\u0215\u0217\x05\xB4[\x02\u0216\u0207\x03\x02" +
		"\x02\x02\u0216\u0208\x03\x02\x02\x02\u0216\u0209\x03\x02\x02\x02\u0216" +
		"\u020A\x03\x02\x02\x02\u0216\u020B\x03\x02\x02\x02\u0216\u020C\x03\x02" +
		"\x02\x02\u0216\u020D\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02\u0216" +
		"\u020F\x03\x02\x02\x02\u0216\u0210\x03\x02\x02\x02\u0216\u0211\x03\x02" +
		"\x02\x02\u0216\u0212\x03\x02\x02\x02\u0216\u0213\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0215\x03\x02\x02\x02\u0217M\x03\x02\x02" +
		"\x02\u0218\u021C\x05n8\x02\u0219\u021C\x05p9\x02\u021A\u021C\x05r:\x02" +
		"\u021B\u0218\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021A\x03" +
		"\x02\x02\x02\u021CO\x03\x02\x02\x02\u021D\u0220\x05\xB6\\\x02\u021E\u0220" +
		"\x05\xB8]\x02\u021F\u021D\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02" +
		"\u0220Q\x03\x02\x02\x02\u0221\u0224\x05\xC2b\x02\u0222\u0224\x05\xC4c" +
		"\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224S\x03" +
		"\x02\x02\x02\u0225\u0228\x05t;\x02\u0226\u0228\x05v<\x02\u0227\u0225\x03" +
		"\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228U\x03\x02\x02\x02\u0229" +
		"\u022D\x05~@\x02\u022A\u022D\x05\x80A\x02\u022B\u022D\x05\x82B\x02\u022C" +
		"\u0229\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022B\x03\x02" +
		"\x02\x02\u022DW\x03\x02\x02\x02\u022E\u0231\x05\x84C\x02\u022F\u0231\x05" +
		"\x86D\x02\u0230\u022E\x03\x02\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231" +
		"Y\x03\x02\x02\x02\u0232\u0235\x05\xC6d\x02\u0233\u0235\x05\xC8e\x02\u0234" +
		"\u0232\x03\x02\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235[\x03\x02\x02" +
		"\x02\u0236\u0240\x05\x8AF\x02\u0237\u0240\x05\x8CG\x02\u0238\u0240\x05" +
		"\x8EH\x02\u0239\u0240\x05\x90I\x02\u023A\u0240\x05\x92J\x02\u023B\u0240" +
		"\x05\x94K\x02\u023C\u0240\x05\x96L\x02\u023D\u0240\x05\x98M\x02\u023E" +
		"\u0240\x05\x9AN\x02\u023F\u0236\x03\x02\x02\x02\u023F\u0237\x03\x02\x02" +
		"\x02\u023F\u0238\x03\x02\x02\x02\u023F\u0239\x03\x02\x02\x02\u023F\u023A" +
		"\x03\x02\x02\x02\u023F\u023B\x03\x02\x02\x02\u023F\u023C\x03\x02\x02\x02" +
		"\u023F\u023D\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240]\x03\x02" +
		"\x02\x02\u0241\u0245\x05\x9CO\x02\u0242\u0245\x05\x9EP\x02\u0243\u0245" +
		"\x05\xA0Q\x02\u0244\u0241\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02" +
		"\u0244\u0243\x03\x02\x02\x02\u0245_\x03\x02\x02\x02\u0246\u0250\x05j6" +
		"\x02\u0247\u0250\x05l7\x02\u0248\u0250\x05x=\x02\u0249\u0250\x05z>\x02" +
		"\u024A\u0250\x05\x88E\x02\u024B\u0250\x05\xBA^\x02\u024C\u0250\x05\xBC" +
		"_\x02\u024D\u0250\x05\xBE`\x02\u024E\u0250\x05\xC0a\x02\u024F\u0246\x03" +
		"\x02\x02\x02\u024F\u0247\x03\x02\x02\x02\u024F\u0248\x03\x02\x02\x02\u024F" +
		"\u0249\x03\x02\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024B\x03\x02" +
		"\x02\x02\u024F\u024C\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F" +
		"\u024E\x03\x02\x02\x02\u0250a\x03\x02\x02\x02\u0251\u0252\x072\x02\x02" +
		"\u0252c\x03\x02\x02\x02\u0253\u0254\x073\x02\x02\u0254e\x03\x02\x02\x02" +
		"\u0255\u0256\x074\x02\x02\u0256g\x03\x02\x02\x02\u0257\u0258\x075\x02" +
		"\x02\u0258i\x03\x02\x02\x02\u0259\u025A\x076\x02\x02\u025Ak\x03\x02\x02" +
		"\x02\u025B\u025C\x077\x02\x02\u025Cm\x03\x02\x02\x02\u025D\u025E\x078" +
		"\x02\x02\u025Eo\x03\x02\x02\x02\u025F\u0260\x079\x02\x02\u0260q\x03\x02" +
		"\x02\x02\u0261\u0262\x07:\x02\x02\u0262s\x03\x02\x02\x02\u0263\u0264\x07" +
		";\x02\x02\u0264u\x03\x02\x02\x02\u0265\u0266\x07<\x02\x02\u0266w\x03\x02" +
		"\x02\x02\u0267\u0268\x07=\x02\x02\u0268y\x03\x02\x02\x02\u0269\u026A\x07" +
		">\x02\x02\u026A{\x03\x02\x02\x02\u026B\u026C\x07?\x02\x02\u026C}\x03\x02" +
		"\x02\x02\u026D\u026E\x07@\x02\x02\u026E\x7F\x03\x02\x02\x02\u026F\u0270" +
		"\x07A\x02\x02\u0270\x81\x03\x02\x02\x02\u0271\u0272\x07B\x02\x02\u0272" +
		"\x83\x03\x02\x02\x02\u0273\u0274\x07C\x02\x02\u0274\x85\x03\x02\x02\x02" +
		"\u0275\u0276\x07D\x02\x02\u0276\x87\x03\x02\x02\x02\u0277\u0278\x07E\x02" +
		"\x02\u0278\x89\x03\x02\x02\x02\u0279\u027A\x07F\x02\x02\u027A\x8B\x03" +
		"\x02\x02\x02\u027B\u027C\x07G\x02\x02\u027C\x8D\x03\x02\x02\x02\u027D" +
		"\u027E\x07H\x02\x02\u027E\x8F\x03\x02\x02\x02\u027F\u0280\x07I\x02\x02" +
		"\u0280\x91\x03\x02\x02\x02\u0281\u0282\x07J\x02\x02\u0282\x93\x03\x02" +
		"\x02\x02\u0283\u0284\x07K\x02\x02\u0284\x95\x03\x02\x02\x02\u0285\u0286" +
		"\x07L\x02\x02\u0286\x97\x03\x02\x02\x02\u0287\u0288\x07M\x02\x02\u0288" +
		"\x99\x03\x02\x02\x02\u0289\u028A\x07N\x02\x02\u028A\x9B\x03\x02\x02\x02" +
		"\u028B\u028C\x07O\x02\x02\u028C\x9D\x03\x02\x02\x02\u028D\u028E\x07P\x02" +
		"\x02\u028E\x9F\x03\x02\x02\x02\u028F\u0290\x07Q\x02\x02\u0290\xA1\x03" +
		"\x02\x02\x02\u0291\u0292\x07R\x02\x02\u0292\xA3\x03\x02\x02\x02\u0293" +
		"\u0294\x07S\x02\x02\u0294\xA5\x03\x02\x02\x02\u0295\u0296\x07T\x02\x02" +
		"\u0296\xA7\x03\x02\x02\x02\u0297\u0298\x07U\x02\x02\u0298\xA9\x03\x02" +
		"\x02\x02\u0299\u029A\x07V\x02\x02\u029A\xAB\x03\x02\x02\x02\u029B\u029C" +
		"\x07W\x02\x02\u029C\xAD\x03\x02\x02\x02\u029D\u029E\x07X\x02\x02\u029E" +
		"\xAF\x03\x02\x02\x02\u029F\u02A0\x07Y\x02\x02\u02A0\xB1\x03\x02\x02\x02" +
		"\u02A1\u02A2\x07Z\x02\x02\u02A2\xB3\x03\x02\x02\x02\u02A3\u02A4\x07[\x02" +
		"\x02\u02A4\xB5\x03\x02\x02\x02\u02A5\u02A6\x07\\\x02\x02\u02A6\xB7\x03" +
		"\x02\x02\x02\u02A7\u02A8\x07]\x02\x02\u02A8\xB9\x03\x02\x02\x02\u02A9" +
		"\u02AA\x07^\x02\x02\u02AA\xBB\x03\x02\x02\x02\u02AB\u02AC\x07_\x02\x02" +
		"\u02AC\xBD\x03\x02\x02\x02\u02AD\u02AE\x07`\x02\x02\u02AE\xBF\x03\x02" +
		"\x02\x02\u02AF\u02B0\x07a\x02\x02\u02B0\xC1\x03\x02\x02\x02\u02B1\u02B2" +
		"\x07b\x02\x02\u02B2\xC3\x03\x02\x02\x02\u02B3\u02B4\x07c\x02\x02\u02B4" +
		"\xC5\x03\x02\x02\x02\u02B5\u02B6\x07d\x02\x02\u02B6\xC7\x03\x02\x02\x02" +
		"\u02B7\u02B8\x07e\x02\x02\u02B8\xC9\x03\x02\x02\x02\u02B9\u02C2\x05\xCC" +
		"g\x02\u02BA\u02C2\x05\xCEh\x02\u02BB\u02C2\x05\xD0i\x02\u02BC\u02C2\x05" +
		"\xD2j\x02\u02BD\u02C2\x05\xD4k\x02\u02BE\u02C2\x05\xD6l\x02\u02BF\u02C2" +
		"\x05\xD8m\x02\u02C0\u02C2\x05\xDAn\x02\u02C1\u02B9\x03\x02\x02\x02\u02C1" +
		"\u02BA\x03\x02\x02\x02\u02C1\u02BB\x03\x02\x02\x02\u02C1\u02BC\x03\x02" +
		"\x02\x02\u02C1\u02BD\x03\x02\x02\x02\u02C1\u02BE\x03\x02\x02\x02\u02C1" +
		"\u02BF\x03\x02\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C2\xCB\x03\x02\x02" +
		"\x02\u02C3\u02CA\x05\xDCo\x02\u02C4\u02CA\x05\xDEp\x02\u02C5\u02CA\x05" +
		"\xE0q\x02\u02C6\u02CA\x05\xF0y\x02\u02C7\u02CA\x05\xF6|\x02\u02C8\u02CA" +
		"\x05\xFA~\x02\u02C9\u02C3\x03\x02\x02\x02\u02C9\u02C4\x03\x02\x02\x02" +
		"\u02C9\u02C5\x03\x02\x02\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9\u02C7\x03" +
		"\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CA\xCD\x03\x02\x02\x02\u02CB" +
		"\u02CC\x05\xE8u\x02\u02CC\xCF\x03\x02\x02\x02\u02CD\u02D1\x05\xE2r\x02" +
		"\u02CE\u02D1\x05\xE4s\x02\u02CF\u02D1\x05\xE6t\x02\u02D0\u02CD\x03\x02" +
		"\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D1" +
		"\xD1\x03\x02\x02\x02\u02D2\u02D6\x05\xEAv\x02\u02D3\u02D6\x05\xECw\x02" +
		"\u02D4\u02D6\x05\xEEx\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3\x03" +
		"\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D6\xD3\x03\x02\x02\x02\u02D7" +
		"\u02DA\x05\xF2z\x02\u02D8\u02DA\x05\xF4{\x02\u02D9\u02D7\x03\x02\x02\x02" +
		"\u02D9\u02D8\x03\x02\x02\x02\u02DA\xD5\x03\x02\x02\x02\u02DB\u02DC\x05" +
		"\xF8}\x02\u02DC\xD7\x03\x02\x02\x02\u02DD\u02E4\x05\u010C\x87\x02\u02DE" +
		"\u02E4\x05\u010E\x88\x02\u02DF\u02E4\x05\u0110\x89\x02\u02E0\u02E4\x05" +
		"\u0112\x8A\x02\u02E1\u02E4\x05\u0114\x8B\x02\u02E2\u02E4\x05\u0116\x8C" +
		"\x02\u02E3\u02DD\x03\x02\x02\x02\u02E3\u02DE\x03\x02\x02\x02\u02E3\u02DF" +
		"\x03\x02\x02\x02\u02E3\u02E0\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02" +
		"\u02E3\u02E2\x03\x02\x02\x02\u02E4\xD9\x03\x02\x02\x02\u02E5\u02EE\x05" +
		"\xFC\x7F\x02\u02E6\u02EE\x05\xFE\x80\x02\u02E7\u02EE\x05\u0100\x81\x02" +
		"\u02E8\u02EE\x05\u0102\x82\x02\u02E9\u02EE\x05\u0104\x83\x02\u02EA\u02EE" +
		"\x05\u0106\x84\x02\u02EB\u02EE\x05\u0108\x85\x02\u02EC\u02EE\x05\u010A" +
		"\x86\x02\u02ED\u02E5\x03\x02\x02\x02\u02ED\u02E6\x03\x02\x02\x02\u02ED" +
		"\u02E7\x03\x02\x02\x02\u02ED\u02E8\x03\x02\x02\x02\u02ED\u02E9\x03\x02" +
		"\x02\x02\u02ED\u02EA\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED" +
		"\u02EC\x03\x02\x02\x02\u02EE\xDB\x03\x02\x02\x02\u02EF\u02F0\x07f\x02" +
		"\x02\u02F0\xDD\x03\x02\x02\x02\u02F1\u02F2\x07g\x02\x02\u02F2\xDF\x03" +
		"\x02\x02\x02\u02F3\u02F4\x07h\x02\x02\u02F4\xE1\x03\x02\x02\x02\u02F5" +
		"\u02F6\x07i\x02\x02\u02F6\xE3\x03\x02\x02\x02\u02F7\u02F8\x07j\x02\x02" +
		"\u02F8\xE5\x03\x02\x02\x02\u02F9\u02FA\x07k\x02\x02\u02FA\xE7\x03\x02" +
		"\x02\x02\u02FB\u02FC\x07l\x02\x02\u02FC\xE9\x03\x02\x02\x02\u02FD\u02FE" +
		"\x07m\x02\x02\u02FE\xEB\x03\x02\x02\x02\u02FF\u0300\x07n\x02\x02\u0300" +
		"\xED\x03\x02\x02\x02\u0301\u0302\x07o\x02\x02\u0302\xEF\x03\x02\x02\x02" +
		"\u0303\u0304\x07p\x02\x02\u0304\xF1\x03\x02\x02\x02\u0305\u0306\x07q\x02" +
		"\x02\u0306\xF3\x03\x02\x02\x02\u0307\u0308\x07r\x02\x02\u0308\xF5\x03" +
		"\x02\x02\x02\u0309\u030A\x07s\x02\x02\u030A\xF7\x03\x02\x02\x02\u030B" +
		"\u030C\x07t\x02\x02\u030C\xF9\x03\x02\x02\x02\u030D\u030E\x07u\x02\x02" +
		"\u030E\xFB\x03\x02\x02\x02\u030F\u0310\x07v\x02\x02\u0310\xFD\x03\x02" +
		"\x02\x02\u0311\u0312\x07w\x02\x02\u0312\xFF\x03\x02\x02\x02\u0313\u0314" +
		"\x07x\x02\x02\u0314\u0101\x03\x02\x02\x02\u0315\u0316\x07y\x02\x02\u0316" +
		"\u0103\x03\x02\x02\x02\u0317\u0318\x07z\x02\x02\u0318\u0105\x03\x02\x02" +
		"\x02\u0319\u031A\x07{\x02\x02\u031A\u0107\x03\x02\x02\x02\u031B\u031C" +
		"\x07|\x02\x02\u031C\u0109\x03\x02\x02\x02\u031D\u031E\x07}\x02\x02\u031E" +
		"\u010B\x03\x02\x02\x02\u031F\u0320\x07~\x02\x02\u0320\u010D\x03\x02\x02" +
		"\x02\u0321\u0322\x07\x7F\x02\x02\u0322\u010F\x03\x02\x02\x02\u0323\u0324" +
		"\x07\x80\x02\x02\u0324\u0111\x03\x02\x02\x02\u0325\u0326\x07\x81\x02\x02" +
		"\u0326\u0113\x03\x02\x02\x02\u0327\u0328\x07\x82\x02\x02\u0328\u0115\x03" +
		"\x02\x02\x02\u0329\u032A\x07\x83\x02\x02\u032A\u0117\x03\x02\x02\x02\u032B" +
		"\u032C\x05\u011A\x8E\x02\u032C\u032D\b\x8D\x01\x02\u032D\u0119\x03\x02" +
		"\x02\x02\u032E\u032F\x05\u011C\x8F\x02\u032F\u0338\b\x8E\x01\x02\u0330" +
		"\u0331\x07\xA0\x02\x02\u0331\u0337\x05\u011C\x8F\x02\u0332\u0333\x07\xA1" +
		"\x02\x02\u0333\u0337\x05\u011C\x8F\x02\u0334\u0335\x07\x9F\x02\x02\u0335" +
		"\u0337\x05\u011C\x8F\x02\u0336\u0330\x03\x02\x02\x02\u0336\u0332\x03\x02" +
		"\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u011B\x03\x02" +
		"\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\u033C\x05\u011E\x90\x02\u033C" +
		"\u034B\b\x8F\x01\x02\u033D\u033E\x07\xAA\x02\x02\u033E\u034A\x05\u011E" +
		"\x90\x02\u033F\u0340\x07\xAB\x02\x02\u0340\u034A\x05\u011E\x90\x02\u0341" +
		"\u0342\x07\xAC\x02\x02\u0342\u034A\x05\u011E\x90\x02\u0343\u0344\x07\xAD" +
		"\x02\x02\u0344\u034A\x05\u011E\x90\x02\u0345\u0346\x07\xAE\x02\x02\u0346" +
		"\u034A\x05\u011E\x90\x02\u0347\u0348\x07\xAF\x02\x02\u0348\u034A\x05\u011E" +
		"\x90\x02\u0349\u033D\x03\x02\x02\x02\u0349\u033F\x03\x02\x02\x02\u0349" +
		"\u0341\x03\x02\x02\x02\u0349\u0343\x03\x02\x02\x02\u0349\u0345\x03\x02" +
		"\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B" +
		"\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u011D\x03\x02" +
		"\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\u034F\x05\u0120\x91\x02\u034F" +
		"\u0356\b\x90\x01\x02\u0350\u0351\x07\xB1\x02\x02\u0351\u0355\x05\u0120" +
		"\x91\x02\u0352\u0353\x07\xB2\x02\x02\u0353\u0355\x05\u0120\x91\x02\u0354" +
		"\u0350\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0355\u0358\x03\x02" +
		"\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357" +
		"\u011F\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02\u0359\u035A\x05\u0122" +
		"\x92\x02\u035A\u0363\b\x91\x01\x02\u035B\u035C\x07\xB3\x02\x02\u035C\u0362" +
		"\x05\u0122\x92\x02\u035D\u035E\x07\xB4\x02\x02\u035E\u0362\x05\u0122\x92" +
		"\x02\u035F\u0360\x07\xA5\x02\x02\u0360\u0362\x05\u0122\x92\x02\u0361\u035B" +
		"\x03\x02\x02\x02\u0361\u035D\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02" +
		"\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03" +
		"\x02\x02\x02\u0364\u0121\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366" +
		"\u0369\x05\u0124\x93\x02\u0367\u0368\x07\xB0\x02\x02\u0368\u036A\x05\u0122" +
		"\x92\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A" +
		"\u036B\x03\x02\x02\x02\u036B\u036C\b\x92\x01\x02\u036C\u0123\x03\x02\x02" +
		"\x02\u036D\u036E\x07\x99\x02\x02\u036E\u036F\x05\u0126\x94\x02\u036F\u0370" +
		"\b\x93\x01\x02\u0370\u03A7\x03\x02\x02\x02\u0371\u0372\x07\x9A\x02\x02" +
		"\u0372\u0373\x05\u0126\x94\x02\u0373\u0374\b\x93\x01\x02\u0374\u03A7\x03" +
		"\x02\x02\x02\u0375\u0376\x07\x9D\x02\x02\u0376\u0377\x05\u0126\x94\x02" +
		"\u0377\u0378\b\x93\x01\x02\u0378\u03A7\x03\x02\x02\x02\u0379\u037A\x07" +
		"\x9C\x02\x02\u037A\u037B\x05\u0126\x94\x02\u037B\u037C\b\x93\x01\x02\u037C" +
		"\u03A7\x03\x02\x02\x02\u037D\u037E\x07\x9E\x02\x02\u037E\u037F\x05\u0126" +
		"\x94\x02\u037F\u0380\b\x93\x01\x02\u0380\u03A7\x03\x02\x02\x02\u0381\u0382" +
		"\x07\xA8\x02\x02\u0382\u03A7\x05\u0126\x94\x02\u0383\u0384\x07\xA2\x02" +
		"\x02\u0384\u0385\x05\u0126\x94\x02\u0385\u0386\b\x93\x01\x02\u0386\u03A7" +
		"\x03\x02\x02\x02\u0387\u0388\x07\xA7\x02\x02\u0388\u0389\x05\u0126\x94" +
		"\x02\u0389\u038A\b\x93\x01\x02\u038A\u03A7\x03\x02\x02\x02\u038B\u038C" +
		"\x07\xA3\x02\x02\u038C\u038D\x05\u0126\x94\x02\u038D\u038E\b\x93\x01\x02" +
		"\u038E\u03A7\x03\x02\x02\x02\u038F\u0390\x07\xA4\x02\x02\u0390\u0391\x05" +
		"\u0126\x94\x02\u0391\u0392\b\x93\x01\x02\u0392\u03A7\x03\x02\x02\x02\u0393" +
		"\u0394\x07\xA6\x02\x02\u0394\u0395\x05\u0126\x94\x02\u0395\u0396\b\x93" +
		"\x01\x02\u0396\u03A7\x03\x02\x02\x02\u0397\u0398\x07\x98\x02\x02\u0398" +
		"\u0399\x05\u0126\x94\x02\u0399\u039A\b\x93\x01\x02\u039A\u03A7\x03\x02" +
		"\x02\x02\u039B\u039C\x07\xA9\x02\x02\u039C\u03A7\x05\u0126\x94\x02\u039D" +
		"\u039E\x07\x9B\x02\x02\u039E\u039F\x05\u0126\x94\x02\u039F\u03A0\x07\xB4" +
		"\x02\x02\u03A0\u03A1\x05\u0126\x94\x02\u03A1\u03A7\x03\x02\x02\x02\u03A2" +
		"\u03A7\x05\f\x07\x02\u03A3\u03A4\x05\u0128\x95\x02\u03A4\u03A5\b\x93\x01" +
		"\x02\u03A5\u03A7\x03\x02\x02\x02\u03A6\u036D\x03\x02\x02\x02\u03A6\u0371" +
		"\x03\x02\x02\x02\u03A6\u0375\x03\x02\x02\x02\u03A6\u0379\x03\x02\x02\x02" +
		"\u03A6\u037D\x03\x02\x02\x02\u03A6\u0381\x03\x02\x02\x02\u03A6\u0383\x03" +
		"\x02\x02\x02\u03A6\u0387\x03\x02\x02\x02\u03A6\u038B\x03\x02\x02\x02\u03A6" +
		"\u038F\x03\x02\x02\x02\u03A6\u0393\x03\x02\x02\x02\u03A6\u0397\x03\x02" +
		"\x02\x02\u03A6\u039B\x03\x02\x02\x02\u03A6\u039D\x03\x02\x02\x02\u03A6" +
		"\u03A2\x03\x02\x02\x02\u03A6\u03A3\x03\x02\x02\x02\u03A7\u0125\x03\x02" +
		"\x02\x02\u03A8\u03A9\x07\xB7\x02\x02\u03A9\u03AA\x05\u0118\x8D\x02\u03AA" +
		"\u03AB\x07\xB8\x02\x02\u03AB\u03AC\b\x94\x01\x02\u03AC\u0127\x03\x02\x02" +
		"\x02\u03AD\u03AE\x05\u0126\x94\x02\u03AE\u03AF\b\x95\x01\x02\u03AF\u03B4" +
		"\x03\x02\x02\x02\u03B0\u03B4\x05\f\x07\x02\u03B1\u03B2\x07\x87\x02\x02" +
		"\u03B2\u03B4\b\x95\x01\x02\u03B3\u03AD\x03\x02\x02\x02\u03B3\u03B0\x03" +
		"\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u0129\x03\x02\x02\x02\u03B5" +
		"\u03B6\x07\x85\x02\x02\u03B6\u012B\x03\x02\x02\x02\u03B7\u03B8\x07.\x02" +
		"\x02\u03B8\u03BB\x07\x86\x02\x02\u03B9\u03BB\x07\x86\x02\x02\u03BA\u03B7" +
		"\x03\x02\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BB\u012D\x03\x02\x02\x02" +
		"8\u0133\u0138\u013D\u0140\u0143\u0146\u014B\u0156\u0165\u016D\u0172\u0176" +
		"\u017C\u018E\u0193\u0198\u01A1\u01AD\u01C6\u01CA\u01CF\u01D3\u01F8\u0205" +
		"\u0216\u021B\u021F\u0223\u0227\u022C\u0230\u0234\u023F\u0244\u024F\u02C1" +
		"\u02C9\u02D0\u02D5\u02D9\u02E3\u02ED\u0336\u0338\u0349\u034B\u0354\u0356" +
		"\u0361\u0363\u0369\u03A6\u03B3\u03BA";
	public static readonly _serializedATN: string = Utils.join(
		[
			gcodeParser._serializedATNSegment0,
			gcodeParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gcodeParser.__ATN) {
			gcodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gcodeParser._serializedATN));
		}

		return gcodeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.PERCENT);
		} else {
			return this.getToken(gcodeParser.PERCENT, i);
		}
	}
	public END_OF_LINE(): TerminalNode[];
	public END_OF_LINE(i: number): TerminalNode;
	public END_OF_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.END_OF_LINE);
		} else {
			return this.getToken(gcodeParser.END_OF_LINE, i);
		}
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_program; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public endOfLine(): EndOfLineContext {
		return this.getRuleContext(0, EndOfLineContext);
	}
	public BLOCK_DELETE(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.BLOCK_DELETE, 0); }
	public lineNumber(): LineNumberContext | undefined {
		return this.tryGetRuleContext(0, LineNumberContext);
	}
	public segment(): SegmentContext[];
	public segment(i: number): SegmentContext;
	public segment(i?: number): SegmentContext | SegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentContext);
		} else {
			return this.getRuleContext(i, SegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_line; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public word(): WordContext | undefined {
		return this.tryGetRuleContext(0, WordContext);
	}
	public parameterSetting(): ParameterSettingContext | undefined {
		return this.tryGetRuleContext(0, ParameterSettingContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public oword_label(): Oword_labelContext | undefined {
		return this.tryGetRuleContext(0, Oword_labelContext);
	}
	public oword_statement(): Oword_statementContext | undefined {
		return this.tryGetRuleContext(0, Oword_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_segment; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitSegment) {
			return visitor.visitSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public MESSAGE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.MESSAGE_COMMENT, 0); }
	public IGNORED_COMMENT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.IGNORED_COMMENT, 0); }
	public LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_comment; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterSettingContext extends ParserRuleContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(gcodeParser.EQUALS, 0); }
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_parameterSetting; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterParameterSetting) {
			listener.enterParameterSetting(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitParameterSetting) {
			listener.exitParameterSetting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitParameterSetting) {
			return visitor.visitParameterSetting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(gcodeParser.HASH, 0); }
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_parameter; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.NUMBER, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.NAME, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public bracketExpression(): BracketExpressionContext | undefined {
		return this.tryGetRuleContext(0, BracketExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_designator; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Oword_labelContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.NUMBER, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.NAME, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_oword_label; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterOword_label) {
			listener.enterOword_label(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitOword_label) {
			listener.exitOword_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitOword_label) {
			return visitor.visitOword_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Oword_statementContext extends ParserRuleContext {
	public SUB(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.SUB, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.RETURN, 0); }
	public bracketExpression(): BracketExpressionContext[];
	public bracketExpression(i: number): BracketExpressionContext;
	public bracketExpression(i?: number): BracketExpressionContext | BracketExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BracketExpressionContext);
		} else {
			return this.getRuleContext(i, BracketExpressionContext);
		}
	}
	public ENDSUB(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ENDSUB, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.CALL, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.DO, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.WHILE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.IF, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ELSEIF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ELSE, 0); }
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ENDIF, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.CONTINUE, 0); }
	public ENDWHILE(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ENDWHILE, 0); }
	public REPEAT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.REPEAT, 0); }
	public ENDREPEAT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ENDREPEAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_oword_statement; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterOword_statement) {
			listener.enterOword_statement(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitOword_statement) {
			listener.exitOword_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitOword_statement) {
			return visitor.visitOword_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public bracketExpression(): BracketExpressionContext[];
	public bracketExpression(i: number): BracketExpressionContext;
	public bracketExpression(i?: number): BracketExpressionContext | BracketExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BracketExpressionContext);
		} else {
			return this.getRuleContext(i, BracketExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptReturnValueContext extends ParserRuleContext {
	public bracketExpression(): BracketExpressionContext | undefined {
		return this.tryGetRuleContext(0, BracketExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_optReturnValue; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterOptReturnValue) {
			listener.enterOptReturnValue(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitOptReturnValue) {
			listener.exitOptReturnValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitOptReturnValue) {
			return visitor.visitOptReturnValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public gWord(): GWordContext | undefined {
		return this.tryGetRuleContext(0, GWordContext);
	}
	public mWord(): MWordContext | undefined {
		return this.tryGetRuleContext(0, MWordContext);
	}
	public axisWord(): AxisWordContext | undefined {
		return this.tryGetRuleContext(0, AxisWordContext);
	}
	public dimensionWord(): DimensionWordContext | undefined {
		return this.tryGetRuleContext(0, DimensionWordContext);
	}
	public wordLetter(): WordLetterContext | undefined {
		return this.tryGetRuleContext(0, WordLetterContext);
	}
	public e(): EContext | undefined {
		return this.tryGetRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_word; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AxisWordContext extends ParserRuleContext {
	public a(): AContext | undefined {
		return this.tryGetRuleContext(0, AContext);
	}
	public b(): BContext | undefined {
		return this.tryGetRuleContext(0, BContext);
	}
	public c(): CContext | undefined {
		return this.tryGetRuleContext(0, CContext);
	}
	public i(): IContext | undefined {
		return this.tryGetRuleContext(0, IContext);
	}
	public j(): JContext | undefined {
		return this.tryGetRuleContext(0, JContext);
	}
	public k(): KContext | undefined {
		return this.tryGetRuleContext(0, KContext);
	}
	public r(): RContext | undefined {
		return this.tryGetRuleContext(0, RContext);
	}
	public x(): XContext | undefined {
		return this.tryGetRuleContext(0, XContext);
	}
	public y(): YContext | undefined {
		return this.tryGetRuleContext(0, YContext);
	}
	public z(): ZContext | undefined {
		return this.tryGetRuleContext(0, ZContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_axisWord; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterAxisWord) {
			listener.enterAxisWord(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitAxisWord) {
			listener.exitAxisWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitAxisWord) {
			return visitor.visitAxisWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_a; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterA) {
			listener.enterA(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitA) {
			listener.exitA(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitA) {
			return visitor.visitA(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_b; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterB) {
			listener.enterB(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitB) {
			listener.exitB(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitB) {
			return visitor.visitB(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_c; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterC) {
			listener.enterC(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitC) {
			listener.exitC(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitC) {
			return visitor.visitC(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_i; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterI) {
			listener.enterI(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitI) {
			listener.exitI(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitI) {
			return visitor.visitI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_j; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterJ) {
			listener.enterJ(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitJ) {
			listener.exitJ(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitJ) {
			return visitor.visitJ(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_k; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterK) {
			listener.enterK(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitK) {
			listener.exitK(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitK) {
			return visitor.visitK(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_r; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterR) {
			listener.enterR(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitR) {
			listener.exitR(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitR) {
			return visitor.visitR(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XContext extends ParserRuleContext {
	public e(): EContext | undefined {
		return this.tryGetRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_x; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterX) {
			listener.enterX(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitX) {
			listener.exitX(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitX) {
			return visitor.visitX(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YContext extends ParserRuleContext {
	public e(): EContext | undefined {
		return this.tryGetRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_y; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterY) {
			listener.enterY(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitY) {
			listener.exitY(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitY) {
			return visitor.visitY(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZContext extends ParserRuleContext {
	public e(): EContext | undefined {
		return this.tryGetRuleContext(0, EContext);
	}
	public LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_z; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterZ) {
			listener.enterZ(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitZ) {
			listener.exitZ(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitZ) {
			return visitor.visitZ(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionWordContext extends ParserRuleContext {
	public f(): FContext | undefined {
		return this.tryGetRuleContext(0, FContext);
	}
	public ex(): ExContext | undefined {
		return this.tryGetRuleContext(0, ExContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_dimensionWord; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterDimensionWord) {
			listener.enterDimensionWord(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitDimensionWord) {
			listener.exitDimensionWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitDimensionWord) {
			return visitor.visitDimensionWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_f; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterF) {
			listener.enterF(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitF) {
			listener.exitF(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitF) {
			return visitor.visitF(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExContext extends ParserRuleContext {
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_ex; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterEx) {
			listener.enterEx(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitEx) {
			listener.exitEx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitEx) {
			return visitor.visitEx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_d; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterD) {
			listener.enterD(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitD) {
			listener.exitD(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitD) {
			return visitor.visitD(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG) {
			listener.enterG(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG) {
			listener.exitG(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG) {
			return visitor.visitG(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_h; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterH) {
			listener.enterH(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitH) {
			listener.exitH(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitH) {
			return visitor.visitH(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_l; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterL) {
			listener.enterL(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitL) {
			listener.exitL(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitL) {
			return visitor.visitL(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM) {
			listener.enterM(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM) {
			listener.exitM(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM) {
			return visitor.visitM(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_p; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterP) {
			listener.enterP(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitP) {
			listener.exitP(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitP) {
			return visitor.visitP(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_q; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterQ) {
			listener.enterQ(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitQ) {
			listener.exitQ(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitQ) {
			return visitor.visitQ(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_s; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterS) {
			listener.enterS(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitS) {
			listener.exitS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitS) {
			return visitor.visitS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_t; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterT) {
			listener.enterT(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitT) {
			listener.exitT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitT) {
			return visitor.visitT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordLetterContext extends ParserRuleContext {
	public d(): DContext | undefined {
		return this.tryGetRuleContext(0, DContext);
	}
	public g(): GContext | undefined {
		return this.tryGetRuleContext(0, GContext);
	}
	public h(): HContext | undefined {
		return this.tryGetRuleContext(0, HContext);
	}
	public l(): LContext | undefined {
		return this.tryGetRuleContext(0, LContext);
	}
	public m(): MContext | undefined {
		return this.tryGetRuleContext(0, MContext);
	}
	public p(): PContext | undefined {
		return this.tryGetRuleContext(0, PContext);
	}
	public q(): QContext | undefined {
		return this.tryGetRuleContext(0, QContext);
	}
	public s(): SContext | undefined {
		return this.tryGetRuleContext(0, SContext);
	}
	public t(): TContext | undefined {
		return this.tryGetRuleContext(0, TContext);
	}
	public ATSIGN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ATSIGN, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_wordLetter; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterWordLetter) {
			listener.enterWordLetter(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitWordLetter) {
			listener.exitWordLetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitWordLetter) {
			return visitor.visitWordLetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GWordContext extends ParserRuleContext {
	public group0(): Group0Context | undefined {
		return this.tryGetRuleContext(0, Group0Context);
	}
	public group1(): Group1Context | undefined {
		return this.tryGetRuleContext(0, Group1Context);
	}
	public group2(): Group2Context | undefined {
		return this.tryGetRuleContext(0, Group2Context);
	}
	public group3(): Group3Context | undefined {
		return this.tryGetRuleContext(0, Group3Context);
	}
	public group5(): Group5Context | undefined {
		return this.tryGetRuleContext(0, Group5Context);
	}
	public group6(): Group6Context | undefined {
		return this.tryGetRuleContext(0, Group6Context);
	}
	public group7(): Group7Context | undefined {
		return this.tryGetRuleContext(0, Group7Context);
	}
	public group8(): Group8Context | undefined {
		return this.tryGetRuleContext(0, Group8Context);
	}
	public group10(): Group10Context | undefined {
		return this.tryGetRuleContext(0, Group10Context);
	}
	public group12(): Group12Context | undefined {
		return this.tryGetRuleContext(0, Group12Context);
	}
	public group13(): Group13Context | undefined {
		return this.tryGetRuleContext(0, Group13Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_gWord; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGWord) {
			listener.enterGWord(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGWord) {
			listener.exitGWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGWord) {
			return visitor.visitGWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group1Context extends ParserRuleContext {
	public g0(): G0Context | undefined {
		return this.tryGetRuleContext(0, G0Context);
	}
	public g1(): G1Context | undefined {
		return this.tryGetRuleContext(0, G1Context);
	}
	public g2(): G2Context | undefined {
		return this.tryGetRuleContext(0, G2Context);
	}
	public g3(): G3Context | undefined {
		return this.tryGetRuleContext(0, G3Context);
	}
	public g38_2(): G38_2Context | undefined {
		return this.tryGetRuleContext(0, G38_2Context);
	}
	public g80(): G80Context | undefined {
		return this.tryGetRuleContext(0, G80Context);
	}
	public g81(): G81Context | undefined {
		return this.tryGetRuleContext(0, G81Context);
	}
	public g82(): G82Context | undefined {
		return this.tryGetRuleContext(0, G82Context);
	}
	public g83(): G83Context | undefined {
		return this.tryGetRuleContext(0, G83Context);
	}
	public g84(): G84Context | undefined {
		return this.tryGetRuleContext(0, G84Context);
	}
	public g85(): G85Context | undefined {
		return this.tryGetRuleContext(0, G85Context);
	}
	public g86(): G86Context | undefined {
		return this.tryGetRuleContext(0, G86Context);
	}
	public g87(): G87Context | undefined {
		return this.tryGetRuleContext(0, G87Context);
	}
	public g88(): G88Context | undefined {
		return this.tryGetRuleContext(0, G88Context);
	}
	public g89(): G89Context | undefined {
		return this.tryGetRuleContext(0, G89Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup1) {
			listener.enterGroup1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup1) {
			listener.exitGroup1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup1) {
			return visitor.visitGroup1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group2Context extends ParserRuleContext {
	public g17(): G17Context | undefined {
		return this.tryGetRuleContext(0, G17Context);
	}
	public g18(): G18Context | undefined {
		return this.tryGetRuleContext(0, G18Context);
	}
	public g19(): G19Context | undefined {
		return this.tryGetRuleContext(0, G19Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup2) {
			listener.enterGroup2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup2) {
			listener.exitGroup2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup2) {
			return visitor.visitGroup2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group3Context extends ParserRuleContext {
	public g90(): G90Context | undefined {
		return this.tryGetRuleContext(0, G90Context);
	}
	public g91(): G91Context | undefined {
		return this.tryGetRuleContext(0, G91Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group3; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup3) {
			listener.enterGroup3(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup3) {
			listener.exitGroup3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup3) {
			return visitor.visitGroup3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group5Context extends ParserRuleContext {
	public g93(): G93Context | undefined {
		return this.tryGetRuleContext(0, G93Context);
	}
	public g94(): G94Context | undefined {
		return this.tryGetRuleContext(0, G94Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group5; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup5) {
			listener.enterGroup5(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup5) {
			listener.exitGroup5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup5) {
			return visitor.visitGroup5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group6Context extends ParserRuleContext {
	public g20(): G20Context | undefined {
		return this.tryGetRuleContext(0, G20Context);
	}
	public g21(): G21Context | undefined {
		return this.tryGetRuleContext(0, G21Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group6; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup6) {
			listener.enterGroup6(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup6) {
			listener.exitGroup6(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup6) {
			return visitor.visitGroup6(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group7Context extends ParserRuleContext {
	public g40(): G40Context | undefined {
		return this.tryGetRuleContext(0, G40Context);
	}
	public g41(): G41Context | undefined {
		return this.tryGetRuleContext(0, G41Context);
	}
	public g42(): G42Context | undefined {
		return this.tryGetRuleContext(0, G42Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group7; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup7) {
			listener.enterGroup7(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup7) {
			listener.exitGroup7(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup7) {
			return visitor.visitGroup7(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group8Context extends ParserRuleContext {
	public g43(): G43Context | undefined {
		return this.tryGetRuleContext(0, G43Context);
	}
	public g49(): G49Context | undefined {
		return this.tryGetRuleContext(0, G49Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group8; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup8) {
			listener.enterGroup8(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup8) {
			listener.exitGroup8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup8) {
			return visitor.visitGroup8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group10Context extends ParserRuleContext {
	public g98(): G98Context | undefined {
		return this.tryGetRuleContext(0, G98Context);
	}
	public g99(): G99Context | undefined {
		return this.tryGetRuleContext(0, G99Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group10; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup10) {
			listener.enterGroup10(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup10) {
			listener.exitGroup10(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup10) {
			return visitor.visitGroup10(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group12Context extends ParserRuleContext {
	public g54(): G54Context | undefined {
		return this.tryGetRuleContext(0, G54Context);
	}
	public g55(): G55Context | undefined {
		return this.tryGetRuleContext(0, G55Context);
	}
	public g56(): G56Context | undefined {
		return this.tryGetRuleContext(0, G56Context);
	}
	public g57(): G57Context | undefined {
		return this.tryGetRuleContext(0, G57Context);
	}
	public g58(): G58Context | undefined {
		return this.tryGetRuleContext(0, G58Context);
	}
	public g59(): G59Context | undefined {
		return this.tryGetRuleContext(0, G59Context);
	}
	public g59_1(): G59_1Context | undefined {
		return this.tryGetRuleContext(0, G59_1Context);
	}
	public g59_2(): G59_2Context | undefined {
		return this.tryGetRuleContext(0, G59_2Context);
	}
	public g59_3(): G59_3Context | undefined {
		return this.tryGetRuleContext(0, G59_3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group12; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup12) {
			listener.enterGroup12(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup12) {
			listener.exitGroup12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup12) {
			return visitor.visitGroup12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group13Context extends ParserRuleContext {
	public g61(): G61Context | undefined {
		return this.tryGetRuleContext(0, G61Context);
	}
	public g61_1(): G61_1Context | undefined {
		return this.tryGetRuleContext(0, G61_1Context);
	}
	public g64(): G64Context | undefined {
		return this.tryGetRuleContext(0, G64Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group13; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup13) {
			listener.enterGroup13(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup13) {
			listener.exitGroup13(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup13) {
			return visitor.visitGroup13(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group0Context extends ParserRuleContext {
	public g4(): G4Context | undefined {
		return this.tryGetRuleContext(0, G4Context);
	}
	public g10(): G10Context | undefined {
		return this.tryGetRuleContext(0, G10Context);
	}
	public g28(): G28Context | undefined {
		return this.tryGetRuleContext(0, G28Context);
	}
	public g30(): G30Context | undefined {
		return this.tryGetRuleContext(0, G30Context);
	}
	public g53(): G53Context | undefined {
		return this.tryGetRuleContext(0, G53Context);
	}
	public g92(): G92Context | undefined {
		return this.tryGetRuleContext(0, G92Context);
	}
	public g92_1(): G92_1Context | undefined {
		return this.tryGetRuleContext(0, G92_1Context);
	}
	public g92_2(): G92_2Context | undefined {
		return this.tryGetRuleContext(0, G92_2Context);
	}
	public g92_3(): G92_3Context | undefined {
		return this.tryGetRuleContext(0, G92_3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_group0; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterGroup0) {
			listener.enterGroup0(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitGroup0) {
			listener.exitGroup0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitGroup0) {
			return visitor.visitGroup0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G0Context extends ParserRuleContext {
	public G0(): TerminalNode { return this.getToken(gcodeParser.G0, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g0; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG0) {
			listener.enterG0(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG0) {
			listener.exitG0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG0) {
			return visitor.visitG0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G1Context extends ParserRuleContext {
	public G1(): TerminalNode { return this.getToken(gcodeParser.G1, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG1) {
			listener.enterG1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG1) {
			listener.exitG1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG1) {
			return visitor.visitG1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G2Context extends ParserRuleContext {
	public G2(): TerminalNode { return this.getToken(gcodeParser.G2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG2) {
			listener.enterG2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG2) {
			listener.exitG2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG2) {
			return visitor.visitG2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G3Context extends ParserRuleContext {
	public G3(): TerminalNode { return this.getToken(gcodeParser.G3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g3; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG3) {
			listener.enterG3(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG3) {
			listener.exitG3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG3) {
			return visitor.visitG3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G4Context extends ParserRuleContext {
	public G4(): TerminalNode { return this.getToken(gcodeParser.G4, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g4; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG4) {
			listener.enterG4(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG4) {
			listener.exitG4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG4) {
			return visitor.visitG4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G10Context extends ParserRuleContext {
	public G10(): TerminalNode { return this.getToken(gcodeParser.G10, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g10; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG10) {
			listener.enterG10(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG10) {
			listener.exitG10(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG10) {
			return visitor.visitG10(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G17Context extends ParserRuleContext {
	public G17(): TerminalNode { return this.getToken(gcodeParser.G17, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g17; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG17) {
			listener.enterG17(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG17) {
			listener.exitG17(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG17) {
			return visitor.visitG17(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G18Context extends ParserRuleContext {
	public G18(): TerminalNode { return this.getToken(gcodeParser.G18, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g18; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG18) {
			listener.enterG18(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG18) {
			listener.exitG18(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG18) {
			return visitor.visitG18(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G19Context extends ParserRuleContext {
	public G19(): TerminalNode { return this.getToken(gcodeParser.G19, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g19; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG19) {
			listener.enterG19(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG19) {
			listener.exitG19(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG19) {
			return visitor.visitG19(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G20Context extends ParserRuleContext {
	public G20(): TerminalNode { return this.getToken(gcodeParser.G20, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g20; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG20) {
			listener.enterG20(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG20) {
			listener.exitG20(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG20) {
			return visitor.visitG20(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G21Context extends ParserRuleContext {
	public G21(): TerminalNode { return this.getToken(gcodeParser.G21, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g21; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG21) {
			listener.enterG21(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG21) {
			listener.exitG21(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG21) {
			return visitor.visitG21(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G28Context extends ParserRuleContext {
	public G28(): TerminalNode { return this.getToken(gcodeParser.G28, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g28; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG28) {
			listener.enterG28(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG28) {
			listener.exitG28(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG28) {
			return visitor.visitG28(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G30Context extends ParserRuleContext {
	public G30(): TerminalNode { return this.getToken(gcodeParser.G30, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g30; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG30) {
			listener.enterG30(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG30) {
			listener.exitG30(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG30) {
			return visitor.visitG30(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G38_2Context extends ParserRuleContext {
	public G38_2(): TerminalNode { return this.getToken(gcodeParser.G38_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g38_2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG38_2) {
			listener.enterG38_2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG38_2) {
			listener.exitG38_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG38_2) {
			return visitor.visitG38_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G40Context extends ParserRuleContext {
	public G40(): TerminalNode { return this.getToken(gcodeParser.G40, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g40; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG40) {
			listener.enterG40(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG40) {
			listener.exitG40(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG40) {
			return visitor.visitG40(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G41Context extends ParserRuleContext {
	public G41(): TerminalNode { return this.getToken(gcodeParser.G41, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g41; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG41) {
			listener.enterG41(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG41) {
			listener.exitG41(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG41) {
			return visitor.visitG41(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G42Context extends ParserRuleContext {
	public G42(): TerminalNode { return this.getToken(gcodeParser.G42, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g42; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG42) {
			listener.enterG42(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG42) {
			listener.exitG42(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG42) {
			return visitor.visitG42(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G43Context extends ParserRuleContext {
	public G43(): TerminalNode { return this.getToken(gcodeParser.G43, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g43; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG43) {
			listener.enterG43(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG43) {
			listener.exitG43(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG43) {
			return visitor.visitG43(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G49Context extends ParserRuleContext {
	public G49(): TerminalNode { return this.getToken(gcodeParser.G49, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g49; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG49) {
			listener.enterG49(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG49) {
			listener.exitG49(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG49) {
			return visitor.visitG49(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G53Context extends ParserRuleContext {
	public G53(): TerminalNode { return this.getToken(gcodeParser.G53, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g53; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG53) {
			listener.enterG53(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG53) {
			listener.exitG53(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG53) {
			return visitor.visitG53(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G54Context extends ParserRuleContext {
	public G54(): TerminalNode { return this.getToken(gcodeParser.G54, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g54; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG54) {
			listener.enterG54(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG54) {
			listener.exitG54(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG54) {
			return visitor.visitG54(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G55Context extends ParserRuleContext {
	public G55(): TerminalNode { return this.getToken(gcodeParser.G55, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g55; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG55) {
			listener.enterG55(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG55) {
			listener.exitG55(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG55) {
			return visitor.visitG55(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G56Context extends ParserRuleContext {
	public G56(): TerminalNode { return this.getToken(gcodeParser.G56, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g56; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG56) {
			listener.enterG56(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG56) {
			listener.exitG56(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG56) {
			return visitor.visitG56(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G57Context extends ParserRuleContext {
	public G57(): TerminalNode { return this.getToken(gcodeParser.G57, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g57; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG57) {
			listener.enterG57(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG57) {
			listener.exitG57(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG57) {
			return visitor.visitG57(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G58Context extends ParserRuleContext {
	public G58(): TerminalNode { return this.getToken(gcodeParser.G58, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g58; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG58) {
			listener.enterG58(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG58) {
			listener.exitG58(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG58) {
			return visitor.visitG58(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G59Context extends ParserRuleContext {
	public G59(): TerminalNode { return this.getToken(gcodeParser.G59, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g59; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG59) {
			listener.enterG59(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG59) {
			listener.exitG59(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG59) {
			return visitor.visitG59(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G59_1Context extends ParserRuleContext {
	public G59_1(): TerminalNode { return this.getToken(gcodeParser.G59_1, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g59_1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG59_1) {
			listener.enterG59_1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG59_1) {
			listener.exitG59_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG59_1) {
			return visitor.visitG59_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G59_2Context extends ParserRuleContext {
	public G59_2(): TerminalNode { return this.getToken(gcodeParser.G59_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g59_2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG59_2) {
			listener.enterG59_2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG59_2) {
			listener.exitG59_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG59_2) {
			return visitor.visitG59_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G59_3Context extends ParserRuleContext {
	public G59_3(): TerminalNode { return this.getToken(gcodeParser.G59_3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g59_3; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG59_3) {
			listener.enterG59_3(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG59_3) {
			listener.exitG59_3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG59_3) {
			return visitor.visitG59_3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G61Context extends ParserRuleContext {
	public G61(): TerminalNode { return this.getToken(gcodeParser.G61, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g61; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG61) {
			listener.enterG61(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG61) {
			listener.exitG61(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG61) {
			return visitor.visitG61(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G61_1Context extends ParserRuleContext {
	public G61_1(): TerminalNode { return this.getToken(gcodeParser.G61_1, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g61_1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG61_1) {
			listener.enterG61_1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG61_1) {
			listener.exitG61_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG61_1) {
			return visitor.visitG61_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G64Context extends ParserRuleContext {
	public G64(): TerminalNode { return this.getToken(gcodeParser.G64, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g64; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG64) {
			listener.enterG64(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG64) {
			listener.exitG64(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG64) {
			return visitor.visitG64(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G80Context extends ParserRuleContext {
	public G80(): TerminalNode { return this.getToken(gcodeParser.G80, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g80; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG80) {
			listener.enterG80(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG80) {
			listener.exitG80(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG80) {
			return visitor.visitG80(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G81Context extends ParserRuleContext {
	public G81(): TerminalNode { return this.getToken(gcodeParser.G81, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g81; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG81) {
			listener.enterG81(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG81) {
			listener.exitG81(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG81) {
			return visitor.visitG81(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G82Context extends ParserRuleContext {
	public G82(): TerminalNode { return this.getToken(gcodeParser.G82, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g82; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG82) {
			listener.enterG82(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG82) {
			listener.exitG82(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG82) {
			return visitor.visitG82(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G83Context extends ParserRuleContext {
	public G83(): TerminalNode { return this.getToken(gcodeParser.G83, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g83; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG83) {
			listener.enterG83(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG83) {
			listener.exitG83(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG83) {
			return visitor.visitG83(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G84Context extends ParserRuleContext {
	public G84(): TerminalNode { return this.getToken(gcodeParser.G84, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g84; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG84) {
			listener.enterG84(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG84) {
			listener.exitG84(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG84) {
			return visitor.visitG84(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G85Context extends ParserRuleContext {
	public G85(): TerminalNode { return this.getToken(gcodeParser.G85, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g85; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG85) {
			listener.enterG85(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG85) {
			listener.exitG85(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG85) {
			return visitor.visitG85(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G86Context extends ParserRuleContext {
	public G86(): TerminalNode { return this.getToken(gcodeParser.G86, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g86; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG86) {
			listener.enterG86(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG86) {
			listener.exitG86(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG86) {
			return visitor.visitG86(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G87Context extends ParserRuleContext {
	public G87(): TerminalNode { return this.getToken(gcodeParser.G87, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g87; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG87) {
			listener.enterG87(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG87) {
			listener.exitG87(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG87) {
			return visitor.visitG87(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G88Context extends ParserRuleContext {
	public G88(): TerminalNode { return this.getToken(gcodeParser.G88, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g88; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG88) {
			listener.enterG88(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG88) {
			listener.exitG88(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG88) {
			return visitor.visitG88(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G89Context extends ParserRuleContext {
	public G89(): TerminalNode { return this.getToken(gcodeParser.G89, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g89; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG89) {
			listener.enterG89(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG89) {
			listener.exitG89(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG89) {
			return visitor.visitG89(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G90Context extends ParserRuleContext {
	public G90(): TerminalNode { return this.getToken(gcodeParser.G90, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g90; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG90) {
			listener.enterG90(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG90) {
			listener.exitG90(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG90) {
			return visitor.visitG90(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G91Context extends ParserRuleContext {
	public G91(): TerminalNode { return this.getToken(gcodeParser.G91, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g91; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG91) {
			listener.enterG91(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG91) {
			listener.exitG91(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG91) {
			return visitor.visitG91(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G92Context extends ParserRuleContext {
	public G92(): TerminalNode { return this.getToken(gcodeParser.G92, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g92; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG92) {
			listener.enterG92(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG92) {
			listener.exitG92(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG92) {
			return visitor.visitG92(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G92_1Context extends ParserRuleContext {
	public G92_1(): TerminalNode { return this.getToken(gcodeParser.G92_1, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g92_1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG92_1) {
			listener.enterG92_1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG92_1) {
			listener.exitG92_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG92_1) {
			return visitor.visitG92_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G92_2Context extends ParserRuleContext {
	public G92_2(): TerminalNode { return this.getToken(gcodeParser.G92_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g92_2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG92_2) {
			listener.enterG92_2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG92_2) {
			listener.exitG92_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG92_2) {
			return visitor.visitG92_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G92_3Context extends ParserRuleContext {
	public G92_3(): TerminalNode { return this.getToken(gcodeParser.G92_3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g92_3; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG92_3) {
			listener.enterG92_3(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG92_3) {
			listener.exitG92_3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG92_3) {
			return visitor.visitG92_3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G93Context extends ParserRuleContext {
	public G93(): TerminalNode { return this.getToken(gcodeParser.G93, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g93; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG93) {
			listener.enterG93(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG93) {
			listener.exitG93(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG93) {
			return visitor.visitG93(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G94Context extends ParserRuleContext {
	public G94(): TerminalNode { return this.getToken(gcodeParser.G94, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g94; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG94) {
			listener.enterG94(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG94) {
			listener.exitG94(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG94) {
			return visitor.visitG94(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G98Context extends ParserRuleContext {
	public G98(): TerminalNode { return this.getToken(gcodeParser.G98, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g98; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG98) {
			listener.enterG98(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG98) {
			listener.exitG98(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG98) {
			return visitor.visitG98(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class G99Context extends ParserRuleContext {
	public G99(): TerminalNode { return this.getToken(gcodeParser.G99, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_g99; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterG99) {
			listener.enterG99(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitG99) {
			listener.exitG99(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitG99) {
			return visitor.visitG99(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MWordContext extends ParserRuleContext {
	public mgroup4(): Mgroup4Context | undefined {
		return this.tryGetRuleContext(0, Mgroup4Context);
	}
	public mgroup6(): Mgroup6Context | undefined {
		return this.tryGetRuleContext(0, Mgroup6Context);
	}
	public mgroup7(): Mgroup7Context | undefined {
		return this.tryGetRuleContext(0, Mgroup7Context);
	}
	public mgroup8(): Mgroup8Context | undefined {
		return this.tryGetRuleContext(0, Mgroup8Context);
	}
	public mgroup9(): Mgroup9Context | undefined {
		return this.tryGetRuleContext(0, Mgroup9Context);
	}
	public mgroup10(): Mgroup10Context | undefined {
		return this.tryGetRuleContext(0, Mgroup10Context);
	}
	public mgroup11(): Mgroup11Context | undefined {
		return this.tryGetRuleContext(0, Mgroup11Context);
	}
	public mgroup12(): Mgroup12Context | undefined {
		return this.tryGetRuleContext(0, Mgroup12Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mWord; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMWord) {
			listener.enterMWord(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMWord) {
			listener.exitMWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMWord) {
			return visitor.visitMWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup4Context extends ParserRuleContext {
	public m0(): M0Context | undefined {
		return this.tryGetRuleContext(0, M0Context);
	}
	public m1(): M1Context | undefined {
		return this.tryGetRuleContext(0, M1Context);
	}
	public m2(): M2Context | undefined {
		return this.tryGetRuleContext(0, M2Context);
	}
	public m30(): M30Context | undefined {
		return this.tryGetRuleContext(0, M30Context);
	}
	public m60(): M60Context | undefined {
		return this.tryGetRuleContext(0, M60Context);
	}
	public m84(): M84Context | undefined {
		return this.tryGetRuleContext(0, M84Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup4; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup4) {
			listener.enterMgroup4(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup4) {
			listener.exitMgroup4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup4) {
			return visitor.visitMgroup4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup6Context extends ParserRuleContext {
	public m6(): M6Context {
		return this.getRuleContext(0, M6Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup6; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup6) {
			listener.enterMgroup6(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup6) {
			listener.exitMgroup6(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup6) {
			return visitor.visitMgroup6(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup7Context extends ParserRuleContext {
	public m3(): M3Context | undefined {
		return this.tryGetRuleContext(0, M3Context);
	}
	public m4(): M4Context | undefined {
		return this.tryGetRuleContext(0, M4Context);
	}
	public m5(): M5Context | undefined {
		return this.tryGetRuleContext(0, M5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup7; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup7) {
			listener.enterMgroup7(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup7) {
			listener.exitMgroup7(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup7) {
			return visitor.visitMgroup7(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup8Context extends ParserRuleContext {
	public m7(): M7Context | undefined {
		return this.tryGetRuleContext(0, M7Context);
	}
	public m8(): M8Context | undefined {
		return this.tryGetRuleContext(0, M8Context);
	}
	public m9(): M9Context | undefined {
		return this.tryGetRuleContext(0, M9Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup8; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup8) {
			listener.enterMgroup8(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup8) {
			listener.exitMgroup8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup8) {
			return visitor.visitMgroup8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup9Context extends ParserRuleContext {
	public m48(): M48Context | undefined {
		return this.tryGetRuleContext(0, M48Context);
	}
	public m49(): M49Context | undefined {
		return this.tryGetRuleContext(0, M49Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup9; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup9) {
			listener.enterMgroup9(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup9) {
			listener.exitMgroup9(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup9) {
			return visitor.visitMgroup9(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup10Context extends ParserRuleContext {
	public m82(): M82Context {
		return this.getRuleContext(0, M82Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup10; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup10) {
			listener.enterMgroup10(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup10) {
			listener.exitMgroup10(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup10) {
			return visitor.visitMgroup10(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup11Context extends ParserRuleContext {
	public m201(): M201Context | undefined {
		return this.tryGetRuleContext(0, M201Context);
	}
	public m203(): M203Context | undefined {
		return this.tryGetRuleContext(0, M203Context);
	}
	public m204(): M204Context | undefined {
		return this.tryGetRuleContext(0, M204Context);
	}
	public m205(): M205Context | undefined {
		return this.tryGetRuleContext(0, M205Context);
	}
	public m220(): M220Context | undefined {
		return this.tryGetRuleContext(0, M220Context);
	}
	public m221(): M221Context | undefined {
		return this.tryGetRuleContext(0, M221Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup11; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup11) {
			listener.enterMgroup11(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup11) {
			listener.exitMgroup11(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup11) {
			return visitor.visitMgroup11(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mgroup12Context extends ParserRuleContext {
	public m104(): M104Context | undefined {
		return this.tryGetRuleContext(0, M104Context);
	}
	public m105(): M105Context | undefined {
		return this.tryGetRuleContext(0, M105Context);
	}
	public m106(): M106Context | undefined {
		return this.tryGetRuleContext(0, M106Context);
	}
	public m107(): M107Context | undefined {
		return this.tryGetRuleContext(0, M107Context);
	}
	public m109(): M109Context | undefined {
		return this.tryGetRuleContext(0, M109Context);
	}
	public m140(): M140Context | undefined {
		return this.tryGetRuleContext(0, M140Context);
	}
	public m141(): M141Context | undefined {
		return this.tryGetRuleContext(0, M141Context);
	}
	public m190(): M190Context | undefined {
		return this.tryGetRuleContext(0, M190Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_mgroup12; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterMgroup12) {
			listener.enterMgroup12(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitMgroup12) {
			listener.exitMgroup12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitMgroup12) {
			return visitor.visitMgroup12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M0Context extends ParserRuleContext {
	public M0(): TerminalNode { return this.getToken(gcodeParser.M0, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m0; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM0) {
			listener.enterM0(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM0) {
			listener.exitM0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM0) {
			return visitor.visitM0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M1Context extends ParserRuleContext {
	public M1(): TerminalNode { return this.getToken(gcodeParser.M1, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m1; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM1) {
			listener.enterM1(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM1) {
			listener.exitM1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM1) {
			return visitor.visitM1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M2Context extends ParserRuleContext {
	public M2(): TerminalNode { return this.getToken(gcodeParser.M2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m2; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM2) {
			listener.enterM2(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM2) {
			listener.exitM2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM2) {
			return visitor.visitM2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M3Context extends ParserRuleContext {
	public M3(): TerminalNode { return this.getToken(gcodeParser.M3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m3; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM3) {
			listener.enterM3(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM3) {
			listener.exitM3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM3) {
			return visitor.visitM3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M4Context extends ParserRuleContext {
	public M4(): TerminalNode { return this.getToken(gcodeParser.M4, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m4; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM4) {
			listener.enterM4(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM4) {
			listener.exitM4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM4) {
			return visitor.visitM4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M5Context extends ParserRuleContext {
	public M5(): TerminalNode { return this.getToken(gcodeParser.M5, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m5; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM5) {
			listener.enterM5(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM5) {
			listener.exitM5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM5) {
			return visitor.visitM5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M6Context extends ParserRuleContext {
	public M6(): TerminalNode { return this.getToken(gcodeParser.M6, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m6; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM6) {
			listener.enterM6(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM6) {
			listener.exitM6(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM6) {
			return visitor.visitM6(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M7Context extends ParserRuleContext {
	public M7(): TerminalNode { return this.getToken(gcodeParser.M7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m7; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM7) {
			listener.enterM7(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM7) {
			listener.exitM7(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM7) {
			return visitor.visitM7(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M8Context extends ParserRuleContext {
	public M8(): TerminalNode { return this.getToken(gcodeParser.M8, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m8; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM8) {
			listener.enterM8(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM8) {
			listener.exitM8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM8) {
			return visitor.visitM8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M9Context extends ParserRuleContext {
	public M9(): TerminalNode { return this.getToken(gcodeParser.M9, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m9; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM9) {
			listener.enterM9(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM9) {
			listener.exitM9(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM9) {
			return visitor.visitM9(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M30Context extends ParserRuleContext {
	public M30(): TerminalNode { return this.getToken(gcodeParser.M30, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m30; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM30) {
			listener.enterM30(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM30) {
			listener.exitM30(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM30) {
			return visitor.visitM30(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M48Context extends ParserRuleContext {
	public M48(): TerminalNode { return this.getToken(gcodeParser.M48, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m48; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM48) {
			listener.enterM48(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM48) {
			listener.exitM48(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM48) {
			return visitor.visitM48(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M49Context extends ParserRuleContext {
	public M49(): TerminalNode { return this.getToken(gcodeParser.M49, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m49; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM49) {
			listener.enterM49(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM49) {
			listener.exitM49(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM49) {
			return visitor.visitM49(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M60Context extends ParserRuleContext {
	public M60(): TerminalNode { return this.getToken(gcodeParser.M60, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m60; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM60) {
			listener.enterM60(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM60) {
			listener.exitM60(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM60) {
			return visitor.visitM60(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M82Context extends ParserRuleContext {
	public M82(): TerminalNode { return this.getToken(gcodeParser.M82, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m82; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM82) {
			listener.enterM82(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM82) {
			listener.exitM82(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM82) {
			return visitor.visitM82(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M84Context extends ParserRuleContext {
	public M84(): TerminalNode { return this.getToken(gcodeParser.M84, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m84; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM84) {
			listener.enterM84(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM84) {
			listener.exitM84(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM84) {
			return visitor.visitM84(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M104Context extends ParserRuleContext {
	public M104(): TerminalNode { return this.getToken(gcodeParser.M104, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m104; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM104) {
			listener.enterM104(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM104) {
			listener.exitM104(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM104) {
			return visitor.visitM104(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M105Context extends ParserRuleContext {
	public M105(): TerminalNode { return this.getToken(gcodeParser.M105, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m105; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM105) {
			listener.enterM105(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM105) {
			listener.exitM105(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM105) {
			return visitor.visitM105(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M106Context extends ParserRuleContext {
	public M106(): TerminalNode { return this.getToken(gcodeParser.M106, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m106; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM106) {
			listener.enterM106(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM106) {
			listener.exitM106(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM106) {
			return visitor.visitM106(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M107Context extends ParserRuleContext {
	public M107(): TerminalNode { return this.getToken(gcodeParser.M107, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m107; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM107) {
			listener.enterM107(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM107) {
			listener.exitM107(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM107) {
			return visitor.visitM107(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M109Context extends ParserRuleContext {
	public M109(): TerminalNode { return this.getToken(gcodeParser.M109, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m109; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM109) {
			listener.enterM109(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM109) {
			listener.exitM109(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM109) {
			return visitor.visitM109(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M140Context extends ParserRuleContext {
	public M140(): TerminalNode { return this.getToken(gcodeParser.M140, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m140; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM140) {
			listener.enterM140(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM140) {
			listener.exitM140(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM140) {
			return visitor.visitM140(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M141Context extends ParserRuleContext {
	public M141(): TerminalNode { return this.getToken(gcodeParser.M141, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m141; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM141) {
			listener.enterM141(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM141) {
			listener.exitM141(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM141) {
			return visitor.visitM141(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M190Context extends ParserRuleContext {
	public M190(): TerminalNode { return this.getToken(gcodeParser.M190, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m190; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM190) {
			listener.enterM190(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM190) {
			listener.exitM190(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM190) {
			return visitor.visitM190(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M201Context extends ParserRuleContext {
	public M201(): TerminalNode { return this.getToken(gcodeParser.M201, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m201; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM201) {
			listener.enterM201(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM201) {
			listener.exitM201(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM201) {
			return visitor.visitM201(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M203Context extends ParserRuleContext {
	public M203(): TerminalNode { return this.getToken(gcodeParser.M203, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m203; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM203) {
			listener.enterM203(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM203) {
			listener.exitM203(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM203) {
			return visitor.visitM203(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M204Context extends ParserRuleContext {
	public M204(): TerminalNode { return this.getToken(gcodeParser.M204, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m204; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM204) {
			listener.enterM204(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM204) {
			listener.exitM204(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM204) {
			return visitor.visitM204(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M205Context extends ParserRuleContext {
	public M205(): TerminalNode { return this.getToken(gcodeParser.M205, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m205; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM205) {
			listener.enterM205(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM205) {
			listener.exitM205(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM205) {
			return visitor.visitM205(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M220Context extends ParserRuleContext {
	public M220(): TerminalNode { return this.getToken(gcodeParser.M220, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m220; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM220) {
			listener.enterM220(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM220) {
			listener.exitM220(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM220) {
			return visitor.visitM220(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M221Context extends ParserRuleContext {
	public M221(): TerminalNode { return this.getToken(gcodeParser.M221, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_m221; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterM221) {
			listener.enterM221(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitM221) {
			listener.exitM221(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitM221) {
			return visitor.visitM221(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EContext extends ParserRuleContext {
	public v: number;
	public _logicalExpression!: LogicalExpressionContext;
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_e; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterE) {
			listener.enterE(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitE) {
			listener.exitE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitE) {
			return visitor.visitE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public v: number;
	public _comparisonExpression!: ComparisonExpressionContext;
	public comparisonExpression(): ComparisonExpressionContext[];
	public comparisonExpression(i: number): ComparisonExpressionContext;
	public comparisonExpression(i?: number): ComparisonExpressionContext | ComparisonExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonExpressionContext);
		} else {
			return this.getRuleContext(i, ComparisonExpressionContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.OR);
		} else {
			return this.getToken(gcodeParser.OR, i);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.XOR);
		} else {
			return this.getToken(gcodeParser.XOR, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.AND);
		} else {
			return this.getToken(gcodeParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	public v: number;
	public _plusMinExpression!: PlusMinExpressionContext;
	public plusMinExpression(): PlusMinExpressionContext[];
	public plusMinExpression(i: number): PlusMinExpressionContext;
	public plusMinExpression(i?: number): PlusMinExpressionContext | PlusMinExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PlusMinExpressionContext);
		} else {
			return this.getRuleContext(i, PlusMinExpressionContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.EQ);
		} else {
			return this.getToken(gcodeParser.EQ, i);
		}
	}
	public NE(): TerminalNode[];
	public NE(i: number): TerminalNode;
	public NE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.NE);
		} else {
			return this.getToken(gcodeParser.NE, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.GT);
		} else {
			return this.getToken(gcodeParser.GT, i);
		}
	}
	public GE(): TerminalNode[];
	public GE(i: number): TerminalNode;
	public GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.GE);
		} else {
			return this.getToken(gcodeParser.GE, i);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.LT);
		} else {
			return this.getToken(gcodeParser.LT, i);
		}
	}
	public LE(): TerminalNode[];
	public LE(i: number): TerminalNode;
	public LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.LE);
		} else {
			return this.getToken(gcodeParser.LE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_comparisonExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterComparisonExpression) {
			listener.enterComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitComparisonExpression) {
			listener.exitComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitComparisonExpression) {
			return visitor.visitComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusMinExpressionContext extends ParserRuleContext {
	public v: number;
	public _aggregateExpression!: AggregateExpressionContext;
	public aggregateExpression(): AggregateExpressionContext[];
	public aggregateExpression(i: number): AggregateExpressionContext;
	public aggregateExpression(i?: number): AggregateExpressionContext | AggregateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AggregateExpressionContext);
		} else {
			return this.getRuleContext(i, AggregateExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.PLUS);
		} else {
			return this.getToken(gcodeParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.MINUS);
		} else {
			return this.getToken(gcodeParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_plusMinExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterPlusMinExpression) {
			listener.enterPlusMinExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitPlusMinExpression) {
			listener.exitPlusMinExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitPlusMinExpression) {
			return visitor.visitPlusMinExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateExpressionContext extends ParserRuleContext {
	public v: number;
	public _powerExpression!: PowerExpressionContext;
	public powerExpression(): PowerExpressionContext[];
	public powerExpression(i: number): PowerExpressionContext;
	public powerExpression(i?: number): PowerExpressionContext | PowerExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PowerExpressionContext);
		} else {
			return this.getRuleContext(i, PowerExpressionContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.TIMES);
		} else {
			return this.getToken(gcodeParser.TIMES, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.SLASH);
		} else {
			return this.getToken(gcodeParser.SLASH, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gcodeParser.MOD);
		} else {
			return this.getToken(gcodeParser.MOD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_aggregateExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterAggregateExpression) {
			listener.enterAggregateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitAggregateExpression) {
			listener.exitAggregateExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitAggregateExpression) {
			return visitor.visitAggregateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerExpressionContext extends ParserRuleContext {
	public v: number;
	public _unaryExpression!: UnaryExpressionContext;
	public _powerExpression!: PowerExpressionContext;
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.POWER, 0); }
	public powerExpression(): PowerExpressionContext | undefined {
		return this.tryGetRuleContext(0, PowerExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_powerExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public v: number;
	public _bracketExpression!: BracketExpressionContext;
	public _primitiveExpression!: PrimitiveExpressionContext;
	public ACOS(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ACOS, 0); }
	public bracketExpression(): BracketExpressionContext[];
	public bracketExpression(i: number): BracketExpressionContext;
	public bracketExpression(i?: number): BracketExpressionContext | BracketExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BracketExpressionContext);
		} else {
			return this.getRuleContext(i, BracketExpressionContext);
		}
	}
	public ASIN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ASIN, 0); }
	public COS(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.COS, 0); }
	public SIN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.SIN, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.TAN, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.LN, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.EXP, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.SQRT, 0); }
	public FIX(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.FIX, 0); }
	public FUP(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.FUP, 0); }
	public ROUND(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ROUND, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ABS, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.EXISTS, 0); }
	public ATAN(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.ATAN, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.SLASH, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public primitiveExpression(): PrimitiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketExpressionContext extends ParserRuleContext {
	public v: number;
	public _e!: EContext;
	public LBRACKET(): TerminalNode { return this.getToken(gcodeParser.LBRACKET, 0); }
	public e(): EContext {
		return this.getRuleContext(0, EContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(gcodeParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_bracketExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterBracketExpression) {
			listener.enterBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitBracketExpression) {
			listener.exitBracketExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitBracketExpression) {
			return visitor.visitBracketExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveExpressionContext extends ParserRuleContext {
	public v: number;
	public _bracketExpression!: BracketExpressionContext;
	public _NUMBER!: Token;
	public bracketExpression(): BracketExpressionContext | undefined {
		return this.tryGetRuleContext(0, BracketExpressionContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(gcodeParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_primitiveExpression; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterPrimitiveExpression) {
			listener.enterPrimitiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitPrimitiveExpression) {
			listener.exitPrimitiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitPrimitiveExpression) {
			return visitor.visitPrimitiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineNumberContext extends ParserRuleContext {
	public LINE_NUMBER(): TerminalNode { return this.getToken(gcodeParser.LINE_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_lineNumber; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterLineNumber) {
			listener.enterLineNumber(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitLineNumber) {
			listener.exitLineNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitLineNumber) {
			return visitor.visitLineNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfLineContext extends ParserRuleContext {
	public END_OF_LINE(): TerminalNode { return this.getToken(gcodeParser.END_OF_LINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gcodeParser.RULE_endOfLine; }
	// @Override
	public enterRule(listener: gcodeListener): void {
		if (listener.enterEndOfLine) {
			listener.enterEndOfLine(this);
		}
	}
	// @Override
	public exitRule(listener: gcodeListener): void {
		if (listener.exitEndOfLine) {
			listener.exitEndOfLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gcodeVisitor<Result>): Result {
		if (visitor.visitEndOfLine) {
			return visitor.visitEndOfLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


