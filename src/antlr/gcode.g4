// Implementation of rs274ngc grammar. 
// See http://www.nist.gov/customcf/get_pdf.cfm?pub_id=823374.
grammar gcode; 

fragment Digit		: '0'..'9' ;

// For case insensitive matching
fragment A:('a'|'A');
fragment B:('b'|'B');
fragment C:('c'|'C');
fragment D:('d'|'D');
fragment E:('e'|'E');
fragment F:('f'|'F');
fragment G:('g'|'G');
fragment H:('h'|'H');
fragment I:('i'|'I');
fragment J:('j'|'J');
fragment K:('k'|'K');
fragment L:('l'|'L');
fragment M:('m'|'M');
fragment N:('n'|'N');
fragment O:('o'|'O');
fragment P:('p'|'P');
fragment Q:('q'|'Q');
fragment R:('r'|'R');
fragment S:('s'|'S');
fragment T:('t'|'T');
fragment U:('u'|'U');
fragment V:('v'|'V');
fragment W:('w'|'W');
fragment X:('x'|'X');
fragment Y:('y'|'Y');
fragment Z:('z'|'Z');

fragment COMMENT_TEXT : ~(')')* ;

program		: PERCENT END_OF_LINE ( line )* (PERCENT END_OF_LINE?) | ( line )* ;

line		: ( BLOCK_DELETE )? ( lineNumber )? ( segment )* endOfLine ;

segment		: word | parameterSetting | comment | oword_label oword_statement;

comment		: MESSAGE_COMMENT | IGNORED_COMMENT | LINE_COMMENT ;
MESSAGE_COMMENT : '(MSG' COMMENT_TEXT ')' ;
IGNORED_COMMENT : '(' COMMENT_TEXT ')' ;
LINE_COMMENT : ';' ~[\r\n]* ;

parameterSetting : parameter EQUALS e ;

parameter	: HASH designator ;

designator	: NUMBER | NAME | parameter | bracketExpression ;

oword_label	: 'o' NUMBER | 'o' NAME | 'o' parameter ;

oword_statement
	:  SUB
	|  RETURN 	( bracketExpression )?
	|  ENDSUB 	( bracketExpression )?
	|  CALL 	( bracketExpression )*
	|  DO
	|  WHILE 	bracketExpression
	|  IF 		bracketExpression
	|  ELSEIF 	bracketExpression
	|  ELSE
	|  ENDIF
	|  BREAK
	|  CONTINUE
	|  ENDWHILE
	|  REPEAT	bracketExpression
	|  ENDREPEAT
	;

parameterList	: bracketExpression*;

optReturnValue	: bracketExpression | ;

word	: gWord | mWord | axisWord | dimensionWord | wordLetter e;

axisWord : a | b | c | i | j | k | r | x | y | z;
a : ('a'|'A') e ; // A-axis of machine
b : ('b'|'B') e ; // B-axis of machine
c : ('c'|'C') e ; // C-axis of machine
i : ('i'|'I') e ; // X-axis offset for arcs | 'x' offset in G87 canned cycle
j : ('j'|'J') e ; // Y-axis offset for arcs | 'y' offset in G87 canned cycle
k : ('k'|'K') e ; // Z-axis offset for arcs | 'z' offset in G87 canned cycle
r : ('r'|'R') e ; // arc radius | canned cycle plane
x : ('x'|'X') e?; // X-axis of machine
y : ('y'|'Y') e?; // Y-axis of machine
z : ('z'|'Z') e?; // Z-axis of machines

dimensionWord : f | ex;
f : ('f'|'F') e; // feedrate
ex: ('e'|'E') e; // extruderrate

d : ('d'|'D') ; // tool radius compensation NUMBER
g : ('g'|'G') ; // general function (see Table 5)
h : ('h'|'H') ; // tool length offset index
l : ('l'|'L') ; // NUMBER of repetitions in canned cycles | key used with G10
m : ('m'|'M') ; // miscellaneous function (see Table 7)
p : ('p'|'P') ; // dwell time in canned cycles | dwell time with G4 | key used with G10
q : ('q'|'Q') ; // feed increment in G83 canned cycle
s : ('s'|'S') ; // spindle speed
t : ('t'|'T') ; // tool selection

wordLetter:  d | g | h | l | m | p | q | s | t | ATSIGN | CARET;

//// Table 5: G codes /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gWord	: group0 | group1 | group2 | group3 | group5 | group6 | group7 | group8 | group10 | group12 | group13;
	
