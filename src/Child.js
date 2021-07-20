import react, { useContext, useState } from "react";
import {
  Divider,
  Grid,
  Header,
  Segment,
  Icon,
  Statistic,
} from "semantic-ui-react";
import { EditItemModal } from "./editItemModal";
import { FormCOmponant } from "./FormComponant";
import { TransationContext } from "./transationContext";

function Child() {
  const { transations, addTransation, updateTransation, delTransation } =
    useContext(TransationContext);
  const [newAmount, setAmount] = useState(0);
  const [newDes, setDes] = useState("");
  const [editItne, setEditItem] = useState(true);
  const [editItemId, setEditItemId] = useState(null);
  const [objItem, setObjItem] = useState({});

  const handleAddition = (event) => {
    event.preventDefault();
    if (!newAmount || !newDes) return;

    if (editItne === false) {
      updateTransation({
        amount: newAmount,
        des: newDes,
        id: editItemId,
      });
      return setAmount(0), setDes(""), setEditItem(true);
    }

    addTransation({
      amount: newAmount,
      des: newDes,
    });
    return setAmount(0);
    setDes("");
    setEditItem(true);
  };

  const editFun = (obj) => {
    // setEditItem(false);
    // setAmount(obj.amount);
    // setDes(obj.des);
    // setEditItemId(obj.id);
    setObjItem(obj);
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
      {/* {console.log(incomeItem)} */}
      <h2 className="text-center">Expenses tracker</h2>
      <Statistic color="grey">
        <Statistic.Value>{total}</Statistic.Value>
        <Statistic.Label>Balance</Statistic.Label>
      </Statistic>
      <div className="exp-container">
        <Statistic color="red">
          <Statistic.Value>{expItem}</Statistic.Value>
          <Statistic.Label>Expenses</Statistic.Label>
        </Statistic>
        <Statistic color="green">
          <Statistic.Value>{incomeItem}</Statistic.Value>
          <Statistic.Label>Income</Statistic.Label>
        </Statistic>
      </div>
      <Header as="h3">History</Header>
      <Divider />
      <ul className="trasation-list">
        {transations.map((obj) => {
          const { des, amount, id } = obj;
          return (
            <Segment secondary>
              <Grid key={id}>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Header as="h3">{des.toUpperCase()}</Header>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header
                      as="h3"
                      color={Number(amount) > 0 ? "green" : "red"}
                    >
                      ${amount}
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon
                      color="blue"
                      name="edit outline"
                      size="large"
                      onClick={() => editFun(obj)}
                    />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon
                      color="red"
                      name="delete"
                      size="large"
                      onClick={() => delTransation(obj)}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          );
        })}
      </ul>
      <Header as="h3">Add new transation</Header>
      <Divider />

      <FormCOmponant objItem={objItem} />
      <EditItemModal objItem={objItem} />
    </div>
  );
}

export default Child;
