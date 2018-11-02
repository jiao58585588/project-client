import React,{Component} from 'react';
import {NavBar,Button,List,InputItem,WhiteSpace,WingBlank,Grid} from 'antd-mobile';
const data = Array.from(new Array(16)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `image${i}`,
}));
class Dashen extends Component{
    render(){
        return(
            <div>
                <NavBar>大神信息完善</NavBar>
                <WingBlank>
                    <WhiteSpace/>
                        <div className="sub-title">请选择头像</div>
                    <WhiteSpace/>
                </WingBlank>
                <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
                <form>
                    <List>
                        <InputItem >求职岗位：</InputItem>
                        <InputItem >个人介绍：</InputItem>
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>保存</Button>
                        <WhiteSpace />
                    </List>
                </form>
            </div>
        )
    }
}
export default Dashen;