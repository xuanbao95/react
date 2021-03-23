import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    render() {
        let { gioHang, xoaGioHang } = this.props;
        return (

            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ maxWidth: "800px", width: "800px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Mã SP</td>
                                        <td>hình ảnh</td>
                                        <td>tên Sp</td>
                                        <td>so lượng</td>
                                        <td>đơn giá</td>
                                        <td>thành tiền</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang.map((product, index) => {
                                        return (<tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.tenSP}</td>
                                            <td>{product.img}</td>
                                            <td>{product.soLuong}</td>
                                            <td>{product.price}</td>
                                            <td>{product.price * product.soLuong}</td>
                                            <td><button onClick={() => xoaGioHang(product.id)} className="btn btn-danger">xóa</button></td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
