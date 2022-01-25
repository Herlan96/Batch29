function matrix(n) {
    //Setup array.
    let arr = []; //Think of data structure as: arr[row][col]
    
    for (let i = 0; i < n; i++) {
      arr.push([]);
    }
    
    //Setup variables.
    let counter = 0;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    
    while (startCol <= endCol && startRow <= endRow) {
      //Top - SR
      for (let i = startCol; i <= endCol; i++) {
        arr[startRow][i] = counter++;
      }
      startRow++;
      
      //Right - EC
      for (let i = startRow; i <= endRow; i++) {
        arr[i][endCol] = counter++;
      } 
      endCol--;
      
      //Bottom - ER
      for (let i = endCol; i >= startCol; i--) {
        arr[endRow][i] = counter++;
      }
      endRow--;
      
      //left - SC
      for (let i = endRow; i >= startRow; i--) {
        arr[i][startCol] = counter++;
      }
      startCol++;  
    }
    
    return arr;
  }
  
  //Try it
  console.log(matrix(5));
  console.log(matrix(6));
  console.log(matrix(7));