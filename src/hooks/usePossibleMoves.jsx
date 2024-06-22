import { useState } from "react";
import example from "../assets/possibleMoves.example.json";

export default function usePossibleMoves() {
    const [possibleMoves, setPossibleMoves] = useState(example);

    return possibleMoves;
}
