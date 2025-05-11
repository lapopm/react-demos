import React, { useContext } from "react";
import { userData } from "./UserContext";

const UserProfile = () => {
  const userName = useContext(userData);
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
};

export default UserProfile;
