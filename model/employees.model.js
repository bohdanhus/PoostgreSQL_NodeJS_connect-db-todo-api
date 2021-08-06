const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];

function formatByMonth(emp) {
    let employees;
    let employMap;
    employMap = new Map();
    emp.forEach((user) => {
        let birthDate = new Date(user.birthDay);
        let birthMonth = birthDate.getMonth() + 1;
        if (employMap.has(birthMonth) !== true) {
            employMap.set(birthMonth, [{fullName: user.fullName, birthDay: birthDate}])
        } else {
            employees = employMap.get(birthMonth);
            employees.push({fullName: user.fullName, birthDay: birthDate});
            employMap.set(birthMonth, employees)
        }
        console.log(employMap);
    });
    return employMap;
};

function getAge(date) {
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
}
function Plural(n, nom, gen, plu) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return `${n} ${nom}`;
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return `${n} ${gen}`;
    } else {
        return `${n} ${plu}`
    }
};
function displayBirthdayOfMonth(employees) {
    let string = ""
    for (let j = 0; j < employees.length; j++) {
        string = string + (`(${employees[j].birthDay.getDate()}) -  ${employees[j].fullName} (${Plural(getAge(employees[j].birthDay), "год", "года", "лет")})` + "\n");
    }
    return string
}

function showPlanning(eMap, horizontalPlanning) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1;
    for (let i = mm; i <= mm + horizontalPlanning; i++) {
        for (const [key, employees] of eMap) {
            if (key === i) {
                console.log(`${months[i - 1]} ${currentYear} ` )
                console.log(displayBirthdayOfMonth(employees));
            }
        }
    }
}
const main = (employees, planning) => {
    console.log(employees)
    console.log(planning)
    let eMap = formatByMonth(employees);
    return showPlanning(eMap, planning);
}
module.exports = { main };