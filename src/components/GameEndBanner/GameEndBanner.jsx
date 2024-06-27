import { useContext } from "react";
import "./GameEndBanner.css";
import { GameContext } from "../../contexts/GameContext";

export default function GameEndBanner() {
    const { isGameOver } = useContext(GameContext);

    if (!isGameOver) {
        return (
            <div id="banner-container">
                <h2 id="game-end-banner">CLICK TO START A NEW GAME...</h2>
            </div>
        );
    }
}
