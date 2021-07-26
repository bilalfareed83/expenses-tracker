import react, { useContext, useState } from "react";
import {
  Divider,
  Grid,
  Header,
  Segment,
  Icon,
  Statistic,
  Modal,
  Button,
  Label,
  Form,
  Input,
} from "semantic-ui-react";
import { FormCOmponant } from "./FormComponant";
import { TransationContext } from "./transationContext";

function Child() {
  const { transations, updateTransation, delTransation } =
    useContext(TransationContext);
  const [newAmount, setAmount] = useState(0);
  const [newDes, setDes] = useState("");
  const [editItemId, setEditItemId] = useState();
  const [editTransationStatus, setStatus] = useState(false);
  const [objItem, setObjItem] = useState({});

  const handleEditedForm = (event) => {
    event.preventDefault();
    if (!newAmount || !newDes) return;

    updateTransation({
      amount: newAmount,
      des: newDes,
      id: editItemId,
    });
    return setAmount(0), setDes(""), setStatus(false);
  };

  const editFun = (obj) => {
    setStatus(true);
    setEditItemId(obj.id);
    setAmount(obj.amount);
    setDes(obj.des);
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

      {/*<------------------- Create Modal for Edit Item --------------------------->*/}
      <div>
        <Modal open={editTransationStatus}>
          <Modal.Header>Please Edit Trasation</Modal.Header>
          <Modal.Content>
            <Form onSubmit={handleEditedForm}>
              <Form.Input
                type="text"
                value={newDes}
                onChange={(ev) => setDes(ev.target.value)}
                placeholder="Add Description"
              />
              <Input
                labelPosition="right"
                type="number"
                value={newAmount}
                onChange={(ev) => setAmount(ev.target.value)}
                placeholder="Amount"
              >
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Input>

              <Button animated="fade">
                <Button.Content visible>Edit Transation</Button.Content>
                <Button.Content hidden>
                  ${newAmount} a transation
                </Button.Content>
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default Child;
