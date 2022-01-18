const underlineText = document.getElementById('underline-text');
const textPool = ['Website onder constructie...'];
const fontFamilyPoolUnderline = ['Times New Roman', "courier new"];

let wordIndex = 0;

function writeText() {
    const word = textPool[0];
    if (characterIndex < word.length) {
        underlineText.innerHTML += word.charAt(characterIndex);
        characterIndex++;
        setTimeout(writeText, Math.floor(Math.random() * (600 - 200)) + 200);
    }	
}
  
setInterval(async () => {
    characterIndex = 0;

    let randomNumber = Math.floor(Math.random() * 4);

    while(randomNumber == wordIndex) { randomNumber = Math.floor(Math.random() * 2); }
    wordIndex = randomNumber;

    underlineText.style.backgroundColor = '#ACCEF7'
    await delay(Math.floor(Math.random() * (1200 - 200)) + 200);
    underlineText.innerHTML = '';
    underlineText.style.backgroundColor = ''

    underlineText.style.fontFamily  = fontFamilyPoolUnderline[Math.floor(Math.random() * 8)];

    writeText();
},20000);

const delay = ms => new Promise(res => setTimeout(res, ms));
