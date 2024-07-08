import { useContext, useEffect } from "react";

import { GameContext } from "../contexts/GameContext";
import usePlacePiece from "./usePlacePiece";
import usePossibleMoves from "./usePossibleMoves";

export default function useGreedyAiTurn() {
    const { isWhiteTurn, isWhiteHuman, isPassing } = useContext(GameContext);
    const { possibleMoves } = usePossibleMoves();
    const placePiece = usePlacePiece();

    useEffect(() => {
        if (isWhiteTurn === isWhiteHuman) return;
        if (isPassing) return;

        setTimeout(() => {
            let bestScore = 0;
            let bestX;
            let bestY;

            for (const label in possibleMoves) {
                const { xCoordinate, yCoordinate, outFlankedPieces } =
                    possibleMoves[label];
                if (outFlankedPieces.length > bestScore) {
                    bestScore = outFlankedPieces.length;
                    bestX = xCoordinate;
                    bestY = yCoordinate;
                }
            }

            placePiece(bestX, bestY);
        }, 1200);
    }, [possibleMoves]);
}
