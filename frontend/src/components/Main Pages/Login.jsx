import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../Button";

function Login(props) {
  const [phone, setPhone] = useState("");

  function updatePhone(event) {
    setPhone(event.target.value);
  }

  async function handleClick() {
    const data = new FormData();
    data.append("phone", phone);
    
    // const response = await fetch("/auth/google", {
    //   method: "POST",
    //   body: data
    // });
    const response = await fetch("/auth/google/login");
    const status = await response.json();
    console.log(status);

  }

  function clearPopup() {
    setPhone("");
    props.onUnChecked();
  }

  return (
    <div className={props.cls ? "PopMainDiv" : "PopMainDiv isVisible"}>
      <OutsideClickHandler onOutsideClick={clearPopup} >
        <div className="insidePop">
          <span className="cross" onClick={clearPopup}>
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
                  onChange={updatePhone}
                  value={phone}
                />
              </div>

            </div>
            <p
              className={phone === "" ? "PicMsg " : "PicMsg isVisible"}
              style={{ marginLeft: "20px" }}
            >
              <span>This field is mandatory*</span>
            </p>
          </div>

          {
            (phone !== "") && (<div className="btns">
              <span className="btnSpan">
                <Button
                  name="Sign in with google"
                  wd="50%"
                  buttonClicked={handleClick}
                />
              </span>
            </div>)
          }


        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
