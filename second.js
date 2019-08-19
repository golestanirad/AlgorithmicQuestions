

function findFirstNonRepeatedCharacter(input) {
    var obj = {};
    for (let i = 0; i < input.length; i++) {
      if (obj[input[i]]!== undefined && obj[input[i]] === true) {
           obj[input[i]] = false;
       } else if (obj[input[i]] !== false) {
           obj[input[i]] = true;
       }
    }
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]] === true) {
            return input[i];
        }
    }
}

/// I first came up with another algorithm having nested `for` loops but then realized that it would solve this issue with the complexity of n^2
/// then I figured out that by using a hash-map we can do it with o(n)