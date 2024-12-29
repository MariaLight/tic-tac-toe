import styles from './app.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';


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
