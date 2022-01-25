function spiral(param1) {

    let matrix = []
    let count = 0
    
      for( i=0; i < param1;i++) {
         matrix[i] = []
        for( j=0; j < param1; j++) {
           matrix[i][j] = count
           count++
        }
      }//console.log (matrix)
    
      let x = 0;
      let y = 0;
      let batasAtas = param1
      let batasBawah = 0

      let result = []


      while (result.length < param1 * param1) {

      
       // right
       for(; x < batasAtas; x++) {
          result.push(matrix[y][x])
       }
       x--
       y++
    
    
       // down
       for(; y < batasAtas; y++) {
         result.push(matrix[y][x])
       }
       y--
       x--

      // left
       for(; x >= batasBawah; x--) {
         result.push(matrix[y][x])
       }
       x++
       y--
    
       //top
       for(; y > batasBawah; y--) {
         result.push(matrix[y][x])
       }
       x++
       y++
       batasAtas--
       batasBawah++
    
   }
   console.log(result)

}  

spiral(5);
spiral(6);
spiral(7);