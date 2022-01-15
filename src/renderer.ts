import { state } from './state';

const rendererWidth = window.innerWidth;
const rendererHeight = window.innerHeight;

const createCanvas = (element: HTMLElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = rendererWidth;
  canvas.height = rendererHeight;
  element.appendChild(canvas);
  return canvas;
};

export const update = (rootElement: HTMLElement) => {
  const canvas = createCanvas(rootElement);
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('fail');
  }
  state.update(10);
  console.log(state.value());
};
