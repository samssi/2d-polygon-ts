import { appState, createTriangle, Triangle } from './state';

const rendererWidth = window.innerWidth;
const rendererHeight = window.innerHeight;
const halfWidth = rendererWidth / 2;
const halfHeight = rendererHeight / 2;

const createCanvas = (element: HTMLElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = rendererWidth;
  canvas.height = rendererHeight;
  element.appendChild(canvas);
  return canvas;
};

/*
const drawVector = (context: CanvasRenderingContext2D, vector2d: Vector2d): void => {
  context.beginPath();
  context.moveTo(rendererWidth / 2, rendererHeight / 2);
  context.lineTo(
    vector2d.x + (rendererWidth / 2) * scale,
    vector2d.y + (rendererHeight / 2) * scale,
  );
  context.stroke();
}; */

const drawTriangle = (context: CanvasRenderingContext2D, triangle: Triangle): void => {
  context.beginPath();
  context.moveTo(halfWidth, halfHeight);
  context.lineTo(
    triangle.aVector.x + halfWidth,
    triangle.aVector.y + halfHeight,
  );
  context.lineTo(
    triangle.bVector.x + triangle.aVector.x + halfWidth,
    triangle.bVector.y + triangle.aVector.y + halfHeight,
  );
  context.moveTo(halfWidth, halfHeight);
  context.lineTo(
    triangle.cVector.x + halfWidth,
    triangle.cVector.y + halfHeight,
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
    triangles: [createTriangle({ x: 200, y: 0 }, { x: 0, y: 90 })],
  });
  console.log('tick');
  appState.currentState().triangles.forEach((triangle) => drawTriangle(context, triangle));
};
