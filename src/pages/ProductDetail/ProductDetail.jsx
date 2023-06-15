import React, { useState } from 'react';
import './ProductDetail.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import { productdetail_links} from '../../data/Breadcrumb';
import Carousel from '../../components/Carousel/Carousel';
import Accordion from '../../components/Accordion/Accordion';
import RadioColor from '../../components/RadioColor/RadioColor';
import Button from '../../components/Button/Button';

function ProductDetail() {
  let [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity(quantity+=1);
  }

  const handleSubtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity-=1);
    } else alert('Quantity must be greater than zero')
  }
  return (
    <>
    <Header />

    <div className="product-detail">
      <div className="pdetail__title">
        <Breadcrumb>
          { productdetail_links.map((product_link, index) => (
            <Link to={product_link.to} key={index}>
              {product_link.label}
            </Link>
          ))}
        </Breadcrumb>
      </div>
      
      <div className="detail-wrapper">
          <section className="detail-img">
            <Carousel>
              <li>	
                <img className="d-img-first" src="assets/carousel-1.jpg" alt="img-first"/>
              </li>
              <li>	
                <img className="d-img-first" src="assets/carousel-2.jpg" alt="img-first"/>
              </li>
              <li>	
                <img className="d-img-first" src="assets/carousel-3.jpg" alt="img-first"/>
              </li>
            </Carousel>
          </section>

          <section className="detail-desc">

            <div className="detail-head">
              <h2 className="title">Pave Threader Earrings</h2>
              <div className="star-icon">
                <img src="assets/icon/star.svg" alt="icon-star"/>
                <img src="assets/icon/star.svg" alt="icon-star"/>
                <img src="assets/icon/star.svg" alt="icon-star"/>
                <img src="assets/icon/star.svg" alt="icon-star"/>
                <img src="assets/icon/star.svg" alt="icon-star"/>
              </div>
              <p className="price">Rp. 104.300</p>
              <div className="d-detail-wrapper">
                <span className="detail">30% Off</span>
                <span className="detail-2">Rp. 135.590</span>
              </div>
            </div>

            <div className="detail-accordion">
              <div className="accordion__wrapper">
                <Accordion title={'Description'} borderBot={true}>
                  <div className="accordion__content mt-1">
                    <span className="text-1">
                      Elevate your everyday look with these threader earrings designed with pave crystals.<br/>
                    </span>
                    <span className="text-2">
                      Earring Drop Length: 1.32"<br/>
                      Earring Width: 0.11"
                    </span>
                  </div>
                </Accordion>
              </div> 
              <div className="accordion__wrapper">
                <Accordion title={'Material'} borderBot={true}>
                <div className="accordion__content">
                  <div className="text-material">
                    <p className="main">Fabric<span className="submain-2">Metal 100%</span></p>
                    <p className="main">Lining<span className="submain-2">Partial</span></p>
                    <p className="main">Silhouette<span className="submain">Drop</span></p>
                  </div>
                </div>
                </Accordion>
              </div>
              <div className="accordion__wrapper">
                <Accordion title={'Shipping & Returns'} borderBot={true}>
                  <div className="accordion__content">
                    <div className="text-material">
                      <p className="main">Standard Delivery<span className="submain-3">Within 6 - 9 working days</span></p>
                      <p className="main">Express Delivery<span className="submain-4">Within 3 - 5 working days</span></p>
                      <p className="main-3">
                        Find out more about our <span className="submain-5">Returns {'&'} Exchanges</span>. All orders are currently shipped out from Indonesia</p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </section>

          <section className="detail-order">

            <div className="detail-order-wrapper">
              
              <div className="set-order">
                <p className="title">Set Your Qty:</p>
                <div className="btn-set-order">
                  <button className="set-1" onClick={handleSubtractQuantity}>
                    <img src="assets/icon/minus.svg" alt="set-icon"/>
                  </button>
                  <div className="screen-text">
                    <input type="text" className="set-2" value={quantity} readOnly disabled/>
                  </div>
                  <button className="set-1" onClick={handleAddQuantity}>
                    <img src="assets/icon/plus.svg" alt="set-icon"/>
                  </button>
                </div>
              </div>
    
              <div className="pick-order">
                <p className="title">Pick Your Color:  <span className="bolder">GOLD</span></p>
                <div className="c-color-wrapper">
                  <RadioColor color={'color-1'} />
                  <RadioColor color={'color-2'}/>
                </div>
              </div>
    
              <div className="subtotal-order">
                <p className="text-sub">Subtotal:</p>
                <p className="price-sub">Rp. 104.300</p>
              </div>
    
              <div className="btn-order">
                <div className="add">
                  <Button className="btn btn__gold">
                    ADD TO CART
                  </Button>
                </div>
                <div className="order-now">
                  <Button className="btn btn__white">
                    ORDER NOW
                  </Button>
                </div>
              </div>
              
              <div className="ori-order">
                <img className="ori" src="assets/icon/award.svg" alt="icon-ori"/>
                <span className="text">100% Original Product</span>
                <img className="info" src="assets/icon/info.svg" alt="icon-ori"/>
              </div>
            </div>
    
            <div className="footer-order">
              <p className="title">Need help?</p>
              <span className="link">
                Please go to the link here,
                <br/>
                <Link className="link-support" title="support" to="#" onClick={(e) => {
                  window.location.href = "https://support.artsycollective.co.id/";
                  e.preventDefault(); }}>https://support.artsycollective.co.id/</Link>
              </span>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProductDetail