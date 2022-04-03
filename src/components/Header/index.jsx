import React from 'react'
import '../styles/home.css'
import Logo from '../../assets/Sem Título-1.png'

import DiscordBrand from '../../assets/duleigo2.png'
import TwitterBrand from '../../assets/duleigo1.png'


import {Link, aniateScroll as scroll } from 'react-scroll'

import {Link as A} from 'react-router-dom'

function Header() {

	return (
		<header className="fixed-top">
			 <nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <div className="container-fluid">
			    <a className="navbar-brand" href="#"><img src={Logo} width="100"  alt="Brand of site" width="100"/></a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target    ="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="material-icons">menu</span>
			     
			    </button>
			    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
			      <ul className="navbar-nav">
			        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}
			        	className="nav-link active" 
			        	aria-current="page" href="#home" 
			        	data-bs-target='#navbarNavAltMarkup' 
			        	data-bs-toggle='collapse'
			        >
			        	Home
			        </Link>      

			        {/*<A id="link-to-mint" to='/mint'>Mint</A>*/}

			        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#about"   
				        data-bs-target='#navbarNavAltMarkup' 
				        data-bs-toggle='collapse'
				    >
				        About
			        </Link> 
			        <Link activeClass="active" to="history" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#story" 
				        data-bs-target='#navbarNavAltMark
				        up' 
				        data-bs-toggle='collapse'	
			        >
				        History
			        </Link>
			        <Link activeClass="active" to="nations" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#nations" 
				        data-bs-target='#navbarNavAltMarkup' 
				        data-bs-toggle='collapse'
			        >
			      		Nations  
			        </Link>
			        <Link activeClass="active" to="benefits" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#benefits" 
				        data-bs-target='#navbarNavAltMarkup' 
				        data-bs-toggle='collapse'
			        >
			        	Benefits
			        </Link>
			        <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#timeline"
				        data-bs-target='#navbarNavAltMarkup' 
			       		data-bs-toggle='collapse'
			        >
			        	RoadMap
			        </Link>

			        <Link activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#team" 
				        data-bs-target='#navbarNavAltMarkup' 
			        	data-bs-toggle='collapse'
			        >
			        	Team
			        </Link>
			        <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-70} duration={500}
				        className="nav-link" 
				        href="#faq" 
				        data-bs-target='#navbarNavAltMarkup' 
				        data-bs-toggle='collapse'
			        >
			        	FAQ
			        </Link>

			        <div id="social-icon-container">
			        	<a className="nav-link social-icon" href="https://discord.gg/zuE5CENxjG"><img src={DiscordBrand} width="20" /></a> 
				        {/*<!-- <a className="nav-link social-icon" href="#timeline"data-bs-target='#navbarNavAltMarkup' data-bs-toggle='collapse'><img src={TwitterBrand} width="30"></a>  -->*/}
				        <a className="nav-link social-icon" href="https://twitter.com/theslicewar"><img src={TwitterBrand} width="20"/></a> 
			        </div>
			       
			      
			      </ul>
			    </div>
			  </div>
			</nav>
		</header>
		
	)
}

export default Header
