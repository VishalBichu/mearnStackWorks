// var arr=[10,11,12,13,14,15]


// // var squares=arr.map(num=>num**2)
// // console.log(squares);

// // var cubes=arr.map(num=>num**3)
// // console.log(cubes);

// console.log(arr.filter(num=>num%2==0));
// console.log(arr.filter(num=>num>12));

var arr=[1,2,3,6,7,8]
// var op=arr.map(num=>num<5?num-1:num+1)
// console.log(op);

var total=arr.reduce((n1,n2)=>n1+n2);
console.log(total);

console.log(arr.reduce((n1,n2)=>n1+n2));

console.log(arr.reduce((n1,n2)=>n1>n2?n1:n2));