import React from 'react';
import './PostList.css';

function PostList(props) {

    let postListLocal = props.postList;

    console.log("postListLocal", postListLocal);

    let liElements = postListLocal.map((postListLocal) =>  { 

       let data =new Date(postListLocal.created_at);
        
        return (

            <li key={postListLocal.id} >
                <span className="Avatar"> {<img src={postListLocal.user.avatar_url/* avatar */}/>} </span>
                <span className="User">Użytkownik: {postListLocal.user.username/* user */}  </span>
                <span className="Date">data: {/* {data.getDate()}-{(data.getMonth()+1)}-{data.getFullYear()}, {data.getHours()}:{data.getMinutes()}:{data.getSeconds()} */}  {data.toLocaleDateString()}, {data.toLocaleTimeString()} </span>
                <span className="Content">Zawartość: {postListLocal.content} </span>
                <span className="Likes">Liczba like'ów: {postListLocal.likes.length/* numberOfLikes */} </span>
            </li>
        );
    }) 

    return (

        <div className="PostList">
            <ul className="List">
                
            {liElements};  

            </ul>
        </div>

    );


}

export default PostList;