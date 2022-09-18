import * as MODEL from "./model.js";

function initListeners() {}
$("nav a").click((e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    
    MODEL.setCurrentPageContent(btnID);
});

$(document).ready(function () {
    MODEL.setCurrentPageContent("home");
    initListeners();
});

let myNav = document.getElementsByClassName("links");
let myLogo = document.getElementsByClassName("logo");
TweenMax.from(myNav, { duration: 3, opacity: 0, x: 50});
TweenMax.from(myLogo, { duration: 3, opacity: 0, x: 50});