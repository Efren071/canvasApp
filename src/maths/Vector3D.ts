export class Vector3D {
    constructor(
        public x: number,
        public y: number,
        public z: number,
    ) {}

    public add(other: Vector3D): Vector3D {
        return new Vector3D(
            this.x + other.x,
            this.y + other.y,
            this.z + other.z
        );
    }

    public addInPlace(other: Vector3D): void {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
    }

    public subtract(other: Vector3D): Vector3D {
        return new Vector3D(
            this.x - other.x,
            this.y - other.y,
            this.z - other.z
        );
    }

    public subtractInPlace(other: Vector3D): void{
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
    }

    public multiply(other: Vector3D): Vector3D {
        return new Vector3D(
            this.x * other.x,
            this.y * other.y,
            this.z * other.z
        );
    }

    public divide(other: Vector3D): Vector3D {
        return new Vector3D(
            this.x / other.x,
            this.y / other.y,
            this.z / other.z
        );
    }

    public magnitudeSqrt(): number {
        return (this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public magnitude(): number {
        return Math.sqrt(this.magnitudeSqrt());
    }

    public normalise(): Vector3D {
        const magnitude = this.magnitude();
        const clone = this.clone();

        if (Math.abs(magnitude) === 0) {
            return this;
        }

        clone.x /= magnitude;
        clone.y /= magnitude;
        clone.z /= magnitude;

        return clone;
    }

    public scalar(scale: number): Vector3D {
        return new Vector3D(
            this.x * scale,
            this.y * scale,
            this.z * scale,
        );
    }

    public dot(other: Vector3D): number {
        return this.x * other.x
            + this.y * other.y
            + this.z * other.z;
    }

    public equalsTo(other: Vector3D): boolean {
        return this.x === other.x
            && this.y === other.y
            && this.z === other.z;
    }

    public negate(): Vector3D {
        return new Vector3D(this.x * -1, this.y * -1, this.z * -1);
    }

    public lerp(other: Vector3D, amount: number): Vector3D {
        const distance = Math.min(amount, 1);
        const difference = other.subtract(this);

        return this.add(difference.scalar(distance));
    }

    public clone(): Vector3D {
        return new Vector3D(this.x, this.y, this.z);
    }
}
