import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from './components/header';
import './App.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description1: '',
      description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }
  render() {
    return (<div className="taro-hub-site">
      <Header />

      <div className="hero-content" id="home">
        <div className="main-content">
          <div className="left-content">
            <div className="title1">TARO HUB</div>
            <div className="title2">TARO HUB</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            <a href="https://taro-hub.metalabs.gg/login" target="_blank" rel="noreferrer" className="btn-purchase">Purchase</a>
          </div>
          <div className="right-content">
            <img src={require('./assets/images/alarm.png').default} alt="alarm" />
          </div>
        </div>
        <button className="btn-mouse">
          <img src={require('./assets/images/mouse.svg').default} alt="mouse" />
          <span>Scroll to learn more</span>
        </button>
      </div>

      <div className="proxies-content" id="proxies">
        <div className="content">
          <div className="left-content">
            <img className="taro-proxies" src={require('./assets/images/taro-proxies.png').default} alt="taro-proxies" />
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            <button className="btn-learnmore">Learn More</button>
          </div>
        </div>
        <div className="border-content position">
            <div className="border-content">
              <img className="image-content" src={require('./assets/images/dashboard.png').default} alt="proxies" />
            </div>
          </div>
      </div>

      <div className="features-content" id="features">
        <div className="features-title">features</div>
        <div className="features-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
        <div className="grid-content">
          <div className="grid-item">
            <div className="title">Custom Release Monitors</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon1.svg').default} alt="icon1" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Bot Restocks</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon2.svg').default} alt="icon2" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Stocks/Crypto</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon3.svg').default} alt="icon3" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Sneaker Investments</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon4.svg').default} alt="icon4" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Release Guides and Setups</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon5.svg').default} alt="icon5" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Bot Flipping</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon6.svg').default} alt="icon6" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Retail Flips</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon7.svg').default} alt="icon7" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">Sports Betting</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon8.svg').default} alt="icon8" />
            </button>
          </div>
          <div className="grid-item">
            <div className="title">24/7 Support</div>
            <div className="description">{this.state.description2}</div>
            <button className="btn-icon">
              <img src={require('./assets/images/icon9.svg').default} alt="icon9" />
            </button>
          </div>
        </div>
      </div>

      <div className="tetimonials-content" id="tetimonials">
        <div className="content-title">TETIMONIALS</div>
        <div className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
        <div className="carousel-content">
          <Swiper slidesPerView={2} loop={true} centeredSlides={true} spaceBetween={20} grabCursor={true} navigation={true}>
            {Array(10).fill('').map((item, index) => <SwiperSlide key={index}>
              <div className="description">{this.state.description2} Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
              <div className="name-content">
                <img src={require('./assets/images/avatar.jpg').default} alt="avatar" />
                <div className="name">Johndoe#0001</div>
              </div>
            </SwiperSlide>)}
          </Swiper>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer">
          <button className="btn-torohub">
            <img src={require('./assets/images/toro-hub.png').default} alt="toro-hub" />
          </button>
          <div className="center">
            <button className="btn-action">Terms & Conditions</button>
            <button className="btn-action">Privacy Policy</button>
          </div>
          <a href="https://twitter.com/TaroHub_" target="_blank" rel="noreferrer" className="btn-action">Twitter</a>
        </div>
        <div className="detail">@ 2021, Taro Hub</div>
      </div>
    </div>);
  }
}

export default App;
