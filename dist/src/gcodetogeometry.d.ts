import { JSONGeometry } from './JSONGeometry';
/**
 * Parses the GCode into a series of lines and curves and checks if errors.
 *
 * @param {string} code - The GCode.
 * @returns {ParsedGCode} The parsed GCode.
 */
export declare function parse(code: any): JSONGeometry;
