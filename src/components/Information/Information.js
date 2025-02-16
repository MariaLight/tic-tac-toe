import { store } from "../../store";
import { InformationLayout } from "./InformationLayout";

export const Information = () => {

    let text = '';
    const { isDraw, isGameEnded, currentPlayer } = store.getState();
    if (isDraw === true) {
        text = 'Ничья';
    } else if (isGameEnded === true) {
        text = `Победа: ${currentPlayer}`;
    } else {
        text = `Ходит: ${currentPlayer}`;
    }
    return <InformationLayout text={text} />;
}