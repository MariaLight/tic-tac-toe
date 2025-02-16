import styles from './information.module.css';
import { store } from '../../store'
import { initialField } from '../../reducer'

export const InformationLayout = (props) => {
    const { isGameEnded } = store.getState();

    const startAgain = () => {
        store.dispatch({ type: 'START_AGAIN' });
        store.dispatch({ type: 'SET_FIELD', payload: initialField }); //если убрать - не срабатывает, в START_AGAIN заменяется всё, кроме field
    }
    return (
        <div className={styles.info}>
            <p>{props.text}</p>
            {isGameEnded &&
                <button className={styles.button} onClick={startAgain}>Начать сначала</button>}
        </div>
    );
}
