import react, { useContext, useState } from "react";
import { TransationContext } from "./transationContext";
function Child() {
  const { transations, addTransation } = useContext(TransationContext);
  const [newAmount, setAmount] = useState();
  const [newDes, setDes] = useState("");

  const handleAddition = (event) => {
    event.preventDefault();
    if (!newAmount || !newDes) return;
    addTransation({
      amount: newAmount,
      des: newDes,
    });
    return setAmount(), setDes("");
  };

  return (
    <div className="container">
      <h2 className="text-center">Expenses tracker</h2>
      <h2>
        Your Balance <br /> $200
      </h2>
      <div className="exp-container">
        <h2>
          Expenses <br /> $300
        </h2>
        <h2>
          Income <br />
          200
        </h2>
      </div>
      <h2>History</h2>
      <hr />
      <ul className="trasation-list">
        {transations.map((obj, index) => {
          const { des, amount } = obj;
          return (
            <li key={index}>
              <span>{amount}</span>
              <span>{des}</span>
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
            value={newAmount}
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="number"
            value={newDes}
            onChange={(ev) => setDes(ev.target.value)}
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
