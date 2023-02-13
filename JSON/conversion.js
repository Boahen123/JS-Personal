let string = JSON . stringify ({ name : " X " , born : 1980}) ;
console . log ( string ) ;
// → {" name ":" X " ," born ":1980}
console . log ( JSON . parse ( string ) ) ;
// → 1980