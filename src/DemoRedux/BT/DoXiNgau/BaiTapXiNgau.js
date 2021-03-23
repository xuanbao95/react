import React, { Component } from 'react'
import "./BaiTapXiNgau.css"
import ThongTinXucXac from './ThongTinXucXac'
import XucXac from './XucXac'
import { connect } from "react-redux"
class BaiTapXiNgau extends Component {
    render() {
        return (
            <div className="game" style={{ backgroundImage: `url("./img/imgGame/bgGame.png")` }}>
                <h1 className="text-center pt-5 display-4">Let's Bet</h1>
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={() => this.props.bet(true)} className="btnGame">TÀI</button>
                    </div>
                    <div className="col-4">
                        <XucXac />
                    </div>
                    <div className="col-4">
                        <button onClick={() => this.props.bet(false)} className="btnGame">XỈU</button>
                    </div>
                </div>
                <div className="container text-center">
                    <ThongTinXucXac />
                    <button onClick={() => this.props.pressPlay()} className="btn btn-success">PLAY GAME</button>
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        bet: (taiXiu) => {
            let action = {
                type: "BET_BET",
                taiXiu,
            };
            dispatch(action);
        },
        pressPlay: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapXiNgau)