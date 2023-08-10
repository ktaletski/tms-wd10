String()
Number()
Boolean()
Symbol()
BigInt()


const num = new Number(0);

typeof num; // object (!)


const str = 'Привет';

str.toUpperCase(); // ПРИВЕТ

// (неявно)
let tempStr = new String(str); // создаётся объект-обёртка
tempStr.toUpperCase(); // вызывается метод объекта

/**
 * Методы строк
 */

const str = 'Привет';
console.log(str.length); // 6

const str = 'Привет';

// первый символ
console.log(str[0]); // П
console.log(str.at(0)); // П

// последний символ
console.log(str[str.length - 1]); // т
console.log(str.at(-1)); // т

/**
 * String.indexOf(searchString: string, position?: number | undefined): number
 */

const str = 'человек человеку кек'

console.log(str.indexOf('человек')); // 0
console.log(str.indexOf('Человек')); // -1


console.log(str.indexOf('человек', 1)); // 8
/**
 *   Начинаем поиск отсюда
 *   v
 *  012345678
 * 'человек человеку кек'
 *          ^         
 */


const str = 'человек человеку кек'

console.log(str.includes('кек')); // true
console.log(str.includes('лол')); // false

console.log(str.includes('чел', 11)); // false

console.log(str.startsWith('чел')); // true
console.log(str.endsWith('ек')); // true


"лол".toUpperCase(); // ЛОЛ
"пРиВеТиКи".toLowerCase(); // приветики

const str = 'человек человеку кек';

console.log(str.slice(0, 3)); // чел
console.log(str.slice(0, 1)); // ч

console.log(str.slice(8)); // человеку кек

console.log(str.slice(-6, -1)); // ку ке


const str = 'человек человеку кек';

console.log(str.substring(4, 7)); // век
console.log(str.substring(7, 4)); // век

console.log(str.slice(4, 7)); // век
console.log(str.slice(7, 4)); // "" (пустая строка)

/**
 * Массивы
 */

const arr = new Array(); // конструктор
const arr = []; // литерал


const todo = ["покушать", "кодить", "поспать"];

console.log(todo[0]); // покушать
console.log(todo[1]); // кодить
console.log(todo[2]); // поспать

// замена элемента
todo[0] = "кодить";
console.log(todo); // кодить, кодить, поспать

// добавление ещё одного элемента
todo[3] = "ещё поспать"; // (!) так можно, но лучше так не делать
console.log(todo); // кодить, кодить, поспать, ещё поспать

// число элементов в массиве
console.log(todo.length); // 4

// последний элемент массива
console.log(todo[todo.length - 1]); // ещё поспать
console.log(todo.at(-1)); // то же самое, только надо подождать ещё пару лет


// массив - объект
const arr = [];

arr.length = 99999;
arr.kek = 'lol';
arr[25] = 42;

// методы

const pets = ['🐼', '🐈', '🐕'];

pets.push('🐇');    // ['🐼', '🐈', '🐕', '🐇']
pets.pop();         // ['🐼', '🐈', '🐕']
pets.unshift('🐇'); // ['🐇', '🐼', '🐈', '🐕']
pets.shift();       // ['🐼', '🐈', '🐕']

const pets = ['🐼', '🐈', '🐕'];
pets.unshift('🐇');

// (*)  ['🐼', '🐈', '🐕', _пусто_]

// (1)  ['🐼', '🐈', _пусто_, '🐕']
// (2)  ['🐼', _пусто_, '🐈', '🐕']
// (3)  [_пусто_, '🐼', '🐈', '🐕']

// (**) ['🐇', '🐼', '🐈', '🐕']

const pets = ['🐸', '🐼', '🐈'];

delete pets[1];
console.log(pets[1]);     // undefined - похоже, что сработало

console.log(pets.length); // 3 - нет, не сработало
console.log(pets);        // ['🐸', empty, '🐈']  - точно не сработало

// Синтаксис
arr.splice(начало[, сколькоУдалить, элемент1, ..., элементN])


const pets = ['🐼', '🐈', '🐕', '🐇'];

// начиная с индекса 1, удалить 1 элемент
pets.splice(1, 1);
console.log(pets); // ['🐼', '🐕', '🐇']

// удалить 2 первых элемента и заменить их другими тремя
const deleted = pets.splice(0, 2, '🐸', '🦩', '🦁');
console.log(pets); // ['🐸', '🦩', '🦁', '🐇'];

// splice возвращает массив из удалённых элементов
console.log(deleted); // ['🐼', '🐕']


// Синтаксис
arr.slice(начиная_с_индекса, по_индекс__не_включительно);


const arr = ["Я", "очень", "люблю", "JavaScript"];
//            0      1        2          3

const arr1 = arr.slice(1, 3); // очень, люблю
const arr2 = arr.slice(-2); // люблю, JavaScript



// Синтаксис
arr.concat(массив, новый_элемент_или_массив);


const arr = ['🐼', '🐈'];

const newArr = arr.concat(['🐸', '🦩'], '🐕', ['🦁', '🐇']);

