var student={
    rol_no:1,
    name:"ram",
    course:"mearnstack",
    total:70
}
// console.log(student["name"]);
// console.log(student.course);
// console.log("gender" in student);

// student["gender"]="male"
// console.log(student);
// student.isvacinated=true
// console.log(student);
// student.vacine="covidshield"
// console.log(student);
// student.vacine="covaxin"
// console.log(student);
// student.total+=100
// console.log(student);


for(let key in student){
    console.log(key);
    console.log(student[key]);
}