// The modal groups for G codes are:
group1 : g0 | g1 | g2 | g3 | g38_2 | g80 | g81 | g82 | g83 | g84 | g85 | g86 | g87 | g88 | g89; // motion
group2 : g17 | g18 | g19 ; // plane selection
group3 : g90 | g91 ; // distance mode
group5 : g93 | g94 ; // feed rate mode
group6 : g20 | g21; //  units
group7 : g40 | g41 | g42 ; // cutter radius compensation
group8 : g43 | g49 ; // tool length offset
group10 : g98 | g99 ; // return mode in canned cycles
group12 : g54 | g55 | g56 | g57 | g58 | g59 | g59_1 | g59_2 | g59_3 ; // coordinate system selection
group13 : g61 | g61_1 | g64 ; //  path control mode

// In addition to the above modal groups, there is a group for non-modal G codes:
group0 : g4 | g10 | g28 | g30 | g53 | g92 | g92_1 | g92_2 | g92_3;

G0 : G '0'* '0' ;
G1 : G '0'* '1' ;
G2 : G '0'* '2' ;
G3 : G '0'* '3' ;
G4 : G '0'* '4' ;
G10 : G '0'* '10' ;
G17 : G '0'* '17' ;
G18 : G '0'* '18' ;
G19 : G '0'* '19' ;
G20 : G '0'* '20' ;
G21 : G '0'* '21' ;
G28 : G '0'* '28' ;
G30 : G '0'* '30' ;
G38_2 : G '0'* '38.2' ;
G40 : G '0'* '40' ;
G41 : G '0'* '41' ;
G42 : G '0'* '42' ;
G43 : G '0'* '43' ;
G49 : G '0'* '49' ;
G53 : G '0'* '53' ;
G54 : G '0'* '54' ;
G55 : G '0'* '55' ;
G56 : G '0'* '56' ;
G57 : G '0'* '57' ;
G58 : G '0'* '58' ;
G59 : G '0'* '59' ;
G59_1 : G '0'* '59.1' ;
G59_2 : G '0'* '59.2' ;
G59_3 : G '0'* '59.3' ;
G61 : G '0'* '61' ;
G61_1 : G '0'* '61.1' ;
G64 : G '0'* '64' ;
G80 : G '0'* '80' ;
G81 : G '0'* '81' ;
G82 : G '0'* '82' ;
G83 : G '0'* '83' ;
G84 : G '0'* '84' ;
G85 : G '0'* '85' ;
G86 : G '0'* '86' ;
G87 : G '0'* '87' ;
G88 : G '0'* '88' ;
G89 : G '0'* '89' ;
G90 : G '0'* '90' ;
G91 : G '0'* '91' ;
G92 : G '0'* '92' ;
G92_1 : G '0'* '92.1' ;
G92_2 : G '0'* '92.2' ;
G92_3 : G '0'* '92.3' ;
G93 : G '0'* '93' ;
G94 : G '0'* '94' ;
G98 : G '0'* '98' ;
G99 : G '0'* '99' ;

g0 : G0  ; // rapid positioning
g1 : G1 ;  // linear interpolation
g2 : G2  ; // circular/helical interpolation (clockwise)
g3 : G3  ; // circular/helical interpolation (counterclockwise)
g4 : G4 ; // dwell
g10 : G10 ; // coordinate system origin setting
g17 : G17 ; // XY-plane selection
g18 : G18 ; // XZ-plane selection
g19 : G19 ; // YZ-plane selection
g20 : G20 ; // inch system selection
g21 : G21 ; // millimeter system selection
g28 : G28 ; // return to home
g30 : G30 ; // return to secondar'y'home
g38_2 : G38_2 ; // straight probe
g40 : G40 ; // cancel cutter radius compensation
g41 : G41 ; // start cutter radius compensation left
g42 : G42 ; // start cutter radius compensation right
g43 : G43 ; // tool length offset (plus)
g49 : G49 ; // cancel tool length offset
g53 : G53 ; // motion in machine coordinate system
g54 : G54 ; // use preset work coordinate system 1
g55 : G55 ; // use preset work coordinate system 2
g56 : G56 ; // use preset work coordinate system 3
g57 : G57 ; // use preset work coordinate system 4
g58 : G58 ; // use preset work coordinate system 5
g59 : G59 ; // use preset work coordinate system 6
g59_1 : G59_1 ; // use preset work coordinate system 7
g59_2 : G59_2 ; // use preset work coordinate system 8
g59_3 : G59_3 ; // use preset work coordinate system 9
g61 : G61 ; // set path control mode: exact path
g61_1 : G61_1 ; // set path control mode: exact stop
g64 : G64 ; // set path control mode: continuous
g80 : G80 ; // cancel motion mode (including an'y'canned cycle)
g81 : G81 ; // canned cycle: drilling
g82 : G82 ; // canned cycle: drilling with dwell
g83 : G83 ; // canned cycle: peck drilling
g84 : G84 ; // canned cycle: right hand tapping
g85 : G85 ; // canned cycle: boring, no dwell, feed out
g86 : G86 ; // canned cycle: boring, spindle stop, rapid out
g87 : G87 ; // canned cycle: back boring
g88 : G88 ; // canned cycle: boring, spindle stop, manual out
g89 : G89 ; // canned cycle: boring, dwell, feed out
g90 : G90 ; // absolute distance mode
g91 : G91 ; // incremental distance mode
g92 : G92 ; // offset coordinate systems and set parameters
g92_1 : G92_1 ; // cancel offset coordinate systems and set parameters to zero
g92_2 : G92_2 ; // cancel offset coordinate systems but do not reset parameters
g92_3 : G92_3 ; // appl'y'parameters to offset coordinate systems
g93 : G93 ; // inverse time feed rate mode
g94 : G94 ; // units per minute feed rate mode
g98 : G98 ; // initial level return in canned cycles
g99 : G99 ; // R-point level return in canned cycles


