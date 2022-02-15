var a=12,b=2,c=30;
if((a>b)&&(a>c))
{
    if (b>c) {
        // console.log(`second largest is ${b}`);
        console.log(a,b,c);
    }
    else{
        // console.log(`second largest is ${c}`);
        console.log(a,c,b);

    }
}

else if((b>a)&&(b>c))
{
    if(a>c){
        // console.log(`second largest is ${a}`); 
        console.log(b,a,c);

       }
    else{
        // console.log(`second largest is ${c}`);  
        console.log(b,c,a);

      }
}
else if((c>a)&&(c>b))
{
    if(a>b){
        // console.log(`second largest is ${a}`); 
        console.log(c,a,b);

       }
       else{
        // console.log(`second largest is ${b}`);  
        console.log(c,b,a);

      }
}