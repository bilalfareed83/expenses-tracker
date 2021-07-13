import react from "react";

function Child() {
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
          400
        </h2>
      </div>
      <h2>History</h2>
      <hr />
      <ul>
        <li className="trasation-list">
          <span>cash</span>
          <span>+300</span>
        </li>
      </ul>
      <h2>Add new transation</h2>
      <hr />
      <form className="form-div">
        <label>
          Enter Description <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input type="number" required />
        </label>
        <br />
        <input type="submit" value="Add Transation" />
      </form>
    </div>
  );
}

export default Child;
