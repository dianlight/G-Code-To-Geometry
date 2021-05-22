export interface JSONPosition {
    x: number;
    y: number;
    z: number;
}
export interface JSONError {
    isSkipped: boolean;
    line: number;
    message: string;
}
export interface JSONGeometryLine {
    lineNumber: number;
    type: 'G1' | 'G0' | 'G3' | 'G2';
    start?: Partial<JSONPosition>;
    end?: Partial<JSONPosition>;
    beziers?: {
        p0: Partial<JSONPosition>;
        p1: Partial<JSONPosition>;
        p2: Partial<JSONPosition>;
        p3: Partial<JSONPosition>;
    }[];
    feedrate: number;
}
export interface JSONBoundingBox {
    min: JSONPosition;
    max: JSONPosition;
}
export interface JSONGeometry {
    gcode: string[];
    lines: JSONGeometryLine[];
    size: JSONBoundingBox;
    displayInInch: boolean;
    errorList: JSONError[];
}
export declare enum JSONGeometryEvent {
    BEGIN = 0,
    ERROR = 1,
    GCODE = 2,
    LINE = 3,
    ARC = 4,
    END = 5
}
