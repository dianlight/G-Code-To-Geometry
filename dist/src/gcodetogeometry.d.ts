/// <reference types="node" />
import { JSONGeometry } from './JSONGeometry';
import events from 'events';
export interface GCodeToGeometryOptions {
    exposeParsedGcode: boolean;
    maxErrorsRepoted: number;
    decimals: number;
}
/**
 * Parses the GCode into a series of lines and curves and checks if errors.
 *
 * @param {string} code - The GCode.
 * @param {options} option - The parser options
 * @returns {ParsedGCode} The parsed GCode.
 */
export declare function pullParser(code: ReadableStream<Uint8Array>, options?: Partial<GCodeToGeometryOptions>): Promise<events.EventEmitter>;
/**
 * Parses the GCode into a series of lines and curves and checks if errors.
 *
 * @param {string} code - The GCode.
 * @param {options} option - The parser options
 * @returns {ParsedGCode} The parsed GCode.
 */
export declare function parse(code: string, options?: Partial<GCodeToGeometryOptions>): JSONGeometry;
export * from './JSONGeometry';
