import React,{Component} from 'react';
import {Grid,List} from 'antd-mobile';

class HeaderSelector extends Component{
    state={
        icon:null
    }
    handleImage=({icon})=>{
        this.setState({
            icon
        })
    }
    render(){
        const data = Array.from(new Array(20)).map((item,index) => ({
            icon: require(`./avatars/头像${index+1}.png`),
            text: `头像${index+1}`
        }));
        return(
        <List renderHeader={() => '请选择头像'} className="my-list" >
        <Grid data={data} columnNum={5} onClick={this.handleImage}/>
        </List>
            )
    }
}
export  default HeaderSelector;