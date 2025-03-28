// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function AdminLogin(){
    if (document.getElementById("username").value === "Admin") {
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("submit").style.display = "block";
    }
}

function FilterTags() {
    var tag = document.getElementById("FilterTag").value;
    var children = document.getElementById("productcontainer").children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    matching = document.getElementsByClassName(tag);
    for (var i = 0; i < matching.length; i++) {
        matching[i].style.display = "grid";
    }
}

function ResetFilter(){
    var children = document.getElementById("productcontainer").children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "grid";
    }
    document.getElementById("FilterTag").value = "";
}