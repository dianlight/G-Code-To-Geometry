import { GCodeToGeometryOptions,parse, pullParser } from "../src/gcodetogeometry";
import path from 'path';
import fs from 'fs';
import deepEqual from 'deep-equal'
import { JSONError, JSONGeometry, JSONGeometryEvent, JSONGeometryLine } from "../src/JSONGeometry";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function roughSizeOfObject( object ):number {

    const objectList = [];
    const stack = [ object ];
    let bytes = 0;

    while ( stack.length ) {
        const value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( const i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}


export function doParserTest(gcodename: string, options: Partial<GCodeToGeometryOptions>, writeResult: boolean): void {
    const code = fs.readFileSync(path.join(__dirname, gcodename + '.gcode')).toString();
    if (!writeResult) {
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, gcodename + '.json')).toString());
        expect(parse).toBeDefined();
        const cresult = parse(code, options);
        expect(cresult).toBeDefined();
        cresult.gcode = result.gcode = [];
        if (deepEqual(cresult, result)) return
        expect(JSON.stringify(cresult,null,2)).toEqual(JSON.stringify(result,null,2));
    } else {
        const cresult = parse(code, options);
        expect(cresult).toBeDefined();
        fs.writeFileSync(path.join(__dirname, gcodename+'.json'), JSON.stringify(cresult, null, 2));
    }
}

export async function doParserTestAsync(gcodename: string, options: Partial<GCodeToGeometryOptions>): Promise<void> {
    return new Promise((resolve) => {
        const code = fs.createReadStream(path.join(__dirname, gcodename + '.gcode'));
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, gcodename + '.json')).toString()) as JSONGeometry;
        expect(pullParser).toBeDefined();
        const _cresult = pullParser(code, options);
        expect(_cresult).toBeDefined();
        let p = 0, e = 0, c = 0;
        _cresult.then((_ev) => {
            _ev.on(JSONGeometryEvent.GCODE.toString(), (code: string) => {
                expect(code).toEqual(result.gcode[c++])
            })                
            _ev.on(JSONGeometryEvent.LINE.toString(), (line: JSONGeometryLine) => {
                if (deepEqual(line, result.lines[p++])) return
                expect(JSON.stringify(line,null,2)).toEqual(JSON.stringify(result.lines[p],null,2))
            })                
            _ev.on(JSONGeometryEvent.ARC.toString(), (line: JSONGeometryLine) => {
                expect(line).toEqual(result.lines[p++])
            })                
            _ev.on(JSONGeometryEvent.ERROR.toString(), (error: JSONError) => {
//                expect(error).toEqual(result.errorList[e++])
            })                
            _ev.on(JSONGeometryEvent.END.toString(), (result: JSONGeometry) => {
                expect(result.size).toEqual(result.size)
                resolve()
            })
            _ev.emit(JSONGeometryEvent.BEGIN.toString())
        })
    })

}