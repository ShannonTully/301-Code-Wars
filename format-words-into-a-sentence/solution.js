function formatWords(words){
  let trash = undefined;
  if(!(words === null)) {
    for(let i = 0; i < words.length; i++) {
      if(!(words[i].length > 1)) {
        trash = words.splice(i, 1);
        // console.log(words);
      };
    };
    for(let i = 0; i < words.length; i++) {
      if(!(words[i].length > 1)) {
        trash = words.splice(i, 1);
        // console.log(words);
      };
    };
    // console.log(words);
    let removed = words.splice(words.length - 2, 2);
    // console.log(words);
    let and = removed.join(' and ');
    // console.log(and);
    words.splice(words.length, 0, and);
    let final = words.join(', ');
    console.log(final);
    return final;
  } else {
    return '';
  }
}
