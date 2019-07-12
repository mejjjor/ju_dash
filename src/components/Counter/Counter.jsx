import React from 'react';
import { connect } from 'react-redux'
import { increment } from '../../store/actions/counter'

function Counter({counterValue, increment, valueToIncrement = 1}) {
  return (
    <div className="counter">
      je suis un counter.
      <div>
        ma value = {counterValue}
      </div>
      <button onClick={() => {
        increment({valueToIncrement})
      }}>
      +{valueToIncrement}
      </button>
    </div>
  );
}

export default connect((state) => {
  return {
    counterValue: state.counter.value
  }  
},  {
  increment
})(Counter);
