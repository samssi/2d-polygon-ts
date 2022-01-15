import { appState } from './state';
import { Vector2d } from './vector';

const rendererWidth = window.innerWidth;
const rendererHeight = window.innerHeight;
const scale = 1;

const createCanvas = (element: HTMLElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = rendererWidth;
  canvas.height = rendererHeight;
  element.appendChild(canvas);
  return canvas;
};

const drawVector = (context: CanvasRenderingContext2D, vector2d: Vector2d): void => {
  context.beginPath();
  context.moveTo(rendererWidth / 2, rendererHeight / 2);
  context.lineTo(
    vector2d.x + (rendererWidth / 2) * scale,
    vector2d.y + (rendererHeight / 2) * scale,
  );
  context.stroke();
};

export const update = (rootElement: HTMLElement): void => {
  const canvas = createCanvas(rootElement);
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Application failure: no canvas context!');
  }

  appState.update({
    vector2ds: [
      { x: 100, y: 0 },
      { x: 0, y: 100 },
    ],
  });
  console.log('tick');
  appState.currentState().vector2ds.forEach((vector2d) => drawVector(context, vector2d));
};
