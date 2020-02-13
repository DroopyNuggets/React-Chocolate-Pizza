import React, { Component } from "react";

export default class MainImage extends Component {
    render() {
        return(
            <div>
                <img className="chocoPizza" src={this.props.pizza} alt=""/>
            </div>
        )
    }
}