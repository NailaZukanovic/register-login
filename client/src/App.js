import React from "react"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import {BrowserRouter,Route} from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import store from "./store"
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <>
      <NavBar />
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Home} />
    </>
    </BrowserRouter>
    </Provider>
  );

}

export default App;
