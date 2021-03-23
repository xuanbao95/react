import React, { Component } from 'react'
import { connect } from 'react-redux'
class SanPhamRedux extends Component {
    render() {
        let { arr } = this.props
        return (

            <div className="card text-left">
                <img className="card-img-top" src={arr.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{arr.tenSP}</h4>
                    <button className="btn btn-success">Xem chi tiết</button>
                    <button onClick={() => { this.props.themGioHang(arr) }} className="btn btn-success">thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}

//xây dựng hàm tạo ra props là hàm xử lý sự kiện=> đưa dử liệu lên store
const mapDispatchToProps = (dispatch) => {
    //tạo hàm xử lý sự kiện đưa lên reducer
    return {
        themGioHang: (product) => {
            let productCart = {
                maSP: product.maSP,
                tenSP: product.tenSP,
                soLuong: 1,
                giaBan: product.giaBan,
                hinhAnh: product.hinhAnh,
            };
            //tạo action đưa dử liệu lên reducer
            let action = {
                type: "THEM_GIO_HANG",// bắt buộc phải có type
                productCart: productCart,
            }
            //tạo action xong phải truyền vào hàm dispatch để truyen duer lieuj lên store
            dispatch(action);
        }
    }

}

export default connect(null, mapDispatchToProps)(SanPhamRedux)