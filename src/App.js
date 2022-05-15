import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import UserAuthenticationContext from './Context/UserAuthenticationContext';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div className="App">
      <UserAuthenticationContext>
        <PublicRoutes />
      </UserAuthenticationContext>
    </div>
  );
}

export default App;
