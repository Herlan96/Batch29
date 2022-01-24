function spiral (param1) {
    let matrix = []
    let number = 0
    for (let i= 0; i < param1; i++) {
        matrix [i] = []
        for (let j=0; j < param1; j++) {
            matrix [i][j] = number++;

        }
    }
    console.log(matrix[0])

        
    
}
spiral(5)
// spiral(6)
// spiral(7)