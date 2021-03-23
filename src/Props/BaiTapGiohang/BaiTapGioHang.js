import React, { Component } from 'react'
import DanhSachGioHang from './DanhSachGioHang'
import ModalGioHang from './ModalGioHang'
import phoneData from "../../Data/phoneData.json"
export default class BaiTapGioHang extends Component {
    state = {
        gioHang: [{ "id": 1, "tenSP": "vinsmart live", "price": 5700000, "img": "./img/vsphone.jpg", "soLuong": 1 }]
    }
    themGioHang = (sp) => {
        //b1: từ  sp được chọn tạo ra sp giỏ hàng
        let spGioHang = { id: sp.id, tenSP: sp.tenSP, price: sp.price, img: sp.img, soLuong: 1 };
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.id === spGioHang.id)
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    xoaGioHang = (id) => {
        let xoaHang = [...this.state.gioHang];
        let index = xoaHang.findIndex(sp => sp.id === id)
        if (index !== -1) {
            xoaHang.slice(index, 1)
        }
        this.setState({
            gioHang: xoaHang
        })
    }

    render() {
        let tongSoLuong = this.state.gioHang.reduce((tsl, sp, index) => {
            return tsl += sp.soLuong
        }, 0)

        return (
            <div>
                <ModalGioHang xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right" data-toggle="modal" data-target="#modelId"><span style={{ cursor: "pointer" }}>Giỏ hàng ({tongSoLuong})</span></div>
                <DanhSachGioHang themGioHang={this.themGioHang} productList={phoneData} />
            </div>
        )
    }
}
