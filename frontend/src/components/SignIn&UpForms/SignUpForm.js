import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core';

export const SignUpForm = ({ setLogin, onUnChecked }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMatched, setIsMatched] = useState(false);

    function updateEmail({ target: { value } }) {
        setEmail(value);
    }

    function updatePassword({ target: { value } }) {
        if (isMatched)
            setIsMatched(false);
        setPassword(value);
    }

    function updateConfirmPassword({ target: { value } }) {
        if (isMatched)
            setIsMatched(false);
        setConfirmPassword(value);
    }

    function updateName({ target: { value } }) {
        setName(value);
    }

    async function submitForm(event) {
        setIsLoading(true);
        event.preventDefault();
        if (password === confirmPassword) {
            setIsMatched(false);
            const data = {
                email,
                name,
                password
            };
            try {
                const result = await fetch("/login/createAccount", {
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
                    alert("Error Occurred! Try Again !");
                }
            } catch (error) {
                alert("Error Occurred! Try Again !");
            }
        }
        else {
            setIsMatched(true);
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={submitForm}>
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
                        name="name"
                        type="text"
                        className="inputText"
                        required
                        value={name}
                        onChange={updateName}
                        placeholder="Full Name"
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
            <div className="AddTitleInputDiv">
                <div className="RemainingRsDiv">
                    <input
                        autoComplete="off"
                        name="confirmPassword"
                        type="password"
                        className="inputText"
                        required
                        value={confirmPassword}
                        onChange={updateConfirmPassword}
                        placeholder="Confirm Password"
                    ></input>
                </div>
            </div>
            {isMatched && <span style={{ color: "red" }}>Passwords Don't Match</span>}
            <button
                type="submit"
                className="loadBtn btns"
                style={{ width: "100%" }}
                disabled={isLoading}
            >
                <span>{isLoading ? <CircularProgress /> : "Create Account"}</span>
            </button>
        </form>
    )
}
