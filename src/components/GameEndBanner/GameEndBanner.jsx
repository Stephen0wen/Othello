import { useContext } from "react";
import "./GameEndBanner.css";
import { GameContext } from "../../contexts/GameContext";

export default function GameEndBanner() {
    const { isGameOver } = useContext(GameContext);

    if (isGameOver) {
        return (
            <div id="banner-container">
                <h2 id="game-end-banner">Click to start a new game...</h2>
            </div>
        );
    }
}
