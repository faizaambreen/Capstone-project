import React, { useState } from 'react';
import Header from './components/Header'
import Cat from './components/Cat'
import Footer from './components/Footer'
import LandingPage from './components/Main Pages/LandingPage'
import ItemView from './components/Main Pages/ItemView'
import CatagoryView from './components/Main Pages/CatagoryView'
import PostYourAdd from './components/Main Pages/PostYourAdd'
import AddDetails from './components/AddDetails'
import Congo from './components/Main Pages/Congo'
import Login from "./components/Main Pages/Login";
import OutsideClickHandler from 'react-outside-click-handler';
import { Route, Switch } from 'react-router-dom';


function App() {
  const[isClicked,setIsClicked]=useState("false");
  function handdleClick(){
    setIsClicked("true");
  }
  function outHandle(){
    alert("clicked");
  }
  return (
    <div id ="container" className="appClass">
      <Header onChecked={handdleClick}/>
      <Cat/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/itemView" component={ItemView}/>
        <Route exact path="/catagoryView" component={CatagoryView}/>
        <Route exact path="/PostYourAdd" component={PostYourAdd} />
        <Route exact path="/AddDetails" component={AddDetails} />
        <Route exact path="/Congo" component={Congo} />
        <Route/>
      </Switch>
      <Footer/>
      <OutsideClickHandler OutsideClickHandler={outHandle}>
      <Login cls={isClicked}/>
      </OutsideClickHandler>
      
      
      
     </div>
  );
}

export default App;
