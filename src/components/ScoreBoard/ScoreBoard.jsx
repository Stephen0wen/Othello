import "./ScoreBoard.css";
import GamePiece from "../GamePiece/GamePiece";

export default function () {
    return (
        <div id="score-board">
            <div className="score-counter">
                <GamePiece piece={{ value: true }} />
                <h2>x 5</h2>
            </div>
            <div className="score-counter">
                <GamePiece piece={{ value: false }} />
                <h2>x 52</h2>
            </div>
        </div>
    );
}
