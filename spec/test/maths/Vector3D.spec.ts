import { Vector3D } from '../../../src/engine/maths/Vector3D';

describe('Vector2D', function () {
    let vectorA: Vector3D;
    let vectorB: Vector3D;

    beforeAll(function () {
        vectorA = new Vector3D(1,2, 3);
        vectorB = new Vector3D(4, 5, 6);
    });

    it('#add', function () {
        expect(vectorA.add(vectorB)).toEqual(new Vector3D(5, 7, 9));
    });

    it('#addInPlace', function () {
        const vector = new Vector3D(1, 1, 1);
        vector.addInPlace(vectorA);

        expect(vector).toEqual(new Vector3D(2, 3, 4));
    });

    it('#subtract', function () {
        expect(vectorB.subtract(vectorA)).toEqual(new Vector3D(3, 3, 3));
    });

    it('#subtractInPlace', function () {
        const vector = new Vector3D(3, 3, 3);
        vector.subtractInPlace(vectorB);

        expect(vector).toEqual(new Vector3D(-1, -2, -3));
    });

    it('#multiply', function () {
        expect(vectorA.multiply(vectorB)).toEqual(new Vector3D(4, 10, 18));
    });

    it('#divide', function () {
        const vector = vectorB.divide(vectorA);

        expect(vector).toEqual(new Vector3D(4, 5 / 2, 2));
    });

    it('#magnitudeSqrt', function () {
        expect(vectorA.magnitudeSqrt()).toEqual(14);
    });

    it('#magnitude', function () {
        const vector = vectorA.magnitude();

        expect(vector).toEqual(Math.sqrt(vectorA.magnitudeSqrt()));
    });

    it('#normalise', function () {
        const vector = new Vector3D(10, 0, 0);
        const normalised = vector.normalise();

        expect(normalised).toEqual(new Vector3D(1, 0, 0));
    });

    it('#scalar', function () {
        expect(vectorA.scalar(10)).toEqual(new Vector3D(10, 20, 30));
    });

    it('#dot', function () {
        expect(vectorA.dot(vectorB)).toEqual(32);
    });

    it('#equalsTo', function () {
        expect(vectorA.clone().equalsTo(vectorA)).toEqual(true);
        expect(vectorA.equalsTo(vectorB)).toEqual(false);
    });

    it('#negate', function () {
        expect(vectorA.negate()).toEqual(new Vector3D(-1, -2, -3));
    });

    it('#lerp', function () {
        expect(vectorA.lerp(vectorB, 0.2)).toEqual(new Vector3D(1.6, 2.6, 3.6))
    });

    it('#clone', function () {
        expect(vectorA.clone()).toEqual(new Vector3D(1, 2, 3));
    });
})
