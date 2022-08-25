let links = document.querySelectorAll(
    ".navbar .navbar-collapse .navbar-nav .nav-item .nav-link"
);




for (let x = 0; x  < links.length; x++) {
    links[x].onclick = function () {
        for (let y = 0; y < links.length; y++) {
            links[y].classList.remove("active");
        }  
        links[x].classList.add("active");
    };
    
}