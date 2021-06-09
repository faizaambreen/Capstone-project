import React, { useContext, useState, useEffect } from 'react';
import OutsideClickHandler from "react-outside-click-handler";
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
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={Logo} className="logo" alt="Logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav" style={{ marginLeft: '5%' }}  >
                  <li className="nav-item dropdown" style={{ marginRight: '5%' }}>
                    <div className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {location}
                    </div>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>Pakistan</div></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>Punjab</div></li>
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>Sindh</div></li>
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>Balochistan</div></li>
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>KPK</div></li>
                      <li><div className="dropdown-item" style={{cursor:"pointer"}} onClick={updateLocation}>Gilgit</div></li>
                    </ul>
                  </li>
                  <li ClassName="nav-item" style={{ marginRight: '5%' }}>
                    <form onSubmit={submitSearch} className="d-flex">
                      <input onChange={updateText} style={{ width: '425px' }} type="text" value={inputSearch} class="form-control me-2" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
                      <button type="submit" className="btn btn-outline-dark" style={{ width: '90px' }}>Search</button>
                    </form>
                  </li>
                  <li className="nav-item" style={{ marginRight: '5%' }}>
                    <div className="">
                      {
                        login.isLoggedIn ? (
                          <span style={{ marginLeft: '25px', width: '90px' }}>
                            <img
                              id="1"
                              onClick={drop}
                              style={{ cursor: "pointer", marginRight: '70px' }}
                              src={`https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png`}
                            />
                          </span>
                        ) : (
                            <button type="button" className="btn btn-dark" style={{ width: '150px' }} onClick={props.onChecked}>Login</button>
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
                            <Link onClick={dropOut} to={"/myad"} className="myAdsDiv" style={{ textDecoration: 'none' }}>
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
                  </li>
                  <li className="nav-item" style={{ marginRight: '' }}>
                    <div className="" style={{ position: 'relative' }}>
                      <Link to={login.isLoggedIn && "/postyourad"} >
                        <button type="button" className="btn btn-secondary " style={{ width: '150px' }} onClick={!login.isLoggedIn && props.onChecked}>Rent</button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {search !== "" && <Redirect to={"/categoryview=>" + search} />}
    </div>
  );
}

export default Header;






      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container-fluid">
      //     <a className="navbar-brand" href="/">
      //       <img src={Logo} className="logo" alt="Logo" />
      //     </a>

      //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //         <span className="navbar-toggler-icon"></span>
      //       </button>


      //     <div className="collapse navbar-collapse" style={{marginLeft:'auto'}} id="navbarSupportedContent">
      //       <ul className="navbar-nav" style={{marginLeft:'auto'}}>


      //         <li className="nav-item"><a href="#" className="nav-link">hell1</a></li>
      //         <li className="nav-item"><a href="#" className="nav-link">hell2</a></li>
      //         <li className="nav-item"><a href="#" className="nav-link">hell3</a></li>
      //         <li className="nav-item"><a href="#" className="nav-link">hell4</a></li>

      //         <li className="nav-item dropdown">
      //           <div className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      //             {location}
      //           </div>
      //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      //             <li><div className="dropdown-item" onClick={updateLocation}>Pakistan</div></li>
      //             <li><hr class="dropdown-divider"/></li>
      //             <li><div className="dropdown-item" onClick={updateLocation}>Punjab</div></li>
      //             <li><div className="dropdown-item" onClick={updateLocation}>Sindh</div></li>
      //             <li><div className="dropdown-item" onClick={updateLocation}>Balochistan</div></li>
      //             <li><div className="dropdown-item" onClick={updateLocation}>KPK</div></li>
      //             <li><div className="dropdown-item" onClick={updateLocation}>Gilgit</div></li>
      //           </ul>
      //         </li>


      //         <li ClassName="nav-item">
      //           <form onSubmit={submitSearch} className="d-flex">
      //             <input onChange={updateText} style={{width:'325px'}} type="text" value={inputSearch} class="form-control me-2" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search"/>
      //               <Button type="submit" variant="contained" color="primary">
      //                  Search
      //               </Button>
      //           </form>
      //         </li>


      //         <li className="nav-item">
      //         <div className="">
      //           {
      //             login.isLoggedIn ? (
      //               <span style={{ marginLeft: '25px', width: '90px' }}>
      //                 <img
      //                   id="1"
      //                   onClick={ drop }
      //                   style={{ cursor:"pointer", marginLeft:"15%"}}
      //                   src={`https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png`}
      //                 />
      //               </span>
      //             ) : (
      //                 <Button
      //                   variant="contained" color="primary"
      //                   onClick={props.onChecked}>
      //                   Login
      //                 </Button>
      //               )
      //           }
      //           <OutsideClickHandler id="2" onOutsideClick={dropOut}>
      //             <div className={"loginOptionsDiv " + loginDrop}>
      //               <div className="loginProfileDiv">
      //                 <figure style={{
      //                   width: "56px",
      //                   height: "56px",
      //                   backgroundImage: login.isLoggedIn ? `url(https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png)` : "",
      //                   flex: "0 0 56px",
      //                   backgroundPosition: "50%",
      //                   backgroundSize: "cover",
      //                   borderRadius: "50%",
      //                   margin: "0",
      //                   position: "relative",
      //                   overflow: "hidden",
      //                 }}>
      //                 </figure>
      //                 <div className="profileName">
      //                   <div className="profileMsg">Hello,</div>
      //                   <div className="ProfileName">{login.name}</div>
      //                 </div>
      //               </div>
      //               <div style={{ borderTop: '1px solid rgba(0, 47, 52, .2)' }}>
      //                 <Link onClick={dropOut} to={"/myAdd"} className="myAdsDiv" style={{ textDecoration: 'none' }}>
      //                   <div style={{ padding: '2px 16px 0 0' }}>
      //                     <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"></path></svg>
      //                     <span style={{ paddingLeft: '15px' }} >My Ads</span>
      //                   </div>
      //                 </Link>
      //                 <Link onClick={logout} to={"/"} className="myAdsDiv" style={{ textDecoration: 'none', borderTop: '1px solid rgba(0, 47, 52, .2)' }}>
      //                   <div style={{ padding: '2px 16px 0 0' }}>
      //                     <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
      //                     <span style={{ paddingLeft: '15px' }}>Logout</span>
      //                   </div>
      //                 </Link>
      //               </div>
      //             </div>
      //           </OutsideClickHandler>
      //         </div>
      //         </li>


      //         <li className="nav-item">
      //           <div className="" style={{ position: 'relative' }}>
      //             <NavLink to={login.isLoggedIn && "/PostYourAdd"} style={{ width: '90px' }}>
      //               <Button variant="contained" color="primary" onClick={!login.isLoggedIn && props.onChecked} style={{ marginTop: '0'}}>
      //                 Rent
      //             </Button>
      //             </NavLink>
      //           </div>
      //         </li>

      //       </ul>  
      //     </div>
      //   </div>
      // </nav>

