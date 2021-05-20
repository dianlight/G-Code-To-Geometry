import { GCodeToGeometryOptions } from "../src/gcodetogeometry";
export declare function roughSizeOfObject(object: any): number;
export declare function doParserTest(gcodename: string, options: Partial<GCodeToGeometryOptions>, writeResult: boolean): void;
export declare function doParserTestAsync(gcodename: string, options: Partial<GCodeToGeometryOptions>): Promise<void>;
