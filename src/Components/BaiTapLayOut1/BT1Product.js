import React, { Component } from 'react'

export default class BT1Product extends Component {



    render() {
        let { product, seeDetail } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={product.img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{product.name}</h4>
                            <p className="card-text">{product.price}</p>
                            <a onClick={() => { seeDetail(product) }} href="#" className="btn btn-primary" data-toggle="modal" data-target="#modelId">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
