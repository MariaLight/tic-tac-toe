import styles from './app.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import PropTypes from 'prop-types';

export const AppLayout = (props) => {
  return (
    <div className={styles.app}>
      <Field
        isGameEnded={props.isGameEnded}
        isDraw={props.isDraw}
        field={props.field}
        currentPlayer={props.currentPlayer}

        setCurrentPlayer={props.setCurrentPlayer}
        setIsGameEnded={props.setIsGameEnded}
        setIsDraw={props.setIsDraw}
        setField={props.setField}

      />
      <Information
        startAgain={props.startAgain}
        currentPlayer={props.currentPlayer}
        isDraw={props.isDraw}
        isGameEnded={props.isGameEnded} />

    </div>
  );
}

AppLayout.propTypes = {
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  setField: PropTypes.func,
  startAgain: PropTypes.func,
}