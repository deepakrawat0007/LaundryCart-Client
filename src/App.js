import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componants/login-registertion/login/login';
import Registration from './componants/login-registertion/registeration/registeration';
import OrderMain from './componants/order/mainOrderDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/order' element={<OrderMain/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
