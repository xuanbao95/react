import React, { Component } from 'react'

export default class BTChonXe2 extends Component {
    state = {
        img: `./img/car/products/black-car.jpg`
    }

    changColor = (newColor) => {
        this.setState({
            img: `./img/car/products/${newColor}-car.jpg`
        })
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.img} alt="" />
                    </div>
                    <div className="col-6">
                        <button onClick={() => {
                            this.setState({
                                img: `./img/car/products/black-car.jpg`,
                            })
                        }}>black car</button>
                        <button onClick={() => {
                            this.setState({
                                img: `./img/car/products/red-car.jpg`
                            })
                        }}>red car</button>
                        <button onClick={() => {
                            this.setState({
                                img: `./img/car/products/steel-car.jpg`
                            })
                        }}>steel car</button>
                        <button onClick={() => {
                            this.setState({
                                img: `./img/car/products/silver-car.jpg`
                            })
                        }}>silver car</button>
                    </div>
                </div>
            </div >
        )
    }
}
