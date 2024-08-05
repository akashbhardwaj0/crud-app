import React from 'react'
import "./DetailsCard.css"
import { useSelector } from 'react-redux'


export default function DetailsCard(props) {
  const {id, setShowPopup} = props
  const allusers = useSelector((state)=> state.app.users);
  const singleUser = allusers.find((item) => item.id === id);
  return (
    <div className="modelBackground" >
    <div className="modelContainer">
      <h5 className="card-title">Full Detail</h5>
      <p className="card-text"> Name: {singleUser.name}</p>
      <p className="card-text">Email: {singleUser.email}</p>
      <p className="card-text">Age: {singleUser.age}</p>
      <p className="card-text">Gender: {singleUser.gender}</p>
      <button onClick={()=>{{
            setShowPopup(false)
          }}}className="btn btn-primary">Close</button>
    </div>
    </div>
  )
}
