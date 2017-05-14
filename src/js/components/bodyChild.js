import React from 'react';

export default class BodyChild extends React.Component {

    render() {
        return(
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>从根父节点传过来的{this.props.userid}</p>
            </div>    
        )
    }
}