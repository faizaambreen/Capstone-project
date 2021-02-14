import React from 'react';

export default function TextInput(props) {
    return (
        <div className="AddTitleInputDiv">
            <div className="insideAddTitleInputDiv">
                <div style={{ flexGrow: "1" }}>
                    <input
                        type="text"
                        maxLength="70"
                        className="inputText"
                        name={props.name}
                        onChange={props.updateText}
                        value={props.value}
                    ></input>
                </div>
            </div>

        </div>
    );
}