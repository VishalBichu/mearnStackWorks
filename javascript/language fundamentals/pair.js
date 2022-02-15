var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)
var pairNum=6
var low=0,upp=arr.length-1,flag=0;
while(low<upp)
{
    let curSum=arr[low]+arr[upp]
    if(curSum==pairNum)
    {
        flag=1;
        console.log(`pair(${arr[low]},${arr[upp]})`);
        break;
    }
    else if (curSum<pairNum) {
        low++
    }
    else if(curSum>pairNum){
        upp--
    }
    if (flag==0) {console.log("no pairs");
        
    }
}

    