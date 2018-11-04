/**
 * Created by 10560 on 2018/11/3.
 */
import Personal from '../components/personal';
import {connect} from 'react-redux';
import {getUserInfo} from '../redux/actions';
export default connect(
  state=>({user:state.user})
)(Personal)