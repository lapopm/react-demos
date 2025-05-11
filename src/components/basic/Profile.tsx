import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Kay Liu",
    age: 25,
  });

  const updateHandler = () => {
    setProfile({ ...profile, age: 26 });
  };
  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>age: {profile.age}</p>
      <button onClick={updateHandler}>Update Profile</button>
    </div>
  );
};

export default Profile;
 