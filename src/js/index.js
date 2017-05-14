var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BobyIndex from './components/BobyIndex';

class Index extends React.Component {

    componentWillMount() {
        console.log('index_componentWillMount');
    }

    componentDidMount() {
        console.log('index_componentDidMount')
    }


    render() {
        var Header = <ComponentHeader/>;
        return (
            <div>
                {Header}
                <BobyIndex userid={123456}/>
                <ComponentFooter/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>, document.getElementById('example'));