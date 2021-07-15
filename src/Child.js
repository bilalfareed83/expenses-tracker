import react, { useContext, useState } from "react";
import { TransationContext } from "./transationContext";
function Child() {
  const { transations, addTransation } = useContext(TransationContext);
  const [newAmount, setAmount] = useState(0);
  const [newDes, setDes] = useState("");

  const handleAddition = (event) => {
    event.preventDefault();
    if (!newAmount || !newDes) return;
    addTransation({
      amount: newAmount,
      des: newDes,
    });
    return setAmount(0), setDes("");
  };

  const amount = transations.map((item) => Number(item.amount));
  const incomeItem = amount
    .filter((item) => item > 0)
    .reduce((totalItem, cur) => (totalItem += cur), 0);
  const expItem = amount
    .filter((item) => Number(item) < 0)
    .reduce((totalItem, cur) => (totalItem += cur), 0);
  const total = amount.reduce((totalItem, cur) => (totalItem += cur), 0);

  return (
    <div className="container">
      {console.log(incomeItem)}
      <h2 className="text-center">Expenses tracker</h2>
      <h2>
        Your Balance <br /> {total}
      </h2>
      <div className="exp-container">
        <h2>
          Expenses <br /> {expItem}
        </h2>
        <h2>
          Income <br />
          {incomeItem}
        </h2>
      </div>
      <h2>History</h2>
      <hr />
      <ul className="trasation-list">
        {transations.map((obj, index) => {
          const { des, amount } = obj;
          return (
            <li key={index}>
              <span>{des}</span>
              <span>{amount}</span>
            </li>
          );
        })}
      </ul>
      <h2>Add new transation</h2>
      <hr />
      <form className="form-div" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            value={newDes}
            onChange={(ev) => setDes(ev.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="number"
            value={newAmount}
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="Add Transation" />
      </form>
    </div>
  );
}

export default Child;
