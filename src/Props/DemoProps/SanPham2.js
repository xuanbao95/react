import React, { Component } from 'react'

export default class SanPham2 extends Component {
    render() {
        let { img, name, price } = this.props.product
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
