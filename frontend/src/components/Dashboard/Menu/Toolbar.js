import React, { Component } from "react";
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  overrides: {
    Button:
    {
      label:
      {
        color:'white'
      }
    }
    },
 
});
class Toolbar extends Component {
  state = {
    searchValue: "",
  };
  
  render() {
    return (
      <div className="m-4"
        style={{
          display:'flex',
        }}
      >
       
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button variant="contained" onChange={this.props.predictHandler}>Predict</Button>
        <Button onChange={this.props.analyticsHandler}>Analytics View</Button>
        <Button onChange={this.props.advanceSearchHandler}>Advance Search</Button>
        <Button onChange={this.props.refreshHandler}>&#8635;</Button>
      </ButtonGroup>       
        <div style={{
          marginLeft:'180px',
          marginRight:'180px',
          display:'block'
        }}>
          <form onSubmit={this.props.submitHandler}>
            <TextField type="text"
            className="bg-light text-dark rounded"
                name="name"
                placeholder="Search Customer ID"
                onChange={this.props.searchHandler}
                label="Search Invoice"  />
            <Button className="m-2" variant="outlined" type="submit">Search</Button>
          </form>
        </div>

        <div  style={{
         alignItems:'flex-end',
          display:'flex',
        }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button  variant="outlined"
            onClick={this.props.addDataHandler}
          >
            Add
          </Button>
          <Button  variant="outlined"
            disabled={this.props.selectedRows.length === 1 ? "" : "true"}
            onClick={this.props.editDataHander}
          >
            Edit
          </Button>
          <Button  variant="outlined"
            disabled={this.props.selectedRows.length === 1 ? "" : "true"}
            onClick={this.props.deleteDataHandler}
          >
            Delete
          </Button>
        </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Toolbar;