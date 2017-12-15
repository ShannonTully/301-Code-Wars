function solution(str){
  let reversed = [];
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed.join('');
}
