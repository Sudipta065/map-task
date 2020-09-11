import React, { useState } from "react";
import Modal from "react-modal";
import "./style/App.css";
const ModalForm = (props) => {
  Modal.setAppElement("#root");

  const [username, setUsername] = useState("");

  const closeModal = () => {
    props.setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = `Name :${username}`;

    const UserCoordinate = `Latitude : ${props.latitude},Longitude : ${props.longitude}`;
    console.log(name, UserCoordinate);

    props.setIsOpen(false);

    setUsername("");
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className="d-flex flex-column modal-form">
          <button
            className="close-btn justify-content-end"
            onClick={closeModal}
          >
            &times;
          </button>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="current-coordinate">Current Coordinates</label>
              <input
                type="text"
                className="form-control"
                id="current-coordinate"
                placeholder=""
                defaultValue={`${props.latitude},${props.longitude}`}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default ModalForm;
