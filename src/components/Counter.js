import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // useSelector hook omogucava da dohvatim state iz reduxa
  // automatski podesava komponentu kao subscribera
  // i na taj nacin obezbedjuje da dobijem najsveziju vrednost state-a
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  // useDispatch hook omogucava pristup dispatch funkciji
  // koja se izvrsava u reduceru u reduxu
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseByNumHandler = () => {
    dispatch({ type: "increasebynum", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseByNumHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
