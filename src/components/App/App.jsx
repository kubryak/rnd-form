import './App.css';
import Login from '../Login/Login';
import { fetchData } from '../../utils/api'
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoading(true)
    fetchData()
      .then(data => {
        setTimeout(() => {
          setIsLoading(false)
          navigate('main')
        }, 0)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Login handleLogin={handleLogin} isLoading={isLoading} />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
