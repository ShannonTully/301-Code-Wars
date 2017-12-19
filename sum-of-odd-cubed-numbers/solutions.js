function cubeOdd(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(!(/\W?\d/g.test(arr[i]))) {
      return undefined;
    }
  }
  return arr.filter(ele => /(.*?)[13579]\b/g.test(ele)).map(ele => ele * ele * ele).reduce((a, b) => a + b);
}
