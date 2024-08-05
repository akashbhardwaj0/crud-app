import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser, searchUserByGender } from "../features/userDetailsSlice";

export default function Navbar() {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filterByGender, setFilterByGender] = useState("");

  useEffect(() => {
    dispatch(searchUser(search));
  }, [dispatch, search]);
  useEffect(() => {
    dispatch(searchUserByGender(filterByGender));
  }, [dispatch, filterByGender]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
          <Link to className="navbar-brand" href="#">
            CurdApp
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link" href="#">
                  All Post {allusers.length}
                </Link>
              </li>
            </ul>

            <input
              style={{ width: "50%" }}
              className="form-control mr-sm-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                className="form-check-input"
                type="radio"
                value=""
                name="gender"
                checked={filterByGender === ""}
                onChange={(e) => setFilterByGender(e.target.value)}
              />
              <label className="form-check-label">All </label>

              <input
                className="form-check-input "
                type="radio"
                value="Male"
                name="gender"
                checked={filterByGender === "Male"}
                onChange={(e) => setFilterByGender(e.target.value)}
              />
              <label className="form-check-label">Male</label>

              <input
                className="form-check-input "
                type="radio"
                value="Female"
                name="gender"
                checked={filterByGender === "Female"}
                onChange={(e) => setFilterByGender(e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
