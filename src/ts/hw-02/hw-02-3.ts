/**
 * Задача 2-3
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), 
которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) 
и возвращает самое длинное слово в этой строке.
 */
function findLongestWord(string: string = '') {
  // Write code under this line
  let arr: string[] = string.split(' ');
  let longArr: number = 0;
  let bigWord: string = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (longArr < arr[i].length) {
      longArr = arr[i].length;
      bigWord = arr[i];
    }
  }
  return bigWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

export {};
