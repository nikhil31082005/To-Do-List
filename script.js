const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let update = document.createElement("img");
        update.classList.add("up");
        update.src = 'update.png';
        li.appendChild(update);
        
        let delImg = document.createElement("img");
        delImg.classList.add("dl");
        delImg.src = 'delete.png';
        li.appendChild(delImg);
    }
    inputBox.value = "";
    saveData(); 
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.className === "dl"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.className === 'up'){
        inputBox.value = e.target.parentElement.textContent;
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();