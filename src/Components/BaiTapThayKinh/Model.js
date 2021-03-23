import React, { Component } from 'react'
import "./model.css"
export default class Model extends Component {

    render() {
        let { tryGlass, model } = this.props;
        return (
            <div className="container">

                <div className="card text-left" >
                    <div className="model" style={{ backgroundImage: `url("${model.url}")` }} >
                        <img className="card-img-top" src={tryGlass.url} alt="123" />
                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{tryGlass.name}</h4>
                        <p className="card-text">{tryGlass.desc}</p>
                    </div>
                </div>

            </div>
        )
    }
}
