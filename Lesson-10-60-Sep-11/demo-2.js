fetch('https://example.com', options)

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
};

fetch('https://example.com', options)
  .then(response => console.log(response.json()))
  .then(data => ...)

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Kek-Header', 'some value');

const options = {
  method: 'GET',
  headers,
}

const request = new Request(URL, options);

fetch(request)
  .then(response => response.json())
  .then(data => console.log(data));


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(console.log)

/**
 * body: ReadableStream
 * bodyUsed: false
 * headers: Headers {}
 * ok: true
 * redirected: false
 * status: 200
 * statusText: ""
 * type: "cors"
 * url: "https://jsonplaceholder.typicode.com/todos/1"
 */

const img = new Image();
img.src = 'http://netgeek.biz/funnycat0.jpg';
document.body.append(img);

function mountLoadImage(num) {
  const img = new Image();
  img.src = `http://netgeek.biz/funnycat${num}.jpg`;
  document.body.append(img);

  return img;
}

mountLoadImage(0).addEventListener('load', () => mountLoadImage(1).addEventListener('load', () => mountLoadImage(2)))

img.addEventListener('load', () => {
  const img = new Image();
  img.src = 'http://netgeek.biz/funnycat1.jpg';
  document.body.append(img);

  img.addEventListener('load', () => {
    const img = new Image();
    img.src = 'http://netgeek.biz/funnycat2.jpg';
    document.body.append(img);

    img.addEventListener('load', () => {
      const img = new Image();
      img.src = 'http://netgeek.biz/funnycat3.jpg';
      document.body.append(img);

      img.addEventListener('load', () => {
        const img = new Image();
        img.src = 'http://netgeek.biz/funnycat4.jpg';
        document.body.append(img);

      })
    })
  })
})

function tryCreatingSolution() {
  return `решение проблемы: ...`
}

const promise = new Promise(function (resolve, reject) {
  try {
    const solution = tryCreatingSolution();
    resolve(solution);
  } catch (e) {
    reject(e)
  }
});


function tryCreatingSolution() {
  return `Решение проблемы: ...`
  // throw new Error(`Решение найти не удалось, так как препод срочно улетел в космос`)
}

const solutionPromise = new Promise(function (resolve, reject) {
  try {
    const solution = tryCreatingSolution();

    setTimeout(() => {
      resolve(solution);
    }, 2000);
  } catch (e) {
    reject(e)
  }
});


const handleSolutionByKate = (solution) => {
  console.log(`Екатерина - Успех! ${solution}`);
  console.log(`Продолжаю выполнение проекта`);
}

const handleErrorByKate = (error) => {
  console.error(`О, нет! Решение найти не удалось.`)
}

const handlePromiseCompletionByKate = () => {
  console.log(`Обещание или было выполнено, или нарушено`)
}

solutionPromise.then(handleSolutionByKate);

const clickPromise = new Promise((resolve, reject) => {
  document.body.addEventListener('click', () => {
    resolve('clicked');
  });
});


clickPromise.then((result) => { console.log(`${result} 1`) });
clickPromise.then((result) => { console.log(`${result} 2`) });
clickPromise.then((result) => { console.log(`${result} 3`) });


const timeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

timeoutPromise
  .then((data) => { console.log('первый таймаут') })
  .then(() => { console.log('второй таймаут') })
  .then(() => { console.log('третий таймаут') })
