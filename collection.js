var offtag = document.getElementById("offtag")
var remove = document.getElementById("delete")
remove.addEventListener("click", function () {
    offtag.style.display = "none";
})

var bar = document.getElementById("bar")
var sidenavbar = document.getElementById("sidenavbar")
var closebtn = document.querySelector(".close-btn")
bar.addEventListener("click", function () {
    sidenavbar.style.left = "0";
})
closebtn.addEventListener("click", function () {
    sidenavbar.style.left = "-50%";
})


var searchimg = document.getElementById("search-img")
var search = document.getElementById("search")
var collectionlist = searchimg.querySelectorAll(".search-img1")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()
    for (var count = 0; count < collectionlist.length; count = count + 1) {
        var collectionname = collectionlist[count].querySelector("h2").textContent
        if (collectionname.toUpperCase().indexOf(enteredValue) < 0) {
            collectionlist[count].style.display = "none";
        }
        else {
            collectionlist[count].style.display = "block"
        }
    }
})


var checkboxes = document.querySelectorAll(".filter-check")

function filterimages(){
    var checkedvalues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
    
    collectionlist.forEach(card =>{
        var cardcategory = card.getAttribute("data-category");

        if(checkedvalues.length === 0 || checkedvalues.includes(cardcategory)){
            card.style.display ="block";
        }
        else{
            card.style.display="none";
        }
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change",filterimages);
});