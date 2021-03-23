import React, { Component } from 'react'
//cách 1: import đường dẫn css từ file component
// import "./style.css"
//cách 2 : import css tại component
import style from "./style.module.css"
export default class Style extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-red">Cybersoft</p>
                <p className={style.textGreen}>cybersoft</p>
                <p className={style["textGreen"]}>cybersoft</p>
                <p className={`${style["textGreen"]} ${style["bg-black"]}`}>cybersoft more</p>


                <section style={{ backgroundColor: "black", color: "green" }}>component</section>
            </div>
        )
    }
}
