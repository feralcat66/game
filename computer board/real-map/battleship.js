/// import compareCoord from './compareCoord.js';

// set grid rows and columns and the size of each square
const rows = 10;
const cols = 10;
const squareSize = 50;

// get the container element
const gameBoardContainer = document.getElementById('gameboard');
const computerGameBoardContainer = document.getElementById('computer-gameboard');

// make the grid columns and rows
for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++){

        
        
        // create a new div HTML element for each grid square and make it the right size
        
        const square = document.createElement('div');
        gameBoardContainer.appendChild(square);
        
        // give each div element a unique id based on its row and column, like "s00"
        square.id = 's' + j + i;	
		
		// set each grid square's coordinates: multiples of the current row or column number
        const topPosition = j * squareSize;
        const leftPosition = i * squareSize;	
		
		// use CSS absolute positioning to place each grid square on the page
        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';		
    }
}
for (k = 0; k < cols; k++) {
    for (l = 0; l < rows; l++) {
        const square2 = document.createElement('div');
        computerGameBoardContainer.appendChild(square2);
        
        square2.id = 'p' + l + k;	
        
        const computerTopPosition = l * squareSize;
        const computerLeftPosition = k * squareSize;		
        
        square2.style.top = computerTopPosition + 'px';
        square2.style.left = computerLeftPosition + 'px';
    }
}

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
let hitCount = 0;
let totalClicks = 0;

/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)
   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/
const gameBoard = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];

const computerBoard = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];



let randomLocation1 = [1, Math.floor(Math.random() * 6)];
let randomLocation2 = [2, Math.floor(Math.random() * 7)];
let randomLocation3 = [6, Math.floor(Math.random() * 7)];
let randomLocation4 = [9, Math.floor(Math.random() * 8)];
let randomLocation5 = [4, Math.floor(Math.random() * 6)];
let computerRandomLocation1 = [3, Math.floor(Math.random() * 6)];
let computerRandomLocation2 = [5, Math.floor(Math.random() * 7)];
let computerRandomLocation3 = [2, Math.floor(Math.random() * 7)];
let computerRandomLocation4 = [9, Math.floor(Math.random() * 8)];
let computerRandomLocation5 = [1, Math.floor(Math.random() * 6)];



for (let k = 0; k < gameBoard.length; k++);

let boatOne = [ 
    gameBoard[randomLocation1[0]][randomLocation1[1]] = 1,
    gameBoard[randomLocation1[0]][randomLocation1[1] + 1] = 1,
    gameBoard[randomLocation1[0]][randomLocation1[1] + 2] = 1,
    computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1]] = 1,
    computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1] + 1] = 1,
    computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1] + 2] = 1,

];
let boatTwo = [
    gameBoard[randomLocation2[0]][randomLocation2[1]] = 2,
    gameBoard[randomLocation2[0]][randomLocation2[1] + 1] = 2,
    gameBoard[randomLocation2[0]][randomLocation2[1] + 2] = 2,
    gameBoard[randomLocation2[0]][randomLocation2[1] + 3] = 2,
    computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1]] = 2,
    computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 1] = 2,
    computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 2] = 2,
    computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 3] = 2
];
let boatThree = [
    gameBoard[randomLocation3[0]][randomLocation3[1]] = 3,
    gameBoard[randomLocation3[0]][randomLocation3[1] + 1] = 3,
    gameBoard[randomLocation3[0]][randomLocation3[1] + 2] = 3,
    computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1]] = 3,
    computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1] + 1] = 3,
    computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1] + 2] = 3
];
let boatFour = [
    gameBoard[randomLocation4[0]][randomLocation4[1]] = 4,
    gameBoard[randomLocation4[0]][randomLocation4[1] + 1] = 4,
    computerBoard[computerRandomLocation4[0]][computerRandomLocation4[1]] = 4,
    computerBoard[computerRandomLocation4[0]][computerRandomLocation4[1] + 1] = 4
];
let boatFive = [
    gameBoard[randomLocation5[0]][randomLocation5[1]] = 5,
    gameBoard[randomLocation5[0]][randomLocation5[1] + 1] = 5,
    gameBoard[randomLocation5[0]][randomLocation5[1] + 2] = 5,
    gameBoard[randomLocation5[0]][randomLocation5[1] + 3] = 5,
    computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1]] = 5,
    computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 1] = 5,
    computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 2] = 5,
    computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 3] = 5

];

// function compareCoord(array1, array2) {
//     if (array1[0] !== array2[0] && array1[1] !== array2[1]) {
//         return true;
//     }
//     else false;
// }

// while (!compareCoord(randomLocation1, randomLocation2) && !compareCoord(randomLocation2, randomLocation3) && !compareCoord(randomLocation2, randomLocation4)) {
//     randomLocation2 = Math.floor(Math.random() * 6);   
// }
// while (!compareCoord(randomLocation1, randomLocation3) && !compareCoord(randomLocation3, randomLocation4)) {
//     randomLocation3 = Math.floor(Math.random() * 6);
// }
// while (!compareCoord(randomLocation1, randomLocation4)) {
//     randomLocation4 = Math.floor(Math.random() * 6);
// }


console.log(JSON.stringify(gameBoard));
console.log(JSON.stringify(computerBoard));
// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener('click', (e) => {
    fireTorpedo(e);
    computerTorpedo();

});


// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
    
    if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
        const row = e.target.id.substring(1, 2);
        const col = e.target.id.substring(2, 3);
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
        if (gameBoard[row][col] === 0) {
            e.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
            gameBoard[row][col] = 7;
            totalClicks++;
            console.log(totalClicks);
			
		// if player clicks a square with a ship, change the color and change square's value
        } else if (gameBoard[row][col] === 1 ||
            gameBoard[row][col] === 2 || gameBoard[row][col] === 3 || gameBoard[row][col] === 4 || gameBoard[row][col] === 5) {
            e.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
            gameBoard[row][col] = 8;
			
			// increment hitCount each time a ship is hit
            hitCount++;
            totalClicks++;
            const hiddenButton = document.getElementById('hidden-button');
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
            if (hitCount === 16) {
                alert('All enemy battleships have been defeated! You win!');
                const addClick = localStorage.setItem('total-clicks', JSON.stringify(totalClicks));
                const addHit = localStorage.setItem('hit-count', JSON.stringify(hitCount));
                hiddenButton.classList.remove('hidden');

                console.log(addClick);
                console.log('=======');
                console.log(addHit);
            // } else if (gameBoard[row][col] > 7) {
            //     alert('Stop wasting your torpedos! You already fired at this location.');
            }		
        }	
    }
			
		// if player clicks a square that's been previously hit, let them know

    e.stopPropagation();
}

const button = document.getElementById('hidden-button');
button.addEventListener('click', () => {
    window.location = '../results/index.html';

    
});

function computerTorpedo() {
    
    const randomLoc = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    const placement = computerBoard[randomLoc[0]][randomLoc[1]];
    const computerTarg = document.getElementById('p' + randomLoc[0] + randomLoc[1]);
  
    if (placement === 0) {
        computerTarg.style.background = '#bbb';
    } else if (placement === 1 ||
        placement === 2 || placement === 3 || placement === 4 || placement === 5) {
        computerTarg.style.background = 'red';
    }
}
