import React, { useState } from 'react';
import Header from './components/Header'
import Cat from './components/Cat'
import Footer from './components/Footer'
import LandingPage from './components/Main Pages/LandingPage'
import ItemView from './components/ItemViewComponents/ItemView'
import CatagoryView from './components/Main Pages/CatagoryView'
import PostYourAdd from './components/Main Pages/PostYourAdd'
import AddDetails from './components/AddDetails'
import Congo from './components/Main Pages/Congo'
import Login from "./components/Main Pages/Login";
import { Route, Switch } from 'react-router-dom';
import LoginContext from './Context/LoginContext';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const login = useState({
    isLoggedIn: false,
    id: "",
    name: "",
    email: ""
  });

  function handdleClick() {
    setIsClicked(true);
  }
  function remove() {
    setIsClicked(false);
  }

  return (
    <div id="container" className="appClass">
      <LoginContext.Provider value={login}>
        <Header onChecked={handdleClick} />
        <Login cls={isClicked} onUnChecked={remove} />
        <Cat />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/itemView" component={ItemView} />
          <Route exact path="/CatagoryView=>:c" component={CatagoryView} />
          <Route exact path="/PostYourAdd" component={PostYourAdd} />
          <Route exact path="/PostYourAdd=>:cat" component={AddDetails} />
          <Route exact path="/Congo" component={Congo} />
        </Switch>
        <Footer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
