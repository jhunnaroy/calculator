import styles from './button.module.css';

const Buttons = ({ onButtonClick }) => {
    const buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div className={styles.buttonsContainer}>
            {buttonName.map((button, index) => (
                <button key={index} className={styles.button} onClick={() => onButtonClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    );
};

export default Buttons;
