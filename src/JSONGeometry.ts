
export interface JSONPosition {
    x: number,
    y: number,
    z: number
}

export interface JSONError {
    isSkipped: boolean,
    line: number,
    message: string
}

export interface JSONGeometryLine {
    lineNumber: number,
    type: 'G1'|'G0'|'G3'|'G2',
    start?: Partial<JSONPosition>,
    end?: Partial<JSONPosition>,
    beziers?: 
        {
            p0: Partial<JSONPosition>,
            p1: Partial<JSONPosition>,
            p2: Partial<JSONPosition>,
            p3: Partial<JSONPosition>
        }[]
    feedrate: number
}

export interface JSONBoundingBox {
    min: JSONPosition,
    max: JSONPosition
}

export interface JSONGeometry {
    gcode: string[],
    lines: JSONGeometryLine[],
    size: JSONBoundingBox,
    displayInInch: boolean,
    errorList: JSONError[]
}

export enum JSONGeometryEvent {
    BEGIN,
    ERROR,
    GCODE,
    LINE,
    ARC,
    END
}

/*
export interface JSONGeometryStream {
    gcode: ReadableStream<string>,
    lines: ReadableStream<JSONGeometryLine>,
    size: Promise<{
        min: JSONPosition,
        max: JSONPosition
    }>,
    displayInInch: boolean,
    errorList: ReadableStream<JSONError>    
}
*/