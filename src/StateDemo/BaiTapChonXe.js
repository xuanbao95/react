import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: "./img/car/products/black-car.jpg",
    }

    changeColor = (newColor) => {
        this.setState({
            srcImg: `./img/car/products/${newColor}-car.jpg`,
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-4"> Bài tập chọn xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImg} className="w-100" alt="" />
                    </div>
                    <div className="col-6">
                        <button onClick={() => {
                            this.setState({
                                srcImg: "./img/car/products/red-car.jpg",
                            })
                        }} className="btn btn-danger" style={{ marginLeft: "1rem" }}>red car</button>
                        <button onClick={() => {
                            this.setState({
                                srcImg: "./img/car/products/black-car.jpg",
                            })
                        }} className="btn" style={{ backgroundColor: "black", color: "white", marginLeft: "1rem" }}>black car</button>
                        <button onClick={() => {
                            this.setState({
                                srcImg: "./img/car/products/silver-car.jpg",
                            })
                        }} className="btn" style={{ backgroundColor: "silver", color: "white", marginLeft: "1rem" }}>silver car</button>
                        <button onClick={() => {
                            this.setState({
                                srcImg: "./img/car/products/steel-car.jpg",
                            })
                        }} className="btn" style={{ backgroundColor: "gray", color: "white", marginLeft: "1rem" }}>steel car</button>
                    </div>
                </div>
            </div>
        )
    }
}
