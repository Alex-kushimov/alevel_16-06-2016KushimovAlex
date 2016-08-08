// Написать функцию, которая сортирует массив объектов по убыванию/возрастанию значения поля. Расширить для этого встроенный объект Array. Флаг ASC - сортировка по возрастанию (по умолчанию), флаг DESC - сортировка по убыванию.

//         var vasya = { name: "Вася", age: 18 },
//     masha = { name: "Маша", age: 23 },
//     vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya, masha, vovochka ];

//     console.log( people.sortBy('age', 'DESC') );


var vasya = { name: "Вася", age: 18};
var masha = { name: "Маша", age: 23  };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];



var vasya = { name: "Вася", age: 18 },
    masha = { name: "Маша", age: 23 },
    vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya, masha, vovochka ];

Array.prototype.sortBy = function (key, flag){
    function asc(a, b) {
        if (a[key] > b[key])
            return 1;
        else if (a['key'] < b['key'])
            return -1;
        else
            return 0;
    }
    function desc(a, b) {
        if (a[key] < b[key])
            return 1;
        else if (a[key] > b[key])
            return -1;
        else
            return 0;
    }
    if (flag === 'ASC') {
    	return this.sort(asc);
    }else if(flag === 'DESC'){
    	return this.sort(desc);
    }
}
console.log(people.sortBy('name', 'ASC') );
