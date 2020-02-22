export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);
