// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function AdminLogin(){
    if (document.getElementById("username").value === "Admin") {
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("submit").style.display = "block"
    }
}