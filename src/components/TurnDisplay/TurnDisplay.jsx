import "./TurnDisplay.css";
import GamePiece from "../GamePiece/GamePiece";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import usePieceCounters from "../../hooks/usePieceCounters";

export default function TurnDisplay() {
    const { isWhiteTurn, isGameOver } = useContext(GameContext);
    const { whiteCount, blackCount } = usePieceCounters();
    const [isWhiteWinner, setIsWhiteWinner] = useState(false);

    useEffect(() => {
        const winner = whiteCount > blackCount;
        setIsWhiteWinner(winner);
    }, [isGameOver]);

    if (!isGameOver) {
        return (
            <div id="turn-display">
                <GamePiece piece={{ value: isWhiteTurn }} />
                <h2>{isWhiteTurn ? "White" : "Black"} to play</h2>
                <GamePiece piece={{ value: isWhiteTurn }} />
            </div>
        );
    }

    if (isGameOver) {
        return (
            <div id="turn-display">
                <GamePiece piece={{ value: isWhiteWinner }} />
                <h2>{isWhiteWinner ? "White" : "Black"} wins!</h2>
                <GamePiece piece={{ value: isWhiteWinner }} />
            </div>
        );
    }
}
