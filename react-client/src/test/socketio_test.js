/**
 * Created by 10560 on 2018/11/5.
 */
import io from 'socket.io-client';
const socket=io('ws://localhost:5000');
socket.on('receiveMsg',function (data) {
  console.log('浏览器端向服务器发消息',data);
})