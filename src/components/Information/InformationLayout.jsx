import styles from './information.module.css'

export const InformationLayout = (props) => {
    return (
        <div className={styles.info}>
            <p>{props.text}</p>
            {props.showBtn &&
                <button className={styles.button} onClick={props.startAgain}>Начать сначала</button>}
        </div>
    );
}