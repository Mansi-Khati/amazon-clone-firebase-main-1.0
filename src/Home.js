import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="86234982"
            title="Colleen Hoover's November"
            image="https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg"
            price={1199}
            rating={5}
          />
          <Product
            id="109724022"
            title="Colleen Hoover's Ugly Love"
            image="https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL127_SR127,127_.jpg"
            price={900}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="Beelink GTR5 5900HX Ryzen Mini PC"
            image="https://m.media-amazon.com/images/I/61QQT8i-p-L._AC_UY218_.jpg"
            price={40099}
            rating={5}
          />
          <Product
            id="02348244"
            title="Alienware AURORA R15 Gaming-Dekstop"
            image="https://m.media-amazon.com/images/I/71k9P6w0V1L._AC_UL320_.jpg"
            price={98895}
            rating={4}
          />

          <Product
            id="402973242"
            title="HP Pavilion 14"
            image="https://images-na.ssl-images-amazon.com/images/I/41tzuaDZOPL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            price={89999}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="9873043"
            title="HP 250 G9 Notebook PC"
            image=" https://m.media-amazon.com/images/I/81Grc85hfiL._AC_UY218_.jpg"
            price={69709}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
