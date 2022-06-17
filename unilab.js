const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".column");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});