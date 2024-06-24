import { useEffect, useState } from "react";
import "./GamePiece.css";

export default function GamePiece({ piece }) {
    const [className, setClassName] = useState("");

    useEffect(() => {
        if (!piece) {
            setClassName("");
            return;
        }
        if (piece.value) {
            setClassName(" game-piece-white");
        }
        if (!piece.value) {
            setClassName(" game-piece-black");
        }
    }, [piece]);

    return piece ? <div className={"game-piece" + className} /> : <></>;
}
