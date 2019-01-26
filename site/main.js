function showMenu(event){
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show")

    let fadeLayer = document.querySelector(".fadeLayer")
    fadeLayer.classList.toggle("visible")
}