console.log(newArr); // ['🐼', '🐈', '🐸', '🦩', '🐕', '🦁', '🐇']


// indexOf
const pets = ['🐼', '🐈', '🐸', '🦩', '🐕', '🦁', '🐇'];

pets.indexOf('🐈'); // 1

// includes
const pets = ['🐼', '🐈', '🐸', '🦩', '🐕', '🦁', '🐇'];

pets.includes('🐈'); // true


// find

// Синтаксис
let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

const profiles = [
  { id: 0, name: 'Pete' },
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const profile = profiles.find(profile => profile.id === 2);

console.log(profile); // {id: 2, name: 'Jane'}


// forEach

const pets = ['🐼', '🐈', '🐸', '🦩', '🐕', '🦁', '🐇'];

pets.forEach((pet, idx, pets) => {
  console.log(`Питомец с индексом ${idx} - это ${pet}, в списке ${pets}`)
});

// Синтаксис
arr.sort(function (a, b) {
  // если вернуть число > 0, то a > b
  // если вернуть число < 0, то a < b
  // если вернуть 0, то a = b

  // если a, b числа, то работает `return a - b`;
})

const profiles = [
  { id: 0, name: 'Pete', likes: 42 },
  { id: 1, name: 'John', likes: 15 },
  { id: 2, name: 'Jane', likes: 101 },
  { id: 3, name: 'Eva', likes: 95 },
];

profiles.sort((p1, p2) => p2.likes - p1.likes);

// filter

// Синтаксис
arr.filter(function (элемент) {
  // если вернуть `true`, то элемент останется в массиве
  // если вернуть `false`, то элемент будет удалён
});


const profiles = [
  { id: 0, name: 'Pete', likes: 42 },
  { id: 1, name: 'John', likes: 15 },
  { id: 2, name: 'Jane', likes: 101 },
  { id: 3, name: 'Eva', likes: 95 },
];

profiles.filter(profile => profile.likes > 50);

// map

// Синтаксис
arr.filter(function (элемент) {
  // то, что мы вернём, будет записано вместо элемента
});

const profiles = [
  { id: 0, name: 'Pete', likes: 42 },
  { id: 1, name: 'John', likes: 15 },
  { id: 2, name: 'Jane', likes: 101 },
  { id: 3, name: 'Eva', likes: 95 },
];

profiles.map(profile => profile.likes);
// 42, 15, 101, 95


// reduce

// Синтаксис
arr.reduce(
  function (аккумулятор, элемент, массив) {
    // то, что мы вернём, будет записано в аккумулятор в следующей итерации
  },
  начальное_значение_аккумулятора
);

const profiles = [
  { id: 0, name: 'Pete', likes: 42 },
  { id: 1, name: 'John', likes: 15 },
  { id: 2, name: 'Jane', likes: 101 },
  { id: 3, name: 'Eva', likes: 95 },
];

profiles.reduce((acc, profile) => acc + profile.likes, 0);
// 253 (= 42 + 15 + 101 + 95)

// reverse

const arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr); // [5, 4, 3, 2, 1];

// split/join

const str = "🐼, 🐈, 🐸, 🦩, 🐕, 🦁, 🐇";

const arr = str.split(', ');
console.log(arr); // ['🐼', '🐈', '🐸', '🦩', '🐕', '🦁', '🐇']

const newStr = arr.join('; ');
console.log(newStr); // 🐼; 🐈; 🐸; 🦩; 🐕; 🦁; 🐇

// some / every

const profiles = [
  { id: 0, name: 'Pete', blocked: false },
  { id: 1, name: 'John', blocked: true },
  { id: 2, name: 'Jane', blocked: false },
  { id: 3, name: 'Eva', blocked: false },
];

const isBlocked = (profile) => profile.blocked;

const hasBlocked = profiles.some(isBlocked); // true
const allBlocked = profiles.every(isBlocked); // false


/**
 * Destructuring
 */
const frame = ["100px", "250px"];

const width = frame[0];
const height = frame[0];

const frame = ["100px", "250px"];

/**
 *    ["100px", "250px"]
 *        v        v        */
const [width, height] = frame;

console.log(width); // 100px
console.log(height); // 250px

const list = ['Иванов', 'Петров', 'Вован', 'Сидоров']

const [first, second, , fourth] = list;
/**                  ^
 *                  (!)
 */

console.log(fourth); // Сидоров

const list = ['Иванов', 'Петров', 'Вован', 'Сидоров']

const [first, second] = list;

console.log(second); // Петров


const list = ['Иванов', 'Петров', 'Вован', 'Сидоров']

const [first, second, ...rest] = list;

console.log(rest); // ['Вован', 'Сидоров']

const [width, height] = [];

console.log(width); // undefined
console.log(height); // undefined


const [width = '0px', height = '0px'] = [];

console.log(width); // 0px
console.log(height); // 0px

// Объекты

const profile = {
  name: 'John',
  age: 42,
  isAdmin: false,
}

const { name, ...other } = profile;

