import { AppLayout } from './AppLayout';
import { store } from './store';
import { useState, useEffect } from 'react';


function App() {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(
      () => setState(store.getState())
    )
  }, []);

  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
