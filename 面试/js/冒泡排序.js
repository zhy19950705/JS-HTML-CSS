function bubbleSort(arr){
  let length=arr.length;
  for(let outer=length;outer>=2;outer--){
      for(let inner=0;inner<outer-1;inner++){
          if(arr[inner]>arr[inner+1]){
              [arr[inner],arr[inner+1]]=[arr[inner+1],arr[inner]]
          }
      }
  }
  return arr;
}

// 外层循环，从最大值开始递减，因为内层是两两比较，因此最外层当>=2时即可停止；
// 内层是两两比较，从0开始，比较inner与inner+1，因此，临界条件是inner<outer -1
bubbleSort([3,1,2])
