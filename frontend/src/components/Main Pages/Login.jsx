import React from 'react';

function Login(props){

    return(
        <div className={props.cls? "PopMainDiv" : "PopMainDiv isVisible"}>
            <div className="insidePop">
                <span className="cross" onClick={props.onUnChecked}>
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                        <path class="rui-22SD7" d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default Login;