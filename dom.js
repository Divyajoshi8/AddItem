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
//t.style.color='green'
var x =document.getElementById('title')
x.style.color='green'
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2].outerHTML);
items[2].textContent='Hello 2'
for(i=0;i<items.length;i++)
{
items[i].style.fontWeight='bold'
}
items[1].style.color='green'
items[2].style.visibility='hidden'
var input=document.querySelector('input');
input.value='Write your text here';
var itm=document.getElementsByClassName('list-group-items');
itm[0].textContent='hi';
console.log(itm);
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
    even[i].style.backgroundColor='#ccc'
}

