import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import LoadingButton from '../Shared/LoadingButton';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();


    if(loading || adminLoading){
        return <LoadingButton></LoadingButton>;
      }
    // const navigate = useNavigate();
    if (!user || !admin) {
      signOut(auth);
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default RequireAdmin;