export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export const randomColor = [
  "#5355e5",
  "#83aa11",
  "#b9dd34",
  "#af56a8",
  "#1a851b",
  "#fdae5f",
  "#df9acd",
  "#a8465a",
  "#6bb5e7",
  "#e1677d"
];
// `#${Array.from(Array(10), () =>
//   Math.floor(Math.random() * 16777215).toString(16)
// )}`;
