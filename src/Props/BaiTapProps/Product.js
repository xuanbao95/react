import React, { Component } from 'react'
import Cart from './Cart'
import ProductItem from './ProductItem'

export default class Product extends Component {
    /**
     * xác đinh state:
     *  +đặt state tại nơi chứa giao diện trực tiếp hoặc gián tiếp
     *  +đặt state tại nơi chứa nút xử lý trực tiếp hoặc gián tiếp
     */

    state = {
        detail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        gioHang: [{
            maSP: 1,
            tenSP: "VinSmart Live",
            soLuong: 1,
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg",
        }]

    }
    arrProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]
    renderProduct = () => {
        return this.arrProduct.map((product, index) => {
            return (
                // <div className="col-4">
                //     <div className="card text-left">
                //         <img className="card-img-top" src={product.hinhAnh} alt />
                //         <div className="card-body">
                //             <h4 className="card-title">{product.tenSP}</h4>
                //             <button onClick={() => {
                //                 this.viewDetail(product)
                //             }} className="btn btn-success">Xem chi tiết</button>
                //         </div>
                //     </div>
                // </div>
                <ProductItem themGioHang={this.themGioHang} xemChiTiet={this.xemChiTiet} arr={product} key={index} />
            )
        })
    }
    //hàm xử lý sự kiện cho nút xem chi tiết
    xemChiTiet = (sp) => {
        this.setState({
            detail: sp
        })
    }
    themGioHang = (sp) => {
        //b1: từ sản phẩm được click tạo ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: sp.maSP,
            tenSP: sp.tenSP,
            giaBan: sp.giaBan,
            soLuong: 1,
            hinhAnh: sp.hinhAnh
        }
        //b2: xử lý thêm giỏ hàng
        let gioCapNhat = [...this.state.gioHang];
        //kiểm tra xem sản phẩm đẫ tồn tại hay chưa
        let index = gioCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            gioCapNhat[index].soLuong += 1;
        } else {
            gioCapNhat.push(spGioHang);
            // gioCapNhat=[...gioCapNhat,spGioHang]

        }
        //b3: sét lại state sau khi xử lý
        this.setState({
            gioHang: gioCapNhat
        })
    }
    deleteProduct = (maSP) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
            console.log(gioHangCapNhat);
            // cập nhật lại state sau khi xóa
            this.setState({
                gioHang: gioHangCapNhat
            })
        }


    }
    // plusCart = (sp) => {
    //     let spGioHang = {
    //         maSP: sp.maSP,
    //         tenSP: sp.tenSP,
    //         giaBan: sp.giaBan,
    //         soLuong: 1,
    //         hinhAnh: sp.hinhAnh
    //     }
    //     let plus = [...this.state.gioHang];
    //     let index = plus.findIndex(sp => sp.maSP === spGioHang.maSP);
    //     if (index !== -1) {

    //         sp.soLuong += 1;
    //         console.log(plus);
    //     }
    //     this.setState({
    //         gioHang: plus
    //     })
    // }
    // minusCart = (maSP) => {
    //     let plus = [...this.state.gioHang];
    //     let index = plus.findIndex(sp => sp.maSP === maSP);
    //     if (index.soLuong === 1) {
    //         plus.splice(index, 1)
    //     }
    //     if (index !== -1) {
    //         plus[index].soLuong -= 1;

    //         console.log(plus);

    //     }




    //     this.setState({
    //         gioHang: plus
    //     })
    // }
    tangGiamSoLuong = (maSP, soLuong) => {
        console.log(maSP, soLuong);
        let tangGiam = [...this.state.gioHang];
        let index = tangGiam.find(sp => sp.maSP === maSP)
        if (index) {
            index.soLuong += soLuong;
            // if (index.soLuong === 0) {
            //     tangGiam.splice(index, 1)
            // }
        }
        if (index.soLuong < 1) {
            alert("số lượng tối thiểu là 1");
            index.soLuong -= soLuong;
        }

        this.setState({
            gioHang: tangGiam
        })
    }
    //hàm xử lý sự kiện cho nút xem chi tiết
    // viewDetail = (itemClick) => {
    //     this.setState({
    //         detail: itemClick
    //     })
    // }

    render() {
        let { detail } = this.state
        return (
            <div className="container">
                <Cart tangGiamSoLuong={this.tangGiamSoLuong} deleteProduct={this.deleteProduct} gioHang={this.state.gioHang} />
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>{detail.tenSP}</h3>
                        <img src={detail.hinhAnh} alt="123" />
                    </div>
                    <div className="col-8">
                        <h3>Thông sô sản phẩm</h3>
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{detail.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>hệ điều hành</th>
                                    <th>{detail.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>camera trước</th>
                                    <th>{detail.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>camera sau</th>
                                    <th>{detail.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{detail.ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{detail.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
