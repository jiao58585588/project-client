import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Laoban from '../laoban-info';
import Dashen from '../dashen';
class Main extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/dashen" component={Dashen}/>
                    <Route path="/laoban" component={Laoban}/>
                </Switch>
            </div>
        )
    }
}

export default Main;