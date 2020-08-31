import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as React from "react";
import './NavbarPantry.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class NavbarPantry extends React.Component {

    state = {
        redirect: null
    }


    render() {
        return(
            this.newNavbar()
        )
    }

    newNavbar() {
        return (
            <div className={'navbar'}>
                <div className={'about navbar-item'} onClick={this.handleAboutRedirect}>
                    <a className={'navbar-text'} href={'#about'}><Link to={'/about'}>About</Link></a>
                </div>

                <div className={'search navbar-item'} onClick={this.handleHomeRedirect}>
                    <a className={'navbar-text'} href={'#home'}><Link to={'/'}>Search</Link></a>
                </div>

                <div className={'github navbar-item'} onClick={this.handleGithubRedirect}>
                    <a className={'navbar-text'} href={'https://github.com/Sami-BG/recipe-browser'}>Github</a>
                </div>

            </div>
        )
    }

    handleAboutRedirect = () => {
        window.location.href = 'about';
    }

    handleHomeRedirect = () => {
        window.location.href = 'home';
    }

    handleGithubRedirect = () => {
        window.location.href = 'https://github.com/Sami-BG/recipe-browser';
    }


}

export default NavbarPantry;