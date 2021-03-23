//bấm rcc
import React, { Component } from 'react'

export default class DemoClass extends Component {



    //phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ component
    render() {
        return (
            <div className="container bg-dark">
                <p className="display-4 pt-2 text-white">Title</p>
                <p className="text-white">content</p>
            </div>
        )
    }
}
