import React, { Component } from 'react'
import PlayGame from './PlayGame'
import XiNgau from './XiNgau'
import { connect } from 'react-redux'
class LacXiNgau extends Component {
    render() {
        return (
            <div className="xiNgau text-center" style={{ backgroundImage: "url('./img/imgGame/bgGame.png')", height: "700px" }}>
                <h1>Game Đổ Xúc Xắc</h1>
                <div className="row container">
                    <div className="col-4">
                        <button onClick={() => this.props.bet(true)}>Tài</button>
                    </div>
                    <div className="col-4">
                        <XiNgau />
                    </div>
                    <div className="col-4">
                        <button onClick={() => this.props.bet(false)}>Xỉu</button>
                    </div>
                </div>
                <div className="container">
                    <PlayGame />
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bet: (taiXiu) => {
            let action = {
                type: "BET_DI",
                taiXiu
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(LacXiNgau)