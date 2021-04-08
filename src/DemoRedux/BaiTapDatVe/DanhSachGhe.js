import React, { Component } from 'react'
import dataGhe from '../../assets/danhSachGhe.json';
import { connect } from 'react-redux';

class DanhSachGhe extends Component {

    renderHangGhe = () => {
        return dataGhe.map((hangGhe, index) => {
            return <div key={index}>
                <span className="rowNumber">{hangGhe.hang}</span>
                {/*Load ra a1 a2 a3 ... hangGhe.danhSachGhe */}
                {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
            </div>
        });
    }

    renderDanhSachGhe = (danhSachGhe, hangGhe) => {

        //Load ra các object ghế {"soGhe":"1","gia":0}
        return danhSachGhe.map((ghe, index) => {

            //Kiểm tra xem ghế đang render có trong mảng ghế đang đặt redux hay không
            let classGheDangDat = '';
            let indexGhe = this.props.danhSachGheDangDat.findIndex(gheDD => gheDD.soGhe === ghe.soGhe);
            if (indexGhe != -1) {
                classGheDangDat = 'gheDangChon';
            }

            // let classGhe = hangGhe !=="" ? 'ghe' : 'rowNumber' 
            let classGheDuocChon = ghe.daDat ? 'gheDuocChon' : '';
            if (hangGhe !== '') {
                return <button onClick={() => this.props.datGhe(ghe)} key={index} className={`ghe ${classGheDuocChon} ${classGheDangDat}`}>{ghe.soGhe}</button>
            }
            return <button key={index} className={`rowNumber ${classGheDuocChon}`}>{ghe.soGhe}</button>
        })
    }

    render() {
        return (
            <div className="container mt-5 text-white">
                <h3 className="text-center text-white display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>

                <div className="text-center text-light">Màn hình</div>
                <div className="screen"></div>

                {this.renderHangGhe()}



            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //Xử lý biến đổi trước khi tạo props
    // let abc = state.baiTapDatVeReducer.danhSachGheDangDat ;

    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (thongTinGhe) => {
            let action = {
                type: "DAT_GHE",
                thongTinGhe,
            }
            dispatch(action)
            console.log(thongTinGhe);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);