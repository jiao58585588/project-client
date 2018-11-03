import React, {Component} from 'react';
import Logo from '../logo/index';
import {List, InputItem,Button,WingBlank, WhiteSpace,Radio,NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
const Item = List.Item;
class Register extends Component {
    state={
        username:'',
        password:'',
        rePassword:'',
        type:'laoban'
    }
    static propTypes={
        user:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
    }
    handleContent=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    //代理proxy：代理服务器，将用户/浏览器发送的请求拦截下来，转发请求到新的地址
    // （package.json的proxy中设置的地址），访问请求的资源，最终将响应转发给用户/浏览器
    //位于浏览器端 用于解决跨域问题  只适用于开发时，项目上线时还是要用jsonp或cors
    register=async ()=>{
        const {username,password,rePassword,type}=this.state;
        this.props.register({username,password,rePassword,type});
    }
    goLogin=()=>{  //替换浏览器历史纪录
    this.props.history.replace('/login');
    }
    render () {
        const {type}=this.state;
        const {msg,redirectTo}=this.props.user;
        if(redirectTo) {
            this.props.history.replace(redirectTo);
            /*return  <Redirect to={redirectTo}/>*/
        }
        return (
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo />
                <List>
                    <WingBlank>
                        {msg? <p className="err-msg">{msg}</p>:''}
                    <WhiteSpace/><InputItem
                    placeholder="请输入用户名" onChange={val=>this.handleContent('username',val)}
                >用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem  placeholder="请输入密码" onChange={val=>this.handleContent('password',val)} type="password">
                    密码
                </InputItem>
                    <WhiteSpace/>
                    <InputItem  placeholder="请输入确认密码" type="password" onChange={val=>this.handleContent('rePassword',val)}>
                        确认密码
                    </InputItem>
                    <WhiteSpace/>
                    <Item >
                        用户类型：&nbsp;&nbsp;
                        <Radio className="my-radio" checked={type==="dashen"} onClick={()=>this.handleContent('type','dashen')}>dashen&nbsp;&nbsp;&nbsp;&nbsp;</Radio>
                        <Radio className="my-radio" checked={type==="laoban"} onClick={()=>this.handleContent('type','laoban')}>laoban</Radio>
                    </Item>
                    </WingBlank>
                </List>
                <Button type="primary" onClick={this.register}>注册</Button>
                <Button onClick={this.goLogin}>已有账户</Button>
            </div>
        )
    }
}
export default Register;