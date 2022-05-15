import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div className="App">
      <PublicRoutes />
    </div>
  );
}

export default App;
