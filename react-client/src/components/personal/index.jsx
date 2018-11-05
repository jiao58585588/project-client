import React,{Component} from 'react';
import {Result,List,WhiteSpace,Button,Modal} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
const Item=List.Item;
const Brief=Item.Brief;
const alert=Modal.alert;
class Personal extends Component{
   static propTypes={
       user:PropTypes.object.isRequired,
       resetUser:PropTypes.func.isRequired
   }
  logout=()=>{
    alert('退出登录', '你确认退出登录?', [
      { text: '取消', onPress: () => {} },
      { text: '确认', onPress: () => {
        //退出登陆
        Cookies.remove('userid');
        this.props.resetUser({});
        //跳转到登陆页面
        this.props.history.replace('/login');
      }},
    ])
  }
    render(){
       const {user}=this.props;
      console.log(user);
      return(
          <div>
            <Result
              /*img={<img src={require(`../../assets/images/${user.header}.png`)} style={{width: 50}} alt="header"/>}*/
              title={user.username}
              message={user.company}
            />
            <List renderHeader={() => '相关信息'}>
            <Item multipleLine>
              <Brief>职位: {user.post}</Brief>
              <Brief>简介: {user.info}</Brief>
              {user.salary ? <Brief>薪资: {user.salary}</Brief> : null}
            </Item>
            </List>
            <WhiteSpace/>
            <List>
                <Button type='warning' onClick={this.logout}>退出登录</Button>
            </List>
          </div>
        )
    }
}
export default Personal;