import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";
import DetailsCard from "./DetailsCard";

export default function Read() {
  const [id, setId] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const { users, loading, searchData, searchDataByGender } = useSelector(
    (state) => state.app
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <div>
        {showPopup ? (
          <DetailsCard
            id={id}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        ) : null}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users
              .filter((item) => {
                if (searchData.length === 0) {
                  return item;
                } else {
                  return item.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                }
              })
              .filter((e) => {
                if (searchDataByGender === 0 || searchDataByGender === "") {
                  return e;
                } else {
                  return (
                    e.gender.toLowerCase() === searchDataByGender.toLowerCase()
                  );
                }
              })
              .map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => [setShowPopup(!showPopup), setId(d.id)]}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => navigate(`/update/${d.id}`)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deleteUser(d.id));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}