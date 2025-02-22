import { FieldLayout } from "./FieldLayout";
import { selectField, selectIsGameEnded } from "../../selectors";
import { useDispatch, useSelector } from "react-redux";
import { checkAllFieldsFilled, checkIfWinner } from '../../helperFunctions';
import { setField, setIsGameEnded, setIsDraw, setCurrentPlayer } from "../../actions";

export const Field = () => {

    const isGameEnded = useSelector(selectIsGameEnded);
    const field = useSelector(selectField);
    const dispatch = useDispatch();



    const makeMove = (currentPlayer, index) => {
        let currentField = [...field];
        if (!currentField[index] && !isGameEnded) {
            currentField[index] = currentPlayer;

            dispatch(setField(currentField))
            if (checkIfWinner(currentPlayer, currentField)) {
                dispatch(setIsGameEnded(true))
            } else if (checkAllFieldsFilled(currentField)) {
                dispatch(setIsGameEnded(true))
                dispatch(setIsDraw(true))
            }
            else {
                const newCurrentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                dispatch(setCurrentPlayer(newCurrentPlayer))
            }
        }

    }

    return <FieldLayout makeMove={makeMove} />;
}