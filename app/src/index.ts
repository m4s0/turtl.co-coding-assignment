import {calculateSquaresThatFitOnPage} from "./calculateSquaresThatFitOnPage";
import {Position} from "./Position";

function calculateSquares(sizeX: number, sizeY: number) {
  const squares = calculateSquaresThatFitOnPage(sizeX, sizeY);

  console.log('Page size: %s, %s', sizeX, sizeY);
  console.log('Possible squares', squares.length);
  console.log(squares);
}

calculateSquares(200, 10);
calculateSquares(1543, 2124);
calculateSquares(1521343, 3242124);
calculateSquares(1521343, 2124);
