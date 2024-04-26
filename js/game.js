document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('ticTacToeGrid');
  const submitButton = document.getElementById('submitButton');
  let board = Array(9).fill(null);
  let currentPlayer = 'X'; // User is 'X' and AI is 'O'

  // Initialize the game board
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => userMove(i), { once: true });
    grid.appendChild(cell);
  }

  function userMove(index) {
    if (!board[index]) {
      board[index] = currentPlayer;
      grid.children[index].textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert('Congratulations! You won. You can now submit the form.');
        submitButton.disabled = false;
      } else if (isBoardFull()) {
        alert('Draw! You can now submit the form.');
        submitButton.disabled = false;
      } else {
        currentPlayer = 'O';
        aiMove();
      }
    }
  }

  function aiMove() {
    let availablePositions = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
    if (availablePositions.length > 0) {
      let aiMove = availablePositions[Math.floor(Math.random() * availablePositions.length)];
      board[aiMove] = currentPlayer;
      grid.children[aiMove].textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert('AI wins.');
      } else if (isBoardFull()) {
        alert('Draw! You can now submit the form.');
        submitButton.disabled = false;
      }
      currentPlayer = 'X';
    }
  }

  function checkWin(player) {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]            // Diagonals
    ];
    return winPatterns.some(pattern => {
      return pattern.every(index => {
        return board[index] === player;
      });
    });
  }

  function isBoardFull() {
    return board.every(cell => cell !== null);
  }
});
