/**
 * Created by 10560 on 2018/11/4.
 */
import React,{Component} from 'react';
import {Card,WingBlank,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';
class UserList extends Component{
  static propTypes={
    item:PropTypes.object.isRequired
  }
  render(){
    const {item}=this.props;
    return(
      <WingBlank>
        <WhiteSpace/>
        <Card>
          <Card.Header
            thumb={require(`../header-selector/avatars/${item.header}.png`)}
          extra={item.username}
        />
        <Card.Body>
          <div>职位：{item.post}</div>
          {item.company?<div>公司：{item.company}</div>:''}
          {item.salary?<div>薪资：{item.salary}</div>:''}
          <div>描述：{item.info}</div>
        </Card.Body>
        <Card.Footer/>
      </Card>
    <WhiteSpace/>
  </WingBlank>
  )
  }
}
export default UserList;
