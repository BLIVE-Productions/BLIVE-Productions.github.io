const scrollId = document.getElementById('scroll');
const scrollIdButton = document.getElementById('scrollbutton');

if(scrollId != null) {
    
    let scrollDiv = scrollId.style;    
    window.addEventListener("scroll", () => {
        let scroll = this.scrollY;
        if(scroll > 50) { scrollDiv.opacity = 0; }
        else { scrollDiv.opacity = 1; }    
    });

}

if(scrollIdButton != null) {
    
    let scrollButtonDiv = scrollIdButton.style;    
    window.addEventListener("scroll", () => {
        let scrollY = this.scrollY;
        if(scrollY > 1800) { scrollButtonDiv.opacity = 0; }
        else { scrollButtonDiv.opacity = 1; }    
    });

}


