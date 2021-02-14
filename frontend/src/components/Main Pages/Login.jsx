import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../Button";

function Login(props) {
  const[pValue , setPvalue]=useState("");
  function changeHandler(event){
    setPvalue(event.target.value);
  }
  function googleClick() {
    setPvalue("");
  }
 
  return (
    
    
    <div className={props.cls ? "PopMainDiv" : "PopMainDiv isVisible"}>
      <OutsideClickHandler onOutsideClick={props.onUnChecked} >
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

          <div className="">
            <div className="PhoneNo">
              <span>Enter Your Phone Number</span>
            </div>
            <div className="phoneInputDiv">
              <div className="phoneCode">+92</div>

              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="phoneInput"
                  onChange={changeHandler}
                  value={pValue}
                />
              </div>
              
            </div>
            <p className={pValue==="" ? "PicMsg " : "PicMsg isVisible"} style={{marginLeft:"20px"}}>
              <span>This field is mandatory*</span>
            </p>
          </div>

             
            <div className="btns">
              <span className="btnSpan">
                <Button
                  name="Sign in with google"
                  wd="50%"
                  onChecked={googleClick}
                />
              </span>
            </div>
            
          

        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
