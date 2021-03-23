import React, { Component } from 'react'

export default class Databinding extends Component {


    sinhVien = {
        ma: 1,
        ten: "bảo bảo",

    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: 'bảo bảo',
            img: "https://picsum.photos/1000/1000",
        }
        return <div className="card text-left w-50">
            <img className="card-img-top" src={sinhVien.img} alt />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ten}</h4>
            </div>
        </div>
    }

    //databinding là cơ chế hiển thị dử liệu lên thành phafn giao diện
    render() {
        let name = "cybersoft";
        let product = {
            id: 1,
            name: "iphoneX",
            price: 1000,
            img: "https://picsum.photos/1000/1000"
        }

        let renderProduct = () => {

            //khi nội dung return là components thi phải đc bao phủ bởi 1 thẻ
            return <div>
                <p>{product.name}</p>
            </div>
        }
        return (

            <div>
                <div>
                    <ul>
                        <li>mã sinh viên: {this.sinhVien.ma}</li>
                        <li>tên sinh viên: {this.sinhVien.ten}</li>
                    </ul>
                </div>


                <p id="title">{name}</p>
                <br />
                <div className="card text-left w-50">
                    <img className="card-img-top" src={product.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
                {renderProduct()};
                {this.renderSinhVien()};
            </div>
        )
    }
}
