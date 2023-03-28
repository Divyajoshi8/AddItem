var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Load items from local storage
document.addEventListener('DOMContentLoaded', function() {
    var items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      items.forEach(function(item) {
        addItemToDOM(item);
      });
    }
  });

// Form submit event
form.addEventListener('submit', addItem);
// Delete and Edit event
itemList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    removeItem(e);
  } else if (e.target.classList.contains('edit')) {
    // TODO: Implement edit functionality
    console.log('Edit button clicked');
  }
});
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
var description =document.getElementById('description').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description));

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit mr-2';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(confirm('Are You Sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Add item to local storage
function addItemToLocalStorage(item) {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  // Remove item from local storage
  function removeItemFromLocalStorage(li) {
    var itemName = li.firstChild.textContent;
    var items = JSON.parse(localStorage.getItem('items'));
    items = items.filter(function(item) {
      return item.name !== itemName;
    });
    localStorage.setItem('items', JSON.stringify(items));
  }