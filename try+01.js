const items = [1, 2, 3, 4, 5]

const insert = (arr, index, ...newItems) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted items
  ...newItems,
  // part of the array after the specified index
  ...arr.slice(index)
]

const result = insert(items, 1, 10, 20)

console.log(result)