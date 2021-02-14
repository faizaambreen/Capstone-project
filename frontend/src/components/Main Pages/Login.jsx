import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../Button";

function Login(props) {
  function googleClick() {}
  return (

    
    <div className={props.cls ? "PopMainDiv" : "PopMainDiv isVisible"}>
      <OutsideClickHandler onOutsideClick={props.onUnChecked}>
        <div className="insidePop">
          <span className="cross" onClick={props.onUnChecked}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-22SD7"
                d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"
              ></path>
            </svg>
          </span>

          <div className="isVisible">
            <div className="LoginOptions">
              <span>Sign in Options</span>
            </div>
            <div className="btns">
              <span className="btnSpan">
                <Button
                  name="Sign in with google"
                  wd="100%"
                  onChecked={googleClick}
                />
              </span>
              <span className="btnSpan">
                <Button name="Continue with Email" wd="100%" />
              </span>
            </div>
          </div>

          <div>
            <div className="PhoneNo">
              <span>Enter Your Phone Number</span>
            </div>
            <div className="phoneInputDiv">
              <div className="phoneCode">+92</div>

              <div className="phoneInputDiv">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autocomplete="username"
                  placeholder="Phone Number"
                  className="phoneInput"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
