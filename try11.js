let generateMatrix = function(A) {
    let arr = [], counter = 1;
    for (let i = 0; i < A; i++) {
      let items = []
      for (let j = 0; j < A; j++) {
        items.push(1, 2)
      }
      arr.push(items)
    }
  
    var spiralMatrix = function(arr) {
      if (arr.length > 1) {
        for (let i = 1; i < arr[0].length; i++) {
          arr[0][i] = counter++;
        }
      }
      return arr
    }
    return spiralMatrix(arr)
  }
  console.log(generateMatrix(6))