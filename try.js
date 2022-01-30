const matrixDot = (A, B) => {
    // Error handling
    const mx = [A, B];
    const cols = mx.map((matrix) => matrix[0].length);
    if (!mx.every((matrix, i) => matrix.every((row) => row.length === cols[i]))) {
      throw new Error(
        'All rows in a matrix must have the same number of columns'
      );
    } else if (cols[0] !== B.length) {
      throw new Error(
        'The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix'
      );
    }
  
    // Calculations
    return A.map((rowA) =>
      B[0].map((_, xb) =>
        rowA.reduce((acc, itemA, yb) => acc + itemA * B[yb][xb], 0)
      )
    );
  };
  
  // Example
  const A = [
    [3, 2, 5],
    [6, 4, 1],
  ];
  const B = [
    [2, 6],
    [5, 3],
    [1, 4],
  ];
  console.log(matrixDot(A, B));