import React from 'react';

function Button(props) {
    return (
        <div className="loadDiv">
            <button
                className="loadBtn"
                onClick={props.buttonClicked}
                style={{ float: props.st, width: props.wd }}
            >
                <span>{props.name}</span>
            </button>
        </div>
    );
}

export default Button;