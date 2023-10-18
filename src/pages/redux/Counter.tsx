import { decrement, increment, incrementByAmount } from "../../redux/counter.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const CounterPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>Counter page</div>
      <div>count: {count}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment counter by one
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement counter by one
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          Increment by amount +5
        </button>
      </div>
    </div>
  );
};
