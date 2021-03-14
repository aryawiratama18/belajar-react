import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/640/480/tech" alt="dummy_image"/>
            </div>
            <div className="content">
                <p className="title" onClick={() => props.detail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.description}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post