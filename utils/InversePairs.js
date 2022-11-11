// module.exports.InversePairs1 = (data = []) => {
//   // write code here
//   let len = data.length;
//   if (len === 0) return 0;
//   const copy = data.concat([]);
//   let count = InversePairsHelp(data, copy, 0, len - 1);
//   return count;
//   function InversePairsHelp(data, copy, start, end) {
//     if (start === end) {
//       copy[start] = data[start];
//       return 0;
//     }
//     let mid = Math.floor((end - start) / 2);
//     let left = InversePairsHelp(copy, data, start, start + mid);
//     let right = InversePairsHelp(copy, data, start + mid + 1, end);
//     let i = start + mid;
//     let j = end;
//     let count = 0;
//     let indexCopy = end;
//     while (i >= start && j >= start + mid + 1) {
//       if (data[i] > data[j]) {
//         copy[indexCopy--] = data[i--];
//         count = count + j - start - mid;
//       } else {
//         copy[indexCopy--] = data[j--];
//       }
//     }
//     for (; i >= start; i--) copy[indexCopy--] = data[i];
//     for (; j >= start + mid + 1; j--) copy[indexCopy--] = data[j];
//     return left + right + count;
//   }
// };

function InversePairs(data) {
  let num = 0;
  // write code here
  function mergeSort(arr) {
    if (arr.length == 1) {
      return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left_arr = arr.slice(0, mid),
      right_arr = arr.slice(mid);
    return merge(mergeSort(left_arr), mergeSort(right_arr));
  }
  /**
   * 方法2:采用归并排序，假设有顺序数组 A 和 B ，A 在 B 的前面。
   * 那么如果有A的第i个数字比B的第j个数字大，则有i后面的数字都
   * 比B的第j个数字大，可以组成A.length-i个逆序对。
   */
  function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        num += left.length;
        result.push(right.shift());
      }
    }
    /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
    return result.concat(left).concat(right);
  }
  mergeSort(data);
  // return num % 1000000007;
  return num;
}
