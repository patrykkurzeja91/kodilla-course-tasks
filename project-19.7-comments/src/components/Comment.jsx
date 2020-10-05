import React from 'react';


const Comment = ({text, votes, id, thumbUp, thumbDown}) => (
    <li>{text} 
    <span>votes: {votes}</span>
    <button onClick={()=> thumbUp(id)}>Thumb Up</button>
    <button onClick={()=> thumbDown(id)}>Thumb Down</button>
     </li>
);

export default Comment;
