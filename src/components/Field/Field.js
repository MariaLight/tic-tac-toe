import { FieldLayout } from "./FieldLayout";
import { connect } from "react-redux";
import { checkAllFieldsFilled, checkIfWinner } from '../../helperFunctions';
import { setField, setIsGameEnded, setIsDraw, setCurrentPlayer } from "../../actions";
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
            } else if (checkAllFieldsFilled(currentField)) {
                this.props.onGameEnded();
                this.props.onDraw();
            }
            else {
                const newCurrentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                this.props.onCurrentPlayerChange(newCurrentPlayer)
            }
        }

    }

    render() { return <FieldLayout makeMove={this.makeMove} />; }
}
const mapStateToProps = (state) => ({
    isGameEnded: state.isGameEnded,
    field: state.field
})
const mapDispatchToProps = (dispatch) => ({
    onGameEnded: () => dispatch(setIsGameEnded(true)),
    onDraw: () => dispatch(setIsDraw(true)),
    onCurrentPlayerChange: (newCurrentPlayer) => dispatch(setCurrentPlayer(newCurrentPlayer)),
    onSetField: (currentField) => dispatch(setField(currentField))
})
export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);