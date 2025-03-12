import styles from './field.module.css';
import {connect } from 'react-redux'
import { Component } from 'react'

export class FieldLayoutContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.field}>
                {this.props.field.map((item, index) =>
                    <button key={index} onClick={() => this.props.makeMove(this.props.currentPlayer, index)} className={`${styles.fieldButton} ${item && styles[item]} ${item && styles.disabled}`}>{item}</button>
                )}
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    field: state.field
})
export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
