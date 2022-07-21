import React from "react";
import Listtable from "../../components/listtable/Listtable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = ({ type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Listtable type={type} />
      </div>
    </div>
  );
};

export default List;
