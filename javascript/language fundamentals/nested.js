var arr=[
    [1,2],
    [11,3],
    [4,14],
    [5,16]
]
for(let subarray of arr)
{
    for(let num of subarray)
    {
        if(num<10){
            console.log(num);
        }
    }
}