function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var header = document.getElementById('header');

window.addEventListener('wheel', function(event) {
    console.log(event.deltaY);
    if (event.deltaY > 0) {
        header.style.marginTop = "-50px";
    } else if (event.deltaY < 0) {
        header.style.marginTop = "";

    } else if (event.deltaY > 90) {
        header.style.transition = "1s";
    }

})