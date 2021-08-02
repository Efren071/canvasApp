import { Entity } from '../entities/Entity';

export abstract class Sprite<T extends Entity> {
    constructor(protected entity: T) {}

    public abstract draw(context: CanvasRenderingContext2D): void;
}
