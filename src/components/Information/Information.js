
import { InformationLayout } from "./InformationLayout";
import { useSelector, useDispatch } from "react-redux";
import { selectIsDraw, selectIsGameEnded, selectCurrentPlayer } from "../../selectors";
import { START_AGAIN } from '../../actions'

export const Information = () => {

    let text = '';
    const dispatch = useDispatch();
    const isDraw = useSelector(selectIsDraw);
    const isGameEnded = useSelector(selectIsGameEnded);
    const currentPlayer = useSelector(selectCurrentPlayer);

    if (isDraw === true) {
        text = 'Ничья';
    } else if (isGameEnded === true) {
        text = `Победа: ${currentPlayer}`;
    } else {
        text = `Ходит: ${currentPlayer}`;
    }

    const startAgain = () => {
        dispatch(START_AGAIN);
    }
    return <InformationLayout text={text} startAgain={startAgain} />;
}