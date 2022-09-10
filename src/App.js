import './App.css';
import React from 'react';
import Landing from './Page/Landing';
import Login from './Page/auth/Login';
import Register from './Page/auth/Register';
import ChangePassword from './Page/auth/ChangePassword';
import Sidebar from './Layout/Dashboard/Sidebar';
import ListJobTable from './Components/ListJobTable';
import Formjob from './Components/FormJob';
import Routers from './routes/Routes';

function App() {
  return (
    <div>
      <Routers/>
    </div>

  );
}

export default App;
