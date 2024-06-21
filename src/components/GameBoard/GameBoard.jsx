import { useEffect, useState } from "react";
import "./GameBoard.css";

export default function GameBoard() {
    const [gameState, setGameState] = useState([[{}]]);

    useEffect(() => {
        const emptyGrid = Array(8)
            .fill()
            .map(() => {
                return Array(8)
                    .fill()
                    .map(() => {
                        return { value: null };
                    });
            });

        setGameState(emptyGrid);
    }, []);

    console.log(gameState);

    return (
        <div id="game-board">
            {gameState.map((column, xCoordinate) => {
                return (
                    <div className="game-board-column">
                        {column.map((cell, yCoordinate) => {
                            return (
                                <div className="game-board-cell">
                                    <p>{`(${xCoordinate}, ${yCoordinate})`}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
