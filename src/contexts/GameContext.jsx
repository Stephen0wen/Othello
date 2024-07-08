import { createContext, useState } from "react";
import initialGameState from "../assets/initialGameState.json";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [gameState, setGameState] = useState(initialGameState);
    const [isWhiteTurn, setIsWhiteTurn] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWhiteHuman, setIsWhiteHuman] = useState(false);
    const [isPassing, setIsPassing] = useState(false);

    return (
        <GameContext.Provider
            value={{
                gameState,
                setGameState,
                isWhiteTurn,
                setIsWhiteTurn,
                isWhiteHuman,
                setIsWhiteHuman,
                isGameOver,
                setIsGameOver,
                isPassing,
                setIsPassing,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
