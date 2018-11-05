/*
/!**
 * Created by 10560 on 2018/10/30.
 *!/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Register from './components/register';
import {Provider} from 'react-redux';
import store from './redux/store';
ReactDOM.render(
    (   <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
        </Provider>
    )
    ,document.getElementById('root')
)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './assets/less/index.less';
<<<<<<< HEAD
import Login from './components/login/index';
import Register from './containers/register';
import Main from './components/main/index';
=======
import Login from './containers/login';
import Register from './containers/register';
import Main from './containers/main';
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
import store from './redux/store';
ReactDOM.render((
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={Main}/>
                </Switch>
            </HashRouter>
        </Provider>
    ), document.getElementById('root'));

