import React, { useContext, useState } from "react";
import { userData } from "./UserContext";

const UpdateUser = () => {
  const userName = useContext(userData);
  const [uName, setUName] = useState(userName);
  return (
    <div>
      ====
      <p>{uName}</p>
      <button onClick={() => setUName("Kay Liu")}>Update User</button>
    </div>
  );
};

export default UpdateUser;
 