import React, { useState } from "react";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), count: 0 }]);
  };

  const increment = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  const removeCounter = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">🧮 Counter List</h1>
      <button
        onClick={addCounter}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        ➕ Add Counter
      </button>

      <div className="w-full max-w-md space-y-4">
        {counters.map((counter) => (
          <div
            key={counter.id}
            className="bg-white shadow p-4 rounded flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrement(counter.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                -
              </button>
              <span className="text-xl font-semibold w-10 text-center">
                {counter.count}
              </span>
              <button
                onClick={() => increment(counter.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeCounter(counter.id)}
              className="text-sm text-gray-500 hover:text-red-500"
            >
              🗑 Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
