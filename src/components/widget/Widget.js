import React from "react";
import "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/People";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Widget = ({ type, value, percentage }) => {
  let data = {};

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: <PeopleIcon className="icon" />,
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See All Orders",
        icon: <ContentPasteIcon className="icon" />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See Net Earnings",
        icon: <AttachMoneyIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: <AccountBalanceIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  let percentageClass = { name: "percentage" };

  if (percentage >= 0) {
    percentageClass.name += " positive";
    percentageClass.icon = <ArrowUpwardIcon />;
  } else {
    percentageClass.name += " negative";

    percentageClass.icon = <ArrowDownwardIcon />;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={percentageClass.name}>
          {percentageClass.icon}
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
