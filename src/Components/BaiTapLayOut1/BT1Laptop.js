import React, { Component } from 'react'

export default class BT1Laptop extends Component {
    producListLaptop = [
        { id: 1, name: "MACBOOK", img: "./img/lt_macbook.png", price: 1000 },
        { id: 2, name: "ASUS ROG", img: "./img/lt_rog.png", price: 1000 },
        { id: 3, name: "HP OMEN", img: "./img/lt_hp.png", price: 1000 },
        { id: 4, name: "LENOVO THINKPAD", img: "./img/lt_lenovo.png", price: 1000 },
    ]

    renderProductLaptop = () => {
        return this.producListLaptop.map((product, index) => {
            return <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={product.img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{product.name}</h4>
                            <p className="card-text">{product.price}</p>
                            <a href="#" className="btn btn-primary">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        return (
            <div>
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        {this.renderProductLaptop()}
                    </div>
                </section>

            </div>
        )
    }
}
