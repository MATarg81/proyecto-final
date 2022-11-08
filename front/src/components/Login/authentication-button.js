import React, { useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
//import EditButton from './EditButton'
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../../redux/actionsCreator/usersActions";
//import ListOfUsers from '../ListOfUsers';

const AuthenticationButton = () => {
  const stateUser = useSelector((state) => state.usersReducer.users);
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_users()); //eslint-disable-next-line
  }, []);

  const findUser = user ? stateUser.find((u) => u.email === user.email) : null;

  return findUser ? (
    <div>
      <LogoutButton />
    </div>
  ) : (
    <LoginButton />
  );
};

export default AuthenticationButton;
