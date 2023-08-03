
/**
 * 
 * Объявление
 * 
 */

function имя(параметры, через, запятую) {
  // тело функции 
}

function log(message) {
  console.log(message)
}

log()
log('hey there');
log('how is it going?')


/**
 * 
 * Переменные
 * 
 */

function log(message) {
  const prefix = 'Logger says';

  console.log(`${prefix}: ${message}`);
}

log('successfully connected');

console.log(prefix) // reference error - переменная prefix видна только внутри функции


// есть доступ к внешним переменным

let count = 0;

function logCount() {
  console.log(count);
}

logCount(); // 0
count++;
logCount(); // 1

// функции могут перезаписывать внешние переменные

function increment() {
  count++
}

logCount(); // 1
increment();
logCount(); // 2

// сначала ищем переменные в теле функции, потом - снаружи

const hello = 'Hello from outer scope';

function greet() {
  const hello = 'Hello from function';

  console.log(hello)
}

greet() // Hello from function

/**
 * 
 * Параметры
 * 
 */

function log(from, message) {
  console.log(`${from}: ${message}`);
}

log('Auth Service', 'permission denied'); // Auth Service: permission denied

// значения будут скопированы, то есть функция не сможет их случайно заменить снаружи

function log(from, message) {
  from = `Message from ${from}`;
  console.log(`${from}: ${message}`);
}

const SERVICE_NAME = 'Auth Service';

log(SERVICE_NAME, 'permission denied') // Message from Auth Service: permission denied
console.log(SERVICE_NAME) // Auth Service


// если аргумент не был передан, то его значение будет `undefined`

function log(from, message) {
  console.log(`${from}: ${message}`);
}

log('Some Service'); // Some Service: undefined


// можно задать значение по умолчанию

function log(from, message = 'empty message') {
  console.log(`${from}: ${message}`);
}

log('Some Service'); // Some Service: empty message

// обработка неверных значений

function log(from, message) {
  from = from ?? 'Unknown said';
  message = message ?? 'empty message';

  console.log(`${from}: ${message}`);
}

function log(from, message) {
  if (!from || !message) {
    console.error('logger called with invalid arguments');
    return;
  };

  console.log(`${from}: ${message}`);
}

/**
 * Важно: старайтесь писать функции, которые не меняют значения снаружи себя.
 * Лучше все изменяемые величины передавать как аргументы - так код становится более читаемым.
 */

/**
 * 
 * Возвращаемое значение
 * 
 */

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 2)); // 4


// return прекращает выполнение функции

function sum(a, b) {
  if (isNaN(a) && isNaN(b)) return 0;
  if (isNaN(a)) return b;
  if (isNaN(b)) return a;
  return a + b;
}

console.log(sum(7, 'kek')) // 7
console.log(sum('lol', 42)) // 42
console.log(sum(2, 2)) // 4

// return без значения

function sum(a, b) {
  if (isNaN(a) || isNaN(b)) return;
  return a + b;
}

console.log(sum(7, 'kek')) // undefined
console.log(sum('lol', 42)) // undefined
console.log(sum(2, 2)) // 4

// без return

function showMessage() {
  alert('message');
}

console.log(showMessage()); // undefined


/**
 * 
 * Function Expression
 * 
 */

const handleError = function (message) {
  console.error(`An error occured: ${message}`)
}

handleError('wrong input'); // An error occured: wrong input

// две части

const handleError = function (message) {
  console.error(`An error occured: ${message}`)
}

const handleError =   // (2) присваивание функции в переменную `handleError`
  // ⬆⬆
  function (message) {  // (1) объявление анонимной функции
    console.error(`An error occured: ${message}`)
  }

// function declaration

function handleError(message) {
  console.error(`An error occured: ${message}`)
}



// function expression - "не всплывает"

sum(2, 2) // выведет ошибку - переменная sum существует, но к ней нельзя обратиться, т.к. она объявлена через const (let)

const sum = function (a, b) { // только в этот момент функция будет создана и присвоена в переменную
  return a + b;
}

sum(2, 2) // 4 - переменная sum существует, к ней можно обратиться, в ней есть функция, она будет вызвана



// function declaration - не "всплывает" из блоков и условных выражений

sum(2, 2) // ошибка - JS не знает, что такое `sum`

{
  function sum(a, b) { // только в этот момент функция будет создана и присвоена в переменную
    return a + b;
  }
}

sum(2, 2) // 4 - переменная sum существует, к ней можно обратиться, в ней есть функция, она будет вызвана


// function declaration - if-else

const condition = false;

logCondition();

if (condition) {
  function logCondition() {
    console.log('true!')
  }
} else {
  function logCondition() {
    console.log('false!')
  }
}

const condition = Math.random(1) > 0.5;

logCondition();

if (condition) {    // (1) JS не знает заранее, будет ли тут true или false
  // чтобы это узнать, пришлось бы выполнить код выше, а до этого ещё не дошёл ход
  function logCondition() {
    console.log('true!')
  }
} else {
  function logCondition() {
    console.log('false!')
  }
}

/**
 * 
 * Функция - значение
 * 
 */

// переприсваивание

let showMessage = function (message) {
  console.log(message, message, message, message, message);
}

showMessage('hi there!'); // выведет 5 записей в консоль

showMessage = alert;
showMessage('hi there'); // покажет модалку alert

showMessage = console.log
showMessage('hi there'); // выведет сообщение в консоль

// conditional

const handleError = function () {
  console.error(`An error occured`);
}

// const handleSuccess = function () {
console.log(`Succesfully connected`);
// }

const isError = true;
const handler = isError ? handleError : handleSuccess;

handler();

// callback

function makeRequest(url, onSuccess) {
  // make request to server via url
  // ...

  onSuccess();
}

const handleSuccess = function () {
  console.log('успешно запросили!')
}

makeRequest('https://google.com', handleSuccess); // успешно запросили!

// short

function makeRequest(url, onSuccess) {
  // make request to server via url
  // ...

  onSuccess();
}

makeRequest('https://google.com', function () {
  console.log('успешно запросили!')
})


// example

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("Вы согласны.");
}

function showCancel() {
  alert("Вы отменили выполнение.");
}

ask("Вы согласны?", showOk, showCancel);


// HOF

function fetchData(url) {
  // притворимся, что функция запрашивает данные

  // возвращаем фейковый ответ с сервера
  return 'status - 200, success'
}

fetchData('https://google.com') // мы сделали запрос, ничего не вывели в консоль

function withLogger(func) {
  return function (argument) {
    console.log(`Function was called with argument: ${argument}`);
    return func(argument);
  }
}

const loggedFetchData = withLogger(fetchData);

loggedFetchData('https://google.com') // https://google.com
// мы сделали запрос, вывели в консоль аргумерт



// Arrow functions

const func = (аргументы, через, запятую) => возвращаемое_значение;

const greet = () => console.log('Hi there!');
greet();

const sum = (a, b) => a + b;
const mul = (a, b, c, d) => a * b * c * d;
const log = (message) => console.log(message);

function makeRequest(url, onSuccess) {
  // make request to server via url
  // ...

  onSuccess();
}

makeRequest('https://google.com', () => console.log('успешно запросили!'))


const multiline = () => {
  console.log('Это действие на строке 1');
  console.log('Это действие на строке 2');
  console.log('Это действие на строке 3');

  return 5 + 2; // можно вернуть значение
}




