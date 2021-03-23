import React, { Component } from 'react'

export default class ListGlasses extends Component {
    renderGlasses = () => {
        let { arrProduct, changeGlass } = this.props;
        return arrProduct.map((glasse, index) => {
            return (
                <a href="#" key={index} onClick={() => changeGlass(glasse)} ><img src={glasse.url} alt="123" width="150px" height="100px" className="mt-5 ml-3" /></a>
            )
        })
    }
    render() {


        return (
            <div>
                {this.renderGlasses()}
            </div>
        )
    }
}
