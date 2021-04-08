import React, { Component } from 'react'
import { connect } from 'react-redux'
class XiNgau extends Component {
    renderXiNgau = () => {
        return this.props.xiNgau.map((item, index) => {
            return (
                <div className="col-4">
                    <img src={item.img} alt="123" style={{ width: "75px", height: "75px", cursor: "pointer" }} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderXiNgau()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xiNgau: state.baiTapLacXiNgau.xiNgau
    }
}
export default connect(mapStateToProps, null)(XiNgau)
