/**
 * Created by 10560 on 2018/11/3.
 */
import Message from '../components/message';
import {connect} from 'react-redux';
import {getChatMsgs} from '../redux/actions';
export default connect(
  state=>({chatList:state.chatList}),
  {getChatMsgs}
)(Message)