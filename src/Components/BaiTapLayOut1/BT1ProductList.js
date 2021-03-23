import React, { Component } from 'react'
import BT1Product from './BT1Product'

export default class BT1ProductList extends Component {


    renderProduct = () => {
        let { producList, seeDetail } = this.props;
        return producList.map((product, index) => {
            return <div className="col-3" key={index}>
                <BT1Product product={product} seeDetail={seeDetail} />
            </div>
        })
    }

    render() {
        return (
            <div className="bg-dark text-white text-center container-fluid pb-5">
                <h1>Best SMARTPHONE</h1>
                <div className="row text-dark">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
