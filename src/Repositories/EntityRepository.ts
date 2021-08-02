import { Entity } from '../entities/Entity';

type EntityMap = Map<number, Entity>;

export class EntityRepository {
    private entities: EntityMap;

    constructor() {
        this.entities = new Map([]);
    }

    public updateEntities(): void {
        for (const [_, entity] of this.getEntites().entries()) {
            entity.update();
        }
    }

    public getEntites(): EntityMap {
        return this.entities;
    }

    public addEntity(entity: Entity): void {
        const nextEntityId = this.getEntityCount() + 1;

        this.entities.set(nextEntityId, entity);
        entity.setEntityId(nextEntityId);
    }

    public removeEntity(entity: Entity): void {
        this.entities.delete(entity.getEntityId()!);
    }

    private getEntityCount(): number {
        return this.entities.size;
    }
}
