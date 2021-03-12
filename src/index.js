
// You should implement your task here.

module.exports = function towelSort(matrix) {
let ret=false;
let arr=[];
  if (typeof(matrix)!=="undefined"){
    for (i=0; i<matrix.length; i++){
      if (ret ===true){
        matrix[i]= matrix[i].reverse();
        ret=false;
      }
      else{
        ret=true;
      }
      
     arr.push(matrix[i])
    }
    arr=arr.flat();
    return arr;
    }
    else{
    return [];
    }
}
