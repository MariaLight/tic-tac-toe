import { InformationLayout } from "./InformationLayout";
import PropTypes from 'prop-types';


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

Information.propTypes = {
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  currentPlayer: PropTypes.string,
  startAgain: PropTypes.func,
}