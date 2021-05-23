import React, { useContext } from 'react';
import {Link, useParams, Redirect} from 'react-router-dom'
import LoginContext from '../../Context/LoginContext';
function Congo(){
    const [{isLoggedIn}] = useContext(LoginContext);
    const {itemId} = useParams();
    const postCreated = localStorage.getItem("postCreated");
    console.log(postCreated);
    
    if(!isLoggedIn || !postCreated){
        return <Redirect to="/" />;
    }
    localStorage.removeItem("postCreated");

    return (
      <main className="BetweenHeaderAndFooter">
        <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
            <div className="congoMain">
                <div className="insideCongoMain">
                    <div className="CongoDiv">
                        <div className="insideCongo">
                            <svg width="84px" height="84px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd">
                                <path style={{fill:'#23e5db'}} d="M744.728 372.907l-294.245 294.245h-32.116l-139.093-139.093v-54.847h54.847l100.306 100.306 255.457-255.457h54.847v54.847zM512 85.333c-235.288 0-426.667 191.418-426.667 426.667 0 235.288 191.379 426.667 426.667 426.667s426.667-191.379 426.667-426.667c0-235.249-191.379-426.667-426.667-426.667z"></path>
                            </svg>
                            <p className="CongoMsg"><span>Congratulations!</span></p>
                            <p className="CongoMsg1"><span>Your Add is Live Now...</span></p>
                            <Link exact to={"/itemview=>"+itemId} style={{textDecoration:'none'}}>
                                <button className="PreviewBtn">
                                    <span>Preview Add</span>
                                </button>
                            </Link>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
}

export default Congo;