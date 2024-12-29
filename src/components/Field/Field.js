import { FieldLayout } from "./FieldLayout";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const Field = (props) => {
    const checkIfWinner = (currentPlayer) => {
        let isWinner = false;
        for (let i = 0; i < WIN_PATTERNS.length; i++) {
            isWinner = WIN_PATTERNS[i].every((item) => {
                return props.field[item] === currentPlayer;
            })
            if (isWinner) {
                return true;
            }
        }
        return false;
    }
    const checkAllFieldsFilled = () => {
        return props.field.every((item) => {
            return item !== '';
        })
    }

    const makeMove = (currentPlayer, index) => {
        let currentField = props.field;
        if (!currentField[index] && !props.isGameEnded) {
            currentField[index] = currentPlayer;
            props.setField(currentField);
            if (checkIfWinner(currentPlayer)) {
                props.setIsGameEnded(true);
            } else if (checkAllFieldsFilled()) {
                props.setIsGameEnded(true);
                props.setIsDraw(true);
            }
            else {
                props.setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
            }
        }

    }
    return <FieldLayout
        field={props.field}
        makeMove={makeMove}
        currentPlayer={props.currentPlayer} />;
} 