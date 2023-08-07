

let obj = {}; // создаём пустой объект, присваиваем его в переменную `obj`

let shape1 = {
  type: 'circle',
  radius: 5,
};

// чтение
console.log(shape.type); // circle
console.log(shape.radius); // 5

// переприсваивание
shape.radius = 25;
console.log(shape.radius); // 25

// удаление
delete shape.radius;
console.log(shape.radius) // undefined







console.log(profile.first_name) // упрощённый синтаксис для ключей без спецсимволов, значение можно достать через оператор `.`

console.log(profile["0#%&*+-!^@internal_property"]) // чтобы достать значение со спецсимволами, нужны квадратные скобки
console.log(profile["first_name"]) // к обычным ключам тоже можно обратиться через квадратные скобки

// let profile = {
//   first_name: 'John',
//   last_name: 'Doe',
//   "0#%&*+-!^@internal_property": "some value",
// }

// const prefix = 'last'
// const postfix = 'name'
// const DELIMITER = '_'

// console.log(profile[prefix + DELIMITER + postfix]) // Doe


// вычисляемые свойства


// const keyPrefix = 'first'
// const DELIMITER = '_'

// let profile = {
//   [keyPrefix + DELIMITER + 'name']: "John"
// }

// console.log(profile) // { first_name: "John" }


const keyPrefix = 'first'
const DELIMITER = '_'

let profile = {}

console.log(profile) // {}

profile['first' + '_' + 'name'] = "Венцеслав"

console.log(profile) // { first_name: "Венцеслав" }\


const userResponse = +prompt("What is your age?");

let profile = {
  age: userResponse
}

console.log(profile);


const age = +prompt("What is your age?");

let profile = {
  age
}

console.log(profile);

// `in` operator

let profile = {
  firstName: "John"
}

console.log("firstName" in profile); // true

console.log("lastName" in profile); // false
console.log(profile.lastName !== undefined); // false

let profile = {
  firstName: "John",
  lastName: undefined,
}

console.log("lastName" in profile); // false
console.log(profile.lastName !== undefined); // true (!)


// object reference

"Hey there"

const str1 = 'Hey there';

const str2 = str1;


const a = { name: "John" }

const profile1 = {
  name: "John",
}

const profile2 = profile1;


const b = { name: "Lol" }


profile2.name = "Lol";

console.log(profile1);


// const declaration

const profile = {
  firstName: "John",
  lastName: "Doe",
};

profile.firstName = "Pete"; // допустимо, ссылка на profile осталась прежней
console.log(profile); // { firstName: "Pete", lastName: "Doe" }

profile = {} // ошибка - нельзя присвоить другую ссылку в `profile`


// for ... in

const profile = {
  firstName: 'Lol',
  lastName: 'Kek',
  age: 25,
  bio: 'Test profile for demo',
}

for (key in profile) {
  console.log(key);
}

// firstName lastName age bio

// Methods

const profile = {
  firstName: 'Иван',
}

profile.greet = function () {
  console.log('Привет!')
};


profile.greet() // Привет!


const profile = {
  firstName: 'Иван',
  greet: function () {
    console.log('Привет!')
  }
}

const profile = {
  firstName: 'Иван',
  greet() {
    console.log('Привет!')
  }
}

// This

const profile = {
  name: 'Иван',
  greet() {
    console.log(`${this.name} говорит: привет!`)
  }
}

profile.greet() // Иван говорит: привет!

// Dynamic this

const profile = { name: 'Иван' };
const animal = { name: 'Айдар', type: 'собакен' };

const greet = function () {
  console.log(`${this.name} говорит: привет!`);
}

profile.sayHi = greet;
animal.sayHi = greet;

profile.sayHi(); // Иван говорит: привет!
animal.sayHi(); // Айдар говорит: привет!

// no object before dot

'use strict';
this; // undefined

this; // -> globalThis -> window в браузерах
//               -> global в Node.js


// Arrow function

const profile = {
  name: 'Иван',
  greet() {
    const arrow = () => console.log(`${this.name} говорит: привет!`);
    arrow();
  }
}

profile.greet(); // Иван говорит: привет!

// Interview question

const profile = {
  name: 'Иван',
  greet: () => {
    console.log(this.name)
  }
}

profile.greet();


const greet = () => {
  console.log(this.name)
};

const profile = {
  name: 'Иван',
  greet,
}

profile.greet();

// Constructor

function Profile(name, status) {
  this.name = name;
  this.status = status || 'active';
}

const profile = new Profile('Иван');

console.log(profile); // { name: "Иван", status: "active" }

function Profile(name, status) {
  // (1) this = {}; (неявно)

  // (2) явно выполняется тело функции
  this.name = name;
  this.status = status || 'active';

  // (3) return this; (неявно)
}

const profile = new Profile('Иван');

console.log(profile);
// { name: "Иван", status: "active" }


// ?. operator

let profile = {
  name: "Иван",
  photo: {
    large: 'https://...',
    small: 'https://...',
  }
}

console.log(profile.photo.large);

profile = null;

console.log(profile.photo.large);
// ошибка! - нельзя прочитать свойство `photo` у `null`

// решение
console.log(profile && profile.photo && profile.photo.large);

// решение
console.log(profile?.photo?.large); // undefined

// if (profile !== null || profile !== undefined) {
//   return profile.photo
// } else {
//   return undefined
// }

profile?.actions?.sayHi?.();
profile?.lol?.["--kek?"];


// const hidden = Symbol('описание символа');
// описание ни на что не влияет


const hidden1 = Symbol('hidden');
const hidden2 = Symbol('hidden');

// два символа с одинаковым описанием - это два разных символа
console.log(hidden1 == hidden2); // false

const hidden = Symbol('hidden');

const profile = {
  name: 'Ivan',
  [hidden]: 'Some hidden value',
}

console.log(profile); // { name: 'Ivan' }

for (key in profile) {
  console.log(key);
}
// name

// у нас есть секретный "ключ" - символ,
// по которому можно прочитать наше секретное значение
console.log(profile[hidden]); // Some hidden value

// если мы не будем экспортировать `hidden`, то пользователи
// не будет доступа к нашему спрятанному значению

Symbol.iterator
Symbol.toPrimitive
Symbol.hasInstance

/**
 * Это не настоящая функция!
 * Иллюстрирует, как JS приводит объект к примитиву.
 * 
 * @param {{}} obj - obj to convert
 * @param {"string" | "number" | "default"} hint - js context hint
 */
 unction convertToPrimitive(obj, hint) {
  if (obj[Symbol.toPrimitive]) return obj[Symbol.toPrimitive](hint);

  switch (hint) {
    case 'string':
      return obj.toString?.() || obj.valueOf?.();
    case 'number':
    case 'default':
      return obj.valueOf?.() || obj.toString?.();
  }
}


const profile = {
  "na_me$+-=": 'John',
  name: 'John',
}


function Profile(name, status) {
  // (1) this = {}; (неявно)

  // (2) явно выполняется тело функции
  this.name = name;
  this.status = status || 'active';

  // (3) return this; (неявно)
}

const profile = new Profile('Иван');

class Profile {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}

const profile1 = {
  name: "John",
}

const profile2 = Object.assign({}, profile1);
