import { useState } from "react";
import Title from "./components/Title/Title";
import GameBoard from "./components/GameBoard/GameBoard";
import { GameProvider } from "./contexts/GameContext";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Title />
            <GameProvider>
                <GameBoard />
            </GameProvider>
        </>
    );
}

export default App;
