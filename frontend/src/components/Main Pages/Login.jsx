import React, { useState, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import GoogleLogin from 'react-google-login';
import LoginContext from '../../Context/LoginContext';
import { SignInForm } from "../SignIn&UpForms/SignInForm";
import { CircularProgress } from "@material-ui/core";

function Login(props) {
  const [login, setLogin] = useContext(LoginContext);
  const [localLogin, setLocalLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
        localStorage.setItem("user", JSON.stringify(userLogin));
        props.onUnChecked();
      } else {
        alert("Error Occurred! Try Again !");
      }
    } catch (error) {
      alert("Error Occurred! Try Again !");
    }
    setIsLoading(false);
  }

  function responseErrorGoogle(response) {
    setIsLoading(false);
    alert("Something Went Wrong. TRY Again Later!");
  }

  function clearPopup() {
    setLocalLogin(true);
    props.onUnChecked();
  }

  function showLoginEmail() {
    setLocalLogin(false);
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

          {
            localLogin ? <span>
              <div style={{ marginTop: "20%" }}>
                <span className="loadDiv">
                  <GoogleLogin
                    render={renderProps => (
                      <button
                        onClick={() => {
                          setIsLoading(true);
                          renderProps.onClick();
                        }}
                        style={{ width: "100%" }}
                        className="loadBtn"
                        disabled={isLoading}
                      >
                        <img style={{ marginRight: '10px' }} src="https://img.icons8.com/color/30/000000/google-logo.png" alt="Google Logo"/>
                          Continue with Google
                      </button>
                    )}
                    clientId="582570851600-vl8k9tsk5ssr9a7us3bcc1082s13udng.apps.googleusercontent.com"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </span>
              </div>
              <span className="loadDiv">
                <button
                  onClick={showLoginEmail}
                  className="loadBtn"
                  style={{ width: "100%" }}
                  disabled={isLoading}
                >
                  Continue with Email
                </button>
              </span>
              {isLoading && <div className="loadDiv btns"><CircularProgress /></div>}
            </span> : <SignInForm setLogin={setLogin} onUnChecked={props.onUnChecked} />
          }
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Login;
