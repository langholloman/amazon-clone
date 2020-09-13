import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product 
              id="12321341" 
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99} 
              image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg' 
              rating={4} 
            />
            <Product 
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hood and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg"
            rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="5203850"
              title="Samsung CHG90 49 32:9 Curved 144 Hz FreeSync HDR LCD Monitor"
              price={999.99}
              image="https://static.bhphoto.com/images/images500x500/1500399545_1345182.jpg"
              rating={4}
            />
            <Product
              id="6907445"
              title="Certified Refurbished Echo (2nd Generation) - Smart speaker with Alexa - Charcoal Fabric"
              price={79.99}
              image="https://images-na.ssl-images-amazon.com/images/I/61yI7vWa83L._AC_SL1000_.jpg"
              rating={3}
            />
            <Product
              id="7907445"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
              price={929.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="8907445"
              title="WindyNation 200 Watt (2pcs 100 Watt) Solar Panel Kit + 1500W Power Inverter + 200ah 12 Volt AGM Deep Cycle Battery Bank for RV, Boat, Off-Grid"
              price={998.83}
              image="https://images-na.ssl-images-amazon.com/images/I/71uqNpip1PL._AC_SL1175_.jpg"
              rating={4}
            />
          </div>

        </div>
      </div>
    );
}

export default Home
