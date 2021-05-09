import React, { useState, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import GoogleLogin from 'react-google-login';
import LoginContext from '../../Context/LoginContext';

function Login(props) {
  const [login, setLogin] = useContext(LoginContext);

  async function responseSuccessGoogle(response) {
    const data = {
      tokenId: response.tokenId
    };
    try {
      const result = await fetch("/login/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const status = await result.json();
      if (status) {
        const userLogin = {
          ...status,
          isLoggedIn: true          
        };
        setLogin(userLogin);
        localStorage.setItem("user",JSON.stringify(userLogin));
        props.onUnChecked();
      } else {
        alert("Error Occurred! Try Again !");
      }
    } catch (error) {
      console.log(error);
      alert("Error Occurred! Try Again !");      
    }
  }

  function responseErrorGoogle(response) {
    alert("Something Went Wrong. TRY Again Later!");
  }

  function clearPopup() {
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

          <div className="btns">
            <span className="loadDiv">
              <GoogleLogin
                render={renderProps => (
                  <button onClick={renderProps.onClick} className="loadBtn">
                    <img style={{ marginRight: '10px' }} src="https://img.icons8.com/color/30/000000/google-logo.png" />
                          SignIn with Google
                  </button>
                )}
                clientId="582570851600-vl8k9tsk5ssr9a7us3bcc1082s13udng.apps.googleusercontent.com"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </span>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
