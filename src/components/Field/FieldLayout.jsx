import styles from './field.module.css';
import PropTypes from 'prop-types';


export const FieldLayout = ({ field, currentPlayer, makeMove }) => {
    return (
        <div className={styles.field}>
            {field.map((item, index) =>
                <button key={index} onClick={() => makeMove(currentPlayer, index)} className={`${styles.fieldButton} ${item && styles[item]} ${item && styles.disabled}`}>{item}</button>
            )}
        </div >
    );
}

FieldLayout.propTypes = {
  makeMove: PropTypes.func,
  field: PropTypes.array,
  currentPlayer: PropTypes.string,
}