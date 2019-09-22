import {connect} from 'react-redux';
import { login } from '../../actions/Actions';
import LoginForm from './loginForm';


const mapDispatchToProps = dispatch => {

  return {
      login: (user) => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);