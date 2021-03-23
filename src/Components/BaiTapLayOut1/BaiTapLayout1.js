import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Header from './BT1Header'
import BT1Laptop from './BT1Laptop'
import BT1ProductList from './BT1ProductList'
import BT1Promotion from './BT1Promotion'
import BT1SmartPhone from './BT1SmartPhone'
import Modal from './Modal'

export default class BaiTapLayout1 extends Component {
    state = {
        productDetail: { id: 1, name: "black berry", img: "./img/sp_blackberry.png", price: 1000 }
    }
    producList = [
        { id: 1, name: "black berry", img: "./img/sp_blackberry.png", price: 1000 },
        { id: 2, name: "iphone x", img: "./img/sp_iphoneX.png", price: 1000 },
        { id: 3, name: "note 7", img: "./img/sp_note7.png", price: 1000 },
        { id: 4, name: "vivo", img: "./img/sp_vivo850.png", price: 1000 },
    ]


    seeDetail = (product) => {
        this.setState({
            productDetail: product
        })
    }
    render() {
        return (
            <div>
                <BT1Header />
                <BT1Carousel />
                <BT1ProductList producList={this.producList} seeDetail={this.seeDetail} />
                <BT1Laptop />
                <BT1Promotion />
                <Modal product={this.state.productDetail} />
            </div>
        )
    }
}

