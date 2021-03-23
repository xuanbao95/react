import React, { Component } from 'react'
import SanPham2 from './SanPham2'

export default class DanhSachSanPham2 extends Component {
    productList = [
        { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
        { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
        { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
        { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    ]
    renderProduct = () => {
        return this.productList.map((product, index) => {
            return <div className="col-3">
                <SanPham2 product={product} />
            </div>
        })
    }
    render() {
        return (
            <div className="row container">
                {this.renderProduct()}
            </div>
        )
    }
}
