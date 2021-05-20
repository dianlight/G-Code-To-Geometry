/**
 * Namespace for the library.
 *
 * @namespace
 */
declare class Util {
    /**
     * Constant for converting inches values into millimeters values.
     */
    INCH_TO_MILLIMETER: number;
    /**
     * Constant for converting millimeters values into inches values.
     */
    MILLIMETER_TO_INCH: number;
    FLOAT_PRECISION: number;
    calculateFeedrate(feedrate: number, inMm: boolean): number;
    /**
     * Checks if two numbers are nearly equal. This function is used to avoid
     * to have too much precision when checking values between floating-point
     * numbers.
     *
     * @param {number} a - Number A.
     * @param {number} b - Number B.
     * @param {number} [precision=util.FLOAT_PRECISION] - The precision
     * of the comparaison.
     * @return {boolean} True if the two values are nearly equal.
     */
    nearlyEqual(a: number, b: number, precision?: number): boolean;
    /**
     * Swaps two objects. It has to be the same objects, too bad if it's not.
     *
     * @param {object} obj1 - The first object.
     * @param {object} obj2 - The second object.
    */
    swapObjects(obj1: any, obj2: any): void;
    /**
     * Returns the copy of the object.
     *
     * @param {object} object - The object.
     * @return {object} The copy of the object.
    */
    copyObject(object: any): {};
    /**
     * Moves the point according to the vector.
     *
     * @param {Point} point - The point to move.
     * @param {Point} vector - The vector.
     */
    movePoint(point: any, vector: any): void;
    /**
     * Does a 2D dot product.
     *
     * @param {Point} v1 - The first vector.
     * @param {Point} v2 - The second vector.
     * @return {number} The result.
     */
    dotProduct2(v1: any, v2: any): number;
    /**
     * Does a 2D cross product.
     *
     * @param {Point} v1 - The first vector.
     * @param {Point} v2 - The second vector.
     * @return {number} The result on the Z axis.
     */
    crossProduct2(v1: any, v2: any): number;
    /**
     * Calculates the length of a 3D vector.
     *
     * @param {Point} v - The vector.
     * @return {number} The vector length.
     */
    lengthVector3(v: any): number;
    /**
     * Returns object of 3 axes:
     *  re is the axes for REal numbers;
     *  im for the IMaginary numbers;
     *  cr for the CRoss axis
     *
     * @param {string} crossAxe The name of the axis given by the cross product of
     * the vectors defining the plane. Should be "x", "y" or "z", considered "z" if
     * not "x" or "y".
     * @return {Axes} The object defining the real, imaginary and cross axis.
     */
    findAxes(crossAxe: any): {
        re: string;
        im: string;
        cr: string;
    };
    /**
     * Does a rotation and scale of point according to center. Stores the result in
     * newPoint.
     *
     * @param {Point} center - The center of the rotation and scale.
     * @param {Point} point - The point to modify.
     * @param {Point} newPoint - The point storying the result.
     * @param {number} angle - The angle in radians.
     * @param {number} length - The scale ratio.
     * @param {string} re - The real axis.
     * @param {string} im - The imaginary axis.
     */
    scaleAndRotation(center: any, point: any, newPoint: any, angle: any, length: any, re: any, im: any): void;
    /**
     * Returns the signed angle in radian in 2D (between -PI and PI).
     *
     * @param {Point} v1 - The first vector.
     * @param {Point} v2 - The second vector.
     * @return {number} The angle in radian.
     */
    findAngleVectors2(v1: any, v2: any): number;
    /**
     * Returns the signed angle in radian in 2d (between -2pi and 2pi).
     *
     * @param {Point} v1 - The first vector.
     * @param {Point} v2 - The second vector.
     * @param {boolean} positive - If the oriented angle goes counter-clockwise.
     * @return {number} The angle in radian.
     */
    findAngleOrientedVectors2(v1: any, v2: any, positive: any): number;
    /**
     * Checks if the value is include between the value a (include) and b (include).
     * Order between a and b does not matter.
     *
     * @param {number} value - The value.
     * @param {number} a - The first boundary.
     * @param {number} b - The second boundary.
     * @return {boolean} The result.
     */
    isInclude(value: any, a: any, b: any): boolean;
}
declare const _default: Util;
export default _default;
