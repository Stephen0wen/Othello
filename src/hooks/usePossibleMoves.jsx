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
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, upFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, upRightFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, rightFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, downRightFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, downFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, downLeftFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, leftFunc)
        );
        outFlanked.push(
            ...getOutFlankedDirection(xCoordinate, yCoordinate, upLeftFunc)
        );
        if (!outFlanked.length) return null;
        return outFlanked;
    };

    const getOutFlankedDirection = (
        xCoordinate,
        yCoordinate,
        directionFunc
    ) => {
        const { nextX, nextY } = directionFunc(xCoordinate, yCoordinate);
        const outFlanked = [];

        const checkNextPosition = (currentX, currentY) => {
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
                const { nextX, nextY } = directionFunc(currentX, currentY);
                return checkNextPosition(nextX, nextY);
            }
            if (currentValue.value === isWhiteTurn) {
                return outFlanked;
            }
        };

        return checkNextPosition(nextX, nextY);
    };

    const upFunc = (currentX, currentY) => {
        const nextY = currentY + 1;
        const nextX = currentX;
        return { nextX, nextY };
    };

    const upRightFunc = (currentX, currentY) => {
        const nextY = currentY + 1;
        const nextX = currentX + 1;
        return { nextX, nextY };
    };

    const rightFunc = (currentX, currentY) => {
        const nextY = currentY;
        const nextX = currentX + 1;
        return { nextX, nextY };
    };

    const downRightFunc = (currentX, currentY) => {
        const nextY = currentY - 1;
        const nextX = currentX + 1;
        return { nextX, nextY };
    };

    const downFunc = (currentX, currentY) => {
        const nextY = currentY - 1;
        const nextX = currentX;
        return { nextX, nextY };
    };

    const downLeftFunc = (currentX, currentY) => {
        const nextY = currentY - 1;
        const nextX = currentX - 1;
        return { nextX, nextY };
    };

    const leftFunc = (currentX, currentY) => {
        const nextY = currentY;
        const nextX = currentX - 1;
        return { nextX, nextY };
    };

    const upLeftFunc = (currentX, currentY) => {
        const nextY = currentY + 1;
        const nextX = currentX - 1;
        return { nextX, nextY };
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
