import { GCodeToGeometryOptions,parse } from "../src/gcodetogeometry";
import path from 'path';
import fs from 'fs';
import deepEqual from 'deep-equal'

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