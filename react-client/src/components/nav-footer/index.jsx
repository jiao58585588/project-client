/**
 * Created by 10560 on 2018/11/3.
 */
import React,{Component} from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class NavFooter extends Component{

    render(){
        const navList=this.props;
        return(
            <div>
                {/*<TabBar
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="My"
                    key="my"
                >
                </TabBar>*/}
            </div>
        )
    }
}
//將當前組件包裝成路由組件
export default withRouter(NavFooter);
