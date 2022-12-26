import React, { useState } from "react";
// import { useEffect } from "react";
import Toolbar from "./Toolbar";
import Add from "./Functionalities/Add";
// import { keys } from "../../../services/Data";
// import { getData } from "../../../services/RecordAPI";
import Edit from "./Functionalities/Edit";
import Delete from "./Functionalities/Delete";
import Table from "../Table/Table";

const initialState = {

  selectRow: [],

  predict: "",
  analysis: "",
  advanceSearch: "",
  refresh: [],
  search: "",
  
  data: true,
  add: false,
  edit: false,
  delete: false,
};

export default function Menu() {

  const [selectedRows, setSelectedRow] = useState(initialState.selectRow);

  const [predictValue, setPredictVal] = useState(initialState.predict);
  const [analyseValue, setAnalyseVal] = useState(initialState.analysis);
  const [AdvanceSearchValue, setAdvanceSearchVal] = useState(initialState.advanceSearch);
  // const [refreshValue, setRefreshVal] = useState(initialState.refresh);

  // const [searchValue, setSearchVal] = useState(initialState.search);

  // const [mainDataState, setMainDataState] = useState(initialState.data);
  const mainDataState = initialState.data;
  const [addDataState, setAddDataState] = useState(initialState.add);
  const [editDataState, setEditDataState] = useState(initialState.edit);
  const [deleteDataState, setDeleteDataState] = useState(initialState.delete);

  const handlePredict = (e) => {
    console.log(e.target.value);
    setPredictVal(!predictValue);
  };

  const handleAnalytics = (e) => {
    console.log(e.target.value);
    setAnalyseVal(!analyseValue);
  };

  const handleAdvanceSearch = (e) => {
    console.log(e.target.value);
    setAdvanceSearchVal(!AdvanceSearchValue);
  };

  const handleRefresh = (e) => {

    console.log(e.target.value);

    // setRefreshVal(!refreshValue);

  //   useEffect( async () => {
  //     let response = await axios.get("http://localhost:8080/Backend/");
  // }, [e]);

  // useEffect(async () => {
  //   // setData(await getData());
  //   setRefreshVal(await getData());
  // }, [e]);

  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchValue: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Submitted");
  };

  const handleAddData = () => {
    setAddDataState(!addDataState);
    console.log("addData state changed", addDataState);
  };

  const handleEditData = () => {
    setEditDataState(!editDataState);
    console.log("Edit Data state changed", editDataState);
  };

  const handleDeleteData = () => {
    setDeleteDataState(!deleteDataState);
    console.log("Delete Data State", deleteDataState);
  };
  return (
    <React.Fragment>
      <div style={{ position: "sticky", top: 0, overflow: "hidden" }}>
        <Toolbar
          selectedRows={selectedRows}
          searchHandler={handleSearchInput}
          submitHandler={handleSubmit}
          addDataHandler={handleAddData}
          editDataHander={handleEditData}
          deleteDataHandler={handleDeleteData}
          predictHandler={handlePredict}
          analyticsHandler={handleAnalytics}
          advanceSearchHandler={handleAdvanceSearch}
          refreshHandler={handleRefresh}
        />
      </div>

      <main className="container" style={{ overflow: "scroll" }}>
        {mainDataState && (
          <Table selectedRows={selectedRows} selectRow={setSelectedRow} />
        )}
        {addDataState && (
          <Add trigger={addDataState} handler={handleAddData} />
        )}
        {editDataState && (
          <Edit
            cust_number={selectedRows[0]["cust_number"]}
            selectedRows={selectedRows}
            trigger={editDataState}
            handler={handleEditData}
          />
        )}
        {deleteDataState && (
          <Delete
            selectedRows={selectedRows}
            trigger={deleteDataState}
            handler={handleDeleteData}
          />
        )}
      </main>
    </React.Fragment>
  );
}