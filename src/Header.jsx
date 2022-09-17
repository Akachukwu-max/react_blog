import React from 'react';

const Header = () => {
    return (
            <header className={"mainHeader"}>
                <nav className={"nav bdGrid"}>
                    <div>
                        <a href="/" className={"navLogo"}>Akachukwu</a>
                    </div>

                    <div className={"navMenu"} id={"navMenuId"}>
                        <ul className={"navList"}>
                            <li className={"navItem"}><a href={"/"} className={"navLink active"}>Home</a></li>
                            <li className={"navItem"}><a href={"/"} className={"navLink"}>Home</a></li>
                            <li className={"navItem"}><a href={"/"} className={"navLink"}>Home</a></li>
                            <li className={"navItem"}><a href={"/"} className={"navLink"}>Home</a></li>'
                            <li className={"navItem"}><a href={"/"} className={"navLink"}>Home</a></li>
                        </ul>
                    </div>

                    <div className={"navToggle"} id={"navToggleId"}>
                        <i className={"bx bxMenu"}></i>
                    </div>
                </nav>
            </header>
    );
}
 
export default Header;