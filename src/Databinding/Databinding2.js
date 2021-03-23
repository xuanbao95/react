import React, { Component } from 'react'

export default class Databinding2 extends Component {
    sinhVien = {
        ma: 1,
        ten: "baobao"
    }
    renderSinhVien = () => {
        let sinhVien = {
            ma: 2,
            ten: "baobao"
        }
        return <div className="card text-left">
            <img className="card-img-top" src="holder.js/100px180/" alt />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ma}</h4>
                <p className="card-text">{sinhVien.ten}</p>
            </div>
        </div>

    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.sinhVien.ma}</li>
                    <li>{this.sinhVien.ten}</li>
                </ul>
                {this.renderSinhVien()}
            </div>
        )
    }
}
