// Get button and text elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const textElement = document.getElementById('text');
const noTextElement = document.getElementById('noText');
const party = document.getElementById('party');
const h6 = document.getElementById('h6');



// Text Arrays
const yesTexts = [
  "Hi Erika❤️❤️",
   "Siguro naman may idea kana kung ano toh😅", 
   "HAHAHAHAHAHA", 
   "Anywayss....", 
  "......", 
  "Pano ba toh", 
  "Ahm ano kase...", 
  "Diba tayo na", 
  "May anak naren tau", 
  "Do you want to build a family ba?🤡😁😂", 
  "Eme lang🤭🤭", 
  "Kidding aside..",
  "ahm ano kase.....",
  "Nakakahiya pero..", 
  "Do", 
  "You",
   "Want",
   "To", 
   "Be", 
  "my", 
  "Valentine?", 
  "Do you want to be my Valentine? Erika?❤️"
];
const noTexts = ["Okay :<🙃"];

let currentYesTextIndex = -1;

// Function to update text and handle yes button logic
function updateYesText() {
    currentYesTextIndex++;
    
    if (currentYesTextIndex < yesTexts.length) {
        textElement.textContent = yesTexts[currentYesTextIndex];
    }
    
    if (currentYesTextIndex === yesTexts.length - 1) {
        // Last question: show No button and change Yes button text
        noBtn.style.display = 'block';
        yesBtn.textContent = 'Yes';
    }
    
    if (currentYesTextIndex === yesTexts.length) {
        // Redirect to another page if user clicks Yes on final question
        window.location.href = "accepted/accepted.html";
    }
}

// Function to handle No button logic
function handleNoClick() {
    if (currentYesTextIndex === yesTexts.length - 1) {
        // Terminate the program (close window) on final "No"
        noTextElement.textContent = noTexts[0];
        noTextElement.style.display = 'block';
        window.location.href = "exit.html";
    }
}

// Event Listeners for buttons
yesBtn.addEventListener("click", updateYesText);
yesBtn.addEventListener("click", function (){
  h6.style.display = 'none';
});
noBtn.addEventListener("click", handleNoClick);


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

// GIF 
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


let showPartyIndex = [-1, 0, 7, 8, 9, 14, 15, 16, 17, 18, 19, 21];
let timeoutId;
function showParty(){
  if(showPartyIndex.includes(currentYesTextIndex)){
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


// Overlay loader function
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loader-overlay').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    }, 10000);
};



