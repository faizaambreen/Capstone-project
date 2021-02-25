import React, { useState, useEffect } from 'react';
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
import ItemListContext from './Context/ItemListContext';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState({
    itemList: [],
    isLoading: true
  });

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/categories/:");
      const data = await response.json();
      setList({
        itemList: data,
        isLoading: false
      });
    }
    fetchData();
  }, [1]);

  return (
    <div id="container" className="appClass">
      <LoginContext.Provider value={login}>
        <Header onChecked={handdleClick} />
        <Login cls={isClicked} onUnChecked={remove} />
        <Cat />
        <Switch>
<<<<<<< Updated upstream
          <div>
            <ItemListContext.Provider value={list}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/itemView=>:itemId" component={ItemView} />
              <Route exact path="/CatagoryView=>:category" component={CatagoryView} />
            </ItemListContext.Provider>
            <Route exact path="/PostYourAdd" component={PostYourAdd} />
            <Route exact path="/PostYourAdd=>:cat" component={AddDetails} />
            <Route exact path="/Congo" component={Congo} />
          </div>
=======
          <ItemListContext.Provider value={list}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/itemView=>:itemId" component={ItemView} />
            <Route exact path="/CatagoryView=>:category" component={CatagoryView} />
            <Route exact path="/PostYourAdd" component={PostYourAdd} />
            <Route exact path="/PostYourAdd=>:cat" component={AddDetails} />
            <Route exact path="/Congo" component={Congo} />
          </ItemListContext.Provider>
          
>>>>>>> Stashed changes
        </Switch>
      </LoginContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
