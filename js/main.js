var menubar= document.querySelector("menu_bar");
var navlinks= document.querySelector(".nav_links");

navlinks.style.top ="-450px"

menubar.onclick= function(){
    if (navlinks.style.top=="-450px"){
navlinks.style.top="50px";

    } else {

        navlinks.style.top= "-450px"
    }
}