console.log(other); // { age: 42, isAdmin: false }


const profile = {}

// значение по умолчанию
const { name = 'Unknown' } = profile;
console.log(name);

// значение по умолчанию и переименование
const { name: userName = 'Unknown' } = profile;
console.log(userName);


const profile = {
  name: 'John',
  age: 42,
  isAdmin: false,
}

const { name } = profile;

console.log(name); // John


const profile = {
  name: 'John',
  age: 42,
  avatar: '👨',
  isAdmin: true,
}

function renderProfile({
  name = 'Unknown',
  age = '-',
  avatar = '👤',
  isAdmin
}) {
  console.log(`
    ${avatar}

    Name: ${name}
    Age: ${age}

    ${isAdmin && '⭐ Super User!'}
  `)
}

renderProfile(profile);


const map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1));   // "num1"
alert(map.get("1")); // "str1"

alert(map.size);     // 3



for (idx in arr) { }
for (element of arr) { }
for (let idx = 0; i < arr.length; i++) { }

arr.forEach();
arr.reduce();
arr.map();
arr.filter();
arr.sort();
arr.some();
arr.every();

const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const doubledPrices = Object.fromEntries(
  // преобразовать в массив
  // затем map
  // затем fromEntries обратно объект
  Object.entries(prices).map(
    ([key, value]) => [key, value * 2]
  )
);

console.log(doubledPrices.meat); // 8


const more = ['four', 'five'];

const all = ['one', 'two', 'three', ...more]; // ['one', 'two', 'three', 'four', 'five']
const all = ['one', ...more, 'two', 'three']; // ['one', 'four', 'five', 'two', 'three']


const arr = ['one', 'two', 'three'];
const more = ['four', 'five'];

const all = [...arr, ...more]; // ['one', 'two', 'three', 'four', 'five']


const profile1 = { id: 1 };
const profile2 = { id: 2 };
const profile3 = { id: 3 };
const profile4 = { id: 4 };
const profile5 = { id: 5 };

const admins = [profile1, profile2, profile3];
const moderators = [profile4, profile5];

const adminsAndModerators = [...admins, ...moderators];

console.log(adminsAndModerators); // [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

profile2.id = 42;

console.log(adminsAndModerators); // [{id: 1}, {id: 42}, {id: 3}, {id: 4}, {id: 5}]


const priveleges = {
  isAdmin: true,
  isModerator: false,
};

const profile = {
  name: 'John',
  age: 42,
  ...priveleges
};

console.log(profile);
// {name: "John", age: 42, isAdmin: true, isModerator: false}



const privileges = {
  isAdmin: true,
};

const profile = {
  name: 'John',
  age: 42,
  isAdmin: false,
  ...privileges
};

console.log(profile.isAdmin); // true



const privileges = {
  isAdmin: true,
};

const profile = {
  ...privileges,
  name: 'John',
  age: 42,
  isAdmin: false,
};

console.log(profile.isAdmin); // false


const DEFAULT_PROFILE = {
  name: 'Unknown',
  age: '-',
  isAdmin: false
}

const profileData = {
  name: 'Иван',
}

const profile = {
  ...DEFAULT_PROFILE,
  ...profileData,
}


const DEFAULT_PRIVILEGES = {
  isAdmin: false,
};

const DEFAULT_PROFILE = {
  name: 'Unknown',
  age: '-',
  privileges: DEFAULT_PRIVILEGES,
};

const profile = {
  ...DEFAULT_PROFILE,
  name: 'Иван',
};

console.log(profile.privileges.isAdmin); // false

DEFAULT_PRIVILEGES.isAdmin = true; // случайно поменяли значение

console.log(profile.privileges.isAdmin);
// true - поменяются все профили, использующие дефолтный объект,
// потому что он был скопирован по ссылке


function sum(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
};

sum(1, 2, 3, 4, 5, 6, 7);
/**
 * 1
 * 2
 * [3, 4, 5, 6, 7]
 */


function sum(...args) {
  return args.reduce((sum, arg) => sum + arg, 0)
}

console.log(sum(2, 2));                 // 4
console.log(sum(2, 5, 5));              // 12
console.log(sum(2, 5, 5, 5, 5, 5, 5));  // 32



function sum(...args) {
  return args.reduce((sum, arg) => sum + arg, 0)
}

console.log(sum(2, 2));    // 4
console.log(sum(2, 5, 5)); // 12


const args = [2, 5, 5];
// Как передать `args` в sum() ?


function sum(...args) {
  return args.reduce((sum, arg) => sum + arg, 0)
}

console.log(sum(2, 2));    // 4
console.log(sum(2, 5, 5)); // 12


const args = [2, 5, 5];

sum(...[2, 5, 5]);
// получаем:
// sum(2, 5, 5);



function sum(...args) {
  return args.reduce((sum, arg) => sum + arg, 0)
}

console.log(sum(2, 2));    // 4
console.log(sum(2, 5, 5)); // 12


const args = [2, 5, 5];
console.log(sum(...args));

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (потом Pete и Mary)
}