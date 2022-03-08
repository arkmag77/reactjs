import React, { useState, useEffect } from 'react';
import './Posts.css';

import axios from 'axios';
import PostList from './PostList';

const Posts = () => {

    const [postList, setPostsList] = useState([]);

    /* constructor(props) {
        super(props);

        this.state = {
            postList: []
        }

    } */

    /* componentDidMount(){
        this.getPostsData();
    } */

    useEffect(() => {
        getPostsData();
    }, []);

    const getPostsData = () => {

        let axiosConfig = {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
          };

        axios.post('https://akademia108.pl/api/social-app/post/latest', axiosConfig )
            .then(response => {

                console.log("response data", response.data);

                setPostsList(response.data);

                setPostsList(() => {

                    return response.data;

                });

            })
            .catch((error) => {
                console.error(error);
            })
    }

    console.log("postList in Posts", postList);


    const getMore = () => {

        console.log("Wywołanie getMore()");

        let newPosts = {
            date: postList[postList.length-1].created_at
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'https://akademia108.pl/api/social-app/post/older-then',
            newPosts,
            { 'headers': headers })
            .then((req) => {

                console.log("response data", req.data);

                setPostsList (()=> {
                    return postList.concat(req.data);
                });

            })
            .catch((error) => {
                console.error(error);
            })  

    }

    return (

        <div className="Posts">
            <PostList postList={postList} />
            <button className="Btn" onClick={getMore}>
                Get more
            </button>
        </div>


    );

}

export default Posts;