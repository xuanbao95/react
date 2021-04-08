import React, { Component } from 'react'
import TableSV from './TableSV';
import { connect } from 'react-redux'
class FormReact extends Component {
    state = {
        value: {
            maSinhVien: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        },
        erro: {
            maSinhVien: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        },
        sinhVienSua: {
            maSinhVien: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        }

    }
    handleOnChangeInput = (event) => {
        // let { name, value } = event.target; event.target là tagInput đang xảy ra onChange
        const tagInput = event.target;
        let { name, value } = tagInput;
        // lấy typeProps( tên tự đặt) của thẻ để xác định email hay phone...
        let typeProps = event.target.getAttribute('typeProps')
        //tạo value mới mỗi lần nhập liệu
        let newValue = { ...this.state.value };
        //this.state.value['maSinhVien']=value;
        newValue[name] = value;
        //tạo erro mới cho mỗi lần nhập liêuk
        let newErro = { ...this.state.erro };
        let erroMess = "";
        //kiểm tra rỗng
        if (newValue[name] === '') {
            erroMess = 'không đc bỏ trống'
        };
        if (typeProps === "email") {
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                erroMess = "email không hợp lệ"
            }
        }
        newErro[name] = erroMess
        //xử lý setState
        this.setState({
            value: newValue,
            erro: newErro
        })
    }
    handelSubmit = (event) => {
        //cản sự kiện submit browser

        event.preventDefault();
        console.log("abc");
        //kiểm tra dữ liệu hợp lệ(tất cả key của this.state.value phải khác rỗng và tất cả key this.state.erro phải = rỗng)
        let valid = true;
        let { value, erro } = this.state;

        console.log(this.state);
        //(1)duyệt value
        for (let key in value) {
            if (value[key] === '') {//this.state.value['maSinhVien']
                valid = false;
            }
        }
        //(2)duyệt erro
        for (let key in erro) {
            if (erro[key] !== '') {//this.state.erro['maSinhVien']
                valid = false;
            }
        }

        if (!valid) {
            alert('dử liệu ko họp lệ');
            return;
        }
        this.props.dispatch({
            type: "BAM_THEM_SV",
            sinhVien: this.state.value //this.state.value
        })
        console.log(this.state.value, "props");

    }
    //componentWillReceiveProps chạy sau khi props thay đổi và trước khi render
    componentWillReceiveProps(newProps) {//props mới
        //lấy dử liệu từ props gnas cho state
        this.setState({
            value: newProps.sinhVienSua
        })
    }
    render() {
        //giá trị input trên giao diện luôn luôn lấy từ state
        let { maSinhVien, hoTen, email, soDienThoai } = this.state.value;
        return (
            <form className="container" onSubmit={this.handelSubmit}>
                <div className="card text-black">
                    <div className="card-header text-white bg-dark">Thông Tin Sinh Viên</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>mã sinh viên</label>
                                    <input name="maSinhVien" className="form-control" value={maSinhVien} onChange={this.handleOnChangeInput} />
                                    <p className="text text-danger">{this.state.erro.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <label>số điện thoại</label>
                                    <input name="soDienThoai" className="form-control" value={soDienThoai} onChange={this.handleOnChangeInput} />
                                    <p className="text text-danger">{this.state.erro.soDienThoai}</p>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>ho tên</label>
                                    <input name="hoTen" className="form-control" value={hoTen} onChange={this.handleOnChangeInput} />
                                    <p className="text text-danger">{this.state.erro.hoTen}</p>
                                </div>
                                <div className="form-group">
                                    <label>email</label>
                                    <input name="email" typeProps="email" value={email} className="form-control" onChange={this.handleOnChangeInput} />
                                    <p className="text text-danger">{this.state.erro.email}</p>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="card-footer  bg-dark">
                        <button type="submit" className="btn btn-success" >Thêm Sinh Viên</button>
                        <button type="button" className="btn btn-success ml-3" onClick={() => {
                            //đưa dử liệu lên redux
                            this.props.dispatch({
                                type: "CAP_NHAT_SV",
                                sinhVienCapNhat: this.state.value//dử liệu người dùng thay đổi tren các thẻ input
                            })
                        }}>Cập nhật Sinh Viên</button>
                    </div>
                </div>
                <TableSV />
            </form>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         themSinhVien: (sinhVien) => {
//             let action = {
//                 type: "BAM_THEM_SV",
//                 sinhVien
//             }
//             dispatch(action)
//         }
//     }
// }
const mapStateToProps = (state) => {
    return {
        sinhVienSua: state.quanLySinhVienReducer.suaSinhVien
    }
}
export default connect(mapStateToProps)(FormReact)
