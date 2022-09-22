function findMostValue(tri, i, j, row, col) {
  if (j == col) {
    return 0;
  }

  if (i == row - 1) {
    return tri[i][j];
  }

  return (
    tri[i][j] +
    Math.max(
      findMostValue(tri, i + 1, j, row, col),
      findMostValue(tri, i + 1, j + 1, row, col)
    )
  );
}

let array = [
  [59],
  [73, 41],
  [52, 40, 9],
  [26, 53, 6, 34],
  [10, 51, 87, 86, 81],
  [61, 95, 66, 57, 25, 68],
  [90, 81, 80, 38, 92, 67, 73],
  [30, 28, 51, 76, 81, 18, 75, 44],
  [84, 14, 95, 87, 62, 81, 17, 78, 58],
  [21, 46, 71, 58, 2, 79, 62, 39, 31, 9],
];

console.log(findMostValue(array, 0, 0, 10, 10));
