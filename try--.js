const sentenceManipulation = { x: 1, y: 2, z: 3 };

for (const property in sentenceManipulation) {
  console.log(`${property}: ${sentenceManipulation[property]}`);
}

