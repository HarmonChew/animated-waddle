import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/datatable/DataTable";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="users" percentage="20" value="2022" />
          <Widget type="orders" percentage="-5" value="15462" />
          <Widget type="earnings" percentage="7" value="85283" />
          <Widget type="balance" percentage="-10" value="142303" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Revenue (Last 6 months)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
