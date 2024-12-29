import { InformationLayout } from "./InformationLayout"

export const Information = (props) => {
    let text = '';
    if (props.isDraw === true) {
        text = 'Ничья';
    } else if (props.isGameEnded === true) {
        text = `Победа: ${props.currentPlayer}`;
    } else {
        text = `Ходит: ${props.currentPlayer}`;
    }
    return <InformationLayout startAgain={props.startAgain} text={text} showBtn={props.isGameEnded} />;
} 