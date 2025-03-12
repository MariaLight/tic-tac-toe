
import { InformationLayout } from "./InformationLayout";
import { useSelector, useDispatch, connect } from "react-redux";
import { selectIsDraw, selectIsGameEnded, selectCurrentPlayer } from "../../selectors";
import { START_AGAIN } from '../../actions'
import { Component } from "react";

// export const Information = () => {

//     let text = '';

//     if (isDraw === true) {
//         text = 'Ничья';
//     } else if (isGameEnded === true) {
//         text = `Победа: ${currentPlayer}`;
//     } else {
//         text = `Ходит: ${currentPlayer}`;
//     }

//     const startAgain = () => {
//         dispatch(START_AGAIN);
//     }
//     return <InformationLayout text={text} startAgain={startAgain} />;
// }

export class InformationConatiner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <InformationLayout text={this.props.text} startAgain={this.props.startAgain} />;
    }
}

const mapStateToProps = (state) => ({
    isDraw: state.isDraw,
    isGameEnded: state.isGameEnded,
    currentPlayer: state.currentPlayer,
    text: state.text
})

const mapDispatchToProps = (dispatch) => ({
    startAgain: () => dispatch(START_AGAIN)
})
export const Information = connect(mapStateToProps, mapDispatchToProps)(InformationConatiner);