import React, {useState, useEffect} from 'react';

import { getSubmission, changeStatus, getComments, addComment } from '../../utils/otherUtil';

import '../../styles/submission/submissionSingleStyle.css';

function SubmissionSingle(props) {
    // {tagSpecifier: 'input', tagType: 'text', label: 'bla bla', content: 'yada yada'} // value if checkbox 

    const [state, setState] = useState({
        content: []
    });
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    

    useEffect(() => {
        // fetchAllCampaigns().then(data => {
        //   console.log(data);
        //   window.data = data;
        // })
        // addComment({admin_id: 1, submission_id: 1, body: 'test test'});

        getComments(props.match.params.subid).then(e => {
            console.log(JSON.parse(e));
            // window.l = JSON.parse(e);
            setComments(JSON.parse(e).subComments);
        });

        getSubmission(props.match.params.subid).then(e => {
            setState(JSON.parse(e));
            window.e = e;
        });
    }, []);

    function handleStatus(e) {
        if (e.target.value !== state.status) {
            setState({...state, status: e.target.value});
            changeStatus({newStat: e.target.value, id: state.id});
        }
    }
    function handleComment(e) {
        setComment(e.target.value);
    }
    function handleCommentSubmit() {
        addComment({admin_id: 1, submission_id: props.match.params.subid, body: comment}).then(res => {
            setComments([...comments, res]);
            console.log(res);
        });
    }

    return (
        <div id="main-container">
            <h2 style={{'textAlign':'center'}}>Campaign Name</h2>
            <br/>
            {state.content.map((el, index) => {
                return (
                    <div className="content-container" key={index}>
                        <label>{el.label}</label>
                        <el.tagSpecifier id="itself-inp" type={`${el.tagType}`} value={`${el.content}`} disabled/>
                    </div>
                );
            })}
            <div className="stat-cnt">
                <h4 >Status</h4>
                <h5>Current status: {state.status}</h5>
                <input type="radio" name="status" value="NEW" onClick={handleStatus} /> NEW<br/>
                <input type="radio" name="status" value="UNDER REVIEW"  onClick={handleStatus}/> UNDER REVIEW<br/>
                <input type="radio" name="status" value="ACCEPTED"      onClick={handleStatus}/> ACCEPTED<br/> 
                <input type="radio" name="status" value="DENIED"        onClick={handleStatus}/> DENIED<br/> 
            </div>

            <div className="cmt-cnt">
                <div className="cmt-cnt-1">
                    <textarea id="cmt" placeholder="add a comment" onChange={handleComment}></textarea>
                    <i className="far fa-comment fa-2x" onClick={handleCommentSubmit}></i>
                </div>
                {comments.map((el, i) => {
                    return (
                        <div className="cmt-cnt-2">
                            <p style={{'fontWeight':'bold'}}>{el.adminName}</p>
                            <p>{el.body}</p>
                        </div>
                    );
                })}
            </div>

           
        </div>
    )
}

export default SubmissionSingle;
