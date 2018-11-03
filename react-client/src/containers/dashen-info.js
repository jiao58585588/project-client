/**
 * Created by 10560 on 2018/11/3.
 */
import {connect} from 'react-redux';
import DashenInfo from '../components/dashen-info';
import {updateUserInfo} from '../redux/actions';
export default connect(
    state=> ({user:state.user}),
    {updateUserInfo}
)(DashenInfo)