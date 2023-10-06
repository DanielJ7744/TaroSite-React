import { CloseRounded, MenuRounded } from '@material-ui/icons';
import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            b_toggle: false
        };
    }

    onClickCloseMenu = () => {
        this.setState({ b_toggle: false });
    }

    render() {
        return (<React.Fragment>
            <div className="header">
                <button className="btn-menu" onClick={() => this.setState({ b_toggle: !this.state.b_toggle })}>
                    <MenuRounded fontSize="large" />
                </button>
                <div className={!this.state.b_toggle ? "header-content" : "header-content left-nav"}>
                    {this.state.b_toggle && <button className="btn-close" onClick={this.onClickCloseMenu}>
                        <CloseRounded fontSize="large" />
                    </button>}
                    <a href="#home" className="item" onClick={this.onClickCloseMenu}>Home</a>
                    <a href="#proxies" className="item" onClick={this.onClickCloseMenu}>Proxies</a>
                    <a href="#features" className="item" onClick={this.onClickCloseMenu}>Features</a>
                    <a href="#tetimonials" className="item" onClick={this.onClickCloseMenu}>Tetimonials</a>
                </div>
                <a href="https://taro-hub.metalabs.gg/login" target="_blank" rel="noreferrer" className="btn-dashboard">Dashboard</a>
                <button className="btn-torohub">
                    <img src={require('../assets/images/toro-hub.png').default} alt="toro-hub" />
                </button>
            </div>
        </React.Fragment>);
    }
}