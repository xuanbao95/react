import React, { Component } from 'react'

export default class BaiTapVongLap extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         productList: [
    //             { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
    //             { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
    //             { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
    //             { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    //         ]
    //     }
    // }

    productList = [
        { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
        { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
        { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
        { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    ]

    //viết phương thức render các sản phẩm thành các tag tr
    renderTable = () => {
        return this.productList.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="bg-dark p-5 text-center text-white">Demo Vòng Lặp</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá Sản Phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
