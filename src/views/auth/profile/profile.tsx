import { useAuth } from '../../../contexts/AuthContext';

function Profile() {
  const auth = useAuth();
  const logout = async () => {
      await auth?.logout();
  }

  return (
    <>
      <p>Profile works</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Profile;
