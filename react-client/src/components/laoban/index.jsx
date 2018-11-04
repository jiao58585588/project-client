/*

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';
class Laoban extends Component{
  static propTypes={
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  }
  //内置函数 不需要箭头函数方式
  componentDidMount(){
      this.props.getUserList('dashen');
  }
  render(){
    const {userList}=this.props;
    console.log(userList);
    return(
      <div>
        {
          userList.map((item,index)=>(
            <UserList key={index} item={this.item}/>
          ))
        }
      </div>
    )
  }
}
export default Laoban;*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';

class Laoban extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUserList: PropTypes.func.isRequired
  }
  
  componentDidMount () {
    //发送请求
    this.props.getUserList('dashen');
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

export default Laoban;