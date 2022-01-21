function indexPrime (index) {
    var nomer = 2
    var counter = 0

    while (counter < index) {
        let isPrime = true;
        for (let happy = 2; happy <= Math.sqrt(nomer); happy++) 
            if (nomer % happy == 0) 
                isPrime = false;
        if  (isPrime) 
        counter++
    nomer++
  }
  console.log(nomer - 1)
}

indexPrime(4)
indexPrime(6)
indexPrime(500)
indexPrime(37786)
