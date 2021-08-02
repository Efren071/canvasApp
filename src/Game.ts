import { CanvasContext } from './index';
import { EntityRepository } from './Repositories/EntityRepository';
import { Renderer } from './engine/Renderer';
import { Entity } from './entities/Entity';

export class Game {
    private entityRepository: EntityRepository;
    private renderer: Renderer;

    constructor(private canvasContext: CanvasContext) {
        this.entityRepository = new EntityRepository();
        this.renderer = new Renderer(this.canvasContext, this.entityRepository);
    }

    public init(): void {
        const entityTest = new Entity(
            { x: 100, z: 100},
            { width: 100, height: 100 },
        );

        this.entityRepository.addEntity(entityTest);
        this.gameLoop();
    }

    private gameLoop = (): void => {
        this.renderer.clear();
        this.entityRepository.updateEntities();
        this.renderer.renderAll();

        requestAnimationFrame(this.gameLoop);
    }
}
