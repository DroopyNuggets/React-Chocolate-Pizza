import React, { Component } from "react";

export default class Notepad extends Component {
    render() {
        return(
            <div>
                <img id="notePad" src={this.props.notePad} alt=""/>
            </div>
        )
    }
}