// В функциональном стиле написать класс Calculator. Входящий параметр - флаг true/false, обозначающий, включен калькулятор или выключен. По умолчанию (если параметр не передан) калькулятор включен. Определить метод для включения-выключения калькулятора. Определить функции sum, diff, div, multi, mod (остаток от деления), pow (возведение  степень). Функция возведения в степень не должна использовать циклы и встроенный метод Math.pow. Если калькулятор выключен, то при расчете генерируется исключение, если включен – возвращается результат вычисления. С помощью созданного конструктора, используя только (!) его методы, рассчитать формулу:

// a2b2(a + b)2-(a - b)2,

// где a = 100, b = 500. Затем методом конструктора взять остаток от деления на 12500 и распечатать результат.


var calculatorOn = new Calculator(true);
var calculatorOff = new Calculator(false);

var a = 100;
var b = 500;
var res = 0;
res = calculatorOn.mod(calculatorOn.diff(calculatorOn.multi(calculatorOn.pow(a,2),calculatorOn.pow(b,2)),
 calculatorOn.diff(calculatorOn.multi(calculatorOn.sum(a,b),calculatorOn.sum(a,b)),calculatorOn.multi(calculatorOn.diff(a,b),calculatorOn.diff(a,b)))),12500);
console.log(res);

function Calculator(flag){
    this.flag = flag || true;
    this.sum = function(a,b){
        if(flag){
            return a + b;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }

    this.diff = function(a,b){
        if(flag){
             return a - b;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }

    this.div = function(a,b){
        if(flag){
            return a / b;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }

    this.multi = function(a,b){
        if(flag){
            return a * b;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }

    this.mod = function(a,b){
        if(flag){
            return a % b;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }

    this.pow = function(a,b){
        if(flag){
            return b == 1 ? a : a * this.pow(a,b-1) ;
        }else{
            throw new UserException("Калькулятор выключен");
        }
    }
}

function UserException(message) {
        this.message = message;
        this.name = "Исключение";
}