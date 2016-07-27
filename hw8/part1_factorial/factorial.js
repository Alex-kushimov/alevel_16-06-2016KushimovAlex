function factorial(n) {
  return (n * (n-1)) ? n * factorial(n - 1) : 1;
}
alert( factorial(3) );