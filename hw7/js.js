function multiTab(value){
    var mTab ={};
    mTab.allTable = {};
    for(var i = 1; i < 10; i++){
        mTab[i] ={};
        for(var j = 1; j < 10; j++){
            mTab[i][i + 'x' + j] = i * j;
            mTab.allTable[i + 'x' + j] = i * j;
        }
    }
    if(Array.isArray(value) && value.length < 3){
       var tmp = value[0] + 'x' + value[1];
       for(var i in mTab.allTable){
           if(i === tmp){
               return i + '=' + mTab.allTable[i];
           }
       }
       return "Этих числа в таблице отсутствуют. Результат их умножения: " + tmp + "=" + value[0]*value[1];
    }else if(typeof value === 'number' && value < 10 && value > 0){
        var result = [];
       for(var i in mTab){
           if(+i === value){
              for (var j in mTab[i]){
                  result.push(j + "=" + mTab[i][j] + ", ");
              }
           }
       }
        return result.toString();
    }else if(typeof value === 'string'){
        var result = '';
        for(var i in mTab.allTable){
            if(i === value){
               result = i + '=' + mTab.allTable[i];
            }
        }
        if(result === ''){
            return "Строка.Данные не коректны";
        }else{
            return result;
        }
    }else if(typeof value === 'object'){
        var result = '';
        for(var i in mTab.allTable){
            for(var j in value){
                if (i === value[j]){
                    result = i + '=' + mTab.allTable[i];
                }
            }
        }
        if(result === ''){
            return "Объект.Данные не коректны";
        }else{
            return result;
        }
    }else{
        for(var i in mTab.allTable){
            console.log(i + ' = ' + mTab.allTable[i] +'\n');
        }
        return mTab.allTable;
    }
}