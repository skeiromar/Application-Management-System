
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { getLogin } from './otherUtil';


const mapStateToProps = state => {
  let loggedIn = false;
  getLogin().then(e => {
    loggedIn = Boolean(e);
  });
  console.log(loggedIn);
  return {
    loggedIn: loggedIn,
  };
};

const Auth = ({component: Component, path, loggedIn, exact}) => (
  
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Redirect to="/campaigns" /> 
    ) : (
      <Component {...props} />
    )
  )}/>
);
  
const Feed = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/campaigns" />
    )
  )}/>
);
  

const Protected = ({ component: Component, path, loggedIn }) => {
   const retVal = (<Route
        path={path}
        render={props => {
            return loggedIn ? (
            <Component {...props} x="s"/>)
             : 
             (<Redirect to="/" />)
        }}
    />)
    return retVal;
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected)); 
export const FeedRoute = withRouter(connect(mapStateToProps, null)(Feed)); 
