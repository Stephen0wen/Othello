import { useState } from "react";
import Title from "./components/Title/Title";
import GameBoard from "./components/GameBoard/GameBoard";
import { GameProvider } from "./contexts/GameContext";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import TurnDisplay from "./components/TurnDisplay/TurnDisplay";

function App() {
    return (
        <>
            <Title />
            <GameProvider>
                <TurnDisplay />
                <GameBoard />
                <ScoreBoard />
            </GameProvider>
        </>
    );
}

export default App;
