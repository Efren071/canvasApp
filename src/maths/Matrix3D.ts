import { Vector3D } from './Vector3D';
import * as rotationHelper from './rotationHelper';

export type Matrix3dElements = [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
];

/**
 * <br>|xx, yx, zx, wx|
 * <br>|xy, yy, zy, wy|
 * <br>|xz, yz, zz, wz|
 */
export class Matrix3D {
    constructor(private elements: Matrix3dElements) {}

    public static identity(): Matrix3D {
        return new Matrix3D([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
        ]);
    }

    public translate(vector: Vector3D): Matrix3D {
        const { x, y, z } = vector;

        return new Matrix3D([
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
        ]);
    }

    public scale(vector: Vector3D): Matrix3D {
        const { x, y, z } = vector;

        return new Matrix3D([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
        ]);
    }

    // To multiply such matrices we add additional row (0, 0, 0, 1) to another matrix.
    public multiplyWith(other: Matrix3D): Matrix3D {
        const clone = this.clone();

        clone.elements[0][0] = this.at(0, 0) * other.at(0, 0) + this.at(0, 1) * other.at(1, 0) + this.at(0, 2) * other.at(2, 0);
        clone.elements[0][1] = this.at(0, 0) * other.at(0, 1) + this.at(0, 1) * other.at(1, 1) + this.at(0, 2) * other.at(2, 1);
        clone.elements[0][2] = this.at(0, 0) * other.at(0, 2) + this.at(0, 1) * other.at(1, 2) + this.at(0, 2) * other.at(2, 2);
        clone.elements[0][3] = this.at(0, 0) * other.at(0, 3) + this.at(0, 1) * other.at(1, 3) + this.at(0, 2) * other.at(2, 3) + this.at(0, 3);

        clone.elements[1][0] = this.at(1, 0) * other.at(0, 0) + this.at(1, 1) * other.at(1, 0) + this.at(1, 2) * other.at(2, 0);
        clone.elements[1][1] = this.at(1, 0) * other.at(0, 1) + this.at(1, 1) * other.at(1, 1) + this.at(1, 2) * other.at(2, 1);
        clone.elements[1][2] = this.at(1, 0) * other.at(0, 2) + this.at(1, 1) * other.at(1, 2) + this.at(1, 2) * other.at(2, 2);
        clone.elements[1][3] = this.at(1, 0) * other.at(0, 3) + this.at(1, 1) * other.at(1, 3) + this.at(1, 2) * other.at(2, 3) + this.at(1, 3);

        clone.elements[2][0] = this.at(2, 0) * other.at(0, 0) + this.at(2, 1) * other.at(1, 0) + this.at(2, 2) * other.at(2, 0);
        clone.elements[2][1] = this.at(2, 0) * other.at(0, 1) + this.at(2, 1) * other.at(1, 1) + this.at(2, 2) * other.at(2, 1);
        clone.elements[2][2] = this.at(2, 0) * other.at(0, 2) + this.at(2, 1) * other.at(1, 2) + this.at(2, 2) * other.at(2, 2);
        clone.elements[2][3] = this.at(2, 0) * other.at(0, 3) + this.at(2, 1) * other.at(1, 3) + this.at(2, 2) * other.at(2, 3) + this.at(2, 3);

        return clone;
    }

    public static makeXRotationMatrix(angleInDegrees: number) {
        const angleInRadians = rotationHelper.degreesToRadians(angleInDegrees);
        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);

        return new Matrix3D([
            [1,   0,    0, 0],
            [0, cos, -sin, 0],
            [0, sin,  cos, 0],
        ]);
    }

    public static makeYRotationMatrix(angleInDegrees: number) {
        const angleInRadians = rotationHelper.degreesToRadians(angleInDegrees);
        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);

        return new Matrix3D([
            [ cos, 0, sin, 0],
            [   0, 1,   0, 0],
            [-sin, 0, cos, 0],
        ]);
    }

    public static makeZRotationMatrix(angleInDegrees: number) {
        const angleInRadians = rotationHelper.degreesToRadians(angleInDegrees);
        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);

        return new Matrix3D([
            [cos,  -sin, 0, 0],
            [sin,   cos, 0, 0],
            [  0,     0, 1, 0],
        ]);
    }

    public rotateX(angleInDegrees: number) {
        const rotationMatrix = Matrix3D.makeXRotationMatrix(angleInDegrees);
        return rotationMatrix.multiplyWith(this);
    }

    public rotateY(angleInDegrees: number) {
        const rotationMatrix = Matrix3D.makeYRotationMatrix(angleInDegrees);
        return rotationMatrix.multiplyWith(this);
    }

    public rotateZ(angleInDegrees: number) {
        const rotationMatrix = Matrix3D.makeZRotationMatrix(angleInDegrees);
        return rotationMatrix.multiplyWith(this);
    }

    public flat(): number[] {
        return this.elements.flatMap((element) => element.flat());
    }

    public at(row: number, col: number): number {
        return this.elements[row][col];
    }

    public getRow(row: number): number[] {
        return this.elements[row];
    }

    public getCol(col: number): number[] {
        const index = col;

        const row0 = this.elements[0];
        const row1 = this.elements[1];
        const row2 = this.elements[2];

        return [
            row0[index],
            row1[index],
            row2[index],
            index === 3 ? 1 : 0,
        ];
    }

    public clone(): Matrix3D {
        return new Matrix3D([...this.elements]);
    }
}
