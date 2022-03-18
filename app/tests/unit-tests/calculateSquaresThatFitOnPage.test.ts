import 'jest';
import {calculateSquaresThatFitOnPage} from "../../src/calculateSquaresThatFitOnPage";
import {Square} from "../../src/Square";
import {Position} from "../../src/Position";

test('it should return no squares if there is no space', () => {
  const squaresExpected = calculateSquaresThatFitOnPage(0, 0);

  expect(squaresExpected.length).toEqual(0);
});

test('it should return 1 square with the same size of main Page', () => {
  const squaresExpected = calculateSquaresThatFitOnPage(10, 10);

  expect(squaresExpected.length).toEqual(1);
  expect(squaresExpected.pop()).toEqual(new Square(10, new Position(0, 0)));
});

test('it should return 1 square if there is no space for others', () => {
  const squaresExpected = calculateSquaresThatFitOnPage(10, 11);

  expect(squaresExpected.length).toEqual(1);
  expect(squaresExpected.pop()).toEqual(new Square(10, new Position(0, 0)));
});

test('it should return 2 square', () => {
  const squaresExpected = calculateSquaresThatFitOnPage(20, 10);

  expect(squaresExpected.length).toEqual(2);
  expect(squaresExpected.pop()).toEqual(new Square(9, new Position(11, 0)));
  expect(squaresExpected.pop()).toEqual(new Square(10, new Position(0, 0)));
});

test('it should return 14 square', () => {
  const squaresExpected = calculateSquaresThatFitOnPage(266, 874);

  expect(squaresExpected.length).toEqual(14);
  expect(squaresExpected.pop()).toEqual(new Square(2, new Position(264, 871)));
  expect(squaresExpected.pop()).toEqual(new Square(2, new Position(264, 868)));
  expect(squaresExpected.pop()).toEqual(new Square(2, new Position(264, 865)));
  expect(squaresExpected.pop()).toEqual(new Square(2, new Position(264, 862)));
  expect(squaresExpected.pop()).toEqual(new Square(12, new Position(251, 862)));
  expect(squaresExpected.pop()).toEqual(new Square(15, new Position(251, 846)));
  expect(squaresExpected.pop()).toEqual(new Square(28, new Position(222, 846)));
  expect(squaresExpected.pop()).toEqual(new Square(44, new Position(222, 801)));
  expect(squaresExpected.pop()).toEqual(new Square(73, new Position(148, 801)));
  expect(squaresExpected.pop()).toEqual(new Square(73, new Position(74, 801)));
  expect(squaresExpected.pop()).toEqual(new Square(73, new Position(0, 801)));
  expect(squaresExpected.pop()).toEqual(new Square(266, new Position(0, 534)));
  expect(squaresExpected.pop()).toEqual(new Square(266, new Position(0, 267)));
  expect(squaresExpected.pop()).toEqual(new Square(266, new Position(0, 0)));
});
