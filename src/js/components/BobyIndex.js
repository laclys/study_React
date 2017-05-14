import React from 'react';

export default class BobyIndex extends React.Component {
    constructor() {
        super(); // 调用基类的所有初始化方法
        this.state = {
            username: "Lac",
            age: 25
        } // 自身的state只是当前作用域
    }
    render() {

        setTimeout(() => {
            // 更改state 的时候
            this.setState({username: "Zhangyangyang",age: 18})
        }, 4000);

        return (
            <div>
                <h2>页面主体</h2>
                <p>{this.state.username}</p>
                <p>{this.state.age}</p>
            </div>
        )
    }
}