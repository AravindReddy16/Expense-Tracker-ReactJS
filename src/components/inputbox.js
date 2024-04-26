import React, { useState } from "react";
import { AmountAvailable } from "./amountavaliable";
import { IncomeStatus, ExpenseStatus } from "./amountstatus";
import { History } from "./history";

export default function InputBox() {
  let [total, setTotal] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  let [history, setHistory] = useState([]);
  let [value, setValue] = useState(0);

  function handleValue(e) {
    if (e.target.value >= 0) {
      setValue(Number(e.target.value));
    }
  }

  function AmountDeposit() {
    if (value > 0) {
      setIncome((prev) => prev + value);
      setTotal((prev) => prev + value);
      setValue(0);
      setHistory([
        ...history,
        { name: `+ Deposited: $${value}`, type: "deposit" },
      ]);
    }
  }

  function AmountWithdraw() {
    if (total > 0 && value <= total && value > 0) {
      setExpense((prev) => prev + value);
      setTotal((prev) => prev - value);
      setValue(0);
      setHistory([
        ...history,
        { name: `- WithDrawed: $${value}`, type: "withdraw" },
      ]);
    }
  }

  return (
    <div className="box">
      <div className="header">
        <p>Expense Tracker</p>
      </div>
      <AmountAvailable amount={total} />
      <div className="moneystatus">
        <IncomeStatus amount={income} />
        <ExpenseStatus amount={expense} />
      </div>
      <div className="history-header">
        <p>History</p>
      </div>
      <History history={history} />
      <div className="inputbox">
        <input type="text" onChange={handleValue} value={value} />
      </div>
      <div className="btns">
        <button onClick={AmountDeposit} id="dpt">Deposit</button>
        <button onClick={AmountWithdraw} id="wd">WithDraw</button>
      </div>
    </div>
  );
}
