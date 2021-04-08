import React, { Component } from 'react'
import { render } from 'react-dom/cjs/react-dom.development'
import { connect } from "react-redux"
class TableSinhVien extends Component {
    renderTable = () => {
        let { mangSinhVien } = this.props;
        return mangSinhVien.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maSV}</td>
                    <td>{item.tenSV}</td>
                    <td>{item.sdt}</td>
                    <td>{item.email}</td>
                    <td type="button" onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch({
                            type: "XOA_SV_DI",
                            maSV: item.maSV
                        })
                    }}><button className="btn btn-danger">xóa</button></td>
                    <td type="button" onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch({
                            type: "SUA_SV_DI",
                            sinhVienSua: item
                        })
                    }}><button className="btrn btn-primary">sửa</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">

                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ma sinh vien</th>
                            <th>ten sinh vien</th>
                            <th>sdt sinh vien</th>
                            <th>email sinh vien</th>
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

const mapStateToProp = (state) => {
    return {
        mangSinhVien: state.formSinhVien.mangSinhVien
    }
}
export default connect(mapStateToProp, null)(TableSinhVien)