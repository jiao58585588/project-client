import React,{Component} from 'react';
import {NavBar,Button,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from "../header-selector/index";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
class DashenInfo extends Component{
    static propTypes={
        user:PropTypes.object.isRequired,
        updateUserInfo:PropTypes.func.isRequired
    }
    state={
        header:'',
        post:'',
        info:''
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    setHeader=header=>{
        this.setState({
            header
        })
    }
    saveUserInfo=()=>{
        this.props.updateUserInfo({...this.state,type:'dashen'});
    }
    render(){
        const {msg,header}=this.props.user;
        if(header){
            return <Redirect to='/dashen' />;
        }
        return(
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                {msg? <p className="err-msg">{msg}</p>:''}
                <InputItem onChange={val => this.handleChange('post', val)}>求职岗位</InputItem>
                <TextareaItem title="个人介绍" rows={3} onChange={val => this.handleChange('info', val)}/>
                <Button type="primary" onClick={this.saveUserInfo}>保 存</Button>
            </div>
        )
    }
}
export default DashenInfo;