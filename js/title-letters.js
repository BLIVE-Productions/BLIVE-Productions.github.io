const fontFamilyPool = ['Times New Roman', 'Brightness', "DarkMage", "courier new", 'EarwigFactory', 'MagnificentSerif', 'Viner Hand ITC'];

const titleLetters = document.getElementById("title");
const offerteLetters = document.getElementById("offerte-titel");

if(titleLetters != null) {
    setLettersFromDomElement(titleLetters, 100, 80);
    setInterval(() => {
        setLettersFromDomElement(titleLetters, 100, 80);
    },1200);
}

if(offerteLetters != null) {
    setLettersFromDomElement(offerteLetters, 50, 35);
    setInterval(() => {
        setLettersFromDomElement(offerteLetters, 50, 35);
    },1200);
}

function setLettersFromDomElement(domElement, upperLimit, minimum) {
    for(let i = 0; i < domElement.children.length; i++) {
        domElement.children[i].style.fontFamily  = fontFamilyPool[Math.floor(Math.random() * 8)];
        domElement.children[i].style.fontSize  = Math.floor(Math.random() * (upperLimit - minimum)) + minimum + "px";
    }
}
