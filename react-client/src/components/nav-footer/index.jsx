/**
 * Created by 10560 on 2018/11/3.
 */
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
        const {navList}=this.props;
        const {pathname}=this.props.location;
        const  navRequire=navList.filter(item=> (item.hide));
        return(
            <div>
                {<TabBar>
                    {navRequire.map((item,index)=>{
                        return <Item icon={{ uri:require(`./images/${item.icon}.png`)}}
                            selectedIcon={{ uri: require(`./images/${item.icon}-selected.png`) }}
                            title={item.text}
                            key={index}
                            selected={pathname===item.path}
                            //这一步要求把当前组件包装成路由组件 包装一个withRouter()
                            onPress={()=>this.props.history.replace(item.path)}
                             //此处事件绑定必须为一个回调函数
                      />
                  })}
                </TabBar>}
            </div>
        )
    }
}
//將當前組件包裝成路由組件
export default withRouter(NavFooter);
