//console.dir(document)
console.log(document.domain)
console.log(document.title)
console.log(document.URL)
document.title= 123
console.log(document.head)
console.log(document.doctype)
//console.log(document.all)
console.log(document.forms)
console.log(document.images)
console.log(document.getElementById('header-title'))
var headertitle =document.getElementById('header-title')
//headertitle.textContent='Hello'
headertitle.innerHTML='<B>Hello</B>'
headertitle.style.tableLayout='green'
var header =document.getElementById('main-header')
header.style.borderBottom='solid 3px #000';
var t =document.querySelector('.list-group-item')
t.style.color='green'
var x =document.getElementById('title')
x.style.color='green'
