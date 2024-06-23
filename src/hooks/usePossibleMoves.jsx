import { useContext, useEffect, useState } from "react";
import example from "../assets/possibleMoves.example.json";
import { GameContext } from "../contexts/GameContext";

export default function usePossibleMoves() {
    const [possibleMoves, setPossibleMoves] = useState(example);
    const { gameState, isWhiteTurn } = useContext(GameContext);

    useEffect(() => {
        const newPossibleMoves = {};
        gameState.forEach((column, xCoordinate) => {
            column.forEach((square, yCoordinate) => {
                if (!square) {
                    const outFlankedPieces = getOutFlankedPieces(
                        xCoordinate,
                        yCoordinate
                    );
                    if (outFlankedPieces) {
                        const label = `${xCoordinate}${yCoordinate}`;
                        newPossibleMoves[label] = {
                            xCoordinate,
                            yCoordinate,
                            outFlankedPieces,
                        };
                    }
                }
            });
        });
        setPossibleMoves(newPossibleMoves);
    }, [gameState]);

    const getOutFlankedPieces = (xCoordinate, yCoordinate) => {
        const outFlanked = [];
        outFlanked.push(...getOutFlankedUp(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedUpRight(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedRight(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedDownRight(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedDown(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedDownLeft(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedLeft(xCoordinate, yCoordinate));
        outFlanked.push(...getOutFlankedUpLeft(xCoordinate, yCoordinate));
        if (!outFlanked.length) return null;
        return outFlanked;
    };

    const getOutFlankedUp = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate;
        let currentY = yCoordinate + 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentY++;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedUpRight = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate + 1;
        let currentY = yCoordinate + 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX++;
                currentY++;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedRight = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate + 1;
        let currentY = yCoordinate;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX++;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedDownRight = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate + 1;
        let currentY = yCoordinate - 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX++;
                currentY--;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedDown = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate;
        let currentY = yCoordinate - 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentY--;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedDownLeft = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate - 1;
        let currentY = yCoordinate - 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX--;
                currentY--;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedLeft = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate - 1;
        let currentY = yCoordinate;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX--;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const getOutFlankedUpLeft = (xCoordinate, yCoordinate) => {
        let currentX = xCoordinate - 1;
        let currentY = yCoordinate + 1;
        let outFlanked = [];

        const checkNextPosition = () => {
            if (!checkIfExists(currentX, currentY)) {
                return [];
            }
            const currentValue = gameState[currentX][currentY];
            if (!currentValue) {
                return [];
            }
            if (currentValue.value !== isWhiteTurn) {
                outFlanked.push({
                    xCoordinate: currentX,
                    yCoordinate: currentY,
                });
                currentX--;
                currentY++;
                return checkNextPosition();
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition();
    };

    const checkIfExists = (xCoordinate, yCoordinate) => {
        if (xCoordinate < 0 || yCoordinate < 0) {
            return false;
        }
        if (xCoordinate > 7 || yCoordinate > 7) {
            return false;
        }
        return true;
    };

    return possibleMoves;
}
