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

    // update the display of the game state on page
    const updateGame = () => {
        const gameDiv = document.querySelector('.game');
        gameDiv.textContent = gameBoard.board;
    };

    return { updateGame };

})();

// player object
// does it need to store a mark? (X or O)
const playerFactory = (name, marker) => {

    return { name, marker };

};

displayController.updateGame();