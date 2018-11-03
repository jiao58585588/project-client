import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Laoban from '../laoban';
import Dashen from '../dashen';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Message from '../message';
import Personal from '../personal';
import NavFooter from '../nav-footer'
class Main extends Component {
    state={
        navList:
            [
                {
                    path:'/laoban',
                    title:'大神列表',
                    component:Laoban,
                    icon:'dashen',
                    text:'大神'
                },
                {
                    path:'/dashen',
                    title:'老板列表',
                    component:Dashen,
                    icon:'laoban',
                    text:'老板'},
                {
                    path:'/message',
                    title:'消息列表',
                    component:Message,
                    icon:'message',
                    text:'消息'},
                {
                    path:'/personal',
                    title:'用户中心',
                    component:Personal,
                    icon:'personal',
                    text:'个人'}
            ]
    }
    render () {
        const {navList}=this.props;
        return (
            <div>
                <Switch>
                    <Route path="/dashen" component={Dashen}/>
                    <Route path="/laoban" component={Laoban}/>
                    <Route path="/dashen-info" component={DashenInfo}/>
                    <Route path="/laoban-info" component={LaobanInfo}/>
                    <Route path="/message" component={Message}/>
                    <Route path="/personal" component={Personal}/>
                </Switch>
                <NavFooter navList={navList}/>
            </div>
        )
    }
}

export default Main;