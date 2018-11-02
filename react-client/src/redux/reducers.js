/**
 * Created by 10560 on 2018/10/31.
 */
//reducers模块，根据之前的状态和action产生新的状态
import {combineReducers} from 'redux';
import {authSuccess,errMsg} from './actions';
import {AUTH_SUCCESS,ERR_MSG} from './action-types'
const initUserState={
    username:'',
    type:'',
    msg:''
};
function user(preState=initUserState,action) {
    switch(action.type){
        case AUTH_SUCCESS:
            return {username:action.data.username,type:action.data.type,msg:''};
        case ERR_MSG:
            //在node中和浏览器端默认对象是不能使用三点运算符的，但是react脚手架项目和babel帮我让对象能够使用三点运算符
            return {...preState,msg:action.data}
        default:
            return preState;
    }
}
//暴露  合并多个reducers函数
export default combineReducers({
   user
})
//最终向外暴露：{xxx:xxx(),yyy:yyy()}