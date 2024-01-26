var sidenav = document.getElementById("sidenav")
var menubtn = document.getElementById("menubtn")
var closebtn = document.getElementById("closebtn")

sidenav.style.display = "none"

function showNavbar() {
    // sidenav.style.top = "0%"
    sidenav.style.display ="block"
    menubtn.style.display = "none"
    closebtn.style.display = "block"

}

function closeNavbar() {
    // sidenav.style.top = "-60%"
    sidenav.style.display ="none"
    menubtn.style.display = "block"
    closebtn.style.display = "none"
}