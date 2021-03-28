// Задача 5 - 1
// function-constructor

// Напиши функцию - конструктор Account,
// которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(),
// который возвращает строку со значениями свойств login и email объекта.

// Write code under this line

const Account = function (this: any, login: string, email: string) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new (Account as any)('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new (Account as any)('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

export {};
