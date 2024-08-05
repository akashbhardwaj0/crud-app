import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";

export default function UpdateData() {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({});
  const { id } = useParams();
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const singleUser = allusers.find((item) => item.id === id);
      setUpdateData(singleUser);
    }
  }, [id, allusers]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <h2>Update Data</h2>
          <label htmlFor="emapleInputName" className="form-label">
            Name
          </label>
          <input
            value={updateData && updateData.name}
            onChange={newData}
            type="text"
            name="name"
            className="form-control"
            id="emapleInputName"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={updateData && updateData.email}
            onChange={newData}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            value={updateData && updateData.age}
            onChange={newData}
            type="number"
            name="age"
            className="form-control"
            id="exampleInputAge"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputGender" className="form-label">
            Gender
          </label>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={updateData && updateData.gender === "Male"}
              onChange={newData}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={updateData && updateData.gender === "Female"}
              onChange={newData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
