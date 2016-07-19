function randomInteger(min, max) {
var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);
return rand;
}

var arr = [];
for(i = 0; i<100; i++){
arr[i]  = (randomInteger (1,100));
};




for (var i = 0; i < arr.length; i++) {
	if(arr[i] % 3 === 0 && arr[i] % 5 != 0){
		console.log('FiZZ!')
	}
	else if (arr[i] % 5 === 0 && arr[i] % 3 != 0){
		console.log('BuZZ!')
	}
	else if (arr[i] % 3 === 0 && arr[i] % 5 ===0){
		console.log('FiZZBuZZ')
	}
	else {
		console.log(arr[i])
	}
};