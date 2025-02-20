import styles from './information.module.css';
import { store } from '../../store'

export const InformationLayout = (props) => {
    const { isGameEnded } = store.getState();

    
    return (
        <div className={styles.info}>
            <p>{props.text}</p>
            {isGameEnded &&
                <button className={styles.button} onClick={props.startAgain}>Начать сначала</button>}
        </div>
    );
}
