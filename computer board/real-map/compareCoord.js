function compareCoord(array1, array2) {
    if (array1[0] !== array2[0] && array1[1] !== array2[1]) {
        return true;
    }
    else false;
}

export default compareCoord;

function placeBoat(boat, gameBoard) {
    if ()
}

function computerTorpedo()

const randomLoc = [Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)]
const placement = computerBoard[randomLoc[0]][randomLoc[1]]
const row = computerBoard.id.substring(1, 2);
const col = computerBoard.id.substring(2, 3);
if (computerBoard[row][col] === 0) {
computerBoard.id.style.background = '#bbb';
} else if (computerBoard[row][col] === 1 ||
    computerBoard[row][col] === 2 || computerBoard[row][col] === 3 || computerBoard[row][col] === 4 || computerBoard[row][col] === 5) {
computerBoard.id.style.background = 'red';
computerBoard[row][col] = 8;

