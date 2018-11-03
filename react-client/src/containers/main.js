/**
 * Created by 10560 on 2018/11/4.
 */
import Main from '../components/main';
import {connect} from 'react-redux';
import {getUserInfo} from '../redux/actions';
export default connect(
  state=>({user:state.user}),
  {getUserInfo}
)(Main)