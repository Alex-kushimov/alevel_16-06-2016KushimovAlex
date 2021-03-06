// Написать функцию, возвращающую сумму всех чисел данного числа.
// с использованием цикла
// с использованием рекурсии
// с использованием формулы суммы арифметической прогрессии
// Массивы, встроенную функцию Math.sum(), а также операторы if-else и switch использовать нельзя.

// console.log( sum(3) ); // 6 ( = 1 + 2 + 3)

// Чему равна сумма чисел числа 1000?


// Решение с использованием цикла:

function sum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sum(1000) );



// Решение через рекурсию:

  function sumTo(n) {
  return n * (n + 1) / 2;
}


console.log( sum(1000) );

// Решение с использованием формулы суммы арифметической прогрессии:

function sum(n) {
  return n * (n + 1) / 2;
}

console.log( sum(1000) );
