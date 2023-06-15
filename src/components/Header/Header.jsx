import React, { useState } from 'react';
import './Header.scss';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';
import { Link } from "react-router-dom";
import { nav_links } from "../../data/NavLinks";

function Header() {

  const [menu, setMenu] = useState('');
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleMenuClick = () => {
    if (menu === 'is-active') {
      setMenu('')
    } else setMenu('is-active')
  }

  const handleSignInClick = () => {
    if (signUp === true) {
      setSignUp(signUp => !signUp)  
    }

    if (signIn === true) {
      setSignIn(signIn => !signIn)
    } else setSignIn(true)
  }
  
  const handleSignUpClick = () => {
    if (signIn === true) {
      setSignIn(signIn => !signIn)
    }
    
    if (signUp === true) {
      setSignUp(signUp => !signUp)
    } else setSignUp(true)
  }

  return (
    <>
      <SignIn isOpen={signIn} handleClose={handleSignInClick} handleSignUp={handleSignUpClick}/>
      <SignUp isOpen={signUp} handleClose={handleSignUpClick} handleSignIn={handleSignInClick}/>

      <header className="nav">
        <div className={`nav__list ${menu}`}>
            <button className={`nav__menu ${menu}`} onClick={handleMenuClick}>
              <img className="menu-burger" src="assets/icon/menu.svg" alt="menu-icon"/>
            </button>
            <h1 className="nav__logo">Artsy Collective</h1>
            
            <div className={`nav__mobile ${menu}`}>
              <div className="nav__m-list">
                { nav_links.map((nav_link, index) => (
                  <div className="nav__m-link" key={index}>
                    <Link to="/" title="nav_link" className="nav__ml-title">{nav_link.title}</Link>
                    <p className="nav__ml-desc">{nav_link.desc}</p>
                    <img className="nav__ml-img" src={nav_link.img} alt="menu-icon"/>
                  </div>
                ))}
              </div>
            </div>
            
            { nav_links.map((nav_link, index) => (
              <div className="nav__item" key={index}>
                <div className="nav__link">
                  <Link to="/" title="nav_link" className="nav__link-title">{nav_link.title}</Link>
                  <p className="nav__link-desc">{nav_link.desc}</p>
                </div>
                <div className="nav__content">
                  <div className="nav__c-row">
                    <div className="nav__c-column">
                      <p className="nav__c-title">Shop By Categories</p>
                      <div className="nav__c-link">
                        <Link to="/productlist" title="view-all">View All</Link>
                        <Link to="/" title="rings">Rings</Link>
                        <Link to="/" title="bracelet">Bracelets</Link>
                        <Link to="/" title="necklace">Necklaces</Link>
                        <Link to="/" title="earings">Earrings</Link>
                      </div>
                    </div>
                    <div className="nav__c-column">
                      <p className="nav__c-title">Featured Collections</p>
                      <div className="nav__c-link">
                        <Link to="/" title="coco-crush">Coco Crush</Link>
                        <Link to="/" title="camelia">Camélia</Link>
                        <Link to="/" title="ultra">Ultra</Link>
                        <Link to="/" title="comete">Comète</Link>
                        <Link to="/" title="ruban">Ruban</Link>
                        <Link to="/" title="baroque">Baroque</Link>
                        <Link to="/" title="soleil">Soleil de Artsy</Link>
                      </div>
                    </div>
                    <div className="nav__c-column">
                      <div className="nav__c-list">
                        <div className="nav__c-item">
                          <img src="assets/coco.jpg" className="nav__c-img" alt="img"/>
                          <p className="nav__c-desc">Coco Crush Ring</p>
                        </div>
                        <div className="nav__c-item">
                          <img src="assets/camelia.jpg" className="nav__c-img" alt="img"/>
                          <p className="nav__c-desc">Camélia Bracelet</p>
                        </div>
                        <div className="nav__c-item">
                          <img src="assets/ruban.jpg" className="nav__c-img" alt="img"/>
                          <p className="nav__c-desc">Ruban Collection</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className={`nav__icon ${menu}`}>
              <button className="nav__icon-item" onClick={handleSignInClick}>
                <img src="assets/icon/user.svg" className="nav__icon-user" alt="user-icon"/>
              </button>
              <Link to="/" title="icon-cart" className="nav__icon-item">
                <img src="assets/icon/shopping-cart.svg" className="nav__icon-cart" alt="user-icon"/>
              </Link>
            </div>
            <button className={`nav__close ${menu}`} onClick={handleMenuClick}>
              <img src="assets/icon/close.svg" alt="menu-close"/>
            </button>
        </div>
      </header>
    </>
  )
}

export default Header