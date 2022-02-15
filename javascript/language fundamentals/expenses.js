// total=0;
var exp=[1,2,3,4,5]
// for(let amount of exp){
//     total+=amount
// }console.log("total till today=" ,total);


// var maxExp=0;
// for(let amount of exp){
//     if (maxExp<amount) {
//         maxExp=amount
        
//     }
// }console.log(maxExp);


var minExp=exp[2]
for(let amount of exp){
    if(amount=minExp){
        minExp=amount;
    }
}console.log(minExp);


