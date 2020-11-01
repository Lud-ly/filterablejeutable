import React from 'react'

    const Posts = ({ posts }) => {
      return (
        <div>
          <center><h1>Posts List</h1></center>
          {posts.map((post) => (
            <div className="card">
              <div className="card-body">
                <h2>{post.title}</h2>
                <h4>{post.body}</h4>
                <p>{post.userId}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Posts