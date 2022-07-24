import React, { useState } from "react";
import "./listtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";

const Listtable = ({ type, rows, columns }) => {
  const [data, setData] = useState(rows);

  const handleDelete = (rowId) => {
    setData((prevData) => prevData.filter((item) => item.id !== rowId));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const location = useLocation();
  const link = location.pathname + "/new";
  return (
    <div style={{ height: 600, width: "100%" }} className="listtable">
      <div className="title">
        {type}s
        <Link to={link} className="link">
          <div className="button">Add New {type}</div>
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Listtable;
