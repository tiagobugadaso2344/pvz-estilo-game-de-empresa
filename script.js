const board = document.getElementById("game-board");

for (let i = 0; i < 45; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}
body {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  margin-top: 20px;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(9, 80px);
  grid-template-rows: repeat(5, 80px);
  gap: 3px;
  justify-content: center;
  margin-top: 30px;
}

.cell {
  background-color: white;
  border: 2px solid #333;
  cursor: pointer;
  transition: 0.2s;
}

.cell:hover {
  background-color: #d0f0ff;
}
