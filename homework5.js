function grid(arr){
    
    function booleanRows(arr){
        let obj = {};
         for(let i = 0 ; i < arr.length ; i++){
     for(j = 0 ; j < arr[i].length ; j++){
         if(arr[i][j] === "."){
             continue;
         }else{
             obj(arr[i][j])="";
         }
         if(arr[i].includes(ar[i][j],++j)){
             return false;
         }
     }  
             
        
    }
        if(Object.keys(obj).length === 9){
            return true;
        }
        return false;
}
    function booleanColums(arr){
        let obj = {};
        for(let i = 0 ; i < arr.length ; i++){
            for(let j = 0 ; j < arr[i].length ; j++){
                if(arr[j][i] === "."){
                    continue;
                }
                if(!obj.hasOwnProperty(arr[j][i])){
                    obj[(arr[i][j])] = ''
                }else{
                    return false;
                }
            }
        }
        return true;
    }
    function booleanMatrix(arr,row = 0,column = 0){
        if(row <= arr.length){
            let obj = {}
            for(let i = row ; i < arr.length ; i++){
                for(let j = column ; j < arr[i].length ; j++){
                    if(arr[i][j]=== "."){
                        continue;
                    }
                     if(!obj.hasOwnProperty){
                         obj[arr[i][j]] = ""
                         
                     }else{
                         return false;
                     }
                }
            }
            
        }
    }