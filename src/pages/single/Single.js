import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import DataTable from "../../components/datatable/DataTable";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="singleTitle">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemName">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+65 98765432</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age: </span>
                  <span className="itemValue">27</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Gender: </span>
                  <span className="itemValue">Female</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Singapore</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">1 Apple Road</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending / Transactions" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="singleTitle">Last Transactions</h1>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
