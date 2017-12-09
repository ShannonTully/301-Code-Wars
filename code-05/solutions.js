function validatePIN (pin) {
  x = /^\d{4}$|^\d{6}$/g.test(pin);
  return x;
};

function capitalize(s){
  let x = s.split('');
  let y = x;
  for(let i = 0; i < y.length; i = i + 2) {
    y[i] = x[i].toUpperCase();
  };
  let f = y.join('');
  let b = s.split('');
  let a = b;
  for(let j = 1; j < a.length; j = j + 2) {
    a[j] = b[j].toUpperCase();
  };
  let g = a.join('');
  return [f,g];
};
