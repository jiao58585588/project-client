import React,{Component} from 'react';
import {Grid,List} from 'antd-mobile';
import PropTypes from 'prop-types';
class HeaderSelector extends Component{
    state={
        icon:null
    }
    static propTypes={
        setHeader:PropTypes.func.isRequired
    }
    handleImage=({icon,text})=>{
        this.setState({
            icon
        })
        this.props.setHeader(text);
    }
    render(){
        const {icon}=this.state;
        const data = Array.from(new Array(20)).map((item,index) => ({
            icon: require(`./avatars/头像${index+1}.png`),
            text: `头像${index+1}`
        }));
        return(
        <List renderHeader={() => (icon ? <div>请选择头像 <img src={icon}/></div>:'请选择头像')} className="my-list" >
        <Grid data={data} columnNum={5} onClick={this.handleImage}/>
        </List>
            )
    }
}
export  default HeaderSelector;