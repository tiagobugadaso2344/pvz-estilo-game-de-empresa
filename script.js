const board = document.getElementById("game-board");

for (let i = 0; i < 45; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}
const board = document.getElementById("game-board");

const rows = 5;
const cols = 9;

// Criar grid
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Identificar posição
    cell.dataset.row = r;
    cell.dataset.col = c;

    // Evento de clique
    cell.addEventListener("click", () => {
      console.log("Célula clicada:", r, c);
      cell.style.backgroundColor = "#90ee90"; // marca visual
    });

    board.appendChild(cell);
  }
}
