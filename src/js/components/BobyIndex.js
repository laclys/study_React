import React from 'react';
import BodyChild from './bodyChild';

export default class BobyIndex extends React.Component {
    constructor() {
        super(); // 调用基类的所有初始化方法
        this.state = {
            username: "Lac",
            age: 25
        } // 自身的state只是当前作用域
    }

    changeUserInfo(age) {
        this.setState({age: age});
    };
    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    };

    render() {

        // setTimeout(() => {     // 更改state 的时候     this.setState({username:
        // "Zhangyangyang",age: 18}) }, 4000);

        return (
            <div>
                <h2>页面主体</h2>
                <p>{this.state.username}</p>
                <p>{this.state.age}</p>
                <p>{this.props.userid}</p>
                <input
                    type="button"
                    value="提交"
                    onClick={this
                    .changeUserInfo
                    .bind(this,18)}/>
                <BodyChild
                    handleChildValueChange={this
                    .handleChildValueChange
                    .bind(this)}/>
            </div>
        )
    }
}