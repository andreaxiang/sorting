/**
 * Created by xiangxue on 17/8/21.
 */
var quickSort = function(myArray) {
// 当被分的数组只剩一个时，退出递归
  if (myArray.length <= 1) {
    return myArray;
  }

// 中间基准值的index
  var pivotIndex = Math.floor(myArray.length / 2);
// 基准值
  var pivot = myArray.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
// 小的放左边，大的放右边
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] < pivot) {
      left.push(myArray[i]);
    } else {
      right.push(myArray[i]);
    }
  }
// 递归
// 把数组合并在一起
  return quickSort(left).concat([pivot], quickSort(right));
};