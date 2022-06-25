// let a = {
//     "age": 30,
//     "name": "Ivan",
//     "salary": [
//         5000,
//         25000,
//         "10000",
//         "15000"
//     ]
// }


// // // вывод с начала массива
// // for (let i = 0; i < a.salary.length; i++) { 
// //     console.log(a.salary[i]);    
// // }

// // // вывод с конца массива
// // let index;
// // for (index = a.salary.length - 1; index >= 0; --index) {
// //     console.log(a.salary[index]);
// // }

// // вывод с начала массива
// for (let i = 0; i < a.length; i++) { 
//     console.log(i);    
// }


// let arr = ['AUDI A8', '2019', 'brown'];
// arr.cost = '$100.000';



// выводит ключи по порядку
let arr = {
    "person": {
        "u_age": 28,
        "u_name": [
            "Marina",
            6000,
            28
        ],
        "u_salary_5_years": 25200.0
    },
    "qa_salary_after_1.5_year": 19800.0,
    "qa_salary_after_12_months": 16200.000000000002,
    "qa_salary_after_3.5_years": 22800.0,
    "qa_salary_after_6_months": 12000,
    "start_qa_salary": 6000
}

for (key in arr.person) {
  console.log(`${key}`);
}
