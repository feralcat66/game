import { getUser, saveHighScore, getHighScores } from '../app.js';
const hits = localStorage.getItem('hit-count');
const clicks = localStorage.getItem('total-clicks');
const nameField = document.getElementById('username');
const avatarField = document.getElementById('avatar');
const hitField = document.getElementById('hits');
const clickField = document.getElementById('clicks');
const accuracyField = document.getElementById('accuracy');
const highScoresField = document.getElementById('high-scores');
console.log(JSON.parse(hits));
console.log(JSON.parse(clicks));
// this is where the getUser function is for displaying results
const user = getUser();
const parsedHits = Number(JSON.parse(hits));
const parsedClicks = Number(JSON.parse(clicks));

const accuracy = ((parsedHits / parsedClicks) * 100).toFixed(2) + '%';
accuracyField.textContent = accuracy;
clickField.textContent = parsedClicks;
console.log(accuracy);

// We save the high score for the current user here
saveHighScore(user);

// Display results
nameField.innerText = user.username;
avatarField.src = user.avatar;
hitField.innerText = user.hits;
clickField.innerText = user.clicks;

// This calculates the accuracy if we want to use it!! :))

// if (user.clicks > 0) {
//     accuracyField.innerText = (user.hits / user.clicks * 100) + '%';
// }

// Display high scores
// Current problem is the high scores aren't being sorted by accuracy
// Sort highScores to show the highest scores to be on the top of the list
const highScores = getHighScores();
const maxHighScores = 5;
let currentHighScores = 0;
highScores.forEach(item => {
    if (!item) return;
    // Uncomment this line to only show the first maxHighScores (5) - change this number if you want
    // to display that number of high scores -- I only have it uncommented because since it isn't sorting 
    // properly it isn't showing the top scores by rank, so ugh :P Halp.
    // if (currentHighScores > maxHighScores) return;

    currentHighScores++;
    const li = document.createElement('li');
    li.innerText = `${item.username} - clicks: ${item.clicks}, hits: ${item.hits}`;
    console.log(item);
    highScoresField.appendChild(li);
});