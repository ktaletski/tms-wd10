<p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Objects</h1>

## Complete exercise

### NORMAL level

#### Task 1 💻

Выполните каждый из следующих пунктов отдельной строкой:
1. Создайте пустой объект `profile` (используйте `const`);
2. Добавьте в него свойство `name` со значением `John`;
3. Добавьте в него свойство `#lib_internal_isAdmin` со значением `true`;
4. Измените значение `name` с `John` на `Фёдор`;
5. Удалите свойство `#lib_internal_isAdmin`;


#### Task 2 🖥

Дан обьект:

```JS
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
```

Вывести в консоль слово красный

#### Task 3 🖥

Дан обьект:

```JS
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```

C помощью цикла **for in** вывести в консоль сначала все пары ключ-значение в объекте.

> name - John age - 19 isHappy - true

#### Task 4 🖥

Дан обьект:

```JS
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников

#### Task 5 🖥

Напишите функцию `isEmpty()`, которая вернёт `true`, если переданный в неё объект пуст (не содержит свойств).

```JS
  isEmpty({}); // true
  isEmpty({ lol: "kek" }); // false
```

#### Task 6 🖥

У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

```JS
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
```

#### Task 7 🖥

Опишите по пунктам, как отработает этот код?
Важно ответить на вопрос, что будет записано в `this` и почему?
```JS
function makeProfile() {
  return {
    name: "John",
    self: this
  };
}

let user = makeProfile();

alert( user.self.name ); // Каким будет результат?
```

#### Task 8 🖥

Создайте объект счётчик `counter`, в котором будет записано значение изначально равное `0`.
В `counter` должен быть метод `showCurrent()`, который будет выводить в консоль текущее значение.
Также в объекте должно быть два метода для уменьшения и увеличения значения:

```JS
counter.showCurrent(); // 0 - вывод в консоль
counter.increment();
counter.increment();
counter.showCurrent(); // 2
counter.decrement();
counter.showCurrent(); // 1
```

#### Task 9 🖥

Дополните результат из задания 8 так, чтобы можно было составить цепочку вызовов:

```JS
counter.showCurrent().increment().increment().showCurrent().decrement().showCurrent();
```

#### Task 10 🖥

Сделайте функцию-конструктор `Counter()`, которая сможет создавать счётчики из заданий 8-9:

```JS
const counter1 = new Counter();
const counter2 = new Counter();

counter2.increment();
counter2.showCurrent(); // 1
counter1.showCurrent(); // 0
```