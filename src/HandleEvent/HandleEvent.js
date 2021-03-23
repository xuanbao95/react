import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handle = () => {
        alert("baobao")
    }
    show = (name) => {
        alert(`hello ${name}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.handle}>click me</button>
                <button onClick={() => {
                    this.show("baobao")
                }}>show mess</button>
            </div>
        )
    }
}
