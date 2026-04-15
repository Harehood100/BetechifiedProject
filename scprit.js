const navbartoggle = document.querySelector('.navbar-toggle');
const navbarmenu = document.querySelector('.navbar-menu');

navbartoggle.addEventListener('click',() => {
    navbartoggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
