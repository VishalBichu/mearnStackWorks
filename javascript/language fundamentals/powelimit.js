var num=4,low=8,upp=36;
var i=1;
while (i<=upp) {
    let res=i**num;
    if (res>=low && res<=upp) {
        console.log(i);
        
    }
    i++;
}