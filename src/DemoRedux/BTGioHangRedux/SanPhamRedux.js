import React, { Component } from 'react'
import { connect } from 'react-redux'
class SanPhamRedux extends Component {
    render() {
        console.log(this.props);
        let { arr } = this.props;
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
const mapDispatchToProps = (dispatch) => {//dispatch giống phương thức setState trong reactClass component
    //tạo hàm xử lý sự kiện đưa lên reducer
    return {
        themGioHang: (product) => {
            //tạo ra sản phẩm giỏ hàng
            let productCart = {
                maSP: product.maSP,
                tenSP: product.tenSP,
                soLuong: 1,
                giaBan: product.giaBan,
                hinhAnh: product.hinhAnh,
            };
            //tạo action đưa dử liệu lên reducer
            let action = {
                type: "THEM_GIO_HANG",// bắt buộc phải có type để reducer nhận biến giá trị xử lý
                productCart: productCart,// dử liệu mới muốn gởi đi
            }
            //tạo action xong phải truyền vào hàm dispatch để truyen dử liệu lên store
            dispatch(action);
        }
    }

}

export default connect(null, mapDispatchToProps)(SanPhamRedux)