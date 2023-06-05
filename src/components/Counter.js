import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/central-store";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
