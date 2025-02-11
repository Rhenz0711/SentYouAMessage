let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let textElement = document.getElementById('text');
const party = document.getElementById('party');
let hText = document.getElementById('h6')

// Texts
let yesTexts = [
  "Are you a human?👽👾",
  "Are you my love?🫤🙃",
  "Are you my Erika?😊😅",
  "I have a question for you, love🤭",
  "Do you like cats?🐈",
  "Do you like dogs?🐕",
  "Do you like me?🤤😖🫠",
  "AY, nadulas, sorii😗😘",
  "Do you love me?🤤😖🫠",
  "Why you click yes hmm🤭🫤😏",
  "Since you clicked yes",
  "Do you want to build a family?🤡😁😂",
  "Eme lang🤭🤭",
  "Kidding aside..",
  "ahm ano kase.....",
  "Do",
  "You",
  "Want",
  "To",
  "Be",
  "my",
  "Valentine?",
  "Do you want to be my Valentine?❤️",

];
let noTexts = [
  "Why you clicked no!😡😠",
  "Pressing no again huhh😭😭",
  "You pressed no again!!🤨😐",
  "You SHOULDN'T PRESS NO!!🤐😶‍🌫️",
  "I guess you dont love me!!😭😖",
  "Don't you really love me?!!😞😢",
  "Why you keep pressing no!!!😤😤",
  "I thought you love me :<🥺🥺",
  "Okay :<🙃"
];

let currentYesTextIndex = -1;
let currentNoTextIndex = -1;
let lastChoice = null;

// GIFs
const yesGifs = [
  "https://giphy.com/embed/c76IJLufpNwSULPk77",
  "https://giphy.com/embed/1JmGiBtqTuehfYxuy9",
  "https://giphy.com/embed/eUn3BS56KYXS1wiVEU",
  "https://giphy.com/embed/mriGhAFPufVCteNaZD",
  "https://giphy.com/embed/bZfYSgnMTBBcWBdTHc",
  "https://giphy.com/embed/dMYVHzANYb9p6",
  "https://giphy.com/embed/25688FI5AUUVf04upZ",
  "https://giphy.com/embed/DBVhpyConYQapFfMXc" ,
  "https://giphy.com/embed/yx5QDTbqAY7vJyIGBO" ,
  "https://giphy.com/embed/3oEhmK5PD21Of23JBK" ,
  "https://giphy.com/embed/04T0w4STSpBu0s3LEo"
];

const noGifs = [
  "https://giphy.com/embed/OPU6wzx8JrHna",
  "https://giphy.com/embed/7SF5scGB2AFrgsXP63",
  "https://giphy.com/embed/BEob5qwFkSJ7G",
  "https://giphy.com/embed/J1XSaMzkdlqDl89NVf",
  "https://giphy.com/embed/FO7rVNr3VgB2",
  "https://giphy.com/embed/wXo9rzjkBBk7m"
];

let currentYesGifIndex = 0;
let currentNoGifIndex = 0;


function showNextGif(choice) {
  let gifFrame = document.getElementById("gif-frame");

  if (choice === "yes") {
    currentYesGifIndex = (currentYesGifIndex + 1) % yesGifs.length;
    gifFrame.src = yesGifs[currentYesGifIndex];
  } else {
    currentNoGifIndex = (currentNoGifIndex + 1) % noGifs.length;
    gifFrame.src = noGifs[currentNoGifIndex];
  }

  gifFrame.style.display = "block";
}

let minusscale = 1;
let addscale = 1;
function changeText(choice) {
  hText.style.display = 'none';
  if (choice === "yes") {
    if (lastChoice !== "yes") {
      currentYesTextIndex = 0;
    } else {
      currentYesTextIndex = (currentYesTextIndex + 1) % yesTexts.length;
    }
    textElement.textContent = yesTexts[currentYesTextIndex];
    lastChoice = "yes";
    noBtn.style.scale = 1;
    yesBtn.style.scale = 1;

  } else {
    currentNoTextIndex = (currentNoTextIndex + 1) % noTexts.length;
    textElement.textContent = noTexts[currentNoTextIndex];
    lastChoice = "no";
    minusscale -= 0.1;
    addscale += 0.1;
    noBtn.style.scale = minusscale;
    yesBtn.style.scale = addscale;
  }
}

yesBtn.addEventListener("click", function() {
  changeText("yes");
  showNextGif("yes");
});

noBtn.addEventListener("click", function() {
  changeText("no");
  showNextGif("no");
});

let indexExemptions = [2, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19];
let timeoutId;
function showParty(){
  if(!indexExemptions.includes(currentYesTextIndex)){
    // Show Party Gif
    party.style.display = 'block';
    party.style.opacity = '.1';
    const changedepth = document.getElementById('party-embed');
  
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  
    // Remove only the GIF embed part
    const gifEmbed = party.querySelector('.tenor-gif-embed');
    if (gifEmbed) {
      gifEmbed.remove(); // Remove the existing GIF embed
    }
  
    // Re-insert the GIF embed HTML
    const newGifEmbed = document.createElement('div');
    newGifEmbed.className = 'tenor-gif-embed';
    newGifEmbed.setAttribute('data-postid', '27343800');
    newGifEmbed.setAttribute('data-share-method', 'host');
    newGifEmbed.setAttribute('data-aspect-ratio', '1.78771');
    newGifEmbed.setAttribute('data-width', '100%');
    party.appendChild(newGifEmbed);
  
    // Re-insert the Tenor embed script
    const embedScript = document.createElement('script');
    embedScript.src = 'https://tenor.com/embed.js';
    embedScript.async = true;
    party.appendChild(embedScript);            
  
    changedepth.style.zIndex = '-1';
    timeoutId = setTimeout(() => {
      party.style.display = 'none';
    }, 3000);
  }
}

function delay(){
  yesBtn.disabled = true;
  noBtn.disabled = true;
  
  setTimeout(() => {
    yesBtn.disabled = false;
    noBtn.disabled = false;
  }, 2500);
}

//Overlay FUnc
window.onload = function() {
  // Wait for all resources to load, then remove the loader
  setTimeout(() => { // Add a slight delay for smooth transition
      document.getElementById('loader-overlay').style.display = 'none';
      document.getElementById('container').style.display = 'block';
  }, 12000); 
};

