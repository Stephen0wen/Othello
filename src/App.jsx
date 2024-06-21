import { useState } from "react";
import Title from "./components/Title/Title";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Title />
            <GameBoard />
        </>
    );
}

export default App;
