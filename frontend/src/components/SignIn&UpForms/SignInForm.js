import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core';
import { SignUpForm } from './SignUpForm';

export const SignInForm = ({ setLogin, onUnChecked }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function updateEmail({ target: { value } }) {
        setEmail(value);
    }

    function updatePassword({ target: { value } }) {
        setPassword(value);
    }

    function showSignup() {
        setIsSignup(true);
    }

    async function submitForm(event) {
        setIsLoading(true);
        event.preventDefault();
        const data = {
            email,
            password
        };
        try {
            const result = await fetch("/login", {
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
                onUnChecked();
            } else {
                alert("WRONG Email OR Password !");
            }
        } catch (error) {
            alert("WRONG Email OR Password !");
        }
        setIsLoading(false);
    }

    return (
        !isSignup ? <form onSubmit={submitForm}>
            <div className="AddTitleInputDiv btns">
                <div className="RemainingRsDiv">
                    <input
                        autoComplete="off"
                        name="email"
                        type="email"
                        className="inputText"
                        required
                        value={email}
                        onChange={updateEmail}
                        placeholder="Email"
                    ></input>
                </div>
            </div>
            <div className="AddTitleInputDiv">
                <div className="RemainingRsDiv">
                    <input
                        autoComplete="off"
                        name="password"
                        type="password"
                        className="inputText"
                        required
                        value={password}
                        onChange={updatePassword}
                        placeholder="Password"
                    ></input>
                </div>
            </div>
            <button
                type="submit"
                className="loadBtn btns"
                style={{ width: "100%" }}
                disabled={isLoading}
            >
                <span>{isLoading ? <CircularProgress /> : "Log in"}</span>
            </button>
            <div style={{ marginTop: "10px" }}>
                Don't have an account? <span onClick={showSignup}
                    style={{
                        color: "blue",
                        cursor: "pointer"
                    }}>Sign up</span>
            </div>
        </form> : <SignUpForm setLogin={setLogin} onUnChecked={onUnChecked} />
    );
}
