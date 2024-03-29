const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
});

function createDropDown(e){
    const dropDown = document.createElement("select");
    for (var i = 0; i < colors.length; i++){
        const option = document.createElement("option");
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function(e){
           e.target.parentElement.style.backgroundColor = e.target.value;
        //e.target.style.backgroundColor = e.target.value;
        //e.target.backgroundColor = e.target.value;
    });
    return dropDown;
}

function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input").value;
    subItem.textContent = subItemValue;
    const dropDown = createDropDown(e);
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "sub-item");
    return subItem;
}


