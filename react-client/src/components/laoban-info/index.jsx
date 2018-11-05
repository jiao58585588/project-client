import React,{Component} from 'react';
import {NavBar,Button,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from "../header-selector/index";
import PropTypes from 'prop-types';
<<<<<<< HEAD
class Laoban extends Component{
=======
import {Redirect} from 'react-router-dom';
class LaobanInfo extends Component{
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
    static propTypes={
        user:PropTypes.object.isRequired,
        updateUserInfo:PropTypes.func.isRequired
    }
    state={
        header:'',
        info:'',
        post:'',
        salary:'',
        company:''
    }
    setHeader=(header)=>{
<<<<<<< HEAD
=======
        this.setState({
            header
        })
    }
    handleChange=(name,val)=>{
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
        this.setState({
            header
        })
    }
    saveUserInfo=()=>{
<<<<<<< HEAD
        this.props.updateUserInfo(this.state);
    }
    render(){
        const {msg}=this.props.user;
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                {msg?(<p className="err-msg">{msg}</p>):''}
                <HeaderSelector setHeader={this.setHeader}/>
                <form>
                    <List>
=======
        this.props.updateUserInfo({...this.state,type:'laoban'})
    }
    render(){
        const {msg,header}=this.props.user;
        if(header){
          return <Redirect to='./laoban' />
        }
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                {msg? <p className="err-msg">{msg}</p>:''}
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
                        <InputItem onChange={(val)=>this.handleChange('post',val)}>招聘职位：</InputItem>
                        <InputItem onChange={(val)=>this.handleChange('company',val)}>公司名称：</InputItem>
                        <InputItem onChange={(val)=>this.handleChange('salary',val)}>职位薪资：</InputItem>
                        <TextareaItem onChange={(val)=>this.handleChange('info',val)} title="职位要求" rows={3} />
                        <Button type="primary" onClick={this.saveUserInfo}>保存</Button>
<<<<<<< HEAD
                    </List>
                </form>
=======
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
            </div>
        )
    }
}
export default LaobanInfo;