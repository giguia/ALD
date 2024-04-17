import React from 'react'
import { Link } from "react-router-dom"


// Function to shorten ObjectId
const objectIdToShortId = (objectId) => {
  const hexString = objectId.toString();
  return hexString.substring(16, 26);
}

const UserLists = ({ userlg }) => {
  
 
    return (
      <div className="user-body">
      <table border={0} cellSpacing={0}>
      <tbody>
      <tr>
        <td className="ID">{objectIdToShortId(userlg._id)}</td> {/* Display the ObjectId */}
        <td className="Name">{userlg.name}</td>
        <td className="Type">{userlg.role}</td>
        <td className="Phone">{userlg.number}</td>
        <td className="City">{userlg.birthday}</td>
        <td className="Email">{userlg.emailaddress}</td>
        <td className="Email">{userlg.homeaddress}</td>

        {/* <td className="actionButtons">
          <Link to={`/useredit/${userlg._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
          
        </td> */}
      </tr>
    </tbody>
  </table>
  </div>
    )
  }
  
  export default UserLists

     



  