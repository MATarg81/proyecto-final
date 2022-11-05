import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import EditButton from './EditButton'
<<<<<<< HEAD

=======
>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772
import { useAuth0 } from '@auth0/auth0-react';
import SignupButton from './SignupButton';
//import ListOfUsers from '../ListOfUsers';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ?
    <div>
      <LogoutButton />
      <EditButton />
    </div> :
    <LoginButton />;

};

export default AuthenticationButton;