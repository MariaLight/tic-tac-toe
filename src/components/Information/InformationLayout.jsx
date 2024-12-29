import styles from './information.module.css';
import PropTypes from 'prop-types';


export const InformationLayout = (props) => {
    return (
        <div className={styles.info}>
            <p>{props.text}</p>
            {props.showBtn &&
                <button className={styles.button} onClick={props.startAgain}>Начать сначала</button>}
        </div>
    );
}

InformationLayout.propTypes = {
    text: PropTypes.string,
    showBtn: PropTypes.bool,
    startAgain: PropTypes.func,
}