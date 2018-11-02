/**
 * Created by 10560 on 2018/11/3.
 */
import {connect} from 'react-redux';
import Laoban from '../components/laoban-info';
import {updateUserInfo} from '../redux/actions';
export default connect(
  state=> ({user:state.user}),
  {updateUserInfo}
)(Laoban)

