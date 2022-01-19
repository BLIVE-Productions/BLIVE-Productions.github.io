const letters = document.getElementById("title");
const fontFamilyPool = ['Times New Roman', 'Brightness', "DarkMage", "courier new", 'EarwigFactory', 'MagnificentSerif', 'Viner Hand ITC'];

if(letters != null) {

    setLetters();

    setInterval(() => {
        setLetters();
    },1200);
    
    function setLetters() {
        for(let i = 0; i < letters.children.length; i++) {
            letters.children[i].style.fontFamily  = fontFamilyPool[Math.floor(Math.random() * 8)];
            letters.children[i].style.fontSize  = Math.floor(Math.random() * (45 - 30)) + 30 + "px";
        }
    }
    
}

