import { FieldLayout } from "./FieldLayout";
import { store } from "../../store";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const Field = () => {

    const { field, isGameEnded } = store.getState()
    
    const checkIfWinner = (currentPlayer) => {
        let isWinner = false;
        for (let i = 0; i < WIN_PATTERNS.length; i++) {
            isWinner = WIN_PATTERNS[i].every((item) => {
                return field[item] === currentPlayer;
            })
            if (isWinner) {
                return true;
            }
        }
        return false;
    }
    const checkAllFieldsFilled = () => {
        return field.every((item) => {
            return item !== '';
        })
    }

    const makeMove = (currentPlayer, index) => {
        let currentField = field;
        if (!currentField[index] && !isGameEnded) {
            currentField[index] = currentPlayer;
            store.dispatch({ type: 'SET_FIELD', payload: currentField })
            if (checkIfWinner(currentPlayer)) {
                store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
            } else if (checkAllFieldsFilled()) {
                store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true })
                store.dispatch({ type: 'SET_IS_DRAW', payload: true })
            }
            else {
                const newCurrentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: newCurrentPlayer })
            }
        }

    }

    return <FieldLayout makeMove={makeMove} />;
}