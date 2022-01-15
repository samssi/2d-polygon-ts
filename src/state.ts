import { Vector2d } from './vector';

interface State {
  vector2ds: Vector2d[]
}

export const appState = (() => {
  let stateContainer: State = {
    vector2ds: [],
  };

  return {
    update: (state: State): void => {
      stateContainer = state;
    },
    currentState: (): State => stateContainer,
  };
})();
