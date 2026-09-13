var offtag = document.getElementById("offtag")
var remove = document.getElementById("delete")
remove.addEventListener("click",function(){
    offtag.style.display="none";
})

var bar = document.getElementById("bar")
var sidenavbar = document.getElementById("sidenavbar")
var closebtn = document.querySelector(".close-btn")
bar.addEventListener("click",function(){
    sidenavbar.style.left="0";
})
closebtn.addEventListener("click",function(){
    sidenavbar.style.left="-50%";
})