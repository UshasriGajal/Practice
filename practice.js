// Find the smallest number in an array
let arr = [23,45,55,65,3,656]
let mini=arr[0]
arr.forEach((i)=>{
    if(i<mini){
        mini=i
    }
})
console.log(mini)


// using filter.
let mininum=arr[0]
let arr1=arr.filter((i)=>i<mininum? mininum=i:0)
console.log(arr1)


// using maps
let x=arr[0]
let miniarr=arr.map((i)=>{
    if(i<x){
        x=i
    }
})
console.log(x)