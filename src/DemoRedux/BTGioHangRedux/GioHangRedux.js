import React, { Component } from 'react'
//kết nooisn component với store từ redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.maSP}</td>
                    <td>{product.tenSP}</td>
                    <td><img src={product.hinhAnh} alt="" width="50px" /></td>
                    <td>{product.giaBan}</td>
                    <td>
                        <button onClick={() => this.props.tangGiamSL(index, -1)}>-</button>
                        {product.soLuong}
                        <button onClick={() => this.props.tangGiamSL(index, 1)}>+</button>
                    </td>
                    <td>{product.soLuong * product.giaBan}</td>
                    <td><button onClick={() => this.props.xoaGioHang(index)} className="btn btn-danger">xóa</button></td>
                    <td><button onClick={() => this.props.xoaGioHangMaSP(product.maSP)} className="btn btn-danger">xóa</button></td>
                </tr>
            )
        })
    }
    render() {
        console.log(this.props);
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

const mapStateToProps = (state) => {//ghi chú state chính là reducer(state tổng của ứng dụng)
    //hàm này tạo ra props từ state của redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index,
            }
            dispatch(action);
        },
        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MASP',
                maSP,
            }
            dispatch(action);
        },
        tangGiamSL: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM',
                index,
                tangGiam,
            }
            dispatch(action);
        }
    }
}
//biến đổi GioHangRedux thành GioHangRedux có kết nối redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)