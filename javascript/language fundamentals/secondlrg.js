var a=12,b=22,c=30;
if((a>b)&&(a>c))
{
    if (b>c) {
        console.log(`second largest is ${b}`);
    }
    else{
        console.log(`second largest is ${c}`);
    }
}

else if((b>a)&&(b>c))
{
    if(a>c){
        console.log(`second largest is ${a}`); 
       }
    else{
        console.log(`second largest is ${c}`);  
      }
}
else if((c>a)&&(c>b))
{
    if(a>b){
        console.log(`second largest is ${a}`); 
       }
       else{
        console.log(`second largest is ${b}`);  
      }
}