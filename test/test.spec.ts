//const { expect } = require("@jest/globals");
import G from "glob"
import * as GCodeToGeometry from "../src/gcodetogeometry"
import fs from 'fs'
import path from 'path'

describe("Test GCODE Partsing capability", () => {
    it('Parse Case#1 GCode - Small Test', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#1.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#1.json')).toString());
    //    console.log(code)
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
        //console.log(JSON.stringify(cresult,null,2));
        expect(cresult).toBeDefined();
        cresult.gcode = result.gcode = [];
        expect(cresult).toEqual(result);
    })

    it('Parse Case#2 GCode - Micro Test', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#2.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#2.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
        expect(cresult).toBeDefined();
        cresult.gcode = result.gcode = [];
        expect(cresult).toEqual(result);
    })

    it('Parse Case#3 GCode - boomerangv3 / command splitted /', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#3.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#3.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
        expect(cresult).toBeDefined();
        cresult.gcode = result.gcode = [];
        expect(cresult).toEqual(result);
    })

    /* Parser Error * /
    it('Parse Case#5 GCode', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#5.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#5.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
        fs.writeFileSync(path.join(__dirname, 'case#5.json'), JSON.stringify(cresult, null, 2));
        expect(cresult).toBeDefined();
        expect(cresult).toEqual(result);
    })
    /* */

    /* * /
    it('Parse Case#6 GCode - FLATCAM Test', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#6.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#6.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
    //    fs.writeFileSync(path.join(__dirname, 'case#6.json'), JSON.stringify(cresult, null, 2));
        expect(cresult).toBeDefined();
        expect(cresult).toEqual(result);
    })
    /* */

    /* Multiple coordinate without G command. If allowed correct parser * /
    it('Parse Case#7 GCode - / G optional line splitting /', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#7.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#7.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
//        fs.writeFileSync(path.join(__dirname, 'case#7.json'), JSON.stringify(cresult, null, 2));
        expect(cresult).toBeDefined();
        expect(cresult).toEqual(result);
    })
    /* */

    /* To many error
    it('Parse Case#8 GCode', () => {
        const code = fs.readFileSync(path.join(__dirname, 'case#8.gcode')).toString();
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#8.json')).toString());
        expect(GCodeToGeometry.parse).toBeDefined();
        var cresult = GCodeToGeometry.parse(code);
//        fs.writeFileSync(path.join(__dirname, 'case#8.json'), JSON.stringify(cresult, null, 2));
        expect(cresult).toBeDefined();
        expect(cresult).toEqual(result);
    })
    */
})




/* Missing!
test('Parse Case#4 GCode', () => {
    const code = fs.readFileSync(path.join(__dirname, 'case#4.gcode')).toString();
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#4.json')).toString());
    expect(GCodeToGeometry.parse).toBeDefined();
    var cresult = GCodeToGeometry.parse(code);
    fs.writeFileSync(path.join(__dirname, 'case#4.json'), JSON.stringify(cresult, null, 2));
    expect(cresult).toBeDefined();
    expect(cresult).toEqual(result);
})
*/


/* Missing
test('Parse Case#9 GCode', () => {
    const code = fs.readFileSync(path.join(__dirname, 'case#9.gcode')).toString();
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#9.json')).toString());
    expect(GCodeToGeometry.parse).toBeDefined();
    var cresult = GCodeToGeometry.parse(code);
    fs.writeFileSync(path.join(__dirname, 'case#9.json'), JSON.stringify(cresult, null, 2));
    expect(cresult).toBeDefined();
    expect(cresult).toEqual(result);
})
*/
/* No OLD
test('Parse Case#10 GCode', () => {
    const code = fs.readFileSync(path.join(__dirname, 'case#10.gcode')).toString();
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, 'case#10.json')).toString());
    expect(GCodeToGeometry.parse).toBeDefined();
    var cresult = GCodeToGeometry.parse(code);
    fs.writeFileSync(path.join(__dirname, 'case#10.json'), JSON.stringify(cresult, null, 2));
    expect(cresult).toBeDefined();
    expect(cresult).toEqual(result);
})
*/







