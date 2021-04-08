import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSV extends Component {

    renderTable = () => {
        return this.props.sv.map((item, index) => {
            return (
                <tr key={index}>
                    <th>{item.maSinhVien}</th>
                    <th>{item.hoTen}</th>
                    <th>{item.email}</th>
                    <th>{item.soDienThoai}</th>
                    <th><button className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        this.props.dispatch({
                            type: "SUA_SV",
                            sinhVienSua: item
                        })
                    }}>sua</button></th>
                    <th><button type="button" onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch({
                            type: "XOA_SV",
                            sv: item.maSinhVien
                        })
                    }} className="btn btn-danger">xoa</button></th>

                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
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
const mapStateToProps = (state) => {
    return {
        sv: state.quanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(TableSV)