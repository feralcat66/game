// Generates the HTML divs for the grid for both players
Game.prototype.createGrid = function() {
    var gridDiv = document.querySelectorAll('.grid');
    for (var grid = 0; grid < gridDiv.length; grid++) {
        gridDiv[grid].removeChild(gridDiv[grid].querySelector('.no-js')); // Removes the no-js warning
        for (var i = 0; i < Game.size; i++) {
            for (var j = 0; j < Game.size; j++) {
                var el = document.createElement('div');
                el.setAttribute('data-x', i);
                el.setAttribute('data-y', j);
                el.setAttribute('class', 'grid-cell grid-cell-' + i + '-' + j);
                gridDiv[grid].appendChild(el);
            }
        }
    }
};

// Grid object
// Constructor
function Grid(size) {
    this.size = size;
    this.cells = [];
    this.init();
}

// Initialize and populate the grid
Grid.prototype.init = function() {
    for (var x = 0; x < this.size; x++) {
        var row = [];
        this.cells[x] = row;
        for (var y = 0; y < this.size; y++) {
            row.push(CONST.TYPE_EMPTY);
        }
    }
};

// Updates the cell's CSS class based on the type passed in
Grid.prototype.updateCell = function(x, y, type, targetPlayer) {
    var player;
    if (targetPlayer === CONST.HUMAN_PLAYER) {
        player = 'human-player';
    } else if (targetPlayer === CONST.COMPUTER_PLAYER) {
        player = 'computer-player';
    } else {
		// Should never be called
        console.log("There was an error trying to find the correct player's grid");
    }

    switch (type) {
        case CONST.CSS_TYPE_EMPTY:
            this.cells[x][y] = CONST.TYPE_EMPTY;
            break;
        case CONST.CSS_TYPE_SHIP:
            this.cells[x][y] = CONST.TYPE_SHIP;
            break;
        case CONST.CSS_TYPE_MISS:
            this.cells[x][y] = CONST.TYPE_MISS;
            break;
        case CONST.CSS_TYPE_HIT:
            this.cells[x][y] = CONST.TYPE_HIT;
            break;
        case CONST.CSS_TYPE_SUNK:
            this.cells[x][y] = CONST.TYPE_SUNK;
            break;
        default:
            this.cells[x][y] = CONST.TYPE_EMPTY;
            break;
    }
    var classes = ['grid-cell', 'grid-cell-' + x + '-' + y, 'grid-' + type];
    document.querySelector('.' + player + ' .grid-cell-' + x + '-' + y).setAttribute('class', classes.join(' '));
};
// Checks to see if a cell contains an undamaged ship
// Returns boolean
Grid.prototype.isUndamagedShip = function(x, y) {
    return this.cells[x][y] === CONST.TYPE_SHIP;
};
// Checks to see if the shot was missed. This is equivalent
// to checking if a cell contains a cannonball
// Returns boolean
Grid.prototype.isMiss = function(x, y) {
    return this.cells[x][y] === CONST.TYPE_MISS;
};
// Checks to see if a cell contains a damaged ship,
// either hit or sunk.
// Returns boolean
Grid.prototype.isDamagedShip = function(x, y) {
    return this.cells[x][y] === CONST.TYPE_HIT || this.cells[x][y] === CONST.TYPE_SUNK;
};


// Places ships randomly on the board
// TODO: Avoid placing ships too close to each other
Fleet.prototype.placeShipsRandomly = function() {
    var shipCoords;
    for (var i = 0; i < this.fleetRoster.length; i++) {
        var illegalPlacement = true;
	
		// Prevents the random placement of already placed ships
        if(this.player === CONST.HUMAN_PLAYER && Game.usedShips[i] === CONST.USED) {
            continue;
        }
        while (illegalPlacement) {
            var randomX = Math.floor(Game.size * Math.random());
            var randomY = Math.floor(Game.size * Math.random());
            var randomDirection = Math.floor(2*Math.random());
			
            if (this.fleetRoster[i].isLegal(randomX, randomY, randomDirection)) {
                this.fleetRoster[i].create(randomX, randomY, randomDirection, false);
                shipCoords = this.fleetRoster[i].getAllShipCells();
                illegalPlacement = false;
            } else {
                continue;
            }
        }
        if (this.player === CONST.HUMAN_PLAYER && Game.usedShips[i] !== CONST.USED) {
            for (var j = 0; j < shipCoords.length; j++) {
                this.playerGrid.updateCell(shipCoords[j].x, shipCoords[j].y, 'ship', this.player);
                Game.usedShips[i] = CONST.USED;
            }
        }
    }
};