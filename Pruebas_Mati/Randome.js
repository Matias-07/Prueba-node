function getRandomArbitrary(min, max) {
    let = randomeNumber = Math.random() * (max - min) + min;
    return Math.floor(randomeNumber)
  }; 

console.log(getRandomArbitrary(10,20));

 
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

console.log(getRandomInt(10,20));

