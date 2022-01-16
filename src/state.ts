import { Vector2d } from './vector';

export interface Triangle {
  aVector: Vector2d
  bVector: Vector2d,
  cVector: Vector2d
}

interface State {
  triangles: Triangle[]
}

const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

export const rotateVector = (vector2d: Vector2d, degrees: number): Vector2d => {
  const radians = toRadians(degrees);
  const x = (vector2d.x * Math.cos(radians)) - (vector2d.y * Math.sin(radians));
  const y = (vector2d.x * Math.sin(radians)) + (vector2d.y * Math.cos(radians));
  return { x, y };
};

export const createTriangle = (aVector: Vector2d, bVector: Vector2d): Triangle => ({
  aVector: { x: aVector.x, y: aVector.y },
  bVector: { x: bVector.x, y: bVector.y },
  cVector: { x: aVector.x + bVector.x, y: aVector.y + bVector.y },

});

export const rotateTriangle = (triangle: Triangle, degrees: number): Triangle => {
  const a = rotateVector(triangle.aVector, degrees);
  const b = rotateVector(triangle.bVector, degrees);
  return createTriangle(a, b);
};

export const appState = (() => {
  let stateContainer: State = {
    triangles: [],
  };

  return {
    update: (state: State): void => {
      stateContainer = state;
    },
    currentState: (): State => stateContainer,
  };
})();
