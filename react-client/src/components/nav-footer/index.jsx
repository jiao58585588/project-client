/*
/!**
 * Created by 10560 on 2018/11/3.
 *!/
import React,{Component} from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
const Item=TabBar.Item;
class NavFooter extends Component{
    static propTypes={
        navList:PropTypes.array.isRequired
    }
    render(){
        const {pathname}=this.props.location;
        const  navRequire=this.props.navList.filter(item=> (!item.hide));
        return(
            <TabBar>
                {navRequire.map((item,index)=>(
                         <Item icon={{ uri:require(`./images/${item.icon}.png`)}}
                        selectedIcon={{ uri: require(`./images/${item.icon}-selected.png`) }}
                        title={item.text}
                        key={index}
                        selected={pathname===item.path}
                        //这一步要求把当前组件包装成路由组件 包装一个withRouter()
                        onPress={()=>this.props.history.replace(item.path)}
                        //此处事件绑定必须为一个回调函数
                  />
                  ))}
            </TabBar>
        )
    }
}
//將當前組件包裝成路由組件
export default withRouter(NavFooter);
*/
import React, {Component} from 'react';
import {TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const Item = TabBar.Item;

class NavFooter extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  }
  
  render () {
    const {pathname} = this.props.location;
    
    const navList = this.props.navList.filter(nav => !nav.hide);
    
    return (
      <TabBar>
        {
          navList.map((item, index) => (<Item
            key={index}
            title={item.text}
            icon={{uri: require(`./images/${item.icon}.png`)}}
            selectedIcon={{uri: require(`./images/${item.icon}-selected.png`)}}
            selected={pathname === item.path}
            onPress={() => this.props.history.replace(item.path)}
          />))
        }
      </TabBar>
    )
  }
}

export default withRouter(NavFooter);  //将当前组件包装成路由组件返回，就有三个属性