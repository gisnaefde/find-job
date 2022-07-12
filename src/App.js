import './App.css';
import React from 'react';
import Landing from './Page/Landing';
import Login from './Page/Login';
import Register from './Page/Register';
import ChangePassword from './Page/ChangePassword';
import Sidebar from './Layout/Dashboard/Sidebar';
import ListJobTable from './Components/ListJobTable';
import Formjob from './Components/FormJob';

function App() {
  return (
    <div>
      <Formjob/>
    </div>

  );
}

export default App;
