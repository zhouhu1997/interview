// 将包含 n 个元素的数组向右旋转 k 步。
// 例如，如果  n = 7 ,  k = 3，给定数组  [1,2,3,4,5,6,7]  ，向右旋转后的结果为 [5,6,7,1,2,3,4]。
// 注意:
// 尽可能找到更多的解决方案，这里最少有三种不同的方法解决这个问题。
// [显示提示]
// 提示:
// 要求空间复杂度为 O(1)
// 关联的问题: 反转字符串中的单词

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let t = 4

rorate = (array, target) => {
    // array.slice(target).concat(array.slice(0, target))
    // console.log(array.slice(target).concat(array.slice(0, target)))
    // array.slice(0, target).concat(array.slice(target))
    // console.log(array.slice(0, target).concat(array.slice(target)));
    // console.log('====================================');
    // console.log(array.slice(0,array.length - target));
    // console.log('====================================');
    // console.log('====================================');
    // console.log(array.slice(array.length - target));
    // console.log('====================================');
    let a = array.slice(array.length - target).unshift(array.slice(0,array.length - target))
    console.log(a)
}

rorate(a, t)