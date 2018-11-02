/**
 * Created by 10560 on 2018/10/31.
 */
//action creaters,用来创建action的工厂函数模块
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER,RESET_USER} from './action-types';
import {reqUpdateUserInfo,reqLogin,reqRegister} from '../api/index';
export const authSuccess=user=> ({type:AUTH_SUCCESS,data:user});
export const errMsg=msg=>({type:ERR_MSG,data:msg});
export const updateUser=user=> ({type:UPDATE_USER,data:user});
export const resetUser=msg=>({type:RESET_USER,data:msg});
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
//异步 更新用户数据
export const updateUserInfo=data=>{
  const {header,post,company,salary,info}=data;
  if(!header){
    return resetUser({msg:'请选择头像'})
  }else if(!post){
    return resetUser({msg:'请输入招聘職位'})
  }else if(!company){
    return resetUser({msg:'请輸入公司名稱'})
  }else if(!salary){
    return resetUser({msg:'請輸入薪資範圍'})
  }else if(!info){
    return resetUser({msg:'請輸入公司簡介'})
  }
  return dispatch=>{
    reqUpdateUserInfo(data)
      .then(res=>{
        const result=res.data;
        if(result.code===0){
          dispatch(updateUser(result.data));
        }else{
          dispatch(resetUser({msg:result.msg}));
        }
      })
      .catch(rej=>{
        dispatch(resetUser({msg:'网络出错误了，请刷新重试'}));
      })
  }
}
