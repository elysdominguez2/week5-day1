import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const [customAmount, setCustomAmount] = useState(0);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  return (
    <div className="App">
      <p> Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>

      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      {/*  */}
      <div>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(deposit(customAmount));
            setCustomAmount(0);
          }}
        >
          Deposit custom amount
        </button>
      </div>
    </div>
  );
}

export default App;
