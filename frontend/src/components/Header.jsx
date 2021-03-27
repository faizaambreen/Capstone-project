import React, { useContext,useState } from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import LoginContext from '../Context/LoginContext';

function Header(props) {
  const [login, setLogin] = useContext(LoginContext);  
  const [loginDrop, setloginDrop] = useState("isVisible");

  function drop(){
    if(loginDrop ==="isVisible" ){
      setloginDrop("");
    }
    else{
      setloginDrop("isVisible");
    }
  }
  function dropOut(e){
    if(e.target.id==="1" && loginDrop==="isVisible"){
      setloginDrop("isVisible");
    }
    else if(e.target.id!=="1" && loginDrop===""){
      setloginDrop("isVisible");
    }
  }

  return (
    <div className="header">
      <div className="insideHeader">
        <div className="headerContent">
          <NavLink to="/"><img src="https://th.bing.com/th/id/Re78a38d7debb977c80f701323bf6c1da?rik=6U8BD4U3wkZkgg&riu=http%3a%2f%2fwww.mavericktheater.com%2fassets%2fimages%2fRENT_logo.jpg&ehk=%2boH1%2bFQQToYs2oegFkxlgydxzcPztVL7emH3SCq%2fMc8%3d&risl=&pid=ImgRaw" className="logo" alt=""></img></NavLink>

          <div className="input-group mb-3 locationBox ">
            <input type="text" className="form-control" placeholder="Pakistan" aria-label="Text input with segmented dropdown button " />
            <div className="input-group-append">
              <Button variant="contained" color="primary">Search</Button>
              <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="">Karachi</a>
                <a className="dropdown-item" href="#">Islamabad</a>
                <a className="dropdown-item" href="#">Lahore</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Current Location</a>
              </div>
            </div>
          </div>

          <div className="input-group mb-3 searchBar ">
            <input type="text" className="form-control" placeholder="Find Cars, Mobile Phones and more..." aria-label="Text input with segmented dropdown button" />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-info">
                <svg width="24px" height="20px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-2h8NR" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
              </button>
            </div>
          </div>

          <div className="loginAndRent">
            {
              login.isLoggedIn ? (
                <span>
                  <img src={`https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-${login.name[0].toLowerCase()}.png`} />
                </span>
              ) : (
                <div  onClick={drop} style={{marginLeft:'25px',width:'100px'}}>
                <figure id ="1" className="pro"></figure>
                </div>
               
              )
            }
            
            <OutsideClickHandler id="2" onOutsideClick={dropOut}>
            <div className={"loginOptionsDiv "+ loginDrop}>
              <div className="loginProfileDiv">
              <figure className="profileImg" ></figure>
              <div className="profileName">
                <div className="profileMsg">Hello,</div>
                <div className="ProfileName">Marsad Ghanvi</div>
              </div>
              </div>
              <div style={{borderTop:'1px solid rgba(0, 47, 52, .2)'}}>
                  <a href="/myAdd" className="myAdsDiv" style={{textDecoration:'none'}}>
                    <div style={{padding:'2px 16px 0 0'}}>
                      <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"></path></svg>
                      <span style ={{paddingLeft: '15px'}} onClick={drop}>My Ads</span>
                    </div>
                    
                  </a>
                  <a href="/myAdd" className="myAdsDiv" style={{textDecoration:'none',borderTop:'1px solid rgba(0, 47, 52, .2)'}}>
                    <div style={{padding:'2px 16px 0 0'}}>
                    <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                    <span onClick={drop} style ={{paddingLeft: '15px'}}>Logout</span>
                    </div>
                    
                  </a>
              </div>
            </div>
            </OutsideClickHandler>
            
          
          </div>
        
          <div className="loginAndRent" style={{position:'relative'}}>
          <NavLink to={login.isLoggedIn && "/PostYourAdd" } style={{width:'90px'}}>
            <Button variant="contained" color="primary" onClick={!login.isLoggedIn && props.onChecked}  style={{marginTop:'0',width:'100%'}}>
              Rent
            </Button>
            </NavLink>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Header;

// <img src="https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-a.png"/>
// let letter="a";
// let url = "https://img.icons8.com/fluent-systems-filled/40/1ABC9C/circled-" + letter+ ".png";

                // <Button
                //   variant="contained" color="primary" style={{marginLeft:'10%',width:'120px'}}
                //   onClick={props.onChecked}>
                //   Login
                // </Button> 
