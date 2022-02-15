function add(...args)
{
    return args.reduce((n1,n2)=>n1+n2)
}


function findMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findMax(10,11,14,15,60,188));