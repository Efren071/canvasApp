import { Game } from './Game';

export interface CanvasContext {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D
}

function initialiseCanvas(): CanvasContext {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

    if (!canvas) {
        throw new Error('Could not find canvas with the id \'game-canvas\' - please ensure the id is correct.');
    }

    const context = canvas.getContext('2d');

    if (!context) {
        throw new Error('Could not get context.');
    }

    return { canvas, context };
};

function onLoad(): void {
    const canvasContext = initialiseCanvas();
    const game = new Game(canvasContext);

    game.init();
}

document.addEventListener('DOMContentLoaded', onLoad, false);
