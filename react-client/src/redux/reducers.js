/**
 * Created by 10560 on 2018/10/31.
 */
//reducers模块，根据之前的状态和action产生新的状态
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER} from './action-types'
import {getRedirectPath} from '../utils';
const initUserState={
    username:'',
    type:'',
    msg:'',
    redirestTo:''
};
function user(preState=initUserState,action) {
    switch(action.type){
      case AUTH_SUCCESS:
            return {...action.data,msg:'',redirectTo:getRedirectPath(action.data.type,action.data.header)};
        case ERR_MSG:
            //在node中和浏览器端默认对象是不能使用三点运算符的，但是react脚手架项目和babel帮我让对象能够使用三点运算符
            return action.data;
        case UPDATE_USER:
            return action.data;
      case RESET_USER:
            return action.data;
        default:
            return preState;
    }
}
//暴露  合并多个reducers函数
export default combineReducers({
   user
})
//最终向外暴露：{xxx:xxx(),yyy:yyy()}