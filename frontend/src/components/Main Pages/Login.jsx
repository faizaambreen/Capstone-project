import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import GoogleLogin from 'react-google-login';

function Login(props) {
  const [phone, setPhone] = useState("");

  function updatePhone(event) {
    setPhone(event.target.value);
  }

  async function responseSuccessGoogle(response) {
    const data = {
      phone: phone,
      tokenId: response.tokenId
    };

    const result = await fetch("/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const status = await result.json();
    if (status.code === 200) {
      props.onUnChecked();
    } else {
      alert("Error Occurred! Try Again !");
    }
  }

  function responseErrorGoogle(response) {
    alert("Something Went Wrong. TRY Again Later!");
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
            (phone !== "") && (
              <div className="btns">
                <span className="btnSpan">
                  <GoogleLogin
                    clientId="582570851600-vl8k9tsk5ssr9a7us3bcc1082s13udng.apps.googleusercontent.com"
                    buttonText={"SignIn with Google"}
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </span>
              </div>
            )
          }
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
