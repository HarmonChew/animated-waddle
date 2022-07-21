import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({ inputs, title }) => {
  const [image, setImage] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" className="imageLabel">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.code}>
                    <label htmlFor={input.id}>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                      required
                    />
                  </div>
                );
              })}

              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
