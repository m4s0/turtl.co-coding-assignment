import {Square} from "./Square";
import {Position} from "./Position";

type Results = Array<Square>;

const squareBorder = 1;
const minEdgeLength = 1;

export function calculateSquaresThatFitOnPage(width: number, height: number, origin: Position = new Position(0, 0), results: Results = []): Results {
  if (width < minEdgeLength || height < minEdgeLength) {
    return results;
  }

  const nextShapeOrigin = new Position(origin.x, origin.y);
  let nextShapeHeight = 0;
  let nextShapeWidth = 0;

  if (width === height) {
    results.push(new Square(width, origin))
  }

  if (width > height) {
    results.push(new Square(height, origin))

    nextShapeOrigin.x = nextShapeOrigin.x + height + squareBorder
    nextShapeHeight = height;
    nextShapeWidth = width - height - squareBorder;
  }

  if (width < height) {
    results.push(new Square(width, origin))

    nextShapeOrigin.y = nextShapeOrigin.y + width + squareBorder
    nextShapeHeight = height - width - squareBorder;
    nextShapeWidth = width;
  }

  if (nextShapeHeight > 0 && nextShapeWidth > 0) {
    results.concat(calculateSquaresThatFitOnPage(nextShapeWidth, nextShapeHeight, nextShapeOrigin, results))
  }

  return results
}
