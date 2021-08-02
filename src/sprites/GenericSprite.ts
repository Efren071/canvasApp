import { Entity } from '../entities/Entity';
import { Sprite } from './Sprite';
import { StylesRepository } from '../Repositories/StylesRepository';

export class GenericSprite<T extends Entity> extends Sprite<T> {
    public draw(context: CanvasRenderingContext2D): void {
        const { fillColour, borderColour, lineWidth } = StylesRepository.getStylesForGenericEntity();
        const { width, height } = this.entity.getDimensions();
        const { x, z } = this.entity.getPosition();

        context.fillStyle = fillColour;
        context.strokeStyle = borderColour;
        context.lineWidth = lineWidth;

        context.save();
        context.beginPath();

        context.rect(x, z, width, height);

        context.fill();
        context.stroke();

        context.closePath();
        context.restore();
    }
}
