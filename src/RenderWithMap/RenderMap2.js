import React, { Component } from 'react'

export default class RenderMap2 extends Component {
    productList = [
        { id: 1, name: "iphone", price: 1000, img: "http://picsum.photos/200/200" },
        { id: 2, name: "iphone x", price: 2000, img: "http://picsum.photos/200/200" },
        { id: 3, name: "iphone xs", price: 3000, img: "http://picsum.photos/200/200" },
        { id: 4, name: "iphone xs max", price: 4000, img: "http://picsum.photos/200/200" },
    ];
    renderProduct = () => {
        return this.productList.map((product, index) => {
            return <div className="col-3" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>

            </div>
        })
    }

    renderTable = () => {
        return this.productList.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img className="card-img-top" src={product.img} alt={product.name} /></td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
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
