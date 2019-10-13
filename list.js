//VARIABLES

var input = document.querySelector("input");
var addBut = document.getElementById("addBut");
var mainList = document.getElementById("mainList");
var li = document.querySelectorAll("li");

//FUNCTIONS

function inputLength() {
  return input.value.length;
}

function createListElement() {
  // creates a new li with textnode equal to the inputs value. It also creates a remove button to go with each li
  var li = document.createElement("li");
  var removeBut = document.createElement("button");
  removeBut.setAttribute("class", "remove");
  li.appendChild(document.createTextNode(input.value));
  removeBut.appendChild(document.createTextNode("Remove"));
  mainList.appendChild(li);
  li.appendChild(removeBut);
  input.value = "";

  //Adding another event listener to remove li when remove button clicked
  removeBut.addEventListener("click", function() {
    li.style.display = "none";
  })
}

//For click event - creates a list element
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//For pressing 'Enter' - creates a list element
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//Adds or removes "done" class to li.
function doneItem(e) {
  e.target.classList.toggle("done");
  }



//MAIN PROGRAM

 //When 'add' button is clicked, run the function to create new li
addBut.addEventListener("click", addListAfterClick);

//When li item clicked, a line-through is toggled to either show a task that's done or undo it.
mainList.addEventListener("click", doneItem);

//When 'add' button is clicked, it creates a new li with textnode equal to the inputs value. It also creates a remove button to go with each li
input.addEventListener("keypress", addListAfterKeypress);