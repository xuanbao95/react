import React, { Component } from 'react'
import phoneData from "../../Data/phoneData.json"


export default class DanhSachTruyenSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamChiTiet: phoneData[0]

        }
    }


    renderProduct = () => {
        return phoneData.map((product, index) => {
            return (
                <div className="col-4">
                    <div className="card text-left" key={index}>
                        <img className="card-img-top" src={product.img} alt />
                        <div className="card-body">
                            <h4 className="card-title">{product.tenSP}</h4>
                            <button className="btn btn-success" onClick={() => this.xemCHiTiet(product)}>Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            )

        })
    }
    xemCHiTiet = (product) => {
        this.setState({
            sanPhamChiTiet: product
        })
        console.log(product);
    }
    render() {
        let { sanPhamChiTiet } = this.state;
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tạp truyền function</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.img} alt="12" />
                    </div>
                    <div className="col-6">

                        <table className="table">
                            <tr>
                                <th>màn Hình</th>
                                <th>{sanPhamChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>tên sản phẩm</th>
                                <th>{sanPhamChiTiet.tenSP}</th>
                            </tr>
                            <tr>
                                <th>hệ điều hành</th>
                                <th>{sanPhamChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>camera trước</th>
                                <th>{sanPhamChiTiet.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>camera sau</th>
                                <th>{sanPhamChiTiet.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>ram</th>
                                <th>{sanPhamChiTiet.ram}</th>
                            </tr>
                            <tr>
                                <th>rom</th>
                                <th>{sanPhamChiTiet.rom}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
