import React, { useContext } from "react";
import "./index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./components/style/dark.scss";

import { Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./components/forminputs";
import {
  userRows,
  productRows,
  userColumns,
  productColumns,
} from "./listtabledata";
import {
  homeRows,
  homeColumns,
  singleRows,
  singleColumns,
} from "./components/dataTableInputs";

import { DarkModeContext } from "./context/darkModeContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Home rows={homeRows} columns={homeColumns} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route
              index
              element={
                <List
                  type="User"
                  rows={userRows}
                  columns={userColumns}
                  key={window.location.pathname}
                />
              }
            />
            <Route
              path=":userId"
              element={<Single rows={singleRows} columns={singleColumns} />}
            />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <List
                  type="Product"
                  rows={productRows}
                  columns={productColumns}
                />
              }
            />
            <Route
              path=":productId"
              element={<Single rows={singleRows} columns={singleColumns} />}
            />
            <Route
              path="new"
              key="products"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
