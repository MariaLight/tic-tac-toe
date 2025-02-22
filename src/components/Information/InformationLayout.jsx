import styles from './information.module.css';
import { selectIsGameEnded } from '../../selectors';
import { useSelector } from "react-redux";


export const InformationLayout = (props) => {
    const isGameEnded = useSelector(selectIsGameEnded);


    return (
        <div className={styles.info}>
            <p>{props.text}</p>
            {isGameEnded &&
                <button className={styles.button} onClick={props.startAgain}>Начать сначала</button>}
        </div>
    );
}
