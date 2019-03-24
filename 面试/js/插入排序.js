// 首先将待排序的第一个记录作为一个有序段
// 从第二个开始，到最后一个，依次和前面的有序段进行比较，确定插入位置
function insertSort(arr){
   for(let i=1;i<arr.length;i++){
       for(let j=i;j>0;j--){
           if(arr[j]<arr[j-1]){
               [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
           }else{
               continue
           }
       }
   }
   return arr;
}

// i是外循环，依次把后面的数插入前面的有序序列中，默认arr[0]为有序的，i就从1开始
// j进来后，依次与前面队列的数进行比较，因为前面的序列是有序的，因此只需要循环比较、交换即可
// 注意这里的continue，因为前面是都是有序的序列，所以如果当前要插入的值arr[j]大于或等于arr[j-1]，则无需继续比较，直接下一次循环就可以了。
