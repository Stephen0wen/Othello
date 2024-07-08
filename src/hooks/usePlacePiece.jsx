import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import usePossibleMoves from "./usePossibleMoves";

export default function usePlacePiece() {
    const { possibleMoves } = usePossibleMoves();
    const { gameState, setGameState, isWhiteTurn, setIsWhiteTurn } =
        useContext(GameContext);

    const placePiece = (xCoordinate, yCoordinate) => {
        const positionLabel = `${xCoordinate}${yCoordinate}`;
        if (possibleMoves[positionLabel]) {
            const { outFlankedPieces } = possibleMoves[positionLabel];

            const newGameState = structuredClone(gameState);
            newGameState[xCoordinate][yCoordinate] = { value: isWhiteTurn };

            outFlankedPieces.forEach(({ xCoordinate, yCoordinate }) => {
                newGameState[xCoordinate][yCoordinate] = { value: isWhiteTurn };
            });

            setGameState(newGameState);
            setIsWhiteTurn(!isWhiteTurn);
        }
    };

    return placePiece;
}
