import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachGioHang extends Component {

    render() {
        let { productList, themGioHang } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {productList.map((product, index) => {
                        return <div className="col-4" key={index} >
                            <SanPhamGioHang themGioHang={themGioHang} product={product} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}
