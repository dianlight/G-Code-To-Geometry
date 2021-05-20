//import "web-streams-polyfill/es2018"
import * as jestEx from './jest.exutil'

describe("Test GCODE Partsing capability", () => {
    it('Parse Case#1 GCode - Small Test', () => {
        jestEx.doParserTest('case#1', {}, false);
    })

    it('Parse Case#2 GCode - Micro Test', () => {
        jestEx.doParserTest('case#2', {}, false);
    })

    it('Parse Case#3 GCode - boomerangv3 / command splitted /', () => {
        jestEx.doParserTest('case#3', {}, false);
    })

    it('Parse Case#4 GCode - Marlin', () => {
        jestEx.doParserTest('case#4', {}, false);
    })

    it('Parse Case#5 GCode - BIG', () => {
        jestEx.doParserTest('case#5', {}, false);
    })

    it('Parse Case#6 GCode - FLATCAM Test', () => {
        jestEx.doParserTest('case#6', {}, false);
    })
 
    it('Parse Case#7 GCode - / G optional line splitting /', () => {
        jestEx.doParserTest('case#7', {}, false);
    })
 
    it('Parse Case#8 GCode', () => {
        jestEx.doParserTest('case#8', {}, false);
    })
 
    test('Parse Case#10 GCode', () => {
        jestEx.doParserTest('case#10', {}, false);
    })
})