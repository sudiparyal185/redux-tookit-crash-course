import React from "react";
import CompOne from "./CompOne";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import { useDispatch } from "react-redux";
import { fetchDogsData, reset as resetDogsData } from "./features/dog/dogSlice";
import Image from "./Image";
function App() {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(resetDogsData());
    dispatch(fetchDogsData());
  };
  return (
    <div className='App'>
      <h1>Let's learn Redux Toolkit 🚀</h1>
      <button onClick={() => dispatch(increment())}>Increase Counter</button>
      <button onClick={() => dispatch(decrement())}>Decrease Counter</button>
      <button onClick={() => dispatch(reset())}>Reset Counter</button>
      <button onClick={fetchData}>Fetch Dogs Data </button>
      <CompOne />
      <Image />
    </div>
  );
}

export default App;
