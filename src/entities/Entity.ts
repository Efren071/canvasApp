import { Dimensions, Position } from './index';
import { Sprite } from '../sprites/Sprite';
import { GenericSprite } from '../sprites/GenericSprite';
import { Vector2D } from '../engine/maths/Vector2D';

export class Entity {
    private sprite: Sprite<Entity> = new GenericSprite(this);
    private entityId: number | undefined;

    constructor(
        private position: Position,
        private dimensions: Dimensions,
    ) {}

    public update(): void {
        const newPosition = new Vector2D(this.position.x, this.position.z);

        let normal = new Vector2D(1, 0);

        const { x, z } = newPosition.add(normal.scalar(5));

        this.position = { x, z };
    }

    public getEntityId(): number | undefined {
        return this.entityId;
    }

    public setEntityId(id: number): void {
        this.entityId = id;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(newPosition: Position): void {
        this.position = newPosition;
    }

    public getDimensions(): Dimensions {
        return this.dimensions;
    }

    public getSprite(): Sprite<Entity> {
        return this.sprite;
    }

    public resetSprite(): void {
        this.sprite = new GenericSprite(this);
    }

    public addSprite(sprite: Sprite<Entity>): void {
        this.sprite = sprite;
    }
}
