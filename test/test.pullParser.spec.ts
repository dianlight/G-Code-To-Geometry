//import "web-streams-polyfill/es2018"
import * as jestEx from './jest.exutil'

describe("Test GCODE Partsing capability (Pulparser)", () => {
    it('Parse Case#1 GCode - Small Test', () => {
        jest.setTimeout(10000)
        return jestEx.doParserTestAsync('case#1', {})
    })
    it('Parse Case#2 GCode - Micro Test', () => {
        return jestEx.doParserTestAsync('case#2', {});
    })

    it('Parse Case#3 GCode - boomerangv3 / command splitted /', () => {
        return jestEx.doParserTestAsync('case#3', {});
    })

    it('Parse Case#4 GCode - Marlin', () => {
        return jestEx.doParserTestAsync('case#4', {});
    })

    it('Parse Case#5 GCode - BIG', () => {
        return jestEx.doParserTestAsync('case#5', {});
    })

    it('Parse Case#6 GCode - FLATCAM Test', () => {
        return jestEx.doParserTestAsync('case#6', {});
    })
    it('Parse Case#7 GCode - / G optional line splitting /', () => {
        return jestEx.doParserTestAsync('case#7', {});
    })
    it('Parse Case#8 GCode', () => {
        return jestEx.doParserTestAsync('case#8', {});
    })

    test('Parse Case#10 GCode', () => {
        return jestEx.doParserTestAsync('case#10', {});
    })

})
