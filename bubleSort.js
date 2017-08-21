/**
 * Created by xiangxue on 17/5/26.
 */
function sort(array){
  var i,j;
  for(i = 0;i<array.length;i++){
    for(j=0;j<array.length-1 -i;j++){
      if(array[j] <= array[j+1]){


      }else{
        swap(array,j,j+1)
      }
    }
  }
  return array;
}
function swap(array,a,b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
console.log(sort([3,5,8,9,1,2,4,6,7]));