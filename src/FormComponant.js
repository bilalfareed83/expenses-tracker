import React, { useState, useContext } from "react";
import { Button, Form, Input, Label, Modal } from "semantic-ui-react";
import { TransationContext } from "./transationContext";

export const FormCOmponant = (props) => {
  console.log(props, "select ob");
  const [open, setOpen] = useState();
  const [amount, setAmount] = useState();
  const [des, setDes] = useState("");
  const { addTransation } = useContext(TransationContext);
  const [editAmount, setEditAmount] = useState("");
  const [editDes, setEditDes] = useState("");

  const handelForm = () => {
    console.log("handleForm function");
    if (!amount || !des) return;
    addTransation({
      amount,
      des,
    });
    setAmount();
    setDes("");
  };

  return (
    <div>
      <Form onSubmit={handelForm}>
        <Form.Input
          //   label="Enter Description"
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

        <Button animated="fade">
          <Button.Content visible>Add Transation</Button.Content>
          <Button.Content hidden>${amount} a transation</Button.Content>
        </Button>
      </Form>

      {/* Create Modat for Edit Item */}
      <Modal open={open}>
        <Modal.Header>Please Edit Trasation</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handelForm}>
            <Form.Input
              //   label="Enter Description"
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
