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
 *
export function StraightLine(index, start, end, parsedCommand, settings) {
    "use strict";
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    /**
     * Returns a line object of type "G0" or "G1" (corresponding to
     * parsedCommand).
     *
     * @function returnLine
     * @memberof util.StraightLine
     * @instance
     * @return {Line} The line object.
     *
    that.returnLine = function() {
        return {
            lineNumber : that.index,
            type : that.word,
            start : that.start,
            end : that.end,
            feedrate : that.feedrate
        };
    };

    /**
     * Returns the size of the line.
     *
     * @function getSize
     * @memberof util.StraightLine
     * @instance
     * @return {Size} The size.
     *
    that.getSize = function() {
        return {
            min : {
                x : Math.min(that.start.x, that.end.x),
                y : Math.min(that.start.y, that.end.y),
                z : Math.min(that.start.z, that.end.z),
            }, max : {
                x : Math.max(that.start.x, that.end.x),
                y : Math.max(that.start.y, that.end.y),
                z : Math.max(that.start.z, that.end.z),
            }
        };
    };

    function initialize(index, start, parsedCommand, settings) {
        that.index = index;
        that.word = parsedCommand.type;
        that.start = { x : start.x, y : start.y, z : start.z };
        that.end = end;
        if(parsedCommand.type === "G0") {
            that.feedrate = 0;
        } else if(parsedCommand.f === undefined) {
            that.feedrate = settings.feedrate;
        } else {
            that.feedrate = util.calculateFeedrate(parsedCommand.f,
                    settings.inMm);
        }
    }

    initialize(index, start, parsedCommand, settings);
}

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
