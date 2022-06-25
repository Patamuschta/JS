// const users = [
//     {
//         firstName: 'John',
//         lastName: 'Caper',
//         phone: '7436676737634',
//         registrationDate: '12.10.2021'
//     },
//     {
//         firstName: 'Clark',
//         lastName: 'Kent',
//         phone: '4346676737634',
//         registrationDate: '16.09.2021'
//     },
//     {
//         firstName: 'Tony',
//         lastName: 'Stark',
//         phone: '7436698337634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Bruce',
//         lastName: 'Wayne',
//         phone: '1111176737634',
//         registrationDate: '09.10.2021'
//     },
//     {
//         firstName: 'Star',
//         lastName: 'Lord',
//         phone: '7439374737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Kate',
//         lastName: 'Bishop',
//         phone: '7436693647634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Jerry',
//         lastName: 'James',
//         phone: '7409048737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Jeremy',
//         lastName: 'Clarkson',
//         phone: '743667600289334',
//         registrationDate: '16.10.2020'
//     },
//     {
//         firstName: 'Robert',
//         lastName: 'Patrik',
//         phone: '7436676730093',
//         registrationDate: '10.10.2020'
//     },
//     {
//         firstName: 'Jonny',
//         lastName: 'Sins',
//         phone: '74923982737634',
//         registrationDate: '01.01.2021'
//     },
//     {
//         firstName: 'Andrew',
//         lastName: 'Garfield',
//         phone: '743667988344',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Foster',
//         phone: '74368783427634',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Rick',
//         lastName: 'Smith',
//         phone: '700000037634',
//         registrationDate: '12.10.2021'
//     },
// ];

// /* Task 1.
//  Написать функцию, которая найдет и выведет в консоль юзеров, 
//  зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt */ 

// const usersFiltered = users.filter((user) => {
//     if (user.registrationDate === '09.10.2021' || user.registrationDate === '10.10.2021') {
//         return user;
//     }
// })

// console.log(usersFiltered)


 

// Task 2*
/*  Откройте в VSCode task2.json файл. 
Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
Нам нужно хранить только уникальные значения в этом массиве. 
Реализуйте функцию, которая будет выполнять эту работу.   */

/*  Task 2*** 
Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
для дальнейшего использования в функции, описанной в задании  */



// const fs = require('fs')
// const users = JSON.parse(fs.readFileSync('D:/GIT/JS/task2.json'))

// let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
// console.log(chekid)
// // console.log(users.map(item => JSON.stringify(item)))

// // **********************************************
// const fs = require('fs');
// let rawUsers = fs.readFileSync('D:/GIT/JS/task2.json');
// let users = JSON.parse(rawUsers)

// let uniqueUsers = users.reduce((unique, user) => {
//     if (unique.map[user.name])
//     return unique;
//     unique.map[user.name] = true;
//     unique.uniqueUsers.push(user);
//     return unique;
// },
// {
//     map: {},  // checked users
//     uniqueUsers:[]  // final massive with unique 'name'
// })
// .uniqueUsers;
// console.log(uniqueUsers);
// // **********************************************



/*  Task 3**
В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:) */

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// 
const getDepartment = function (val) {
    let department;
    enterprises.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val;
          });
          if (dept) department = dept;          
    });
    return department ? department : 'Нет такого отдела'

    const getEnterprise = function (val) {
        let enterprise = enterprise.find(el => el.id == val || el.name == val);
          return enterprise ? enterprise : 'Нет такой организации'
        }
    const getNewId = function(company) {
        let maxId = company[0].id;
        company.forEach((el) => {
            if (maxId < el.id) {
                maxId = el.id;
            }
            if (el.departments) {
                el.departments.forEach((elem) => {
                    if (maxId < elem.id) {
                        maxId = elem.id;
                    }
                });
            }
            
        });
        return maxId + 1;
    }
    const employeesCountHelper = function (number) {
        number = number.toString().split('').pop();
        if (number) {
            if (number == 1) return "сотрудник";
            else if (number > 1 && number <5) return "сотрудника";
            else return "сотрудников";
        } else return "(нет сотрудников)";
    };
    console.log(getDepartment("Отдел охраны труда"))
    console.log(getDepartment("Отдел аналитики"))
    console.log(getEnterprise(5))
};

const getDepartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`);
                } else depts.push(`- ${dept.name} (нет сотрудников)`);
            });

            if (count) {
                depts[0] += ` (${count} ${employeesCountHelper(count)})`;
            } else depts[0] += ` (нет сотрудников)`;
        }
        console.log(depts.join(`\n\ `));
    });
};
getDepartments(enterprises);






/*  Task 4****

В файле task4.txt вы найдете разноуровневый массив объектов. 
Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено. 
Задание: написать функцию: 
Функция строит древовидный список компании.
При ее вызове в консоль должен вывестись список подразделений компании с 
указанием количества сотрудников и с соблюдение вложенности подразделений. */
