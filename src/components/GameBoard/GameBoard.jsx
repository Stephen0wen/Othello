import { useContext, useState } from "react";
import "./GameBoard.css";
import GamePiece from "../GamePiece/GamePiece";
import { GameContext } from "../../contexts/GameContext";

export default function GameBoard() {
    const { gameState } = useContext(GameContext);

    return (
        <div id="game-board">
            {gameState.map((column, xCoordinate) => {
                return (
                    <div key={xCoordinate} className="game-board-column">
                        {column.map((piece, yCoordinate) => {
                            return (
                                <div
                                    key={`${xCoordinate}-${yCoordinate}`}
                                    className="game-board-cell"
                                >
                                    <GamePiece piece={piece} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
