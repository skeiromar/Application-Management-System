const express = require('express');
const editJsonFile = require('edit-json-file');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const data = editJsonFile('./server/data/data.json');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post('/login', (req, res) => {

    let file = data;

    file.set("Admin.loggedIn", true);
    file.save();
    res.send("Successful");
});

app.post('/logout', (req, res) => {

    let file = data;

    file.set("Admin.loggedIn", false);
    file.save();

    res.send("Successful");
});

app.get('/login', (req, res) => {

    let file = data;

    res.send(file.get("Admin.loggedIn"));
});


app.get('/api/users/:userId', (req, res) => {
    console.log(req.body)
    console.log(req);
//   res.setHeader('Content-Type', 'application/json');
    
    res.send(JSON.stringify({ greeting: 'Omar' }));
});


app.get('/allCampaigns', (req, res) => {
    let campaigns = Object.values(data.get().Campaign);
    
    // debugger
    console.log(data.get().Campaign);
    // debugger
    res.send(JSON.stringify(campaigns));
    
});

app.post('/addCampaign', (req, res) => {
    // console.log(req.body)
    // debugger
    let campaign = data;
    // campaign.set(`Campaign${[]}`, {...req.body, id: Math.floor((Math.random() * 1000000))})
    let id = Math.floor((Math.random() * 1000000));

    campaign.set(`Campaign.${[id]}`, {id: id, ...req.body});
    campaign.save();
    
    res.send('successful'); 
});

app.post('/addSubmission', (req, res) => {
    
    let sub = data;
    let id = Math.floor((Math.random() * 1000000));
    sub.toObject().Campaign[req.body.campaign_id].submissions.push(id);
    sub.set(`Submission.${[id]}`, {id: id, ...req.body});
    sub.save();

    res.send("successfull");
});

app.get('/campaignForm/:campaignId', (req, res) => {
    let file = data;
    res.send(JSON.stringify(file.get(`Campaign.${req.params.campaignId}`)));
});

app.get('/campaignSubmissions/:campaignId', (req, res) => {
    let file = data;
    let submissions = file.get("Submission");
    let campaign = file.get(`Campaign.${req.params.campaignId}`);
    let subIds = campaign.submissions;
    let campaignName = campaign.name;
    let subs = [];
    for (let i = 0; i < subIds.length; i++) {
        subs.push(submissions[subIds[i]]);
    }
    res.send(JSON.stringify({name: campaignName, subs: subs}));
});

app.get('/submission/:submissionId', (req, res) => {
    let sub = data.get(`Submission.${req.params.submissionId}`);
    res.send(JSON.stringify(sub));
});

app.post('/changeStatus', (req, res) => {

    let file = data;
    file.set(`Submission.${req.body.id}.status`, req.body.newStat);
    file.save();

    res.send('successfull');

});

app.get('/submissions/:subId/comments', (req, res) => {
    let file = data;
    let admin = file.get("Admin");
    let comments = file.get("Comment");
    let submission = file.get(`Submission.${req.params.subId}`);
    let commentIds = submission.comments;
    // let adminName = .name;
    let subComments = [];
    for (let i = 0; i < commentIds.length; i++) {
        let comObj = comments[commentIds[i]];
        comObj.adminName = admin[comObj.admin_id].username;
        subComments.push(comObj);
    }
    res.send(JSON.stringify({subComments: subComments}));

});

app.post('/submissions/:subId/addComment', (req, res) => {
    let file = data;
    let id = Math.floor((Math.random() * 1000000));
    file.toObject().Submission[req.params.subId].comments.push(id);
    file.toObject().Admin[req.body.admin_id].comments.push(id);
    let adminName = file.toObject().Admin[req.body.admin_id].username;
    file.set(`Comment.${[id]}`, {id: id, ...req.body});
    file.save();
    // debugger
    res.send({id: id, adminName: adminName ,...req.body});

});



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
