import React from 'react';
import Counter from '../Counter'

function Statistique() {
  return (
    <div>
      Statistique
      <Counter
        valueToIncrement={4}
      />
    </div>
  );
}

export default Statistique;

