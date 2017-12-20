function high(x){
  let arr = x.split(' ');
  arr = arr.filter(ele => ele !== '' || typeof ele !== 'number');
  console.log(arr);
  console.log(arr.length);
  if(arr.length >= 1) {
  let num = [];
  let nums = [];
  let place = 0;
  for(let i = 0; i < arr.length; i++) {
    var letters = arr[i].split('');
    for(let j = 0; j < letters.length; j++) {
      if(letters[j] === 'a') {
          num[j] = 1;
        } else if (letters[j] === 'b') {
          num[j] = 2;
        } else if (letters[j] === 'c') {
          num[j] = 3;
        } else if (letters[j] === 'd') {
          num[j] = 4;
        } else if (letters[j] === 'e') {
          num[j] = 5;
        } else if (letters[j] === 'f') {
          num[j] = 6;
        } else if (letters[j] === 'g') {
          num[j] = 7;
        } else if (letters[j] === 'h') {
          num[j] = 8;
        } else if (letters[j] === 'i') {
          num[j] = 9;
        } else if (letters[j] === 'j') {
          num[j] = 10;
        } else if (letters[j] === 'k') {
          num[j] = 11;
        } else if (letters[j] === 'l') {
          num[j] = 12;
        } else if (letters[j] === 'm') {
          num[j] = 13;
        } else if (letters[j] === 'n') {
          num[j] = 14;
        } else if (letters[j] === 'o') {
          num[j] = 15;
        } else if (letters[j] === 'p') {
          num[j] = 16;
        } else if (letters[j] === 'q') {
          num[j] = 17;
        } else if (letters[j] === 'r') {
          num[j] = 18;
        } else if (letters[j] === 's') {
          num[j] = 19;
        } else if (letters[j] === 't') {
          num[j] = 20;
        } else if (letters[j] === 'u') {
          num[j] = 21;
        } else if (letters[j] === 'v') {
          num[j] = 22;
        } else if (letters[j] === 'w') {
          num[j] = 23;
        } else if (letters[j] === 'x') {
          num[j] = 24;
        } else if (letters[j] === 'y') {
          num[j] = 25;
        } else if (letters[j] === 'z') {
          num[j] = 26;
        };
    };
    nums[i] = num.reduce((a, b) => a + b);
    num = [];
  };
  for(let k = 0; k < nums.length; k++) {
    if(nums[k] > nums[place]) {
      place = k;
    };
  };
  return arr[place];
  };
};
