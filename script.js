function newitem() {
  var newtodo = document.getElementById("myInput").value;
  console.log(newtodo);
  if (newtodo == "") {
    alert("Please Enter Text");
  } else {
    const para = document.createElement("li");
    para.innerText = newtodo;
    // delete button
    let dellnk=delbttn(para)
    // edit buton
    let editlnk= editbttn(para)
    document.getElementById("myul").appendChild(para);
  }
}

function deleteItem(element) {
  console.log("delete");
  element.remove();
}

function editItem(element) {
  var editedText = prompt("Edit item:", element.innerText);
  if (editedText !== null) {
    element.textContent = editedText;
    delbttn(element);
    editbttn(element);
  }
}

// function to add delete button
function delbttn(element) {
  const delLink = document.createElement("button");
  delLink.className = "delete";
  delLink.onclick = function () {
    deleteItem(element);
  };
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  delLink.appendChild(icon);
  element.appendChild(delLink);
}

// function to add edit button
function editbttn(element) {
  const editLink = document.createElement("button");
  editLink.className = "edit";
  editLink.onclick = function () {
    editItem(element);
  };
  const editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen";
  editLink.appendChild(editIcon);
  element.appendChild(editLink);
}


// function dark() {
//   var ele = document.getElementById("todocol");
//   ele.style.backgroundColor = "black";
// }

