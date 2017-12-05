function abbrevName(name){
  var j;
  for(var i = 0; i < name.length; i++) {
    if(name.charAt(i) === " ") {
      j = i + 1;
    }
  }
  return name.charAt(0).toUpperCase() + "." + name.charAt(j).toUpperCase();
}