//console.dir(document)
// console.log(document.domain)
// console.log(document.title)
// console.log(document.URL)
// document.title= 123
// console.log(document.head)
// console.log(document.doctype)
// //console.log(document.all)
// console.log(document.forms)
// console.log(document.images)
// console.log(document.getElementById('header-title'))
// var headertitle =document.getElementById('header-title')
// //headertitle.textContent='Hello'
// headertitle.innerHTML='<B>Hello</B>'
// headertitle.style.tableLayout='green'
// var header =document.getElementById('main-header')
// header.style.borderBottom='solid 3px #000';
// var t =document.querySelector('.list-group-item')
// //t.style.color='green'
// var x =document.getElementById('title')
// x.style.color='green'
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2].outerHTML);
// items[2].textContent='Hello 2'
// for(i=0;i<items.length;i++)
// {
// items[i].style.fontWeight='bold'
// }
// items[1].style.color='green'
// //items[2].style.visibility='hidden'
// var input=document.querySelector('input');
// input.value='Write your text here';
// var itm=document.getElementsByClassName('list-group-items');
// itm[0].textContent='hi';
// console.log(itm);
//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++)
//{
  //  odd[i].style.backgroundColor='green'
    //even[i].style.backgroundColor='#ccc'
//}

//Traversing DOM
var itemList=document.querySelector('#items');

//parent node
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parent element
 console.log(itemList.parentElement);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// child node
 console.log(itemList.childNodes);
//itemList.childNodes.style.backgroundColor='#f4f4f4';
console.log(itemList.children);

// child node
console.log(itemList.childNodes);
//itemList.childNodes.style.backgroundColor='#f4f4f4';
console.log(itemList.children);
// first child
console.log(itemList.firstChild);
// last child
console.log(itemList.lastChild);
// last element child
console.log(itemList.lastElementChild);
// first element child
console.log(itemList.firstElementChild);

// next sibling
console.log(itemList.nextSibling);

// next element sibling
console.log(itemList.nextElementSibling);

// previous sibling
console.log(itemList.previousSibling);

// previous element sibling
console.log(itemList.previousElementSibling);



//create element
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','hello div');
//create text node
var newDivText=document.createTextNode('HELLo');
//add text to child
newDiv.appendChild(newDivText);

 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 console.log(newDiv);
 container.insertBefore(newDiv, h1);






