import React from "react";
import {
  BrowserRouter,
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
function App() {
  return (
  <div className="Main" >
    <BrowserRouter>
    {/* <Switch>
      <Route exact path='/sign-in'><SignInDesktop/></Route>
      <Route exact path='/sign-up'><SignUpDesktop/></Route>
      <Route exact path='/forgetPass'><ForgetPass/></Route>
      <Route exact path='/HomePage'><HomePage/></Route>
      <Route exact path='/favourite'><Favourite/></Route>
      <Route exact path='/order'><Orders/></Route>
      <Route exact path='/Setting'><Setting/></Route>

    </Switch> */}
    <Routes>
        <Route path="sign-in" element={ <SignInDesktop/> } />
        <Route path="sign-up" element={ <SignUpDesktop/> } />
        <Route path="order" element={ <Orders/> } />
        <Route path="forgetpass" element={ <ForgetPass/> } />
        <Route path="/" element={ <HomePage/> } />
        <Route path="fav" element={ <Favourite/> } />
        <Route path="setting" element={ <Setting/> } />

      </Routes>
      </BrowserRouter>

  </div>);
}

export default App;
