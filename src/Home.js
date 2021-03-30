import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className="home__container">

				<img className="home__image"
				 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

				 <div className="home__row">
				 	<Product 
				 		id="82336878"
				 		title='The lean startup: How constant innovation Creates Radically Successful Business Paperback' 
				 		price={2000} 
				 		image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				 		rating={4} 
			 		/>

				 	<Product 
				 		id="82336877"
					 	title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
					 	price={1500} 
					 	image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
					 	rating={4} 
				 	/>
				 </div>
				 <div className="home__row">
				 	<Product 
				 		id="82336876"
					 	title="Samsung LC89798 49' Curved LED Gaming Monitor"
					 	price={1900} 
					 	image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					 	rating={4} 
				 	/>
				 	<Product 
				 		id="82336875"
					 	title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric'
					 	price={1000} 
					 	image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					 	rating={4} 
				 	/>
				 	<Product 
				 		id="82336874"
					 	title='New Applie iPad Pro (12.9-inch, Wi-Fi, 128GB)'
					 	price={4000} 
					 	image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
					 	rating={4} 
				 	/>
				 </div>
				 <div className="home__row">
				 	<Product 
				 		id="82336873"
					 	title="Samsung LC7867JH879 49' Curved Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
					 	price={8000} 
					 	image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
					 	rating={4} 
				 	/>
				 </div>

			</div>
		</div>
	);
}

export default Home ;