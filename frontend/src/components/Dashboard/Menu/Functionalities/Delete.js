import React, { Component } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import "./popup.css";
import { DeleteData } from "../../../../services/RecordAPI";
import { Button } from "@material-ui/core";

class Delete extends Component {
  state = {
    record: this.props.selectedRows[0],
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
      let resp = await DeleteData(this.state.record);
      console.log(resp);
    } catch (err) {
      wait(3000).then(console.log("Error in updating"));
    }
  };
  render() {
    return this.props.deleteData ? (
      ""
    ) : (
      <div className="popup d-flex justify-content-center text-center">
        <div className="popup-inner-edit-data">
          <div className="grid-container-edit-data">
            <h1
              className="grid-rowitem-1"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Delete Records?
            </h1>
            <h3
              className="grid-rowitem-2"
              style={{ color: "white", gridColumnStart: 1, gridColumnEnd: 3 }}
            >
              Are you sure you want to delete selected record[s]?
            </h3>
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
      </div>
    );
  }
}

export default Delete;
