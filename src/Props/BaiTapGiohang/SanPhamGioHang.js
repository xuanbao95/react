import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        let { product, themGioHang } = this.props;
        return (
            <div>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={product.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <button onClick={() => themGioHang(product)} className="btn btn-danger" data-toggle="modal" data-target="#modelId">Thêm giỏ hàng</button>
                    </div>
                </div>

            </div>
        )
    }
}

