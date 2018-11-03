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
//请求用户数据的函数
export const reqGetUserInfo = data => ajax('/user', data);