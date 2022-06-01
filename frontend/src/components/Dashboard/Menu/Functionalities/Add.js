import React, { Component } from "react";
import "./popup.css";
import TextField from "@mui/material/TextField";
import { wait } from "@testing-library/user-event/dist/utils";
import { postData } from "../../../../services/RecordAPI";
import { Button, Typography } from "@material-ui/core";
import Grid from '@mui/material/Grid';

export default class Add extends Component {
  
  state = {
    record: {
      business_code: undefined,
      cust_number: undefined,
      clear_date: undefined,
      business_year: undefined,
      doc_id: undefined,
      posting_date: undefined,
      document_create_date: undefined,
      due_in_date: undefined,
      invoice_currency: undefined,
      document_type: undefined,
      posting_id: undefined,
      total_open_amount: undefined,
      baseline_create_date: undefined,
      cust_payment_terms: undefined,
      invoice_id: undefined,
    },
  };

  fieldValueChange = (e, newValue) => {
    e.persist();
    const newRecord = this.state.record;
    newRecord[e.target.name] = e.target.value;
    this.setState({ record: newRecord });
  };
  submitPopup = async () => {
    console.log(this.state.record);

    for (const [key, val] of Object.entries(this.state.record)) {
      if (key !== "clear_date" && (val === "" || val === undefined)) {
        wait(3000).then(
          console.log("The required field " + key + " is missing")
        );

        return;
      } else {
        console.log(key + "correct");
      }
    }

    try {
      let resp = await postData(this.state.record);
      console.log(resp);
    } catch (err) {
      wait(3000).then(console.log("Error in updating"));
    }
  };
  render() {
    return this.props.trigger ? (
      <div className="popup d-flex justify-content-center">
        <div className="popup-inner" >
          <Typography color="white" variant="h4" align="center" style={{margin:'20px'}}>
            Add Data
          </Typography>
          <Grid className="d-flex justify-content-center" container spacing={2}>

            <TextField
              name="business_code"
              color="primary"
              className="mx-2 my-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="BusinessCode"
              onChange={this.fieldValueChange}/>

            <TextField
              name="cust_number"
              color="primary"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="CustomerNumber"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="clear_date"
              color="primary"
              type="date"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="ClearDate"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="business_year"
              color="primary"
              type="number"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="BusinessYear"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="doc_id"
              color="primary"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="DocumentID"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="posting_date"
              color="primary"
              type="date"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="PostingDate"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="document_create_date"
              color="primary"
              type="date"
              className="mx-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Document Create Date"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="due_in_date"
              color="primary"
              type="date"
              className="mx-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Due Date"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="invoice_currency"
              color="primary"
              type="text"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice Currency"
              onChange={this.fieldValueChange}
            ></TextField>

            <TextField
              name="document_type"
              color="primary"
              type="text"
              className="mx-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Document Type"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="posting_id"
              color="primary"
              type="number"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Posting ID"
              onChange={this.fieldValueChange}
            />

            <TextField
              name="total_open_amount"
              color="primary"
              type="number"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Total Open Amount"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="baseline_create_date"
              color="primary"
              type="date"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="Baseline Create Date"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="cust_payment_terms"
              color="primary"
              type="text"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Customer Payment Terms"
              onChange={this.fieldValueChange}
            />
            <TextField
              name="invoice_id"
              color="primary"
              type="number"
              className="m-2 rounded"
              variant="filled"
              sx={{ input: { backgroundColor: "white" } }}
              label="Invoice Id"
              onChange={this.fieldValueChange}
            />
           
          </Grid>

          <div class="text-center">
            <Button style={{marginRight:'20px'}}
              variant="contained" color="primary" align="center" 
              onClick={this.submitPopup}>
                Submit
            </Button>
            <Button style={{marginLeft:'20px'}}
              variant="contained" color="primary" align="center" 
              onClick={this.props.handler}>
                Close
            </Button>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}