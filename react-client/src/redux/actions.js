/**
 * Created by 10560 on 2018/10/31.
 */
//action creaters,用来创建action的工厂函数模块
import io from 'socket.io-client';
import {AUTH_SUCCESS,ERR_MSG,
  UPDATE_USER,RESET_USER,
  UPDATE_USER_LIST,RESET_USER_LIST,
  UPDATE_CHAT_MSGS,RESET_CHAT_MSGS
} from './action-types';
import {reqLogin,reqRegister,reqGetUserInfo,reqUpdateUserInfo,reqGetUserList,reqGetChatMsgs} from '../api/index';
export const authSuccess=user=> ({type:AUTH_SUCCESS,data:user});
export const errMsg=msg=>({type:ERR_MSG,data:msg});
export const updateUser=user=> ({type:UPDATE_USER,data:user});
export const resetUser=msg=>({type:RESET_USER,data:msg});
export const updateUserList=userList=> ({type:UPDATE_USER_LIST,data:userList});
export const resetUserList=msg=>({type:RESET_USER_LIST,data:msg});
export const updateChatMsgs=chatMsgs=> ({type:UPDATE_CHAT_MSGS,data:chatMsgs});
export const resetChatMsgs=msg=>({type:RESET_CHAT_MSGS,data:msg});
//定义异步函数
export const register=data=>{
    const {username,password,rePassword,type}=data;
    if(!username){
        return errMsg({username,password,msg:'请输入用户名'});
    }else if(!password){
        return errMsg({username,password,msg:'请输入密码'});
    }else if(!type){
        return errMsg({username,password,msg:'请选择类型'});
    }else if(password!==rePassword){
        return errMsg({username,password,msg:'两次密码输入不一致'});
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
//发送ajax请求
export const login=data=>{
    const {username,password}=data;
    if(!username){
        return errMsg({msg:'请输入用户名'});
    }else if(!password){
        return errMsg({msg:'请输入密码'});
    }
    return dispatch=>{
        reqLogin(data)
            .then(res=>{
                const result=res.data;
                if(result.code===0){
                    dispatch(authSuccess(result.data));
                }else{
                    dispatch(errMsg({msg:result.msg}));
                }
            })
            .catch(rej=>{
                dispatch(errMsg({msg:'网络出错误了，请刷新重试'}));
            });
    }
}
//更新用户数据 异步
export const updateUserInfo=data=>{
    const {header,post,company,salary,info,type}=data;
    if(!header){
        return resetUser({msg:'请选择头像'});
    }else if(!post){
        return resetUser(
            {msg:type==='laoban'? '请输入招聘职位':'请输入应聘职位'});
    }else if(!info){
        return resetUser(
            {msg:type==='laoban'? '请输入公司简介':'请输入个人简介'});
    }
    if(type==='laoban'){
        if(!company){
            return resetUser(
            {msg:'请输入公司名称'});
        }else if(!salary)
            return resetUser(
            {msg:'请输入薪资范围'});
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
                dispatch(errMsg({msg:'网络出错误了，请刷新重试'}));
            })
    }
}
export const getUserInfo=()=>{
    return dispatch=>{
        reqGetUserInfo()
          .then(res=>{
              const result=res.data;
              if(result.code===0){
                dispatch(updateUser(result.data));
              }else{
                  dispatch(resetUser({msg:result.msg}));
              }
          })
          .catch(rej=>{
            dispatch(resetUser({msg:'网络不稳定，请刷新重试'}));
          })
    }
}
export const getUserList=type=>{
  return dispatch=>{
    reqGetUserList(type)
      .then(res=>{
        const result=res.data;
        if(result.code===0){
          dispatch(updateUserList(result.data))
        }else{
          dispatch(resetUserList({msg:result.msg}));
        }
      })
      .catch(rej=>{
        dispatch(resetUserList({msg:'网络不稳定，请刷新重试'}));
      })
  }
}
//连接服务器，得到代表性的socket对象
const socket=io('ws://localhost:5000');
socket.on('receiveMsg',function (data) {
  console.log('浏览器端接收服务器发送的消息:', data);
})
export const sendMessage=(content,from,to)=>{
  return dispatch=>{
    socket.emit('sendMsg',{content,from,to});
    console.log('浏览器端向服务器发送消息');
  }
}
//获取用户聊天消息
export const getChatMsgs=()=>{
  return dispatch=>{
    reqGetChatMsgs()
      .then(res=>{
        const result=res.data;
        if(result.code===0){
          dispatch(updateChatMsgs(result.data))
        }else{
          dispatch(resetChatMsgs({msg:result.msg}));
        }
      })
      .catch(rej=>{
        dispatch(resetChatMsgs({msg:'网络不稳定，请刷新重试'}));
      })
  }
}

