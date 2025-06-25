import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (num: number) => {
    dispatch(increment(num));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex gap-10 items-center mx-auto w-96 py-20">
      <button
        onClick={() => handleIncrement(1)}
        className="px-4 py-2 border-2 border-green-500 rounded-xl"
      >
        Increment
      </button>
      <button
        onClick={() => handleIncrement(5)}
        className="px-10 py-2 border-2 border-green-500 rounded-xl"
      >
        Increment By 5
      </button>
      <div className="text-2xl text-red-500 font-bold">{count}</div>
      <button
        onClick={handleDecrement}
        className="px-4 py-2 border-2 border-green-500 rounded-xl"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
