import React from 'react';
import './Homepage.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {collections} from '../../data/Collection';
import {discovers} from '../../data/Discover';
import CardCollection from '../../components/CardCollection/CardCollection';
import CardDiscover from '../../components/CardDiscover/CardDiscover';

function Homepage() {

  return (
    <div>
        <Header />
        <section className="camelia">
          <div className="camelia__list">
            <div className="camelia__item">
              <h2 className="camelia__title">Collection Camelia</h2>
              <p className="camelia__desc">More than a flower, the Artsy camellia is an inspiration. Its geometric curves lend themselves to an endless variety of styles, from the most naturalistic to the most abstract.</p>
              <div className="camelia__btn">
                <Button className="btn btn__white">See Camelia Collection</Button>
              </div>
            </div>
            <div className="camelia__img-wrap">
              <img className="camelia__img" src="assets/collection-camelia.jpg" alt="collection-img"/>
            </div>
          </div>
        </section>
        <div className="main container">
          <section className="collection">
            <h2 className="collection__title">Leaf Pendant Collections</h2>
            <p className="collection__desc">Style your modest wear with our understated picks</p>
            <div className="collection__btn">
              <Button className="btn btn__white">
                Shop Now
              </Button>
            </div>

            <div className="collection__list">
              <div className="collection__list-wrap container">
                { collections.map((collection, index) => (
                  <div className="collection__item" key={index}>
                    <CardCollection img={collection.img} title={collection.title}/>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="discover">
            <h2 className="discover__title">Discover More</h2>
            <div className="discover__list">
              { discovers.map((discover, index) => (
                <div className="discover__item" key={index}>
                  <CardDiscover img={discover.img} title={discover.title} desc={discover.desc} link={discover.link}/>
                </div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage