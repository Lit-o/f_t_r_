import "./Nav.css"

import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="main-nav__selected">Персонаж</NavLink>
                </li>
                <li>
                    <NavLink to="/home" exact activeClassName="main-nav__selected">Жилище</NavLink>
                </li>
                <li>
                    <NavLink to="/city" exact activeClassName="main-nav__selected">Город</NavLink>
                </li>
                <li>
                    <NavLink to="/history" exact activeClassName="main-nav__selected">История</NavLink>
                </li>
            </ul>
        </nav>
    );
}

{/* <NavLink
  to="/faq"
  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
></NavLink> */}

{/* <NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink> */}

export default Nav;