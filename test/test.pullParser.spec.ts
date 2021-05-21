import * as jestEx from './jest.exutil'
import 'jest-fetch-mock'

describe("Test GCODE Partsing capability (Pulparser)", () => {
    it('Parse Case#1 GCode - Small Test', () => {
        jest.setTimeout(10000)
        return jestEx.doParserTestAsync('case#1', {}).then( (lines) => expect(lines).toEqual(10))
    })
    it('Parse Case#2 GCode - Micro Test', () => {
        return jestEx.doParserTestAsync('case#2', {}).then( (lines) => expect(lines).toEqual(2))
    })

    it('Parse Case#3 GCode - boomerangv3 / command splitted /', () => {
        return jestEx.doParserTestAsync('case#3', {}).then( (lines) => expect(lines).toEqual(8359))
    })

    it('Parse Case#4 GCode - Marlin', () => {
        return jestEx.doParserTestAsync('case#4', {}).then( (lines) => expect(lines).toEqual(39))
    })

    it('Parse Case#5 GCode - BIG', () => {
        return jestEx.doParserTestAsync('case#5', {}).then( (lines) => expect(lines).toEqual(132736))
    })

    it('Parse Case#6 GCode - FLATCAM Test', () => {
        return jestEx.doParserTestAsync('case#6', {}).then( (lines) => expect(lines).toEqual(11242))
    })
    it('Parse Case#7 GCode - / G optional line splitting /', () => {
        return jestEx.doParserTestAsync('case#7', {}).then( (lines) => expect(lines).toEqual(14147))
    })
    it('Parse Case#8 GCode', () => {
        return jestEx.doParserTestAsync('case#8', {}).then( (lines) => expect(lines).toEqual(702))
    })

    test('Parse Case#10 GCode', () => {
        return jestEx.doParserTestAsync('case#10', {}).then( (lines) => expect(lines).toEqual(8702))
    })

})
