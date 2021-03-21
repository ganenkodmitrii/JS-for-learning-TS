/*
Задача 1-2
  *Использование тернарного оператора
Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

Есть переменные
-stock = 100. Это количество товаров на складе.

-invoice. Эта переменная - количество единиц товара в заказе. 
Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). 
Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.

-message. Это переменная для текста с ответом на запрос о покупке.
 
Возможно два значения:
1."На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
2."Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.
*/

const invoice: number = 100;
const stock: number = 100;
// Write code under this line
const message: string =
  invoice <= stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

console.log(message);
//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'

// if (invoice === 100) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// } else if (invoice === 50) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// } else if (invoice === 150) {
//   message = 'На складе недостаточно товаров!';
// }

export { }