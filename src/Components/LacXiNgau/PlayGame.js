import React, { Component } from 'react'
import { connect } from 'react-redux'
class PlayGame extends Component {
    render() {
        return (
            <div className="container">
                <div><span>Bạn chọn:{this.props.taiXiu ? 'Tài' : 'Xỉu'}</span></div>
                <div><span>số bàn thắng:{this.props.banThang}</span></div>
                <div><span>tổng số bàn chơi{this.props.tongBan}</span></div>
                <div><button onClick={() => this.props.play()}>Play game</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taiXiu: state.baiTapLacXiNgau.taiXiu,
        banThang: state.baiTapLacXiNgau.soBanThang,
        tongBan: state.baiTapLacXiNgau.tongBanChoi
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        play: () => {
            let action = {
                type: "CHOI_DI",

            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayGame)