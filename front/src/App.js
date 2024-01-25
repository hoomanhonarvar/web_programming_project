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
import RequireAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import LinkPage from "./Pages/Tmp/LinkPage";
import Unauthorized from "./components/UnAuthorized/UnAuthorized";
import PersistLogin from "./components/PresistLogin/PersistLogin";
import UpdatePersonalInfo from "./components/Cards/UpdatePersonalInfo/UpdatePersonalInfo";

import SetNewPass from "./Pages/SetNewPass/SetNewPass";

import FastDelivery from "./Pages/FastDelivery/fastDelivery";
import Popular from "./Pages/Popular/popular";
import Restaurant from "./Pages/Restaurant/Restaurant";
const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    
    <Routes>
        
        

        <Route path="/" element={<Layout />}>
          {/* publi url */}
          <Route path="linkpage" element={ <LinkPage/> } />
        <Route path="Login" element={ <SignInDesktop/> } />
        <Route path="sign-up" element={ <SignUpDesktop/> } />
        <Route path="forgetpass" element={ <ForgetPass/> } />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="restaurant" element={ <Restaurant/> } />
        <Route path="fastDelivery" element={ <FastDelivery/> } />
        <Route path="popular" element={ <Popular/> } />



        
        {/* private url */}
        <Route element={<PersistLogin />}>

        <Route element={<RequireAuth allowedRoles={[ROLES.User,ROLES.Admin,ROLES.Editor]}/>} >
        <Route path="/" element={ <HomePage/> } />

        <Route path="settings" element={ <Setting/> } />
        <Route path="favourite" element={ <Favourite/> } />
        <Route path="orders" element={ <Orders/> } />
        <Route path="setNewpass" element={ <SetNewPass/> } />
        <Route path="updateInfo" element={ <UpdatePersonalInfo/> } />



        

        </Route>
        </Route>
        </Route>
        {/* catch all */}


      </Routes>
  );
}

export default App;
