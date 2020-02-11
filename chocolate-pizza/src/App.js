import React, { Component } from "react";
// import logo from './logo.svg';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js'
import './App.css';

const myLogo = "../assets/logo.png"
const chocoPizza = "../assets/choco-pizza.png"
const stickyNote = "../assets/list-bg.png"
const printButton = "../assets/pint-icon.png"
const smallLogo = "../assets/small-logo.png"
const profilePic = "../assets/van-pic.png"

export default class App extends Component {
  render() {
    return (
      <div className="webpage">
        <Header id="headerTag" logo={myLogo}/>
        <Body pizza={chocoPizza} notePad={stickyNote} print={printButton}/>
        <Footer profile={profilePic} smallLogo={smallLogo} />
      </div>
    )
  }
  };



