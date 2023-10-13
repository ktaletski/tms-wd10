import { type FC, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";

import { store, useAppDispatch, useAppSelector } from "./store";
import { increment } from "./store/counter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const Counter: FC = () => {
  // state
  const [value, setValue] = useState(0);

  // action
  const increment = () => {
    setValue((prev) => ++prev);
  };

  // view
  return (
    <h1>
      Count: {value} <button onClick={increment}>increment</button>
    </h1>
  );
};

/**
 * То, как могла бы выглядеть простейшая реализация хука useSelector()
 * в react-redux
 *
 * 1. Забираем объект-стор из контекста - он будет неизменным
 * 2. Подписываемся на изменения кусочка глобального состояни через селектор
 * 3. Когда кусочек глобального состояни меняется, стор вызовет setValue и
 *    перерендерит компонент
 */
// const useAppSelector = (selector: (state: AppState) => unknown) => {
//   const appStoreContext = useContext(ReduxContext);
//   const [value, setValue] = useState(selector(appStoreContext.getState()));

//   useEffect(() => {
//     appStoreContext.subscribe({
//       selector,
//       update: setValue,
//     })
//   }, [])

//   return value;
// }

const CounterRedux: FC = () => {
  const dispatch = useAppDispatch();

  // state
  const value = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(
      // action
      increment(),
    );
  };

  // view
  return (
    <h1>
      Redux Count: {value} <button onClick={handleIncrement}>increment</button>
    </h1>
  );
};

root.render(
  <Provider store={store}>
    <Counter />
    <CounterRedux />
  </Provider>,
);
