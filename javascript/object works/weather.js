var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]
var weatherout={}
for(let record of data){
    let districtname=record["districtname"]
    let curTemp=record["weather"]
    if(districtname in weatherout){
        let oldtemp=weatherout[districtname]
        if(curTemp>oldtemp)
        {
            weatherout[districtname]=curTemp
        }
    }
    else{
        weatherout[districtname]=curTemp
    }

}
console.log(weatherout);
console.log(Object.entries(weatherout).sort((r1,r2)=>r1[1]-r2[1]));