//// Table 7: M codes /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mWord : mgroup4 | mgroup6 | mgroup7 | mgroup8 | mgroup9 | mgroup10 | mgroup11 | mgroup12; 

//The modal groups for M codes are:
mgroup4 : m0 | m1 | m2 | m30 | m60 | m84 ; // stopping
mgroup6 : m6 ; // tool change
mgroup7 : m3 | m4 | m5 ; //  spindle turning
mgroup8 : m7 | m8 | m9 ; // coolant (special case: M7 and M8 ma'y'be active at the same time)
mgroup9 : m48 | m49 ; // enable/disable feed and speed override switches
mgroup10: m82 ; // extrusion 
mgroup11: m201 | m203 | m204 | m205 | m220 | m221 ; // accelleration
mgroup12: m104 | m105 | m106 | m107 | m109 | m140 | m141 | m190 ; // unclassified yet

M0 : M '0'* '0' ;
M1 : M '0'* '1' ;
M2 : M '0'* '2' ;
M3 : M '0'* '3' ;
M4 : M '0'* '4' ;
M5 : M '0'* '5' ;
M6 : M '0'* '6' ;
M7 : M '0'* '7' ;
M8 : M '0'* '8' ;
M9 : M '0'* '9' ;
M30 : M '0'* '30' ;
M48 : M '0'* '48' ;
M49 : M '0'* '49' ;
M60 : M '0'* '60' ;
M82 : M '0'* '82' ;
M84 : M '0'* '84' ;
M104: M '104' ;
M105: M '105' ;
M106: M '106' ;
M107: M '107' ;
M109: M '109' ;
M140 : M '140' ;
M141 : M '141' ;
M190 : M '190' ;
M201 : M '201' ;
M203 : M '203' ;
M204 : M '204' ;
M205 : M '205' ;
M220 : M '220' ;
M221 : M '221' ;


m0 : M0 ; // program stop
m1 : M1 ; // optional program stop
m2 : M2 ; // program end
m3 : M3 ; // turn spindle clockwise
m4 : M4 ; // turn spindle counterclockwise
m5 : M5 ; // stop spindle turning
m6 : M6 ; // tool change
m7 : M7 ; // mist coolant on
m8 : M8 ; // flood coolant on
m9 : M9 ; //mist and flood coolant off
m30 : M30 ; // program end, pallet shuttle, and reset
m48 : M48 ; // enable speed and feed overrides
m49 : M49 ; // disable speed and feed overrides
m60 : M60 ; // pallet shuttle and program stop
m82 : M82 ; // absolute extrusion mode
m84 : M84 ; // Disable all steppers but Z
m104: M104 ;
m105: M105 ;
m106: M106 ;
m107: M107 ;
m109: M109 ;
m140: M140 ;
m141: M141 ;
m190: M190 ;
m201: M201 ; // Setup machine max acceleration
m203: M203 ; // Setup machine max feedrate
m204: M204 ; // Setup Print/Retract/Travel acceleration
m205: M205 ; // Setup Jerk
m220: M220 ; // Reset Feedrate
m221: M221 ; // Reset Flowrate


e returns [number v]: logicalExpression { $v = $logicalExpression.v; };

logicalExpression returns [number v]:
				comparisonExpression { $v = $comparisonExpression.v;} (
					( OR comparisonExpression ) |
					( XOR comparisonExpression ) |
					( AND comparisonExpression )
				)*
				;

comparisonExpression returns [number v]:
				plusMinExpression { $v = $plusMinExpression.v;} (
					( EQ plusMinExpression ) |
					( NE plusMinExpression ) |
					( GT plusMinExpression ) |
					( GE plusMinExpression ) |
					( LT plusMinExpression ) |
					( LE plusMinExpression )
				)* ;

