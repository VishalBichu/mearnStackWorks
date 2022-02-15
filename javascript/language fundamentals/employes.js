var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumabi",45000,2],
    [1000,"abi","sales","mumbai",65000,5],
]


// console.log(employees.map(emp=>emp[1]));

// console.log(employees.map(emp=>emp[5]));

// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);

// var empSal=employees.map(emp=>emp[4])
// var totalsalary=empSal.reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalsalary);


// var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);


// var minSalary=employees.map(emp=>emp[4]).reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(minSalary);

// var minSal=employees.reduce((e1,e2)=>e1[4]<e2[4]?e1:e2)
// console.log(minSal);

// var freshersemp=employees.reduce((e1,e2)=>e1[5]<e2[5]?e1:e2)
// console.log(freshersemp[1]);


// var salary=employees.some(d=>d[5]==0)
// console.log(salary);

// employees.forEach(s=>console.log(s[1]))

console.log(employees.flat());

// var higexp=employees.map()


// for(let employee of employees)       //q1
// {
//     console.log(employee[1]);
   
// }
// console.log(employees.length);        // q2

// for(let emp of employees){               //q3
//     if(emp[2]=="developer")
//     {
//         console.log(emp);
//     }
// }



// console.log("salary>30000");
// for(let emp of employees){               //q4
//         if(emp[4]>30000)
//         {
//             console.log(emp);
//         }
//     }



    // for(let employee of employees)          //q5
    // {
    //     if(employee[1]=="arjun"){
    //         console.log(employee);
    //     }
    // }


    // employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
    // console.log(employees);

    // employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
    // console.log(employees);