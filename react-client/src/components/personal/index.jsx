import React,{Component} from 'react';
import {NavBar,Button,List,InputItem,TextareaItem} from 'antd-mobile';
import HeaderSelector from "../header-selector/index";
class Personal extends Component{
    state={
        header:'',
        info:'',
        post:'',
        salary:'',
        company:''
    }
    setHeader=(header)=>{
        this.setState({
            header
        })
    }
    save=()=>{

    }
    render(){
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <form>
                    <List>
                        <InputItem onChange={(val)=>this.handleChange('post',val)}>招聘职位：</InputItem>
                        <InputItem onChange={(val)=>this.handleChange('company',val)}>公司名称：</InputItem>
                        <InputItem onChange={(val)=>this.handleChange('salary',val)}>职位薪资：</InputItem>
                        <TextareaItem onChange={(val)=>this.handleChange('info',val)} title="职位要求" rows={3} />
                        <Button type="primary" onClick={this.save}>保存</Button>
                    </List>
                </form>
            </div>
        )
    }
}
export default Personal;