/*
import React,{Component} from 'react';
<<<<<<< HEAD
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
=======
import PropTypes from 'prop-types';
import UserList from '../user-list';
class Dashen extends Component{
    static propTypes={
        userList:PropTypes.array.isRequired,
        getUserList:PropTypes.func.isRequired
    }
    componentDidMount(){
        this.props.getUserList('laoban');
    }
    render(){
        const {userList}=this.props;
      console.log(userList);
      return(
          <div>{
              
              userList.map((item,index)=>(
              <UserList key={index} item={this.item}/>
              ))}
          </div>
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
        )
    }
}
export default Dashen;*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';

class Dashen extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUserList: PropTypes.func.isRequired
  }
  componentDidMount () {
    //发送请求
    this.props.getUserList('laoban');
  }
  
  render () {
    const {userList} = this.props;
    return (
      <div>
        {
          userList.map((item, index) => <UserList key={index} item={item} />)
        }
      </div>
    )
  }
}

export default Dashen;