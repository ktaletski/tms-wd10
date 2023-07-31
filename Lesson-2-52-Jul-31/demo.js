console.log('5' > 3) // true - 5 больше чем 3
console.log('01' == 0) // false - 1 не равно 0

console.log(true == 1) // true
console.log(false == 0) // true


console.log(null == undefined) // true
console.log(null === undefined) // false - типы не совпадают

console.log(null > 0) // false - приведение к числу 0
console.log(null >= 0) // true - приведение к числу 0
console.log(null == 0) // false - нет приведения! null равен только самому себе и undefined;

console.log(undefined > 0) // false - нет приведения
console.log(undefined >= 0) // false - нет приведения 
console.log(undefined == 0) // false - нет приведения



console.log('Z' > 'A') // true
console.log('cat' > 'cam') // true
console.log('caterpillar' > 'cat') // true


const a = 5;

if (a === 0) {
  console.log('zero')
}

if (a === 0) {
  console.log('zero')
} else {
  console.log('non-zero')
}

if (a === 0) {
  console.log('zero')
} else if (a > 0) {
  console.log('positive')
} else {
  console.log('negative')
}

if (a === 0) console.log('zero')

if (a === 0) console.log('zero')
else console.log('non-zero')

if (a === 0) console.log('zero')
else if (a > 0) console.log('positive')
else console.log('negative')


condition ? true : false

// const result = a === 0 ? 'zero' : 'non-zero'

let state = 'error';

switch (state) {
  case 'loading':
    console.log('подключаемся...');
    break;
  case 'connected':
    console.log('подключение успешно');
    break;
  case 'error':
    console.log('упс, что-то пошло не так')
    break;
  default:
    console.log('ошибка: неизвестный статус ')
}



let i = 0;

while (i < 5) {

  console.log(i);
  i++;

}

while (i < 5) console.log(i++)


for (let i = 0; i < 5; i++) {

  console.log(i)

}


console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

const value = someValue || defaultValue || 'default_value';

console.log(null || false) // false
console.log(1 && true) // true

const value1 = 0
const value2 = 'kek'
const value3 = false

const reuslt = false || true || false;

const result = value1 || value2 || value3;


console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(!true); // false
console.log(!false); // true


console.log(null ?? 0) // 0
console.log(undefined ?? "" ?? false) // false
console.log(null ?? undefined ?? NaN ?? 'kek') // NaN




