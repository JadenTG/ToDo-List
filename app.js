const list = document.getElementById("list");
const addButton = document.getElementById("Button");

addButton.onclick = () => CreateNewItem(prompt("Enter item name", 'Item name'));

function CreateNewItem(name)
{
    var item = document.createElement("div")
    item.className = "item"

    var p = document.createElement("p")
    p.innerHTML = name;

    var container = document.createElement('div')
    item.appendChild(container);

    var Delete = document.createElement("button")
    Delete.innerHTML = "Delete";
    Delete.onclick = () => Deleteitem(item);
    container.appendChild(Delete);

    var Edit = document.createElement("button")
    Edit.innerHTML = "Edit";
    container.appendChild(Edit);
    Edit.onclick = function () {p.innerHTML = prompt("Edit", p.innerHTML)};


    item.appendChild(p);
    list.appendChild(item);
}

function Deleteitem(item)
{
    list.removeChild(item)
   
}

