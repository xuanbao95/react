import React, { Component } from 'react'
import { connect } from "react-redux";
class FormSinhVien extends Component {
    state = {
        value: {
            maSV: '',
            tenSV: '',
            email: '',
            sdt: ''
        },
        erro: {
            maSV: '',
            tenSV: '',
            email: '',
            sdt: ''
        },


    }
    handleChangeInput = (e) => {
        let { value, name } = e.target;
        //tạo  value và erro mới để gán lại value và erro củ
        let newValue = { ...this.state.value };
        let newErro = { ...this.state.erro };
        let erroMess = '';
        newValue[name] = value;
        if (newValue[name] === '') {
            erroMess = "không bỏ trông";
        };
        newErro[name] = erroMess;
        this.setState({
            value: newValue,
            erro: newErro
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        //kiểm tra có lấy đúng giá trị value mới bấm thêm sv đc
        let isValid = true;
        let { value, erro } = this.state;
        //duyetj for cho value và erro
        for (let key in value) {//duyệt tùng phần tử trong value
            if (value[key] === "") {
                isValid = false;
            }
        }
        for (let key in erro) {// duyetj tưng phần tử trong erro
            if (erro[key] != '') {
                isValid = false
            }
        }
        if (!isValid) {
            alert('sai nội dung kìa');
            return;
        };
        this.props.dispatch({
            type: "BAM_THEM_SV_DI",
            sinhVien: this.state.value,
        })
    }
    render() {
        let { maSV, tenSV, email, sdt } = this.props.sinhVienSua;
        return (
            <form className="container" onSubmit={this.handelSubmit}>
                <div className="card text-left">
                    <div className="card-header"><h3>Thông Tin Sinh Viên</h3></div>
                    <div className="card-body">
                        <form >
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Mã sinh viên</label>
                                        <input typeProps="maSV" name="maSV" className="form-control" onChange={this.handleChangeInput} />
                                        <p className="text-danger">{this.state.erro.maSV}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Tên sinh viên</label>
                                        <input name="tenSV" className="form-control" onChange={this.handleChangeInput} />
                                        <p className="text-danger">{this.state.erro.tenSV}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Email sinh viên</label>
                                        <input typeProps="email" name="email" className="form-control" onChange={this.handleChangeInput} />
                                        <p className="text-danger">{this.state.erro.email}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>SĐT sinh viên</label>
                                        <input typeProps="sdt" name="sdt" className="form-control" onChange={this.handleChangeInput} />
                                        <p className="text-danger">{this.state.erro.sdt}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-success" onClick={this.handelSubmit}> Thêm Sinh Viên</button>
                            </div>
                        </form>
                    </div>
                </div>

            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.FormSinhVien.sinhVienSua,
    }
}
export default connect(mapStateToProps)(FormSinhVien)