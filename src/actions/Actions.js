import * as sessionAPIUTIL from "../utils/sessionAPIUTIL";
import * as utils from '../utils/otherUtil';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});


export const fetchUser = (id) => dispatch => sessionAPIUTIL.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const login = (user) => dispatch => sessionAPIUTIL.login(user).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => sessionAPIUTIL.logout().then(() => dispatch(logoutCurrentUser()));

export const fetchAllCampaigns = () => dispatch => utils.fetchAllCampaigns().then(data => console.log(data));

