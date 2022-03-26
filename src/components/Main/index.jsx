import React from 'react'
import '../styles/about.css'
import '../styles/faq.css'
import '../styles/home.css'
import '../styles/notions.css'
import '../styles/roadmap.css'
import '../styles/team.css'


import Icon from '../../assets/pizza-5997204_1280.png'

import BannerImg from '../../assets/newAssets/20220326_182538.png'
import AboutAvatar from '../../assets/20220314_194836.png'


import LeggstersImg from '../../assets/Leggesters.png'
import SplintersImg from '../../assets/Splinters.png'
import SloggersImg from '../../assets/Sloggers.png'
import AmphersImg from '../../assets/Amphers.png'


import BenefitsImg from '../../assets/newAssets/20220326_182716.png'


// Team avatars
import Makai from '../../assets/Icones/Makal - Economy and Finance (CEO).png'
import Slade from '../../assets/Icones/Slade - 3D Professional Artist.png'
import Previem from '../../assets/Icones/Previem - Business Administration (COO).png'
import Luffe from '../../assets/Icones/Luffe - Marketing (CMO).png'
import Maxtt from '../../assets/Icones/Maxxt - Social Media.png'
import Hidden from '../../assets/Icones/Hidden - Information Technology PhD (CIO).png'
import Rose from '../../assets/Icones/Rose - Pixel Artist.png'


import Section from '../Section/'


import ButtonMint from '../btn-mint/'


// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Main() {

	return (
		<main>
			<Section id={'home'} >
				<div>
					<h1 className="display-3">Welcome to <br/>The <span>SliceWar</span> Metaverse</h1>
				</div>
				<div>
					<img src={BannerImg} alt="Banner avatar"/>
					{/*<div className="banner-img">
						<img src={BannerImg} alt="Banner avatar"/>
					</div>*/}
				</div>
			</Section>			
		
			<Section id={'about'}>
				
				<h1>About</h1>
				<div 
					id="about-items"
				>

					{/* style="width: 50%; font-size: 1em;"*/}
					<div>
						<p>
							The Slice War Metaverse is a set of 4 collections based on your metaverse, where each NFT avatar is unique and randomly generated.
						</p>
						<p>
							The first intergalactic war has started and we will have only 1 winner, choose your side!
						</p>
					</div>

					{/*style="width: 250px; display: flex; justify-content: center; align-content:center;"*/}
					<div id='about-img-container'>
						{/*style="width: 100%;*/}
						<img  src={AboutAvatar} alt="about avatar" />
					</div>
				</div>
			</Section>
			
			
			<Section id={'history'} className={'color-text1'}>
				
				<h1>History</h1>
				<p>
					After 300 intense years of fighting the <span className="strong">hyper-intelligent robots</span>, the last piece of intelligent metal was destroyed and peace between the exoplanets and their inhabitants finally came.
				</p>
				<p>
					It was time to celebrate, so the council of the UE (United Exoplanets) decided to have a meeting in celebration of peace, everything was going well, but a self-centered confrontation would bring everything down, no matter which galaxy you come from, <span className="strong">pizza</span> is something that represents the culture of the pioneers of civilizations, and the last slice is not so simple to conquer. 
				</p>
				<p>				
					From the beginning, <span className="strong">Leggsters</span> and <span className="strong">Splinters</span> abstained from the slice, but for the <span className="strong">Sloggers</span> and <span className="strong">Amphers</span>, who had been enemies for a few hundred years, it would not be so easy, and all it took was one touch from the <span className="stong">Sloggers</span> on the edge of the last slice of pizza for all peace to end, and what was once a gathering of friends, turned into the beginning of an intergalactic war declared against everything and everyone in the universe.
				</p>
			</Section>


			<Section id={'nations'} className={'color-text1'}>
				
				<h1>Nations</h1>
				
				<div id="carouselExampleControls" data-bs-interval='60000' data-bs-wrap='false' className="carousel slide" data-bs-ride="carousel">

					<div className="carousel-indicators">
					    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
					    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
					</div>


				<div className="carousel-inner">
				    
				    <div className="carousel-item active">
				     	<div className="notions--card">
				     		<h2>Sloggers</h2>
				     		<div className="notions--card-img">
				     			
				     			<figure>
				     				<img src={SloggersImg} width="200" height="200" alt="Art NFT"/>  
				     			</figure>

				   
					     		<p>
				     				One of the   oldest civilizations in the universe and the only survivor of the first great filters, with a strict policy followed to the letter, they managed to overcome the overpopulation of their planet in an ethical way, reversed harmful climate change, and is for many an example of a civilization to be followed, although they are not as expressive, the Sloggers carry the title of the first civilization to complete intergalactic voyages, and this is an achievement of which they are proud
				     			</p>
				     		</div>
				     	</div>
				    </div>
				    <div className="carousel-item ">
				     	<div className="notions--card">
				     		<h2>Amphers</h2>
				     		<div className="notions--card-img">
				     			
				     			<figure>
				     				<img src={AmphersImg} width="200" height="200" alt="Art NFT"/>
				     			</figure>

				     			<p>
				     				Developed in chaotic situations, their primitive instincts commanded their ideas for a long time, with a philosophy of weaponry, they always had the idea that it would only be viable to go to other galaxies in search of other civilizations when they were prepared in case a war or something like that happened, and despite dealing with spies on a daily basis, they are the only civilization with Mega Bombs made of dark matter in the entire universe, called by many "the most powerful civilization in the EU", there isn't a being in the universe that doesn't respect them.
				     			</p>
				     			
				     		</div>
				     	</div>
				    </div>
				    
				    <div className="carousel-item ">
				     	<div className="notions--card">
				     		<h2>Splinters</h2>
				     		<div className="notions--card-img">
				     			
				     			<figure>
				     				<img src={SplintersImg} width="200" height="200" alt="Art NFT"/>
				     			</figure>
				     			
				     			<p>
				     				For having an "artistic culture" different from other civilizations, the Splinter - Robot relationship was not seen in any way as something harmful, with a very young contact with robots, was the first civilization to develop and have contact with hyper intelligent robots, and were also the only ones to have a mixed civilization between Splinter and Robots, with equal rights for both, having hyper intelligent robots with great influence in social decisions, although they were the last civilization to be considered "intelligent", they evolved very quickly, and together with the Sloggers, were the first civilization to maintain intergalactic contact and share information, for the experts are the most intelligent civilization in the entire universe.
				     			</p>
				     		</div>
				     	</div>
				    </div>

				     <div className="carousel-item ">
				     	<div className="notions--card">
				     		<h2>Leggesters</h2>
				     		<div className="notions--card-img">
				     			
				     			<figure>
				     				<img src={LeggstersImg} width="200" height="200" alt="Art NFT"/>
				     			</figure>
				     			<p>
				     				For a long time they believed to be alone in the Universe, and during this time they developed their civilization on the idea of acquiring resources and riches, everything on their first planet was done in exchange for favors and leisure through wealth, with this as a basis, they focused all their goals and raw materials on obtaining resources, Even communicating through radio waves, they were the first civilization to mine small asteroids, and when Sloggers, Amphers and Splinters were just beginning to understand this process, Leggsters were already able to displace and mine planets as they wished, Leggsters have intergalactic trade currencies that many say are "infinite".
				     			</p>
				     		</div>
				     	</div>
				    </div>
				</div>
				  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Previous</span>
				  </button>
				  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="visually-hidden">Next</span>
				  </button>

				</div>
			</Section>
			
	
			<Section id={'benefits'} className={'color-text1'} >
				
	    		<h1>Benefits</h1>
	    		<p>
	    			- The Slice War Metaverse is a set of 4 collection that will be released periodically, the Slogger collection will be the first to be released, and securing your slice of this metaverse will now give you access too puchase rare avatars from future limited collections to the holders of Sloggers.
	    		</p>
	    		<p>
	    			- Owning an NFT artwork from The Slice War Metaverse means you will own a Voxel-based 3D Avatar for your enjoyment in the Metaverse
	    		</p>
				<p>
					- Owning ownership of any NFT Art from any collection in The Slice War Metaverse may, in the future, give you VIP treatment and influence in purchasing NFT from collections other than The Slice War Metaverse, as well as guaranteed spots on the WhiteLists
				</p>
				<p>
					- Owning any NFT artwork from any Slice War Metaverse collection will give you access to exclusive raffles and prizes
				</p>

			
				<div className="benefits--img">
					<img src={BenefitsImg} alt="benefits avatar"/>
				</div>


				<ButtonMint/>
			</Section>

			
			<Section id={'timeline'} className={'timeline color-text'}>
				
				<h1>Road Map</h1>
				<VerticalTimeline className="color-text1">
					  <VerticalTimelineElement
					    className="vertical-timeline-element--work"
					    contentStyle={{ background: "#ccc" }}
					    // contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
					    
					    iconStyle={{ background: '#ccc' }}
					     
					  >
					    {/*<h3 className="vertical-timeline-element-title">Creative Director</h3>
					    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
					    <p>
					      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
					    </p>*/}
					    <time className="vertical-timeline-element-title">Q2 - 2022</time> 
				        <p>
				        	- Launch of the first 10,000 NFTs from the <span className="strong">Sloggers</span> collection<br/>
							- Raffle of 3 exclusive NFTs from the <span className="strong">Sloggers</span> collection<br/>
							- Start creating a <span className="strong">The Slice War</span> game

				        </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					   className="vertical-timeline-element--work"
					    contentStyle={{ background: "#ccc" }}
					    // contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
					    
					    iconStyle={{ background: '#ccc' }}
					  >
					    <time className="vertical-timeline-element-title">Q3 - 2022</time>
				        <p>
				        	- Team expansion for new creations and better performance<br/>
							- Launch of the <span lang="strong">PizzaSlice</span> Token<br/>
							- Creation of all 3D NFTs
				        </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					   className="vertical-timeline-element--work"
					    contentStyle={{ background: "#ccc" }}
					    // contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
					    
					    iconStyle={{ background: '#ccc' }}
					  >
					    <time className="vertical-timeline-element-title">Q4 - 2022</time> 
				        <p>
				        	- Collabs with new projects<br/>
							- Charitable action for institutions that care for lost and abandoned animals<br/>
							- Marketplace for real The Slice War Metaverse items that can be purchased with PizzaSlice Token
				        </p>

					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					   className="vertical-timeline-element--work"
					    contentStyle={{ background: "#ccc" }}
					    // contentArrowStyle={{ borderRight: '7px solid  #ccc' }}
					    
					    iconStyle={{ background: '#ccc' }}
					  >
					    <time className="vertical-timeline-element-title">Q1 - 2023</time>
				        <p>
							- Sending a 3D miniature of each NTFs to their owners<br/>
							- Sponsor large teams for greater visibility<br/>
							- Marketing of <span className="strong">The Slice War Metaverse</span> interactive toys
				        </p>
					  </VerticalTimelineElement>
				</VerticalTimeline>
			</Section>
			
			<Section id={'team'} className={'color-text1'}>
				
				<h1>Team</h1>
				
				 <div className="team-container">
					<div className="card">
					  <img src={Makai} width="100" className="card-img-top" alt="Team member"/>
					  <div className="card-body">
					  	<h2><span className="strong">Makai</span> - Economy And Finance (CEO)</h2>
					  </div>
					</div>
					<div className="card">
					  <img src={Hidden} width="100" className="card-img-top" alt="Team member"/>
					  <div className="card-body">
					  	<h2><span className="strong">Hidden</span> - Information Technology PhD (CIO)</h2>
					  </div>
					</div>
					<div className="card">
					  <img src={Luffe} width="100" className="card-img-top" alt="Team member"/>
					   <div className="card-body">
					  	<h2><span className="strong">Luffe</span> - Marketing (CMO)</h2>
					  </div>
					</div>

					<div className="card">
					  <img src={Maxtt} width="100" className="card-img-top" alt="Team member"/>
					   <div className="card-body">
					  	<h2><span className="strong">Maxtt</span> - Social Media</h2>
					  </div>
					</div>

					<div className="card">
					  <img src={Previem} width="100" className="card-img-top" alt="Team member"/>
					  <div className="card-body">
					  	<h2><span className="strong">Previem</span> - Business Administration (COO)</h2>
					  </div>
					</div>

					<div className="card">
					  <img src={Rose} width="100" className="card-img-top" alt="Team member"/>
					  <div className="card-body">
					  	<h2><span className="strong">Rose</span> - Pixel Artist</h2>
					  </div>
					</div>

					<div className="card">
					  <img src={Slade} width="100" className="card-img-top" alt="Team member"/>
					  <div className="card-body">
					  	<h2><span className="strong">Slade</span> - 3D Professional Artist</h2>
					  </div>
					</div>
				</div>
			</Section>
	
			<Section id={'faq'}>
				
				<h1>FAQ</h1>
				<div className="accordion" id="accordionExample">
				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingOne">
				      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				        - Why 10,000 NFTs in each collection?
				      </button>
				    </h2>
				    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				        10,000 is a very special number; The Slice War takes place in the year 9.999 and for many superstitious people the year 10000 is the year of the end of intelligent civilizations.
				      </div>
				    </div>
				  </div>
				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingTwo">
				      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				        - When is the pre-sale?
				      </button>
				    </h2>
				    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				        The pre-sale will take place on the day xx/xx
				      </div>
				    </div>
				  </div>
				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingThree">
				      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				        - When is the public sale?
				      </button>
				    </h2>
				    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				        The public sale will be made on the day xx/xx, 1 day after the pre-sale
				      </div>
				    </div>
				  </div>

				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingFour">
				      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
				        - Where can I get The Slice War Metaverse NFT?
				      </button>
				    </h2>
				    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				        Until pre-sale you can purchase your The Slice War Metaverse NFT on the Official Website, after pre-sale all The Slice War Metaverse NFT and its collections will be available for purchase and sale on OpenSea (opensea.io)
				      </div>
				    </div>
				  </div>


				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingFive">
				      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
				        - Where can I see my NFT?
				      </button>
				    </h2>
				    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				        You will be able to view your NFT The Slice War Metaverse by logging into your Opensea account (opensea.io)
				      </div>
				    </div>
				  </div>



				  <div className="accordion-item">
				    <h2 className="accordion-header" id="headingSix">
				      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
				       - Does owning a The Slice War Metaverse NFT grant full IP rights to the holders?
				      </button>
				    </h2>
				    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
				      <div className="accordion-body">
				       Absolutely, having a Boujee Leopard’s NFT grants you 100% creative and commercial rights.
				      </div>
				    </div>
				  </div>
				</div>
			</Section>
			
			<div className="communit-call">
					<h2>Join our Community</h2>
					<div  className="social-footer-icon" >
						<div>
							<a href="#"><img src="./src/assets/discord-brands.svg" width="40"/></a>
						</div>
						{/*<!-- <div >
							<a href="#"><img src="./src/assets/openseaLogo.png" width="40"></a>
						</div> -->*/}
						<div >
							<a href="#"><img src="./src/assets/twitter-brands.svg" width="40"/></a>
						</div>
					</div>
				</div>
		</main>	
	)
}

export default Main
