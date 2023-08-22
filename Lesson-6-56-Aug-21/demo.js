document.documentElement

document.head

document.body

/** 
 * Все дети, включая текстовые ноды
 */
elem.childNodes


/** 
 * Первый детский узел
 */
elem.firstChild
// === elem.childNodes[0]

/** 
 * Последний детский узел
 */
elem.lastChild
// === elem.childNodes[elem.childNodes.length - 1]


let elem = document.body;

elem = elem.firstChild;

elem = elem.nextSibling;

elem = elem.previousSibling;

elem = elem.parentNode;




elem.childNodes;
elem.firstChild;
elem.lastChild;
elem.nextSibling;
elem.previousSibling;
elem.parentNode;


elem.children;
elem.firstElementChild;
elem.lastElementChild;
elem.nextElementSibling;
elem.previousElementSibling;
elem.parentElement;


document.getElementById("title");

document.querySelectorAll("p > a");

document.querySelector("p > a");


elem.closest('body > p');
elem.contains(elem2);
elem.matches('p > a');

const p = document.querySelector('p > a');
p.closest('body > p');


body.contains();