function insertDash(num) {
   let arr = num.toString().split('');
   for (let i = 0; i < arr.length; i++) {
     if(arr[i] % 2 && arr[i - 1] % 2) {
     arr.splice(i, 0, '-');
     };
   };
   return arr.join('');
}
