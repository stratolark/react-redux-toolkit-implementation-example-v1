import React from 'react';

export default function Counter({
  counterName,
  counterData,
  increment,
  decrement,
  reset,
  lowerLimit,
  upperLimit,
}) {
  return (
    <div className="counter-container">
      <button
        type="button"
        onClick={decrement}
        disabled={counterData <= lowerLimit}>
        - (decrement)
      </button>
      <span>{counterName}</span>
      <span>{counterData}</span>
      <button
        type="button"
        onClick={increment}
        disabled={counterData >= upperLimit}>
        + (increment)
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
}
