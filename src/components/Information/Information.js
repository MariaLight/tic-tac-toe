
import { InformationLayout } from "./InformationLayout";
import {connect } from "react-redux";
import { START_AGAIN } from '../../actions'
import { Component } from "react";

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