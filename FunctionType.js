// functie simpla
function sum(number1, number2) {
  return number1 + number2;
}

let result = sum(3, 1);
console.log(result);

//variabila apelata ca si functie anonima
let sumFunction = function (number1, number2) {
  return number1 + number2;
};

let result2 = sumFunction(1, 2);
console.log(result2);

// functie anonima apelata cu arrow ( => )
let arrowFunction = (number1, number2) => {
  return number1 + number2;
};

let result3 = arrowFunction(5, 6);
console.log(result3);

let shortArrowFunction = (number1, number2) => number1 + number2;
