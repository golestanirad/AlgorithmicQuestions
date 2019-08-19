const  solution = (strings) => {
 
  let type2 = [];
  let type1 = [];
  //////// here we seperate type1 and type2
  strings.map((s) => {
    if (Number.isInteger(parseInt(s.split(/\s+/)[1]))) {
      type2.push(s);
    } else {
      type1.push(s);
    }
  });
  ////////////// here we do the sorting according to rules that we were provided
  type1 = mySort(type1);
  //////// here we put type1 on top of type2
  return type1.concat(type2);
}

const mySort = type1 => {
  /// we make a key/value object for the strings where key is the id and value is the error
  let newType1 = type1.map(t => {
    let key = t.split(/\s+/)[0];
    return { [key]: t.substr(t.indexOf(" ") + 1) };
  });
  //// here we sort object, NOTE that in the callback function that we provide to the sort method we also handle the case that we have a tie, there we use keys to sort
  newType1.sort((a, b) => {
    var nameA = Object.values(a)[0];
    var nameB = Object.values(b)[0];
    if (nameA === nameB) {    
      return Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1;
    }
    return nameA > nameB ? 1 : -1;
  });
  /// at the end we reform the object to the array
  newType1 = newType1.map(
    obj => Object.keys(obj)[0] + " " + Object.values(obj)[0]
  );
  //////////////
  return newType1;
};
var strings = [
  "b12 8 3 5 2",
  "v1 Err var",
  "v3 err var",
  "v2 err var",
  "ap9 3 9",
  "hf2 err var",
  "t12 goog  ana",
  "u2 fa handle err"
];

console.log(solution(strings));


// output is:
// [ 'v1 Err var',
//   'hf2 err var',
//   'v2 err var',
//   'v3 err var',
//   'u2 fa handle err',
//   't12 goog  ana',
//   'b12 8 3 5 2',
//   'ap9 3 9' ]
