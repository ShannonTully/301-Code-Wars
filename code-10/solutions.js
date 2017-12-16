function double(array) {
    return array.map(ele => ele * 2);
}

function filter_list(l) {
  return l.filter(ele => !(typeof ele === 'string'));
}

function find_average(array) {
  let num = array.reduce((a, c) => {return a + c});
  return num / array.length;
}
