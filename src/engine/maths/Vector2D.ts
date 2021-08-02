export class Vector2D {
    constructor(public x: number, public z: number) {}

    public add(other: Vector2D): Vector2D {
        return new Vector2D(
            this.x + other.x,
            this.z + other.z
        );
    }

    public addInPlace(other: Vector2D): void {
        this.x += other.x;
        this.z += other.z;
    }

    public subtract(other: Vector2D): Vector2D {
        return new Vector2D(
            this.x - other.x,
            this.z - other.z
        );
    }

    public subtractInPlace(other: Vector2D): void{
        this.x -= other.x;
        this.z -= other.z;
    }

    public multiply(other: Vector2D): Vector2D {
        return new Vector2D(
            this.x * other.x,
            this.z * other.z
        );
    }

    public divide(other: Vector2D): Vector2D {
        return new Vector2D(
            this.x / other.x,
            this.z / other.z
        );
    }

    public magnitudeSqrt(): number {
        return (this.x * this.x, + this.z * this.z);
    }

    public magnitude(): number {
        return Math.sqrt(this.magnitudeSqrt());
    }

    public normalise(): Vector2D {
        const magnitude = this.magnitude();
        const clone = this.clone();

        if (Math.abs(magnitude) === 0) {
            return this;
        }

        clone.x /= magnitude;
        clone.z /= magnitude;

        return clone;
    }

    public scalar(scale: number): Vector2D {
        return new Vector2D(
            this.x * scale,
            this.z * scale,
        );
    }

    public dot(other: Vector2D): number {
        return this.x * other.x
            + this.z * other.z;
    }

    public equalsTo(other: Vector2D): boolean {
        return this.x === other.x
            && this.z === other.z;
    }

    public negate(): Vector2D {
        return new Vector2D(this.x * -1, this.z * -1);
    }

    public lerp(other: Vector2D, amount: number): Vector2D {
        const distance = Math.min(amount, 1);
        const difference = other.subtract(this);

        return this.add(difference.scalar(distance));
    }

    public clone(): Vector2D {
        return new Vector2D(this.x, this.z);
    }
}
