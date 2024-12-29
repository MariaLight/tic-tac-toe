import { useState } from 'react';
import './app.module.css';
import { AppLayout } from './AppLayout';


function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(
    [
      '', '', '',
      '', '', '',
      '', '', '',
    ]
  );

  const startAgain = () => {
    setCurrentPlayer('x');
    setIsGameEnded(false);
    setIsDraw(false);
    setField([
      '', '', '',
      '', '', '',
      '', '', '',
    ])
  }

  return (
    <>
      <AppLayout
        currentPlayer={currentPlayer}
        field={field}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        
        setCurrentPlayer={setCurrentPlayer}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        setField={setField}

        startAgain={startAgain}
      />
    </>
  );
}

export default App;
