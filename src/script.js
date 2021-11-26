const toggleButton = document.getElementById("toggle-button");

const sidebar = document.getElementById("side-bar");

toggleButton.addEventListener("click",show);
function show(){
    sidebar.classList.toggle("active")
}

const content = document.querySelector(".content");

content.addEventListener("click",()=>{
    sidebar.classList.remove("active")
})