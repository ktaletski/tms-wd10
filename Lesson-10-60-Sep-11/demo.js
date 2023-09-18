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

img.addEventListener('load', () => {
  const img = new Image();
  img.src = 'http://netgeek.biz/funnycat1.jpg';
  document.body.append(img);
    img.addEventListener('load', () => {
  const img = new Image();
      img.src = 'http://netgeek.biz/funnycat2.jpg';
      document.body.append(img);
      mg.addEventListener('load', () => {
          const img = new Image();
  img.src = 'http://netgeek.biz/funnycat3.jpg';
          document.body.append(img);
          mg.addEventListener('load', () => {
          const img = new Image();
              img.src = 'http://netgeek.biz/funnycat4.jpg';
  document.body.append(img);
              
              ;
              ;
});
});            