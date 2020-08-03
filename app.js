function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const addToDoText = document.getElementById('newToDoText');
  const addToDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;
    //create new li
    let newLi = document.createElement('li');
    //create new input
    let checkbox = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = "checkbox";
    //delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function(event){

    toDoList.removeChild(this.parentElement);
  })
    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //delete button
    newLi.appendChild(deleteBtn);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });
};
window.onload = function () {
  alert("The window has loaded!");
  onReady();
};
