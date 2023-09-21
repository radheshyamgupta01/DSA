
// questuin how to from triangle 
// input  arr =[10,21,22,100,101,200,300]
//output =6
// using inquality triangle rule
var arr =[10,21,22,100,101,200,300] 
var a=arr.sort((a,b)=>{
return a-b
})
let count=0
for(var i=a.length-1;i>=2;i--){
let left=0
let right=i-1
while(left<right){
if(a[left]+a[right]>a[i]){
count+=right-left
right--
}
else{
left++
}


}
}
console.log(count)
