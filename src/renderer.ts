const width = window.innerWidth;
const height = window.innerHeight;

const createCanvas = (element: HTMLElement): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  element.appendChild(canvas);
  return canvas;
};

export const update = (rootElement: HTMLElement) => {
  const canvas = createCanvas(rootElement);
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('fail');
  }
};
