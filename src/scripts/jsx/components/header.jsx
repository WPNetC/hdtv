import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div id="header">
				<div className="top">
						<div id="logo">
							<span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
							<h1 id="title">Jane Doe</h1>
							<p>Hyperspace Engineer</p>
						</div>
                        
						<nav id="nav">
                        <ul>
								<li><Link to="/" id="top-link" className="skel-layers-ignoreHref"><span className="icon fa-home">Home</span></Link></li>
								<li><Link to="/rss" id="portfolio-link" className="skel-layers-ignoreHref"><span className="icon fa-th">Rss</span></Link></li>
								<li><Link to="#about" id="about-link" className="skel-layers-ignoreHref"><span className="icon fa-user">About Me</span></Link></li>
								<li><Link to="#contact" id="contact-link" className="skel-layers-ignoreHref"><span className="icon fa-envelope">Contact</span></Link></li>
							</ul>
						</nav>
				</div>

				<div className="bottom">
						<ul className="icons">
							<li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
							<li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
							<li><Link to="#" className="icon fa-github"><span className="label">Github</span></Link></li>
							<li><Link to="#" className="icon fa-dribbble"><span className="label">Dribbble</span></Link></li>
							<li><Link to="#" className="icon fa-envelope"><span className="label">Email</span></Link></li>
						</ul>
				</div>
			</div>
        );
    }
}

export default Header;