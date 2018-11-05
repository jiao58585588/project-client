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
<<<<<<< HEAD
        path+='/Info';
=======
        path+='-Info';
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
    }
    return path;
}