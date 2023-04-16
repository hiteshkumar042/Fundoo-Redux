import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes >

        <Route exact path={"/"} element={<AuthRoute><SignIn/></AuthRoute>}/>
        <Route path={"/signup"} element={<AuthRoute><SignUp/></AuthRoute>}/>
        <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router
