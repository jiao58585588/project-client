/*
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';
class Dashen extends Component{
    static propTypes={
        userList:PropTypes.array.isRequired,
        getUserList:PropTypes.func.isRequired
    }
    componentDidMount(){
        this.props.getUserList('laoban');
    }
    render(){
        const {userList}=this.props;
      console.log(userList);
      return(
          <div>{
              
              userList.map((item,index)=>(
              <UserList key={index} item={this.item}/>
              ))}
          </div>
        )
    }
}
export default Dashen;*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import UserList from '../user-list';

class Dashen extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUserList: PropTypes.func.isRequired
  }
  componentDidMount () {
    //发送请求
    this.props.getUserList('laoban');
  }
  
  render () {
    const {userList} = this.props;
    return (
      <div>
        {
          userList.map((item, index) => <UserList key={index} item={item} />)
        }
      </div>
    )
  }
}

export default Dashen;