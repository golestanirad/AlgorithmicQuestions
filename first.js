const sum = array => {
  let result = 0;
  for (let i = 0; i < array.length; i++) result += array[i];
  return result;
};

console.log(sum([3, 4, 6, 7, 2,-10,0.2]));

//output 12.2