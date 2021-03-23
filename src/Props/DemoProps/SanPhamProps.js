import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {
        //this.props dùng để nhận giá trị từ component cha truyền vào
        //this.props ko gán lại giá trị đc

        //es5
        let product = this.props.sp;
        //es6 let {product}=this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={product.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
