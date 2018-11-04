/**
 * Created by 10560 on 2018/11/1.
 */
/*
import ajax from './ajax';
export const reqLogin=data=>ajax('/login',data,'POST');
export const reqRegister=data=>ajax('/register',data,'POST');*/
import ajax from './ajax';
//请求登录的函数
export const reqLogin = data => ajax('/login', data, 'POST');
//请求注册的函数
export const reqRegister = data => ajax('/register', data, 'POST');
//请求更新用户数据的函数
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');
//请求用户数据的函数  默认传参为get请求方式
export const reqGetUserInfo = () => ajax('/user');
export const reqGetUserList=type=>ajax('./userList',{type});