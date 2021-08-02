import { CanvasContext } from '../index';
import { Dimensions } from '../entities';
import { EntityRepository } from '../Repositories/EntityRepository';

export class Renderer {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public canvasSize: Dimensions;

    constructor(
        canvasContext: CanvasContext,
        private entityRepository: EntityRepository,
    ) {
        this.canvas = canvasContext.canvas;
        this.context = canvasContext.context;

        const { width, height } = this.canvas.getBoundingClientRect();
        this.canvasSize = { width, height };
    }

    public renderAll(): void {
        for (const [_, entity] of this.entityRepository.getEntites().entries()) {
            entity.getSprite().draw(this.context);
        }
    }

    public clear(): void {
        this.context.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    }
}
