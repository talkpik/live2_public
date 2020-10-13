import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavigationMenu = ({ history }) => {
  

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <a className="navbar-brand logo-image" href="https://www.talkpik.com"><img src="images/logo_new.png" alt="alternative"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/"> Home </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/services"> Services </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/seeker"> Seeker </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/speaker"> Speaker </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/events"> Events </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/team"> Team </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link page-scroll" activeClassName="is-active" to="/contact"> Contact </NavLink>
            </li>
          </ul>
          <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a target="_blank" href="https://www.facebook.com/talkpik2020/">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a target="_blank" href=" https://twitter.com/talkpik2020">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
				<span className="fa-stack">
                	<a target="_blank" href="https://instagram.com/talkpik2020">
						<i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                     </a>
                 </span>
                 <span className="fa-stack">
                 	<a target="_blank" href="https://www.linkedin.com/company/talkpik/">
						<i className="fas fa-circle fa-stack-2x"></i>
						<i className="fab fa-linkedin-in fa-stack-1x"></i>
                    </a>
                 </span>
            </span>
        </div>
    </nav>
    </div>
  );
};

export default withRouter(NavigationMenu);
        
        
    
  
