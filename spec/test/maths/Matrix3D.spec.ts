import { Matrix3D } from '../../../src/maths/Matrix3D';
import { Vector3D } from '../../../src/maths/Vector3D';

describe('Matrix3D', function () {
    let matrixA: Matrix3D;
    let matrixB: Matrix3D;

    let scaleVector: Vector3D;
    let translationVector: Vector3D;

    beforeAll(function () {
        matrixA = new Matrix3D([
            [1, 2, 3, 0],
            [4, 5, 6, 0],
            [7, 8, 9, 0],
        ]);

        matrixB = Matrix3D.identity();

        translationVector = new Vector3D(10, 20, 30);
        scaleVector = new Vector3D(1, 2, 3);
    });

    it('#identity', function () {
        expect(Matrix3D.identity()).toEqual(
            new Matrix3D([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
            ]),
        );
    });

    it('#flat', function () {
        expect(matrixA.flat()).toEqual([
            1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0,
        ]);
    });

    it('#translate', function () {
        expect(matrixA.translate(translationVector)).toEqual(
            new Matrix3D([
                [1, 0, 0, 10],
                [0, 1, 0, 20],
                [0, 0, 1, 30],
            ]),
        );
    });

    it('#scale', function () {
        expect(matrixA.scale(scaleVector)).toEqual(
            new Matrix3D([
                [1, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, 3, 0],
            ]),
        );
    });

    it('#at', function () {
        expect(matrixA.at(0,0)).toEqual(1);
        expect(matrixA.at(2,1)).toEqual(8);
    })

    it('#getCol', function () {
        expect(matrixA.getCol(2)).toEqual([3, 6, 9, 0]);
        expect(matrixA.getCol(3)).toEqual([0, 0, 0, 1]);

    });

    it('#getRow', function () {
        expect(matrixA.getRow(0)).toEqual([1, 2, 3, 0]);
        expect(matrixA.getRow(1)).toEqual([4, 5, 6, 0]);
        expect(matrixA.getRow(2)).toEqual([7, 8, 9, 0]);
    });
});
