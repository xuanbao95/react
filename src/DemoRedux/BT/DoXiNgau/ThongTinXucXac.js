import React, { Component } from 'react'
import { connect } from "react-redux"
class ThongTinXucXac extends Component {
    render() {
        return (
            <div >
                <div className="display-4">Bạn Chọn : <span className="text-danger">{this.props.taiXiu ? 'Tài' : 'Xỉu'}</span></div>
                <div className="display-4">Bàn Thắng : <span className="text-success">{this.props.soBanThang}</span></div>
                <div className="display-4">Tổng số bàn chơi : <span className="text-dark">{this.props.tongBanChoi}</span></div>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taiXiu: state.playGame.taiXiu,
        soBanThang: state.playGame.soBanThang,
        tongBanChoi: state.playGame.tongBanChoi,

    }

}

export default connect(mapStateToProps, null)(ThongTinXucXac)
