import styles from './field.module.css';
import { selectCurrentPlayer, selectField } from '../../selectors';
import { useSelector } from 'react-redux'


export const FieldLayout = ({ makeMove }) => {

    const currentPlayer = useSelector(selectCurrentPlayer);
    const field = useSelector(selectField);


    return (
        <div className={styles.field}>
            {field.map((item, index) =>
                <button key={index} onClick={() => makeMove(currentPlayer, index)} className={`${styles.fieldButton} ${item && styles[item]} ${item && styles.disabled}`}>{item}</button>
            )}
        </div >
    );
}
