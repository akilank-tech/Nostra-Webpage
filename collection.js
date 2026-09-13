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


var collectionchecks= document.querySelectorAll(".collection-check1")
var searchimages = document.querySelectorAll(".search-img1")

collectionchecks.forEach(collectioncheck =>{
    collectioncheck.addEventListener("change",filterImages);
});

function filterImages(){
    var selectedCategories = Array.from(collectionchecks)
    .filter(chk =>chk.checked)
    .map(chk=>chk.value);

    searchimages.forEach(searchimage => {
        var category = searchimage.getAttribute('data-category');
        if(selectedCategories.length===0||selectedCategories.includes(category))
        {
            searchimage.classList.remove('hide')
        }
        else{
            searchimage.classList.add('hide')
        }
    });
}