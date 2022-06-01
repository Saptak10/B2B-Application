import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./popup.css";
import { wait } from "@testing-library/user-event/dist/utils";
import { EditData } from "../../../../services/RecordAPI";
import { Button, Typography } from "@material-ui/core";

class Edit extends Component {
  state = {
    record: this.props.selectedRows[0],
  };
  render() {
    console.log("Edit Data invoked", this.props.trigger);
    console.log(this.state.record);
    return !this.props.trigger ? (
      ""
    ) : (
      <div className="popup d-flex justify-content-center text-center">
        <div className="popup-inner-edit-data">
          <div className="grid-container-edit-data">
            <h1 className="grid-rowitem-1"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Edit for {this.state.record["cust_number"]}
            </h1>
            <div className="my-2">
              <TextField
                name="invoice_currency"
                color="primary"
                type="text"
                className="grid-colitem-1 grid-rowitem-2 mx-2 rounded"
                variant="filled"
                sx={{ input: { backgroundColor: "white" } }}
                label="Invoice Currency"
                value={this.state.record["invoice_currency"]}
                onChange={this.fieldValueChange}
              ></TextField>
              <TextField
                name="cust_payment_terms"
                color="primary"
                type="text"
                className="grid-colitem-2 grid-rowitem-2 mx-2 rounded"
                variant="filled"
                sx={{ input: { backgroundColor: "white" } }}
                label="Customer Payment Terms"
                value={this.state.record["cust_payment_terms"]}
                onChange={this.fieldValueChange}
              />
            </div>
            <div class="text-center d-flex flex-row justify-content-center">
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
      </div>
    );
  }
  fieldValueChange = (e, newValue) => {
    const newRecord = this.state.record;
    newRecord[e.target.name] = e.target.value;
    this.setState({ record: newRecord });
  };

  submitPopup = async () => {
    console.log(this.props.selectedRows.length);
    console.log(this.state.record);
    for (const [key, val] of Object.entries(this.state.record)) {
      if (
        key !== "clear_date" &&
        key !== "area_business" &&
        (val === "" || val === undefined)
      ) {
        wait(3000).then(
          console.log("The required field " + key + " is missing")
        );

        return;
      } else {
        console.log(key + "correct");
      }
    }

    try {
      let resp = await EditData(this.state.record);
      console.log(resp);
    } catch (err) {
      wait(3000).then(console.log("Error in updating"));
    }
  };
}

export default Edit;
