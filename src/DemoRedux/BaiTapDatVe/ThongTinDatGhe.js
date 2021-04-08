import React, { Component } from 'react'
//Import thư viện kết nối với redux
import { connect } from 'react-redux';


class ThongTinDatGhe extends Component {
    render() {
        return (
            // let { dispatch }=this.props;
            <div className="text-white ">
                <h1 className="display-4 text-center mb-5">Danh sách ghế đang chọn</h1>
                <div className="text-left">
                    <button className="gheDangChon m-0"></button> Ghế đang chọn
                </div>
                <div className="text-left">
                    <button className="ghe m-0"></button> Ghế chưa chọn
                </div>
                <div className="text-left">
                    <button className="gheDuocChon m-0"></button> Ghế chưa chọn
                </div>

                <table className="table text-white">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button onClick={() => this.props.deleteGhe(gheDangDat.soGhe)} >x</button></td>
                                {/* <td><button onClick={() => {
                                    const action = {
                                        type: "XOA_GHE",
                                        soGhe:gheDangDat.soGhe,
                                    }
                                    dispatch(action),
                                }} >x</button></td> */}
                            </tr>
                        })}
                        <div>Tổng Tiền: {this.props.tongTien}</div>
                        <div>
                            <button onClick={() => this.props.datVe()}>đặt</button>
                        </div>
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //Lấy state danhSachGheDangDat từ reducer về tạo thành props của component
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat,
        tongTien: state.baiTapDatVeReducer.tongTien,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteGhe: (soGhe) => {
            let action = {
                type: "XOA_GHE",
                soGhe
            }
            dispatch(action)
        },
        datVe: () => {
            let action = {
                type: "DAT_VE"

            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);