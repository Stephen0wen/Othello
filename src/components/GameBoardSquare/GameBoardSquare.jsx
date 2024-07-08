import { useContext, useEffect, useState } from "react";
import "./GameBoardSquare.css";
import usePossibleMoves from "../../hooks/usePossibleMoves";
import usePlacePiece from "../../hooks/usePlacePiece";
import { GameContext } from "../../contexts/GameContext";

export default function GameBoardSquare({
    children,
    xCoordinate,
    yCoordinate,
}) {
    const { gameState, isWhiteTurn, isWhiteHuman, isPassing } =
        useContext(GameContext);
    const { possibleMoves } = usePossibleMoves();
    const placePiece = usePlacePiece();
    const [className, setClassName] = useState("");

    const positionLabel = `${xCoordinate}${yCoordinate}`;
    const isPlayable = Object.keys(possibleMoves).includes(positionLabel);

    useEffect(() => {
        let newClassName = "";
        if (isWhiteTurn === isWhiteHuman) {
            newClassName = isPlayable ? " playable" : "";
        }
        if (isPassing && !gameState[xCoordinate][yCoordinate]) {
            newClassName = " passing";
        }
        setClassName(newClassName);
    }, [possibleMoves, isPassing]);

    const handleClick = () => {
        placePiece(xCoordinate, yCoordinate);
    };

    return (
        <div className={"game-board-cell" + className} onClick={handleClick}>
            {children}
        </div>
    );
}
