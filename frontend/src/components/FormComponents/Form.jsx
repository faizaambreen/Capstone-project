import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextInput from './TextInput'
import Pic from './Pic';

export default function Form() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: null,
        state: "",
        city: ""
    });

    function updateFormData(event) {
        const { name, value } = event.target;
        setFormData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitForm(event) {
        console.log("submit called");
        event.preventDefault();
    }

    return (
        <form onSubmit={submitForm}>
            <div className="AddDetailsMainDiv">
                <h2 className="AddDetailHeading">
                    <span>SELECTED CATEGORY</span>
                </h2>
                <div className="Boarder"></div>
                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2>
                            <span className="AddDetailFont">
                                INCLUDE SOME DETAILS
                        </span>
                        </h2>
                        <div className="AddTitleDiv">
                            <label>Add title *</label>

                            <TextInput
                                name="title"
                                updateText={updateFormData}
                                value={formData.title}
                            />

                            <div style={{ display: 'flex' }}>
                                <span className="inputMsg">
                                    Mention the key features of your item (e.g. brand, model, age, type)
                            </span>
                            </div>
                        </div>

                        <div className="AddTitleDiv">
                            <label>Add Description *</label>
                            <div className="AddTitleInputDiv">
                                <textarea
                                    onChange={updateFormData}
                                    value={formData.description}
                                    name="description"
                                    className="DescInput"
                                    maxLength="4096"
                                    style={{ height: '96px', resize: 'none' }}
                                >
                                </textarea>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <span className="inputMsg">
                                    Include condition, features and reason for selling
                            </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span className="AddDetailFont">SET A PRICE</span></h2>
                        <div className="AddTitleDiv">
                            <label>Price*</label>
                            <div className="AddTitleInputDiv">
                                <div className="RemainingRsDiv">
                                    <input
                                        onChange={updateFormData}
                                        name="price"
                                        className="inputText"
                                        type="number"
                                        style={{ width: '100%' }}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span className="AddDetailFont">UPLOAD UP TO 12 PHOTOS</span></h2>
                        <div aria-disabled="false" style={{ display: 'block' }}>
                            <div className="PicDivup">
                                <ul className="picUl"></ul>
                                <Pic /><Pic /><Pic /><Pic />
                                <Pic /><Pic /><Pic /><Pic />
                                <Pic /><Pic /><Pic /><Pic />
                            </div>
                            <p className="PicMsg"><span>This field is mandatory</span></p>
                        </div>
                    </div>
                </div>

                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <h2><span className="AddDetailFont">SET YOUR LOCATION</span></h2>
                        <div className="AddTitleDiv">
                            <label>State*</label>
                            <div className="AddTitleInputDiv">
                                <div className="RemainingRsDiv">
                                    <div className="inputText">
                                        <select onChange={updateFormData} name="state" className="Sele">
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

                            <TextInput
                                name="city"
                                updateText={updateFormData}
                                value={formData.city}
                            />

                        </div>
                        <p className="PicMsg"><span>This field is mandatory</span></p>
                    </div>
                </div>

                <div className="Boarder"></div>

                <div className="AddDetailDiv">
                    <div className="insideAddDetailDiv ">
                        <div className="loadDiv">
                            {/* <NavLink exact to="/Congo"> */}
                                <button
                                    type="submit"
                                    className="loadBtn"
                                    style={{ float: 'left' }}
                                >
                                    <span>Post Now</span>
                                </button>
                            {/* </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}