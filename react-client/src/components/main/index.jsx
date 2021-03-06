import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Message from '../../containers/message';
import Personal from '../../containers/personal';
import Chat from '../../containers/chat';
import NavFooter from '../nav-footer';
import {NavBar} from 'antd-mobile';
import cookies from 'js-cookie';
import PropTypes from 'prop-types';
import {getRedirectPath} from '../../utils';
class Main extends Component {
    static propTypes={
        user:PropTypes.object.isRequired,
        getUserInfo:PropTypes.func.isRequired
    }
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
        const {navList}=this.state;
        const pathname=this.props.location.pathname;
        const currentNav=navList.find((item)=>pathname===item.path);
        const userid=cookies.get('userid');
        if(!userid){
            this.props.history.replace('./login');
            return;
        }
        const {user}=this.props;
        if(!user._id){
            this.props.getUserInfo();
          return <div>loading...</div>;
        }
        if(pathname==='/'){
          return <Redirect to={getRedirectPath(user.type,user.header)} />
        }
        if(user.type==='laoban'){
            navList[1].hide=true;
        }else{
            navList[0].hide=true;
        }
        return (
            <div>
              {currentNav? <NavBar>{currentNav.title}</NavBar>:''}
                <Switch>
                    <Route path="/dashen" component={Dashen}/>
                    <Route path="/laoban" component={Laoban}/>
                    <Route path="/dashen-info" component={DashenInfo}/>
                    <Route path="/laoban-info" component={LaobanInfo}/>
                    <Route path="/message" component={Message}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path="/chat" component={Chat}/>
                </Switch>
              {currentNav? <NavFooter navList={navList}/>:''}
            </div>
        )
    }
}

export default Main;