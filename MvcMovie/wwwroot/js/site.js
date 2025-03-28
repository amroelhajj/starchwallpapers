// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function AdminLogin() { // Admin login der for nu bare gemmer submission menuen indtil man skriver det rigtige login.
    // Er enormt usikkert og kan nemt omgås i Inspect Element. Demonstrerer dog funktionaliteten.
    if (document.getElementById("username").value === "Admin") {
        document.getElementById("disclaimer").style.display = "none";
        document.getElementById("submit").style.display = "block";
    }
}

function FilterTags() { // Gemmer alt og finder derefter de rigtige wallpapers frem. 
    // Gøres på denne måde så menuen ikke er helt tom som ved en tidligere afprøvet fremgang der til gengæld var mere effektiv.
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

function ResetFilter(){ // Resetter filtre og gør alt synligt igen. Rydder også tag-feltet.
    var children = document.getElementById("productcontainer").children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.display = "grid";
    }
    document.getElementById("FilterTag").value = ""; // Tag-feltet ryddes.
}