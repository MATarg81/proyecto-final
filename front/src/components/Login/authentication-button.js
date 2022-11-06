import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import EditButton from './EditButton'
import { useAuth0 } from '@auth0/auth0-react';
import SignupButton from './SignupButton';
//import ListOfUsers from '../ListOfUsers';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ?
    <div>
      <LogoutButton />
    </div> :
    <LoginButton />;

};

export default AuthenticationButton;