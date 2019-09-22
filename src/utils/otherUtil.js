import $ from 'jquery';

export const fetchAllCampaigns = () => {
    return $.ajax({
        url: '/allCampaigns',
        method: 'GET',
    });
};


export const addCampaign = (data) => {
    return $.ajax({
        url: '/addCampaign',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
};

export const addSubmission = (data) => {
    return $.ajax({
        url: '/addSubmission',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
};

export const getCampaign = (id) => {
    return $.ajax({
        url: `/campaignForm/${id}`,
        method: 'GET',
    });
};

export const getCampaignSubmissions = (id) => {
    return $.ajax({
        url: `/campaignSubmissions/${id}`,
        method: 'GET',
    });
};

export const getSubmission = (id) => {
    return $.ajax({
        url: `/submission/${id}`,
        method: 'GET',
    });
};

export const changeStatus = (newStat) => {
    return $.ajax({
        url: `/changeStatus`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newStat)
    });
};



export const getComments = (id) => {
    return $.ajax({
        url: `/submissions/${id}/comments`,
        method: 'GET',
    });
};

export const addComment = (data) => {
    return $.ajax({
        url: `/submissions/${data.submission_id}/addComment`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
};

export const login = () => {
    return $.ajax({
        url: `/login`,
        method: 'POST',
    });
};

export const logout = () => {
    return $.ajax({
        url: `/logout`,
        method: 'POST',
    });
};

export const getLogin = () => {
    return $.ajax({
        url: `/login`,
        method: 'GET',
    });
};