plusMinExpression returns [number v]:
				aggregateExpression { $v = $aggregateExpression.v;} (
					( PLUS aggregateExpression ) |
					( MINUS aggregateExpression )
				)* ;

aggregateExpression returns [number v]:
				powerExpression { $v = $powerExpression.v;} (
					( TIMES powerExpression ) |
					( SLASH powerExpression ) |
					( MOD powerExpression )
				)* ;

// If operations are strung together (for example in the expression [2.0 / 3 * 1.5 - 5.5 / 11.0]),
// operations in the first group are to be performed before operations in the second group
// and operations in the second group before operations in the third group.
// If an expression contains more than one operation from the same group
// (such as the first / and * in the example), the operation on the left is performed first.

powerExpression	returns [number v]:
	unaryExpression ( POWER powerExpression )?
	{ if($powerExpression.ctx==null) { $v = $unaryExpression.v; } else { $v = Math.pow($unaryExpression.v, $powerExpression.v); }};

unaryExpression returns [number v]:
// TODO: fix and are these all mathematical functions?
	ACOS bracketExpression		{ $v = Math.cos($bracketExpression.v);}
	| ASIN bracketExpression	{ $v = Math.asin($bracketExpression.v);}
	| COS bracketExpression		{ $v = Math.cos($bracketExpression.v);}
	| SIN bracketExpression		{ $v = Math.sin($bracketExpression.v);}
	| TAN bracketExpression		{ $v = Math.tan($bracketExpression.v);}
	| LN bracketExpression		
	| EXP bracketExpression		{ $v = Math.exp($bracketExpression.v);}
	| SQRT bracketExpression	{ $v = Math.pow($bracketExpression.v,0.5);}
	| FIX bracketExpression		{ $v = Math.floor($bracketExpression.v);}
	| FUP bracketExpression		{ $v = Math.ceil($bracketExpression.v);}
	| ROUND bracketExpression	{ $v = Math.cos($bracketExpression.v);}
	| ABS bracketExpression		{ $v = Math.abs($bracketExpression.v);}
	| EXISTS bracketExpression	
	| ATAN bracketExpression SLASH bracketExpression
	| parameter
	| primitiveExpression { $v = $primitiveExpression.v;}
;

bracketExpression returns [number v]:	LBRACKET e RBRACKET { $v = $e.v; };

primitiveExpression returns [number v]: 
	bracketExpression { $v = $bracketExpression.v; }
	| parameter
	| NUMBER { $v = Number.parseFloat($NUMBER.text); }
; 

lineNumber : LINE_NUMBER ; 

endOfLine : ';' END_OF_LINE | END_OF_LINE ;

WHITESPACE : ( ' ' | '\t' )+ -> channel(HIDDEN) ;

LINE_NUMBER	: N Digit Digit? Digit? Digit? Digit? ;

END_OF_LINE	: ( '\r' | '\n' | '\r' '\n' ) ;

NUMBER 		: ('+'|'-')? ( Digit+ | Digit* ('.' Digit+) ) ;

NAME		: '<' ~('>')+ '>' ;

SUB			: S U B ;
ENDSUB		: E N D S U B;
CALL		: C A L L (S U B)? ;
DO			: D O ;
WHILE		: W H I L E ;
ELSEIF		: E L S E I F ;
ELSE		: E L S E ;
ENDIF		: E N D I F ;
IF			: I F ;
BREAK		: B R E A K ;
CONTINUE	: C O N T I N U E ;
ENDWHILE	: E N D W H I L E ;
RETURN		: R E T U R N ;
REPEAT		: R E P E A T ;
ENDREPEAT	: E N D R E P E A T ;


ABS		: A B S ;
ACOS	: A C O S ;
ASIN	: A S I N ;
ATAN	: A T A N ;
SIN		: S I N ;
COS		: C O S ;
TAN		: T A N ;
AND 	: A N D ;
OR		: O R ;
XOR		: X O R ;
EXP		: E X P ;
FIX		: F I X;
FUP		: F U P ;
MOD		: M O D ;
ROUND	: R O U N D ;
SQRT	: S Q R T ;
LN		: L N ;
EXISTS	: E X I S T S ;

EQ	: E Q ;
NE	: N E ;
GT	: Q T ;
GE	: G E ;
LT	: L T ;
LE 	: L E ;

POWER			: '**' ;
PLUS			: '+' ;
MINUS			: '-' ;
TIMES			: '*' ;
SLASH			: '/' ;
HASH			: '#' ;
EQUALS			: '=' ;
LBRACKET		: '[' ;
RBRACKET		: ']' ;
PERCENT			: '%' ;
LESS            : '<' ;
GREATER         : '>' ;
DOT             : '.' ;
ATSIGN          : '@' ;
CARET           : '^' ;

BLOCK_DELETE    : '/' ;
