import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="titleTag">Delicious</h1>
                <h4>THE BEST FOOD BLOG ON THE WEB</h4>
                <img src={this.props.logo} />
            </div>
        );
    }
}