import { appState, createTriangle, Triangle } from './state';

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

interface Position {
  x: number,
  y: number
}

const drawTriangle = (
  context: CanvasRenderingContext2D,
  triangle: Triangle,
  position: Position,
): void => {
  context.beginPath();
  context.moveTo(position.x, position.y);
  context.lineTo(
    triangle.aVector.x * scale,
    -triangle.aVector.y * scale,
  );
  context.lineTo(
    triangle.bVector.x * scale + triangle.aVector.x * scale,
    -triangle.bVector.y * scale + -triangle.aVector.y * scale,
  );
  context.moveTo(position.x, position.y);
  context.lineTo(
    triangle.cVector.x * scale,
    -triangle.cVector.y * scale,
  );
  context.stroke();
};

const render = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
  context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  const position: Position = { x: 0, y: 0 };
  appState.currentState().triangles.forEach((triangle) => drawTriangle(
    context,
    triangle,
    position,
  ));
};

export const update = (rootElement: HTMLElement): void => {
  const canvas = createCanvas(rootElement);
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Application failure: no canvas context!');
  }

  appState.update({
    triangles: [
      createTriangle({ x: 50, y: 0 }, { x: 0, y: 50 }),
    ],
  });
  const translateX = canvas.width * 0.5;
  const translateY = canvas.height * 0.5;
  context.translate(translateX, translateY);
  setInterval(
    () => render(canvas, context),
    100,
  );
};
