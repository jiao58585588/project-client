import React,{Component} from 'react';
import {NavBar,Button,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from "../header-selector/index";
const data = Array.from(new Array(16)).map((item, index) => ({
    icon: require(`../header-selector/avatars/头像${index+1}.png`),
    text: `image${index+1}`,
}));
class Dashen extends Component{
    state={
        header:'',
        post:'',
        info:''
    }
    setHeader=header=>{
        this.setState({
            header
        })
    }
    render(){
        return(
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post', val)}>求职岗位</InputItem>
                <TextareaItem title="个人介绍" rows={3} onChange={val => this.handleChange('info', val)}/>
                <Button type="primary">保 存</Button>
            </div>
        )
    }
}
export default Dashen;