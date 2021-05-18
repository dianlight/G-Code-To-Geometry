import { JSONPosition } from "./JSONGeometry";
export interface G3Commands {
    r?: number;
    i?: number;
    j?: number;
    k?: number;
}
export interface CNCSettings {
    feedrate: number;
    inMm: boolean;
    crossAxe: 'x' | 'y' | 'z';
    oldType?: 'G1' | 'G0' | 'G2' | 'G3';
}
/**
 * This file contains the classes managing the lines. The lines are
 * the representation of the G0, G1, G2 and G3 commands.
 */
/**
 * Creates an instance of the StraightLine class. This class does the
 * computations for the G0 and G1 commands.
 *
 * @class
 * @param {number} index - The line number where this command appears.
 * @param {Point} start - The 3D start point.
 * @param {ParsedCommand} parsedCommand - The parsed command.
 * @param {Settings} settings - The modularity settings.
 * @return {StraightLine} An instance of the StraightLine class.
 */
export declare function StraightLine(index: any, start: any, end: any, parsedCommand: any, settings: any): void;
/**
 * Creates an instance of the CurvedLine class. This class does the computations
 * for the G2 and G3 commands.
 *
 * @class
 * @param {number} index - The line number where this command appears.
 * @param {Point} start - The 3D start point.
 * @param {ParsedCommand} parsedCommand - The parsed command.
 * @param {Settings} settings - The modularity settings.
 * @return {CurvedLine} An instance of the CurvedLine class.
 */
export declare function CurvedLine(index: number, start: JSONPosition, end: JSONPosition, parsedCommand: G3Commands, settings: CNCSettings): void;
