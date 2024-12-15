import { observer } from 'mobx-react';
import './App.css';
import { useContext } from 'react';
import { CounterContext, useCounterStore } from './context/counterContext';

const App = observer(() => {
  const myCounter = useCounterStore();

  return (
    <div className="App" style={{ textAlign: 'center', padding: 16 }}>
      Count: {myCounter.count}
      <br /><br />
      is Negative? {myCounter.isNegative}
      <br /><br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
})

export default App;
