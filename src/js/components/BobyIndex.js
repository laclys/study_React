import React from 'react';

export default class BobyIndex extends React.Component{
    render (){

        var userName = 'Lac';
        var boolInput = false;

        var html01 = 'zhang\u0020yangyang' // 解析html要用unicode转码
        var html02 = 'zhang&nbsp;yangyang' // 或 （不推荐）比较危险的形式

        // comments

        return (
            <div>
                <h2>页面主体</h2>
                <p>{userName==''?'用户还没有登录': '用户名：' + userName}</p>
                <p><input type="button" value = "默认按钮" disabled={boolInput}/></p>
                {/*注释*/}
                <p>{html01}</p>
                <p dangerouslySetInnerHTML ={{__html : html02}}></p>
            </div>
        )
    }
}