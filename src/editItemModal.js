import React, { useContext, useState } from "react";
import { Button, Form, Input, Label, Modal } from "semantic-ui-react";
import { TransationContext } from "./transationContext";

export const EditItemModal = (props) => {
  console.log(!props.objItem);
  const [isOpen, setOpen] = useState(props.objItem ? true : false);
  const [des, setDes] = useState();
  const [amount, setAmount] = useState();
  const [id, setId] = useState(!props.objItem);
  const { updateTransation } = useContext(TransationContext);

  const handleEditedForm = (event) => {
    event.preventDefault();
    console.log("update function");
    if (!des || !amount) return;
    updateTransation({
      amount,
      des,
      id: props.objItem.id,
    });
    return setAmount(0), setDes("");
    setId(false);
  };

  return (
      useEffect(() => {
          effect
          return () => {
              cleanup
          }
      }, [id])
    <div>
      <Modal open={id}>
        <Modal.Header>Please Edit Trasation</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleEditedForm}>
            <Form.Input
              type="text"
              value={des}
              onChange={(ev) => setDes(ev.target.value)}
              placeholder="Add Description"
            />
            <Input
              labelPosition="right"
              type="number"
              value={amount}
              onChange={(ev) => setAmount(ev.target.value)}
              placeholder="Amount"
            >
              <Label basic>$</Label>
              <input />
              <Label>.00</Label>
            </Input>
            <br />
            <br />
            <Button animated="fade">
              <Button.Content visible>Edit Transation</Button.Content>
              <Button.Content hidden>${amount} a transation</Button.Content>
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};
