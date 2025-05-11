interface UserStatusProps {
  loggedIn: boolean;
  isAdmin: boolean;
}

const UserStatus = ({ loggedIn, isAdmin }: UserStatusProps) => {
  return (
    <div>
     {loggedIn && isAdmin ? <p>Welcome Admin</p> : loggedIn ? <p>Welcome User</p> : <p>Please Log In</p>}
    </div>
  );
};

export default UserStatus;
