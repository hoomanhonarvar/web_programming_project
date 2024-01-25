import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import  SignUpDesktop from "./Pages/SignUpDesktop/SignUpDesktop";
import SignInDesktop from "./Pages/SignInDesktop/SignInDesktop";
import './App.css'
import ForgetPass from "./Pages/ForgetPassword/ForgetPass"
import HomePage from "./Pages/HomePage/HomePage";
import Favourite from "./Pages/Favourite/Favourite"
import Orders from "./Pages/Orders/Orders"
import Setting from "./Pages/Settings/Settings"
import SildeBar from "./components/SildeBar/SildeBar";
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import LinkPage from "./Pages/Tmp/LinkPage";
import Unauthorized from "./components/UnAuthorized/UnAuthorized";
import PersistLogin from "./components/PresistLogin/PersistLogin";



import FastDelivery from "./Pages/FastDelivery/fastDelivery";
import Popular from "./Pages/Popular/popular";
import Restaurant from "./Pages/Restaurant/Restaurant";
import setNewPass from "./Pages/SetNewPass/SetNewPass";
const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <>
    <SildeBar/>
    <Routes>
        <Route path="fastDelivery" element={ <FastDelivery/> } />
        <Route path="popular" element={ <Popular/> } />
        <Route path="restaurant" element={ <Restaurant/> } />
        <Route path="setNewpass" element={ <setNewPass/> } />
        <Route path="setting" element={ <Setting/> } />
        <Route path="fav" element={ <Favourite/> } />
        <Route path="order" element={ <Orders/> } />

        <Route path="/" element={<Layout />}>
          {/* publi url */}
        <Route path="Login" element={ <SignInDesktop/> } />
        <Route path="sign-up" element={ <SignUpDesktop/> } />
        <Route path="forgetpass" element={ <ForgetPass/> } />
        <Route path="/" element={ <HomePage/> } />
        <Route path="unauthorized" element={<Unauthorized />} />


        
        {/* private url */}
        <Route element={<PersistLogin />}>

        <Route element={<RequireAuth allowedRoles={[ROLES.User,ROLES.Admin,ROLES.Editor]}/>} >

        

        </Route>
        </Route>
        </Route>
        {/* catch all */}


      </Routes>
      </>
  );
}

export default App;
