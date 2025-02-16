import styles from './field.module.css';
import { store } from "../../store";


export const FieldLayout = ({ makeMove }) => {
    const { field, currentPlayer } = store.getState();

    return (
        <div className={styles.field}>
            {field.map((item, index) =>
                <button key={index} onClick={() => makeMove(currentPlayer, index)} className={`${styles.fieldButton} ${item && styles[item]} ${item && styles.disabled}`}>{item}</button>
            )}
        </div >
    );
}
