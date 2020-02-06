export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

// Call this to add a hit for the current user
// From the map when the user hits the square, execute this function/call this function for add hit
// This is the function that tracks the hit count for the map and saves to the user object, 
// So, if you want this information to display somewhere, it's stored here--We'll have to call 
// getUser (see below) to get the data displayed on results page

export function addHit() {
    const user = getUser();
    user.hits++;
    saveUser(user);
}

// Call this to add a click for the current user 
// this will gather total click count and log to user object, call getUser to get the data
export function addClick() {
    const user = getUser();
    const clickCount = localStorage.getItem(JSON.parse(totalClicks));
    user.clicks++;
    saveUser(user);
}

// Execute the getUser function to get the current user's data (name, avatar, clicks and hits).
// You can use this to display the results to the user. (see results.js)
export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function resetUser() {
    localStorage.removeItem('user');
}

// Saves the current user to a list of high scores
export function saveHighScore(user) {
    let highScores = getHighScores();
    if (!highScores) {
        highScores = [];
    }
    
    highScores.push(user);
    localStorage.setItem('high-scores', JSON.stringify(highScores));
}

// Gets the list of high scores to display to the user
export function getHighScores() {
    const json = localStorage.getItem('high-scores');
    if (!json) return null;
    return JSON.parse(json);
}