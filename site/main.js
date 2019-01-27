function showMenu(event){    
    document.getElementById("mySidenav").style.width = "60vw";

    document.getElementById("myFadeLayer").style.opacity = "0.3";


    let menubutton2 = document.querySelector(".menubutton2")
    menubutton2.classList.toggle("visibleMenubutton2")
}

function closeMenu(event){    
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("myFadeLayer").style.opacity = "0";

    let menubutton2 = document.querySelector(".menubutton2")
    menubutton2.classList.toggle("visibleMenubutton2")
} 


