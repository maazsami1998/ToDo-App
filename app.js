var list = document.getElementById("list")

function addtodo(){
    
    var todo_item=document.getElementById("todo-item");
    //create li tag
    var li =  document.createElement('li')
    var litext=document.createTextNode(todo_item.value)
    li.appendChild(litext)

    //create delete button
    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.setAttribute("class","btn2")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    
    //create Edit button
    var Editbtn = document.createElement("button")
    var EditText=document.createTextNode("Edit")
    Editbtn.setAttribute("Class","btn2")
    Editbtn.setAttribute("onclick","EditItem(this)")
    Editbtn.appendChild(EditText)
    li.appendChild(Editbtn)


    document.getElementById("list").appendChild(li)

    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    
    todo_item.value=""
}

function deleteItem(element){
    var todo_item=document.getElementById("todo-item");
    element.parentNode.remove()
    todo_item.value=""
}

function delAllBtn(){
    var todo_item=document.getElementById("todo-item");
    document.getElementById("list").innerHTML=""
    todo_item.value=""

}


function EditItem(e){
   var val = e.parentNode.firstChild.nodeValue
   var editValue = prompt("Enter Edit Value : ",val)
   e.parentNode.firstChild.nodeValue = editValue

}