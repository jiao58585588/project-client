/**
 * Created by 10560 on 2018/10/31.
 */
//action creaters,用来创建action的工厂函数模块
import {AUTH_SUCCESS,ERR_MSG} from './action-types'
import {reqRegister} from '../assets/api/index';
export const authSuccess=user=> ({type:AUTH_SUCCESS,data:user});
export const errMsg=(msg)=>({type:ERR_MSG,data:msg});
//定义异步函数
export const register=data=>{
    const {username,password,rePassword,type}=data;
    if(!username){
        return errMsg({username,password,msg:'请输入用户名'})
    }else if(!password){
        return errMsg({username,password,msg:'请输入密码'})
    }else if(!type){
        return errMsg({username,password,msg:'请选择类型'})
    }else if(password!==rePassword){
        return errMsg({username,password,msg:'两次密码输入不一致'})
    }
    return dispatch=>{
    reqRegister(data)
        .then(res=>{
            const result=res.data;
            if(result.code===0){
                dispatch(authSuccess(result.data));
            }else{
                dispatch(errMsg({msg:result.msg,username:data.username,type:data.type}));
            }
        })
        .catch(rej=>{
            dispatch(errMsg({msg:'网络出错误了，请刷新重试',username:data.username,type:data.type}));
        })
    }
}