
const printEmployees = (employees, date, number) => {
    let result = '';
    for (let i = 0; i <= number; i++) {
        date.setMonth(date.getMonth() + 1);
        result += `${formatDate(date)}\n`;
        sortList(employees);
        employees.map(employee => {
            if (employee.birthday.getMonth() === date.getMonth()) {
                result += '(' + employee.birthday.getDate() + ') - ' + employee.fullname + ' (' + Plural(findHowOld(employee, date)) + ')\n'
            }
        });
    }
    return result;
}

const formatDate = (date) => {
    const options = {month: 'long', year: 'numeric'};
    let formatDate = new Date(date).toLocaleString('ru-RU', options);
    return formatDate[0].toUpperCase() + formatDate.slice(1, -2);
}
const sortList = array => {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j].birthday.getDate() > array[j + 1].birthday.getDate()) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return array;
}
const findHowOld = (employee, date) => {
    let diff = date - employee.birthday;
    return Math.floor(diff / 31557600000);
}


function Plural(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return `${n} год`;
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return `${n} года`;
    } else {
        return `${n} года`;
    }
};

const main = (employees, number) => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    return printEmployees(employees, date, number);
}

export {main}