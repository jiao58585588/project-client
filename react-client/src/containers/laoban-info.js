/**
 * Created by 10560 on 2018/11/3.
 */
import {connect} from 'react-redux';
<<<<<<< HEAD
import Laoban from '../components/laoban-info';
import {updateUserInfo} from '../redux/actions';
export default connect(
  state=> ({user:state.user}),
  {updateUserInfo}
)(Laoban)

=======
import LaobanInfo from '../components/laoban-info';
import {updateUserInfo} from '../redux/actions';
export default connect(
    state=> ({user:state.user}),
            {updateUserInfo}
)(LaobanInfo)
>>>>>>> 3d1b4d5c72de9021268d01b53a5fb23092fdc0b1
