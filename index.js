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


var heart = document.querySelectorAll(".fa-heart")

heart.forEach(icon => {

    icon.addEventListener("click", function () {
        this.classList.toggle('active');
        if (this.classList.contains("fa-regular")) {
            this.classList.remove("fa-regular")
            this.classList.add("fa-solid")
        }
        else {
            this.classList.remove("fa-solid")
            this.classList.add("fa-regular")
        }
    })
})

