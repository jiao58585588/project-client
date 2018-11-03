import React, {Component} from 'react';
import { List, InputItem,Button,WingBlank, WhiteSpace,NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import Logo from '../logo/index';
class Login extends Component {
    static propTypes={
        user:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired
    }
    state={
        username:'',
        password:''
    }
    handleContent=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    login=()=>{
       this.props.login(this.state);
    }
    goRegister=()=>{
        this.props.history.replace('/register');
    }
    render () {
        const {msg,redirectTo}=this.props.user;
        if(redirectTo){
        this.props.history.replace(redirectTo);
        }
        return (
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo />
                <List>
                    <WingBlank>
                        <WhiteSpace/>
                        {msg? <p className="err-msg">{msg}</p>:''}
                        <InputItem
                        placeholder="请输入用户名" onChange={val=>this.handleContent('username',val)}
                    >用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem  placeholder="请输入密码" onChange={val=>this.handleContent('password',val)} type="password">
                            密码
                        </InputItem>
                        <WhiteSpace/>
                    </WingBlank>
                </List>
                <Button type="primary" onClick={this.login}>登陆</Button>
                <WhiteSpace/>
                <Button onClick={this.goRegister}>还没有账户</Button>
            </div>
        )
    }
}
export default Login;