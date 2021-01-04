import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

function Login(props){
    return(
            <div className="PopMainDiv isVisible" style={{display: props.cls==="true" ? "flex" : ""}}>
                <div className="insidePop">

                </div>
            </div>
        );
}

export default Login;