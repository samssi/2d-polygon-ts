import { Vector2d } from './vector';

export interface Triangle {
  aVector: Vector2d
  bVector: Vector2d,
  cVector: Vector2d
}

interface State {
  triangles: Triangle[]
}

export const createTriangle = (aVector: Vector2d, bVector: Vector2d): Triangle => ({
  aVector: { x: aVector.x, y: aVector.y },
  bVector: { x: bVector.x, y: bVector.y },
  cVector: { x: aVector.x + bVector.x, y: aVector.y + bVector.y },

});

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
