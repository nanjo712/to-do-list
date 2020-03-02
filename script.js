var tot = 0, del_list = new Array();
function Doneit(x) {
    del_list.push(x);
    x = String(x);
    var thing = document.getElementById("F" + x);
    thing.innerHTML += "&nbsp;<span class=\"Finished\">It has been done</span>"
    thing = document.getElementById("B" + x);
    thing.disabled = true;
}
function Add() {
    var addit = prompt("What would you want to add?"), now = String(++tot);
    if (addit == null) return;
    var newnode = document.createElement("li"), fathernode = document.getElementById("list");
    newnode.id = "F" + now;
    newnode.innerHTML = addit;
    var FinishButton = document.createElement("input");
    FinishButton.type = "button"; FinishButton.id = "B" + now; FinishButton.value = "Finish!";
    FinishButton.setAttribute("onclick", "Doneit(" + now + ")"); FinishButton.style.float = "right";
    FinishButton.className="EventButton";
    newnode.appendChild(FinishButton);
    var DeleteButton = document.createElement("input");
    DeleteButton.type = "button"; DeleteButton.id = "B" + now; DeleteButton.value = "Delete!";
    DeleteButton.setAttribute("onclick", "delete_one(" + now + ")"); DeleteButton.style.float = "right";
    DeleteButton.className="EventButton";
    newnode.appendChild(DeleteButton);
    fathernode.appendChild(newnode);
}
function delete_one(now) {
    list_node = document.getElementById("list");
    list_node.removeChild(document.getElementById("F" + String(now)));
}
function refresh() {
    var list_node = document.getElementById("list");
    for (var i = 0; i < del_list.length; i++)
        list_node.removeChild(document.getElementById("F" + String(del_list[i])));
    del_list = new Array();
}
function Delete_All() {
    var list_node = document.getElementById("list"), child_node = document.getElementsByTagName("li");
    var len = child_node.length;
    for (var i = 0; i < len; i++)
        list_node.removeChild(child_node[0]);
}