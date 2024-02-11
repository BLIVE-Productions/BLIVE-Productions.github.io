//RUN
const navItems = document.getElementById("right-links");
setInterval(hideNav, 500);

function hideNav() {
    if(window.scrollY > 200) {
        navItems.style.opacity = "0";
    } else {
        navItems.style.opacity = "1";
    }
}