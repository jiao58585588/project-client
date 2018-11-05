/**
 * Created by 10560 on 2018/11/5.
 */
import {sendMessage} from '../redux/actions';
import {connect} from 'react-redux';
import Chat from '../components/chat';
export default connect(
  state=>({}),
  {sendMessage}
)(Chat)