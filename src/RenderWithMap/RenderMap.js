import React, { Component } from 'react'

export default class RenderMap extends Component {

    productList = [
        { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
        { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
        { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
        { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    ]
    renderProduct = () => {
        // const arrDivProduct = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     // mỗi lần duyệt lấy ra 1 object trong mảng
        //     let product = this.productList[i];
        // const jsxDivProduct = <div className="col-3">
        //     <div className="card text-left">
        //         <img className="card-img-top" src={product.img} alt="123" />
        //         <div className="card-body">
        //             <h4 className="card-title">{product.name}</h4>
        //             <p className="card-text">{product.price}</p>
        //         </div>
        //     </div>

        // </div>;
        //     arrDivProduct.push(jsxDivProduct);
        // }
        let contentJSX = this.productList.map((product, index) => {
            // return <div key={index} className="col-3">
            //     <div className="card text-left">
            //         <img className="card-img-top" src={product.img} alt="123" />
            //         <div className="card-body">
            //             <h4 className="card-title">{product.name}</h4>
            //             <p className="card-text">{product.price}</p>
            //         </div>
            //     </div>
            // </div>;
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} atl="123" width="50"></img></td>
            </tr>
        });


        return contentJSX;//[<div></div>,<div></div>]
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProduct()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
