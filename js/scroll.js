scrollDiv = document.getElementById('scroll').style;
greyBackgroundImages = document.getElementsByClassName('greyscale');

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > 50) { scrollDiv.opacity = 0; }
    else { scrollDiv.opacity = 1; }

    let percentage = scroll/3;
    greyBackgroundImages[0].style.filter = "grayscale(" + (100 - percentage) + "%)";
    greyBackgroundImages[1].style.filter = "grayscale(" + (100 - percentage) + "%)";
    greyBackgroundImages[2].style.filter = "grayscale(" + (100 - percentage) + "%)";

});

