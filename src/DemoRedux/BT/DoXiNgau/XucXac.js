import React, { Component } from 'react'
import { connect } from "react-redux";
class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xx, index) => {
            return (
                <img key={index} style={{ width: 50, height: 50 }} className="ml-2" src={xx.img} alt="123" />
            )
        })
    }
    render() {
        return (
            <div>

                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.playGame.mangXucXac
    }
}

export default connect(mapStateToProps, null)(XucXac)