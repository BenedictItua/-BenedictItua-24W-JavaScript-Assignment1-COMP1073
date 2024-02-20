// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const body = document.body;
// Variables for pre-defined arrays
const nouns1 = ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The Elephant", "The cat"];
const verbs = ["Sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
    // variable to get array element and displaying it
    function noun1_on_click() {
        const randomIndex = Math.floor(Math.random() * nouns1.length);
        choosenNoun1.textContent = nouns1[randomIndex];
    }
    // if-else to change count setting


function verb_on_click() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    choosenVerb.textContent = verbs[randomIndex];
}

function adjective_on_click() {
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    choosenAdjective.textContent = adjectives[randomIndex];
}

function noun2_on_click() {
    const randomIndex = Math.floor(Math.random() * nouns2.length);
    choosenNoun2.textContent = nouns2[randomIndex];
}

function setting_on_click() {
    const randomIndex = Math.floor(Math.random() * places.length);
    choosenSetting.textContent = places[randomIndex];
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    storyParagraph.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);




// Function to generate a random color in hexadecimal format
function getRandomColor() {
    // Generate random R, G, and B values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Convert RGB to hexadecimal format
    const hexR = r.toString(16).padStart(2, '0'); // Ensure two digits
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    
    // Return the hexadecimal color string
    return `#${hexR}${hexG}${hexB}`;
}

// Change background color when a button is clicked
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    });
});


// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    storyParagraph.textContent = story;
}