export const state = (() => {
  let foo = 1;

  return {
    update: (value: number): void => {
      foo = value;
    },
    value: (): number => foo,
  };
})();
