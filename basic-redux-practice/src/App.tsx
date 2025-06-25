function App() {
  return (
    <div className="flex gap-10 items-center mx-auto w-96 py-20">
      <button className="px-4 py-2 border-2 border-green-500 rounded-xl">
        Increment
      </button>
      <div className="text-2xl text-red-500 font-bold">0</div>
      <button className="px-4 py-2 border-2 border-green-500 rounded-xl">
        Decrement
      </button>
    </div>
  );
}

export default App;
