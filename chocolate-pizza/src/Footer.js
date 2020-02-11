import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <h2>Vanessa Stevenson</h2>
                <h5>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</h5>
                <img className="profilePic" src={this.props.profile} />
                <img className="smallLogo" src={this.props.smallLogo} />
            </div>
        );
    }
}