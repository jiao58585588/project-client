import React, {Component} from 'react';
import { List, InputItem,Button,WingBlank, WhiteSpace,NavBar} from 'antd-mobile';
import {reqLogin} from '../../api/index';
import Logo from '../logo/index';
class Login extends Component {
    state={
        username:'',
        password:''
    }
    handleContent=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    login=async ()=>{
        const {username,password}=this.state;
        console.log(username,password);
        const data=await reqLogin({username,password});
        console.log(data);
    }
    goRegister=()=>{
        this.props.history.replace('/register');
    }
    render () {
        return (
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo />
                <List>
                    <WingBlank>
                        <WhiteSpace/><InputItem
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