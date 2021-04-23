import React from 'react';

function Footer(){
    function Section(props){
        function ListItem(props){
            return(
                <li>
                    <a className="topFooterSectionItem" style={{textDecoration : 'none'}}>props.name</a>
                </li>
            );
        }
        return (
            <section className="topFooterSectionDiv">
                        {props.name}
                        <ul style={{listStyle : 'none'}}> 
                        </ul>
                    </section>
        );
    }
    return (
        <footer className="footerMainDiv"> 
            <div className="topDesktopFooter">
                <div className="topFooterDivContent">
                    <Section name="POPULAR CATEGORIES"/>
                    <Section name="TRENDING SEARCHES"/>
                    <Section name="ABOUT US"/>
                </div>
            </div>


        <div className="bottomFooter">
          <div className="bottomFooterInner">
            <section className="topFooterSectionDiv"> 
               <span>© 2020-2021   Rental </span>
            </section>
          </div>
        </div>
      </footer>
    
    );
}

export default Footer;