var bar = document.getElementById("bar")
var sidenavbar = document.getElementById("sidenavbar")
var closebtn = document.querySelector(".close-btn")
bar.addEventListener("click",function(){
    sidenavbar.style.left="0";
})
closebtn.addEventListener("click",function(){
    sidenavbar.style.left="-50%";
})