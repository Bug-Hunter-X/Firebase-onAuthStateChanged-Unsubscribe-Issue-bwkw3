import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig'; //Import firebase configuration

const AuthCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return <div>Checking authentication...</div>;
};
export default AuthCheck;