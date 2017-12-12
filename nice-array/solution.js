function isNice(arr){
  let boo = true;
  if(arr.length === 0) {
    boo = false;
  };
  for(var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if(!(arr.includes(temp - 1) || arr.includes(temp + 1))) {
      boo = false;
    };
  };
  return boo;
};
