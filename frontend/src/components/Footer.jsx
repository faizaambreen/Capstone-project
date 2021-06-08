import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const popular = ["Cars", "Property for Rent", "Generators"];
    const trending = ["Bikes", "Bridal Dresses", "Freezers"];

    function Section({ name, list }) {

        return (
            <section className="topFooterSectionDiv">
                {name}
                <ul style={{ paddingLeft: "0", listStyle: 'none' }}>
                    {
                        list && list.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className="topFooterSectionItem"
                                    style={{ textDecoration: 'none' }}
                                    to={"categoryview=>" + item}
                                >{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        );
    }
    return (
        <footer className="footerMainDiv">
            <div className="topDesktopFooter">
                <div className="topFooterDivContent">
                    <Section name="POPULAR CATEGORIES" list={popular} />
                    <Section name="TRENDING SEARCHES" list={trending} />
                    <section className="topFooterSectionDiv">
                        ABOUT US
                            <ul style={{ paddingLeft: "0", listStyle: 'none' }}>
                            <li>
                                <Link
                                    className="topFooterSectionItem"
                                    style={{ textDecoration: 'none' }}
                                    to={"about"}
                                >
                                    About RentAll
                                    </Link>
                            </li>
                        </ul>
                    </section>
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