import { useState } from "react";
const OPERATION_TYPE = {
  ADD: "add",
  SUB: "sub",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
};
export const UndoableCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [undo, setUndo] = useState([]);
  function handleUndo() {
    const [latest, ...earlier] = history;
    setCount(latest.previousValue);
    setUndo([latest, ...undo]);
    setHistory(earlier);
  }
  function handleRedo() {
    const [latest, ...earlier] = undo;
    setCount(latest.newValue);
    setUndo(earlier);
    setHistory([latest, ...history]);
  }
  function handleReset() {
    setCount(0);
    setHistory([]);
    setUndo([]);
  }

  function performOperation(operationType) {
    if (operationType == OPERATION_TYPE.ADD) {
      return count + 1;
    } else if (operationType == OPERATION_TYPE.SUB) {
      return count - 1;
    } else if (operationType == OPERATION_TYPE.DIVIDE) {
      return count / 2;
    } else if (operationType == OPERATION_TYPE.MULTIPLY) {
      return count * 2;
    }
    return count;
  }

  // counter functions
  function handleIncrement() {
    const oldCount = count;
    const newCount = performOperation(OPERATION_TYPE.ADD);
    setCount(newCount);
    setHistory([
      {
        operation: "+",
        previousValue: oldCount,
        newValue: newCount,
      },
      ...history,
    ]);
    setUndo([]);
  }

  function handleDecrement() {
    const oldCount = count;
    const newCount = performOperation(OPERATION_TYPE.SUB);
    setCount(newCount);
    setHistory([
      {
        operation: "-",
        previousValue: oldCount,
        newValue: newCount,
      },
      ...history,
    ]);
    setUndo([]);
  }

  function handleDivide() {
    const oldCount = count;
    const newCount = performOperation(OPERATION_TYPE.DIVIDE);
    setCount(newCount);
    setHistory([
      {
        operation: "/2",
        previousValue: oldCount,
        newValue: newCount,
      },
      ...history,
    ]);
    setUndo([]);
  }

  function handleMultiply() {
    const oldCount = count;
    const newCount = performOperation(OPERATION_TYPE.MULTIPLY);
    setCount(newCount);
    setHistory([
      {
        operation: "x2",
        previousValue: oldCount,
        newValue: newCount,
      },
      ...history,
    ]);
    setUndo([]);
  }
  return (
    <>
      <button
        className="action-btn"
        onClick={handleUndo}
        disabled={history.length == 0}
      >
        Undo
      </button>
      <button
        className="action-btn"
        onClick={handleRedo}
        disabled={undo.length == 0}
      >
        Redo
      </button>
      <button className="action-btn" onClick={handleReset}>
        Reset
      </button>
      <br />

      <div className="counterContainer">
        <button onClick={handleDivide}>/2</button>
        <button onClick={handleIncrement}>+1</button>
        <h3>{count}</h3>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleMultiply}>x2</button>
      </div>

      {history.length > 0 && (
        <div className="historyTable">
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Previous value</th>
                <th>Current value</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ operation, previousValue, newValue }, index) => (
                <tr key={index}>
                  <td>{operation}</td>
                  <td>{previousValue}</td>
                  <td>{newValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
