import "./ScoreBoard.css";
import GamePiece from "../GamePiece/GamePiece";
import usePieceCounters from "../../hooks/usePieceCounters";

export default function () {
    const { whiteCount, blackCount } = usePieceCounters();

    return (
        <div id="score-board">
            <div className="score-counter">
                <GamePiece piece={{ value: true }} />
                <h2>x {whiteCount}</h2>
            </div>
            <div className="score-counter">
                <GamePiece piece={{ value: false }} />
                <h2>x {blackCount}</h2>
            </div>
        </div>
    );
}
