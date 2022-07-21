import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total Sales Today</p>
        <p className="amount">$500</p>
        <p className="description">Transactions may be pending.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target (Week)</div>
            <div className="result">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="summaryAmount">$3.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="result positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="summaryAmount">$3.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="summaryAmount">$12.2k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
