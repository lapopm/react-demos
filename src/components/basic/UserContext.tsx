import { createContext } from "react";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";
export const userData = createContext();

const UserContext = () => {
  const name = "KAY LIU";
  return (
    <div>
      <userData.Provider value={name}>
        <UserProfile />
        <UpdateUser />
      </userData.Provider>
    </div>
  );
};

export default UserContext;
