import React from 'react';
import {NavLink} from 'react-router-dom'

function Header() {

  return (
      <div className="header">
        <div className="insideHeader">
            <div className="headerContent">
                <img src="https://www.mavericktheater.com/assets/images/RENT_logo.jpg" className="logo"></img>
                
                <div className="input-group mb-3 locationBox ">
  <input type="text" className="form-control" placeholder="Pakistan" aria-label="Text input with segmented dropdown button "/>
  <div className="input-group-append">
    <button type="button" className="btn btn-info btnColor">Search</button>
    <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Karachi</a>
      <a className="dropdown-item" href="#">Islamabad</a>
      <a className="dropdown-item" href="#">Lahore</a>
      <div role="separator" className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Current Location</a>
    </div>
  </div>
</div>

<div className="input-group mb-3 searchBar ">
  <input type="text" className="form-control" placeholder="Find Cars, Mobile Phones and more..." aria-label="Text input with segmented dropdown button"/>
  <div className="input-group-append">
    <button type="button" className="btn btn-outline-info">
    <svg width="24px" height="20px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-2h8NR" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
    </button>
    </div>
</div>

<div className="loginAndRent">
<button type="button" class="btn btn-info login">Login</button>
<NavLink to="/PostYourAdd"><button type="button" class="btn btn-info rent">Rent</button></NavLink>
</div>


            </div>
        </div>
      </div>
    );
  }

export default Header;