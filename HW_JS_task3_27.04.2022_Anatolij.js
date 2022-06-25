
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
    return department ? department : 'Нет такого отдела';
  }
  const getEnterprise = function (val) {
     let enterprise = enterprises.find(el => el.id == val || el.name == val);
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
console.log(getEnterprise(2))

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
