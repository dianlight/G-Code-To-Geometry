import { GCodeToGeometryOptions,parse, pullParser } from "../src/gcodetogeometry";
import path from 'path';
import fs from 'fs';
import deepEqual from 'deep-equal'
import { JSONError, JSONGeometry, JSONGeometryEvent, JSONGeometryLine } from "../src/JSONGeometry";
import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018"
//import { ReadableStream } from "@stardazed/streams"
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

export async function doParserTestAsync(gcodename: string, options: Partial<GCodeToGeometryOptions>): Promise<number> {
    return new Promise((resolve) => {
        const result = JSON.parse(fs.readFileSync(path.join(__dirname, gcodename + '.json')).toString()) as JSONGeometry;
        expect(pullParser).toBeDefined();
        const bufferFile = fs.readFileSync(path.join(__dirname, gcodename + '.gcode')).toString().split('\n');
        const reader = new ReadableStream({
            start(controller) {
                while (bufferFile.length > 0) {
                    const data = bufferFile.shift()+"\n";
                    controller.enqueue(Uint8Array.from(data.split("").map( c => c.charCodeAt(0))))
                }
                controller.close();
            }
        });
        const _cresult = pullParser(reader, options);            
        expect(_cresult).toBeDefined();
        let p = 0, e = 0, c = 0;
        _cresult.then((_ev) => {
            _ev.on(JSONGeometryEvent.GCODE.toString(), (code: string) => {
                expect(code).toEqual(result.gcode[c++])
            })                
            _ev.on(JSONGeometryEvent.LINE.toString(), (line: JSONGeometryLine) => {
                if (deepEqual(line, result.lines[p++])) return
                expect(JSON.stringify(line, null, 2)).toEqual(JSON.stringify(result.lines[p], null, 2))
//                console.log(JSON.stringify(result.lines[p]))
            })                
            _ev.on(JSONGeometryEvent.ARC.toString(), (line: JSONGeometryLine) => {
                expect(line).toEqual(result.lines[p++])
//                console.log(JSON.stringify(result.lines[p]))
            })                
            _ev.on(JSONGeometryEvent.ERROR.toString(), (error: JSONError) => {
//                expect(error).toEqual(result.errorList[e++])
            })                
            _ev.on(JSONGeometryEvent.END.toString(), (cresult: JSONGeometry) => {
//                console.log("End",cresult.size)
                expect(cresult.size).toEqual(result.size)
                resolve(p)
            })
            _ev.emit(JSONGeometryEvent.BEGIN.toString())
        })
    })
}