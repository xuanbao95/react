import React, { Component, PureComponent } from 'react'
import ChildComponent from './ChildComponent';

export default class extends Component {
    state = {}
    constructor(props) {//nhiều dự án có và cũng không vì khi tạo đã có sẵn contructor rồi
        super(props);
        console.log("constructor");
        this.state = {
            number: 1,
            numberObjeck: {
                num: 1
            }
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log("getDerivedStateFromProps");
        return;
    }
    shouldComponentUpdate(newProps, currentState) {
        console.log('shouldComponentUpdate');
        return true;
    }
    render() {
        console.log("render");
        return (
            <div>
                <ChildComponent num={this.state.numberObjeck} />
                <h1>{this.state.numberObjeck.num}</h1>
                <button className="btn btn-success" onClick={() => {
                    let numberObjeck = { ...this.state.numberObjeck };//tạo vùng objeck hay arry mới thì pure mới nhận thằng cha
                    numberObjeck.num += 1;
                    this.setState({
                        numberObjeck: numberObjeck
                    })
                    // this.setState({
                    //     number: this.state.number + 1,
                    // })
                }}>bấm đi</button>
                <hr />
                <h3>Child component</h3>
                {/* {this.state.number < 3 ? <ChildComponent /> : ''} */}


            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        //hạn chế sétState(muốn set phải có if)
        console.log('componentDidUpdate');
    }
}
