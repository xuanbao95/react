import React, { Component } from 'react'
import { connect } from "react-redux";
class FormSinhVien extends Component {
    state = {
        maSV: '',
        tenSV: '',
        email: '',
        sdt: ''
    }
    handleChange = (e) => {
        //lấy giá trị thay dổi bởi người dùng nhập
        let tagInput = e.target;
        let { name, value } = tagInput;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.themSinhVien(this.state)
    }
    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header"><h3>Thông Tin Sinh Viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Mã sinh viên</label>
                                        <input type="number" name="maSV" className="form-control" value={this.state.maSV} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Tên sinh viên</label>
                                        <input type="text" name="tenSV" className="form-control" value={this.state.tenSV} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Email sinh viên</label>
                                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>SĐT sinh viên</label>
                                        <input type="number" name="sdt" className="form-control" value={this.state.sdt} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            let action = {
                type: "THEM_SINH_VIEN",
                sinhVien
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(FormSinhVien)