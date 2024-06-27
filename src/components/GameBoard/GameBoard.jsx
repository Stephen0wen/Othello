import { useContext } from "react";
import "./GameBoard.css";
import GamePiece from "../GamePiece/GamePiece";
import { GameContext } from "../../contexts/GameContext";

import GameBoardSquare from "../GameBoardSquare/GameBoardSquare";
import useGreedyAiTurn from "../../hooks/useGreedyAiTurn";
import GameEndBanner from "../GameEndBanner/GameEndBanner";
import useNewGame from "../../hooks/useNewGame";

export default function GameBoard() {
    const { gameState } = useContext(GameContext);
    const newGame = useNewGame();
    useGreedyAiTurn();

    return (
        <div id="game-board" onClick={newGame}>
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
            <GameEndBanner />
        </div>
    );
}
