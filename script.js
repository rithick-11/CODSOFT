var menu = document.getElementById("menu")
var close = document.getElementById("xbar")
var nav_link = document.getElementById("navLink")

function show(){
    nav_link.classList.toggle("d-block")
    // menu.classList.toggle("d-none")
    // close.classList.toggle("d-none")
}

function hide(){
    nav_link.classList.remove("d-block")
}