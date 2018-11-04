/**
 * Created by 10560 on 2018/11/3.
 */
import {connect} from 'react-redux';
import {getUserList} from '../redux/actions';
import Dashen from '../components/dashen';
export default connect(
    state=> ({userList:state.userList}),
    {getUserList}
)(Dashen)
