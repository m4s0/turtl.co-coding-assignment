import {Position} from "./Position";

export class Square {
  edgeLength: number;
  position: Position;

  constructor(edgeLength: number, position: Position) {
    this.edgeLength = edgeLength;
    this.position = position;
  }
}
