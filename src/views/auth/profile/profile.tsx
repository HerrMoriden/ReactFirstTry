import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function Profile() {
  const auth = useAuth();
  const history = useHistory();
  const logout = async () => {
    if (auth?.currentUser) {
      history.push('/');
      await auth?.logout();
    } else {
      alert('How da heck did u do this ...');
    }
  };

  return (
    <>
      <p>Profile works</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Profile;
