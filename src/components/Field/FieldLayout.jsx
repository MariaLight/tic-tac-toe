import styles from './field.module.css'

export const FieldLayout = ({ field, currentPlayer, makeMove }) => {
    return (
        <div className={styles.field}>
            {field.map((item, index) =>
                <button key={index} onClick={() => makeMove(currentPlayer, index)} className={`${styles.fieldButton} ${item && styles[item]} ${item && styles.disabled}`}>{item}</button>
            )}
        </div >
    );
}