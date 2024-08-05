import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  const [users, setUsers] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2>Create Operation</h2>
          <label htmlFor="emapleInputName" className="form-label">
            Name
          </label>
          <input
            onChange={getUserData}
            type="text"
            name="name"
            className="form-control"
            id="emapleInputName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={getUserData}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            onChange={getUserData}
            type="number"
            name="age"
            className="form-control"
            id="exampleInputAge"
          />
        </div>
        <div>
          <label htmlFor="exampleInputGender" className="form-label">
            Gender
          </label>
          <div>
            <input
              className="form-check-input"
              type="radio"
              value="Male"
              name="gender"
              onChange={getUserData}
            />
            <label className="form-check-label">Male</label>

            <input
              className="form-check-input"
              type="radio"
              value="Female"
              name="gender"
              onChange={getUserData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
