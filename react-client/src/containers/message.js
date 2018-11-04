/**
 * Created by 10560 on 2018/11/3.
 */
import Message from '../components/message';
import {connect} from 'react-redux';
import {getUserInfo} from '../redux/actions';
export default connect(
  state=>({user:state.user})
)(Message)