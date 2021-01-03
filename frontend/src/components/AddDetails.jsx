import React from 'react'
import {NavLink} from 'react-router-dom'
function AddDetails(){
    function AddDetail1() {
        function Input(){
            return(
                <div className="AddTitleInputDiv">
                    <div className="insideAddTitleInputDiv">
                        <div style={{flexGrow:'1'}}>
                            <input maxLength="70" className="inputText"></input>
                        </div>
                    </div>
                </div>
            );
        }
        function Pic(){
            return (
                <div className="pic">
                    <div className="insidePic">
                        <button  type="button" className="picButton">
                            <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                                <path class="rui-1YGxp" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            );
        }
        return(
            <div className="AddDetailsMainDiv">
                <h2 className="AddDetailHeading"><span>SELECTED CATEGORY</span></h2>
                <div className="Boarder"></div>
                    <div className="AddDetailDiv">
                        <div className="insideAddDetailDiv ">
                            <h2><span  className="AddDetailFont">INCLUDE SOME DETAILS</span></h2>
                            <div className="AddTitleDiv">
                                <label>Add title *</label>
                                <Input/>
                                <div style={{display:'flex'}}>
                                    <span className="inputMsg">Mention the key features of your item (e.g. brand, model, age, type)</span>
                                </div>
                            </div>

                            <div className="AddTitleDiv">
                                <label>Add Description *</label>
                                <div className="AddTitleInputDiv">
                                    <textarea className="DescInput" maxLength="4096" style={{height:'96px', resize:'none'}}></textarea>
                                </div>
                                <div style={{display:'flex'}}>
                                    <span className="inputMsg">Include condition, features and reason for selling</span>
                                </div>
                            </div>
                        </div>                   
                </div>

                <div className="Boarder"></div>


                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span  className="AddDetailFont">SET A PRICE</span></h2>
                        <div className="AddTitleDiv">
                            <label>Price*</label>
                            <div className="AddTitleInputDiv">
                                <div className="RemainingRsDiv">
                                    <input className="inputText" type="number" style={{width:'100%'}}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div className="Boarder"></div>
                
                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span  className="AddDetailFont">UPLOAD UP TO 12 PHOTOS</span></h2>
                        <div aria-disabled="false" style={{display:'block'}}>
                        <div className="PicDivup">
                            <ul className="picUl"></ul>
                            <Pic/><Pic/><Pic/><Pic/>
                            <Pic/><Pic/><Pic/><Pic/>
                            <Pic/><Pic/><Pic/><Pic/>
                        </div>
                        <p className="PicMsg"><span>This field is mandatory</span></p>
                    </div>
                    </div>
                    
                </div>
                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span  className="AddDetailFont">SET YOUR LOCATION</span></h2>
                        <div className="AddTitleDiv">
                            <label>State*</label>
                            <div className="AddTitleInputDiv">
                                <div className="RemainingRsDiv">
                                    <div className="inputText">
                                    <select className="Sele">
                                        <option></option>
                                        <option>Punjab</option>
                                        <option>Sindh</option>
                                        <option>Balochistan</option>
                                        <option>Kashmir</option>
                                        <option>KPK</option>
                                    </select>
                                    </div> 
                                </div>
                            </div>
                            <label>City*</label>
                            <div className="AddTitleInputDiv">
                                <div className="RemainingRsDiv">
                                    <input className="inputText"></input>
                                </div>
                            </div>

                        </div>
                        <p className="PicMsg"><span>This field is mandatory</span></p>
                    </div>
                </div>
                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <div className="loadDiv">
                            <NavLink exact to="/Congo">
                                <button className="loadBtn" style={{float:'left'}}>
                                    <span>Post Now</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return(
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">
                <div className="PostAddMainDiv">
                    <h1 className="PostHeading">
                        <span>Post your Add</span>
                    </h1>
                    <AddDetail1/>      
                </div>
            </div>
        </main>       
    );
}

export default AddDetails;