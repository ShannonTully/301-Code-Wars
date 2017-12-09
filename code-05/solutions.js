function validatePIN (pin) {
  x = /^\d{4}$|^\d{6}$/g.test(pin);
  return x;
};
