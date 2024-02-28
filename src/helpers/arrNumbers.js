export const arrNumbers = num => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push((i + 1) * 10);
  }
  return arr;
};
