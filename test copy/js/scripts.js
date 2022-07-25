const nav = ["Home", "About", "Gallery", "Contact"];

let navlength = nav.length;
let navtext = "<ul>";

const links = ["index.html", "about.html", "gallery.html", "contact.html"];

for (let i = 0; i < navlength; i++){
    navtext += '<li><a href="' + links[i] + '">' + nav[i] + "</a></li>";
}
navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;