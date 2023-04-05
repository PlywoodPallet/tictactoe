// Modules: gameBoard, displayController
// Factories: players


// Store the board, and handle changes in the board due to player action
const gameBoard = (() => {

    const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    // make a board-changing method [row][col] to be similar with js 2d array syntax

    return { board };

})();

// display the board, handle player input, control the game
const displayController = (() => {


})();

// player object
// does it need to store a mark? (X or O)
const playerFactory = (name, marker) => {

    return { name, marker };

};