function capitalize(s,arr){
  let a = s.split('');
  let m = a;
  arr = arr.filter(ele => ele < m.length);
  for(let i = 0; i < arr.length; i++) {
    m[arr[i]] = (a[arr[i]].toUpperCase());
  };
  let n = m.join('');
  return n;
};
