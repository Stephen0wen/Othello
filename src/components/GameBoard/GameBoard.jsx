import { useEffect, useState } from "react";
import "./GameBoard.css";
import GamePiece from "../GamePiece/GamePiece";

export default function GameBoard() {
    const [gameState, setGameState] = useState([[{}]]);

    useEffect(() => {
        const startPostition = Array(8)
            .fill()
            .map(() => {
                return Array(8)
                    .fill()
                    .map(() => {
                        return null;
                    });
            });
        startPostition[3][4] = { value: false };
        startPostition[3][3] = { value: true };
        startPostition[4][4] = { value: true };
        startPostition[4][3] = { value: false };

        setGameState(startPostition);
    }, []);

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
