import React from 'react'
import P1 from '../../images/p1.png';
import P2 from '../../images/p2.png';
import P3 from '../../images/p3.png';
import P4 from '../../images/p4.png';
import P5 from '../../images/p5.png';
import Adeel from '../../images/adeel.jpeg';
import Marsad from '../../images/marsad.jpg';
import Fiza from '../../images/fiza.jpeg';
import Moin from '../../images/moin.jpeg';
export const About = () => {
    return (
        <main className="BetweenHeaderAndFooter">
            <div className="BetweenHeaderAndFooterC1 BetweenHeaderAndFooterC2">

                {/* Title */}
                <div className="row AboutTitleDiv">
                    <div className="col-3 AboutTitleContent">
                        RentAll    
                    </div>
                </div>

                {/* intro and pic1 */}
                <div className="row" style={{marginTop:'2%'}}>
                    <div className= "col">
                        <div>
                            <p className="AboutIntro" style={{marginTop:'10%'}}>
                              <strong> <i> Welcome to Rent-All, your number one source to rent or give away all types of items.</i></strong>
                            </p>
                            <p className="AboutIntro" style={{marginTop:'5%'}}>
                                We're dedicated to giving you the very best of rent items like house, rooms, dresses, vehicles, furniture, business centers, wedding halls etc  , with a focus on simplicity of creating advertisements, intuitive user interface, multiple ways to access and wider audience
                            </p>
                        </div>
                    </div>
                    <div className= "col">
                        <div >
                            <img src="https://th.bing.com/th/id/OIP.CyjVI7glheGZw6jWa2mGtwHaE5?pid=ImgDet&rs=1" alt="" className="AboutPic1" />
                        </div>
                    </div>
                </div>

                {/* horizontal Line */}
                <hr className="AboutHr"/>

                {/* discription */}

                <div className="row">
                    <div className="col"  style={{textAlign:'center'}}>
                        <p className="AboutIntro" style={{marginTop:'20%'}}>It is no longer difficult to rent anything at any time. You can now easily rent anything at any time from the comfort of your own home.</p>
                    </div>
                    <div className="col"  style={{textAlign:'left'}}>
                        <img src={P1} alt="" style={{borderRadius:'300px'}} />
                    </div>
                    <div className="col" >
                        <img src={P2} alt="" className="AboutPic1" style={{height:'80%'}} />
                    </div>
                </div>

                {/* horizontal Line */}
                <hr className="AboutHr"/>

                {/* benefits */}
                <div className='row' >
                    <div className="col-3 AboutTitleContent">
                        Benefits
                    </div>
                </div>
            
                <div className="row">
                    <div className="col">
                        <p className="AboutIntro" style={{marginTop:'15%'}}>
                            We're dedicated to giving you the very best of rent items like house, rooms, dresses, vehicles, furniture, business centers, wedding halls etc  , with a focus on simplicity of creating advertisements, intuitive user interface, multiple ways to access and wider audience
                        </p>
                        <p className="AboutIntro" style={{marginTop:'5%'}}>
                            <i><strong>It's frustrating to not be able to wear the same dress twice, so don't have a go-to dress like all girls do. Renting is definitely going to be new fashion as well as profitable.</strong></i>
                        </p>
                    </div>
                    <div className="col" style={{marginTop:'4%'}}>
                        <img src={P3} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}} />
                    </div>
                    <div className="col" style={{marginTop:'4%'}}>
                        <img src={P4} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}} />
                    </div>
                </div>
            
                {/* horizontal Line */}
                <hr className="AboutHr"/>
            

                <div className="row">
                    <div className="col">
                        <p className="AboutIntro1" style={{marginTop:'5%'}}>
                            <ul>Following are some services/Items you can get from RentAll
                                <li>
                                    Cars
                                </li>
                                <li>
                                    Houses
                                </li>
                                <li>
                                    Dresses
                                </li>
                                <li>
                                    Services
                                </li>
                                <li>
                                    etc
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="col"  style={{textAlign:'left'}}>
                        <img src={P5} alt="" style={{borderRadius:'300px'}} />
                    </div>
                    
                </div>

                {/* horizontal Line */}
                <hr className="AboutHr"/>

                {/* co-Founders */}
                <div className='row' >
                    <div className="col-3 AboutTitleContent">
                        Co-Founders
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-6" style={{margin:'auto'}}>
                        <p className="AboutIntro" style={{marginTop:'5%'}}>
                            <i><strong>Founded in 2020 by Adeel, Marsad, Moin and Faiza, Rent-All has come a long way from its beginnings in Lahore</strong></i>
                        </p>
                    </div>
    
                </div>
            
                {/*pic*/}

                <div className="row" style={{marginTop:'5%'}}>
                    <div className="col">
                        <img src={Adeel} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}}/>
                        
                    </div>
                    <div className="col">
                        <img src={Marsad} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}}/>
                    </div>
                    <div className="col">
                        <img src={Moin} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}}/>
                    </div>
                    <div className="col">
                        <img src={Fiza} alt="" className="AboutPic1" style={{height:'80%',width:'80%',borderRadius:'300px'}}/>
                    </div>
                </div>

                {/* Names */}
                <div className="row" style={{marginTop:'0',textAlign:'center'}}>
                    <div className="col">
                        <h3>Muhammad Adeel</h3>
                    </div>
                    <div className="col">
                        <h3>Marsad Ghanvi</h3>
                    </div>
                    <div className="col">
                        <h3>Moin Haqani</h3>
                    </div>
                    <div className="col">
                        <h3>Faiza Ambreen</h3>
                    </div>
                </div>
            
            </div>
        </main>
    )
}