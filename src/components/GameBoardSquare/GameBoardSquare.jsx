import { useEffect, useState } from "react";
import "./GameBoardSquare.css";
import usePossibleMoves from "../../hooks/usePossibleMoves";
import usePlacePiece from "../../hooks/usePlacePiece";

export default function GameBoardSquare({
    children,
    xCoordinate,
    yCoordinate,
}) {
    const possibleMoves = usePossibleMoves();
    const placePiece = usePlacePiece();
    const [className, setClassName] = useState("");

    const positionLabel = `${xCoordinate}${yCoordinate}`;
    const isPlayable = Object.keys(possibleMoves).includes(positionLabel);

    useEffect(() => {
        const newClassName = isPlayable ? " playable" : "";
        setClassName(newClassName);
    }, [possibleMoves]);

    const handleClick = () => {
        placePiece(xCoordinate, yCoordinate);
    };

    return (
        <div className={"game-board-cell" + className} onClick={handleClick}>
            {children}
        </div>
    );
}
