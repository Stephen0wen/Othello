import { useContext } from "react";
import "./GameBoard.css";
import GamePiece from "../GamePiece/GamePiece";
import { GameContext } from "../../contexts/GameContext";
import usePossibleMoves from "../../hooks/usePossibleMoves";
import GameBoardSquare from "../GameBoardSquare/GameBoardSquare";

export default function GameBoard() {
    const { gameState } = useContext(GameContext);

    return (
        <div id="game-board">
            {gameState.map((column, xCoordinate) => {
                return (
                    <div key={xCoordinate} className="game-board-column">
                        {column.map((piece, yCoordinate) => {
                            return (
                                <GameBoardSquare
                                    key={`${xCoordinate}${yCoordinate}`}
                                    xCoordinate={xCoordinate}
                                    yCoordinate={yCoordinate}
                                >
                                    <GamePiece piece={piece} />
                                </GameBoardSquare>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
