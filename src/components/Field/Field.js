import { FieldLayout } from "./FieldLayout";
import { connect } from "react-redux";
import { checkAllFieldsFilled, checkIfWinner } from '../../helperFunctions';
import { setField, setIsGameEnded, setIsDraw, setCurrentPlayer, setText } from "../../actions";
import { Component } from 'react'

export class FieldContainer extends Component {
    constructor(props) {
        super(props);
        this.makeMove = this.makeMove.bind(this)

    }
    makeMove(currentPlayer, index) {
        let currentField = [...this.props.field];
        if (!currentField[index] && !this.props.isGameEnded) {
            currentField[index] = currentPlayer;

            this.props.onSetField(currentField)
            if (checkIfWinner(currentPlayer, currentField)) {
                this.props.onGameEnded();
                this.props.onTextChange(`Победа: ${currentPlayer}`);
            } else if (checkAllFieldsFilled(currentField)) {
                this.props.onGameEnded();
                this.props.onDraw();
                this.props.onTextChange('Ничья');
            }
            else {
                const newCurrentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                this.props.onCurrentPlayerChange(newCurrentPlayer);
                this.props.onTextChange(`Ходит: ${newCurrentPlayer}`);
            }
        }


    }

    render() { return <FieldLayout makeMove={this.makeMove} />; }
}
const mapStateToProps = (state) => ({
    isGameEnded: state.isGameEnded,
    field: state.field,
    text: state.text
})
const mapDispatchToProps = (dispatch) => ({
    onGameEnded: () => dispatch(setIsGameEnded(true)),
    onDraw: () => dispatch(setIsDraw(true)),
    onCurrentPlayerChange: (newCurrentPlayer) => dispatch(setCurrentPlayer(newCurrentPlayer)),
    onSetField: (currentField) => dispatch(setField(currentField)),
    onTextChange: (text) => dispatch(setText(text))
})
export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);