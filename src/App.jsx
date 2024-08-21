import styles from './App.module.css';
import Display from './component/display';
import Buttons from './component/Button';
import { useState } from 'react';
function App() {
  const [calVal, setCalVal] = useState("");
  
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      // Clear the display
      setCalVal("");
    } else if (buttonText === "=") {
      // Implement the logic to evaluate the expression
      try {
        setCalVal(eval(calVal).toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      // Update the display with the button text
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calVal} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
