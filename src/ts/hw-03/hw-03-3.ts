/**
 * Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся
как свойства объекта в формате "имя":"кол-во задач".
 */

// const keys = Object.keys(employees);
// for (const key of keys) {
//   console.log(key);
// }
interface Employees {
  [key: string]: number;
}

const findBestEmployee = function (employees: object) {
  // 'use strict';
  // Write code under this line

  let bestEmployeeName = '';
  const bestEmployeeProIndex = 0;
  const entries = Object.entries(employees);

  for (const [name, value] of entries) {
    if (bestEmployeeProIndex <= value) {
      bestEmployeeName = name;
    }
  }
  return bestEmployeeName;
};
// Объекты и ожидаемый результат
const developers: Employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports: Employees = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers: Employees = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
export {};
