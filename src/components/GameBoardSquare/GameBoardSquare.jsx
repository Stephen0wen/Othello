import { useEffect, useState } from "react";
import "./GameBoardSquare.css";
import usePossibleMoves from "../../hooks/usePossibleMoves";

export default function GameBoardSquare({
    children,
    xCoordinate,
    yCoordinate,
}) {
    const possibleMoves = usePossibleMoves();
    const [className, setClassName] = useState("");

    useEffect(() => {
        const isPlayable = Object.keys(possibleMoves).includes(
            `${xCoordinate}${yCoordinate}`
        );

        const newClassName = isPlayable ? " playable" : "";

        setClassName(newClassName);
    }, [possibleMoves]);

    return <div className={"game-board-cell" + className}>{children}</div>;
}
