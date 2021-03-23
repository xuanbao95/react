import React, { Component } from 'react'

export default class Cart extends Component {
    renderGioHang = () => {
        let { gioHang, deleteProduct, tangGiamSoLuong } = this.props;
        return gioHang.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.maSP}</td>
                    <td>{product.tenSP}</td>
                    <td><img src={product.hinhAnh} alt="123" width="50" /></td>
                    <td>{product.giaBan.toLocaleString()}</td>
                    <td>
                        <button onClick={() => tangGiamSoLuong(product.maSP, -1)} className="btn-btn-primary">-</button>
                        {product.soLuong}
                        <button onClick={() => tangGiamSoLuong(product.maSP, 1)} className="btn-btn-primary">+</button>
                    </td>
                    <td>{(product.soLuong * product.giaBan).toLocaleString()}</td>
                    <td><button onClick={() => deleteProduct(product.maSP)} className="btn btn-danger">xóa</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Gio hàng(1)</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ma sp</th>
                            <th>ten sp</th>
                            <th>hình ảnh</th>
                            <th>don gia</th>
                            <th>số lượng</th>
                            <th>thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
