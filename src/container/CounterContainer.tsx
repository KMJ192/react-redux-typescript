import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { decrease, increase, increaseBy } from "../modules/counter";

function CounterContainer(props: any) {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  // const enhance = withState

  const onIncrease = () => {
    // dispatch(increase());
    props.increase();
  };

  const onDecrease = () => {
    // dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default connect(null, {
  increase,
  decrease,
})(CounterContainer);

// export default connect(null, {
//   increase,
//   decrease,
// })(CounterContainer);
