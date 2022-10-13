import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Chessboard from "chessboardjsx";
import { Chess } from 'chess.js'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Chessboard position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" ></Chessboard>
);



const playWhite = (board) => {
  let moves = board.moves()
  let move = moves[Math.floor(Math.random() * moves.length)]
  board.move(move)

  if (!board.isGameOver()) {
    root.render(
      <Chessboard position={ board.fen() } ></Chessboard>
    );
    setTimeout(() => {
      return playBlack(board)
    }, 1000)
  }
  else return board
}

const playBlack = (board) => {
  let moves = board.moves()
  let move = moves[Math.floor(Math.random() * moves.length)]
  board.move(move)

  if (!board.isGameOver()) {
    root.render(
      <Chessboard position={ board.fen() } ></Chessboard>
    );
    setTimeout(() => {
      return playWhite(board)
    }, 1000)
  }
  else return board
}

const board = new Chess

let result = playWhite(board)

console.log(result)