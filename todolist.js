itemState = new Array;
itemState[0] = false;
complete=0;
currentItem = 1;
unfinished = "m-2 flex flex-col items-center border-2 border-slate-400 p-1  text-slate-500";
finished = "m-2 flex flex-col items-center border-2  p-1 bg-slate-400 text-white "
function createNewTask(){
    console.log("new");
    node = document.getElementById("template").cloneNode(true);
    node.setAttribute("id",currentItem);
    node.setAttribute("onclick","completeItem("+currentItem+")");
    itemState[currentItem] = false;
    document.getElementById("start").appendChild(node);
    currentItem++;
   setTotal();
}
function completeItem(id){
    if(itemState[id]==false){
    document.getElementById(id).setAttribute("class",finished);
    itemState[id] = true;
    complete++;
}
else
{
    document.getElementById(id).setAttribute("class",unfinished);
    itemState[id]= false;
    complete--;
}
setTotal();
}
function setTotal(){
    document.getElementById("total").innerText = complete + " / "+currentItem;
}