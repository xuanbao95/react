import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { arr, xemChiTiet, themGioHang } = this.props;
        //có thể props theo cách này
        // let arr = this.props.arr;
        // let xemChiTiet = this.props.xemChiTiet;
        return (
            <div className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src={arr.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{arr.tenSP}</h4>
                        <button onClick={() => xemChiTiet(arr)} className="btn btn-success">Xem chi tiết</button>
                        <button onClick={() => themGioHang(arr)} className="btn btn-success">thêm giỏ hàng</button>
                    </div>
                </div>
            </div>

        )
    }
}
