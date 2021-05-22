import React, { useContext, useState, useEffect } from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import Button from '@material-ui/core/Button';
import { NavLink, Link, Redirect } from 'react-router-dom';
import LoginContext from '../Context/LoginContext';
import LocationAndSearchContext from '../Context/LocationAndSearchContext';
//importing logo image
import Logo from '../images/logo.jpg';

function Header(props) {
  const [login, setLogin] = useContext(LoginContext);
  const [{ location, search }, setLocationAndSearch] = useContext(LocationAndSearchContext);
  const [loginDrop, setloginDrop] = useState("isVisible");
  const [inputSearch, setInputSearch] = useState("");

  function drop() {
    if (loginDrop === "isVisible") {
      setloginDrop("");
    }
    else {
      setloginDrop("isVisible");
    }
  }
  function dropOut(e) {
    if (e.target.id === "1" && loginDrop === "isVisible") {
      setloginDrop("isVisible");
    }
    else if (e.target.id !== "1" && loginDrop === "") {
      setloginDrop("isVisible");
    }
  }
  function logout(e) {
    dropOut(e);
    setLogin({
      isLoggedIn: false,
      id: "",
      name: "",
      email: "",
    });
    localStorage.removeItem("user");
  }

  function updateLocation({ currentTarget: { innerText } }) {
    setLocationAndSearch({
      location: innerText,
      search
    });
  }

  function updateText({ target: { value } }) {
    setInputSearch(value);
  }

  function submitSearch(event) {
    event.preventDefault();
    setLocationAndSearch({
      location,
      search: inputSearch.toLowerCase()
    });
  }

  useEffect(() => {
    setInputSearch(search);
  }, [search]);

  return (
    <div className="header">
      <div className="insideHeader">
        <div className="headerContent">
          <NavLink to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </NavLink>

          <div className="input-group mb-3 locationBox ">
            <input type="text" className="form-control" value={location} aria-label="Text input with segmented dropdown button " disabled />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <span onClick={updateLocation} className="dropdown-item pointer">Pakistan</span>
                <div role="separator" className="dropdown-divider"></div>
                <span onClick={updateLocation} className="dropdown-item pointer">Punjab</span>
                <span onClick={updateLocation} className="dropdown-item pointer">Sindh</span>
                <span onClick={updateLocation} className="dropdown-item pointer">Balochistan</span>
                <span onClick={updateLocation} className="dropdown-item pointer">KPK</span>
                <span onClick={updateLocation} className="dropdown-item pointer">Gilgit</span>
              </div>
            </div>
          </div>

          <form onSubmit={submitSearch} className="input-group mb-3 searchBar ">
            <input onChange={updateText} type="text" value={inputSearch} className="form-control" placeholder="Find Cars, Mobile Phones and more..." aria-label="Text input with segmented dropdown button" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-info">
                <svg width="24px" height="20px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-2h8NR" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
              </button>
            </div>
          </form>

          <div className="loginAndRent">
            {
              login.isLoggedIn ? (
                <span style={{ marginLeft: '25px', width: '90px' }}>
                  <img
                    id="1"
                    onClick={drop}
                    style={{ cursor: "pointer", marginLeft: "15%" }}
                    src={`https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png`}
                    alt="Avatar"
                  />
                </span>
              ) : (
                  <Button
                    variant="contained" color="primary" style={{ marginLeft: '25px', width: '90px' }}
                    onClick={props.onChecked}>
                    Login
                  </Button>
                )
            }
            <OutsideClickHandler id="2" onOutsideClick={dropOut}>
              <div className={"loginOptionsDiv " + loginDrop}>
                <div className="loginProfileDiv">
                  <figure style={{
                    width: "56px",
                    height: "56px",
                    backgroundImage: login.isLoggedIn ? `url(https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png)` : "",
                    flex: "0 0 56px",
                    backgroundPosition: "50%",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    margin: "0",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                  </figure>
                  <div className="profileName">
                    <div className="profileMsg">Hello,</div>
                    <div className="ProfileName">{login.name}</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(0, 47, 52, .2)' }}>
                  <Link onClick={dropOut} to={"/myAdd"} className="myAdsDiv" style={{ textDecoration: 'none' }}>
                    <div style={{ padding: '2px 16px 0 0' }}>
                      <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"></path></svg>
                      <span style={{ paddingLeft: '15px' }} >My Ads</span>
                    </div>
                  </Link>
                  <Link onClick={logout} to={"/"} className="myAdsDiv" style={{ textDecoration: 'none', borderTop: '1px solid rgba(0, 47, 52, .2)' }}>
                    <div style={{ padding: '2px 16px 0 0' }}>
                      <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                      <span style={{ paddingLeft: '15px' }}>Logout</span>
                    </div>
                  </Link>
                </div>
              </div>
            </OutsideClickHandler>
          </div>

          <div className="loginAndRent" style={{ position: 'relative' }}>
            <NavLink to={login.isLoggedIn && "/PostYourAdd"} style={{ width: '90px' }}>
              <Button variant="contained" color="primary" onClick={!login.isLoggedIn && props.onChecked} style={{ marginTop: '0', width: '100%' }}>
                Rent
            </Button>
            </NavLink>
          </div>

        </div>
      </div>
      {search !== "" && <Redirect to={"/CatagoryView=>" + search} />}
    </div>
  );
}

export default Header;