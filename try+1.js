const items = [1, 2, 3, 4, 5]

const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]

const result = insert(items, 1, 10)

console.log(result)