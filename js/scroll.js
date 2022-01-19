const scrollId = document.getElementById('scroll');

if(scrollId != null) {
    
    let scrollDiv = scrollId.style;    
    window.addEventListener("scroll", () => {
        let scroll = this.scrollY;
        if(scroll > 50) { scrollDiv.opacity = 0; }
        else { scrollDiv.opacity = 1; }    
    });

}


