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
import LocationAndSearchContext from './Context/LocationAndSearchContext';
import MyAdds from './components/Main Pages/MyAdds';
import { PageNotFound } from './components/Main Pages/PageNotFound';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const locationAndSearch = useState({ location: "Pakistan", search: "" });
  const list = useState({
    itemList: [],
    isLoading: true
  });
  const setList = list[1];

  const loggedInUser = localStorage.getItem("user");
  const login = useState(loggedInUser ? JSON.parse(loggedInUser) : {
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
      const response = await fetch("https://rentall-project.herokuapp.com/categories");
      const data = await response.json();
      if (data.status !== 400) {        
        setList({
          itemList: data.items,
          isLoading: false
        });
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  return (
    <div id="container" className="appClass">
      <LoginContext.Provider value={login}>
        <LocationAndSearchContext.Provider value={locationAndSearch}>
          <Header onChecked={handdleClick} />
        </LocationAndSearchContext.Provider>
        <Login cls={isClicked} onUnChecked={remove} />
        <Cat />
        <ItemListContext.Provider value={list}>
          <Switch>
            <Route exact path="/">
              <LocationAndSearchContext.Provider value={locationAndSearch}>
                <LandingPage />
              </LocationAndSearchContext.Provider>
            </Route>
            <Route exact path="/itemview=>:itemId" component={ItemView} />
            <Route exact path="/categoryview=>:category">
              <LocationAndSearchContext.Provider value={locationAndSearch}>
                <CatagoryView />
              </LocationAndSearchContext.Provider>
            </Route>
            <Route exact path="/postyourad" component={PostYourAdd} />
            <Route exact path="/postyourad=>:category" component={AddDetails} />
            <Route exact path="/myad" component={MyAdds} />
            <Route exact path="/congo=>:itemId" component={Congo} />
            <Route component={PageNotFound} />
          </Switch>
        </ItemListContext.Provider>
      </LoginContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
