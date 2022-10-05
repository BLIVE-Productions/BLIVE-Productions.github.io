//VARIABLES
const ANIMATEDTITLES = document.getElementsByClassName('text-animator');
const FONTFACES = [
    'coolvetica',
    'ligurino',
    'ligurino-condensed', 
    'birra', 
    'filicudi-striped',
    'filicudi-solid',
];

//RUN
setInterval(animateTitles, 1500);

//FUNCTIONS
function animateTitles() {
    Array.from(ANIMATEDTITLES).forEach(title => {
        title.style.fontFamily = FONTFACES[Math.floor(Math.random() * FONTFACES.length)];
    });
}