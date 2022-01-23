function spiral(matrix) {
    if (matrix.length <= 0) {
        return
    }
    for (var i = 0; i < matrix[0].length; i++) {
        print(matrix[0][i])
    }

    //Get last col
    for (var i = 1; i < matrix.length; i++) {
        print(matrix[i][matrix[0].length - 1])
    }

    //Get last row
    for (var i = matrix[0].length - 2; i >= 0; i--) {
        print(matrix[matrix.length-1][i])
    }

    //Get first column
    for (var i = matrix.length - 2; i > 0; i--) {
        print(matrix[i][0])
    }
    matrix = matrix.slice(1, -1)
    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].slice(1, -1)
    }
    spiral(matrix)
}           
function print(val) {
    printedElements += 1;
    setTimeout(function () {
        console.log(val);
    }, printedElements * 2000);
}
var printedElements = 0
matrix = [[0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9], 
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19], 
            [20, 21, 22, 23, 24]]
matrix1 = [[0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9], 
            [10, 11, 12, 13],
            [14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23]
            [24, 25, 26, 27, 28]]
console.log(matrix1)
