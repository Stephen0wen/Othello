import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import initialGameState from "../assets/initialGameState.json";

export default function useNewGame() {
    const { setGameState, setIsWhiteTurn, isGameOver, setIsGameOver } =
        useContext(GameContext);

    const newGame = () => {
        if (isGameOver) {
            setGameState(initialGameState);
            setIsGameOver(false);
            setIsWhiteTurn(false);
        }
    };

    return newGame;
}
