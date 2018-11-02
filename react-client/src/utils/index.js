/**
 * Created by 10560 on 2018/11/2.
 */
export function getRedirectPath(type,header) {
    let path='';
    if(type==='dashen'){
        path='/dashen';
    }else{
        path='/laoban';
    }
    if(!header){
        path+='/Info';
    }
    return path;
}