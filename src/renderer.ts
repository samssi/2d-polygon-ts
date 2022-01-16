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

const drawTriangle = (context: CanvasRenderingContext2D, triangle: Triangle): void => {
  context.beginPath();
  context.moveTo(halfWidth, halfHeight);
  context.lineTo(
    triangle.aVector.x + halfWidth,
    -triangle.aVector.y + halfHeight,
  );
  context.lineTo(
    triangle.bVector.x + triangle.aVector.x + halfWidth,
    -triangle.bVector.y + -triangle.aVector.y + halfHeight,
  );
  context.moveTo(halfWidth, halfHeight);
  context.lineTo(
    triangle.cVector.x + halfWidth,
    -triangle.cVector.y + halfHeight,
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
    triangles: [
      createTriangle({ x: 10, y: 0 }, { x: 30, y: 70 }),
      createTriangle({ x: -100, y: 0 }, { x: 0, y: 100 }),
    ],
  });
  console.log('tick');
  appState.currentState().triangles.forEach((triangle) => drawTriangle(context, triangle));
};
