import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {
    productList = [
        { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
        { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
        { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
        { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    ]
    renderProduct = () => {
        return this.productList.map((product, index) => {
            return <div className="col-4" key="index">
                <SanPhamProps sp={product} />
            </div>
        })
    }
    //component sử dụng thẻ đc gọi là component cha, thẻ đc sử dụng là component con
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
