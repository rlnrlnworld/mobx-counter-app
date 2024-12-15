import { observer } from 'mobx-react'
import React, { Component } from 'react'

@observer
export class App extends Component {
  render() {
    const myCounter = this.props.counter;

    return (
      <div style={{ textAlign: 'center', padding: 16 }}>
        Count: {myCounter.count}
        <br /><br />
        Is Negative? {myCounter.isNegative}
        <br /><br />
        <button onClick={() => myCounter.increase()}>+</button>
        <button onClick={() => myCounter.decrease()}>-</button>
      </div>
    )
  }
}

export default App

