import React, { Component } from 'react'

export default class HandleEvent2 extends Component {
    handle = () => {
        alert("hello")
    }
    showMess = (mess) => {
        alert(`hello ${mess}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.handle}>clickMe</button>
                <button onClick={() => {
                    this.showMess("baobao")
                }}>show</button>
            </div>
        )
    }
}
