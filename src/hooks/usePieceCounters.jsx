import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";

export default function usePieceCounters() {
    const [whiteCount, setWhiteCount] = useState(2);
    const [blackCount, setBlackCount] = useState(2);
    const { gameState } = useContext(GameContext);

    useEffect(() => {
        let newWhiteCount = 0;
        let newBlackCount = 0;

        gameState.forEach((column) => {
            column.forEach((piece) => {
                if (!piece) {
                    return;
                }
                if (piece.value) {
                    newWhiteCount++;
                }
                if (!piece.value) {
                    newBlackCount++;
                }
            });
        });

        setWhiteCount(newWhiteCount);
        setBlackCount(newBlackCount);
    }, [gameState]);

    return { whiteCount, blackCount };
}
