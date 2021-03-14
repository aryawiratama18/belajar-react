import axios from 'axios';
import React, {Component,Fragment} from 'react';
import './DetailPost.css'

class DetailPost extends Component{
    state = {
        post: {
            title: '',
            description: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get('http://localhost:3001/posts/' + id)
        .then((res) => {
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    description: post.description
                }
            })
        })
    }
    render(){
        return(
            <Fragment>
                <div className="p-detail-post">
                    <p className="detail-title">{this.state.post.title}</p>
                    <p className="detail-desc">{this.state.post.description}</p>
                </div>
            </Fragment>
        )
    }
}

export default DetailPost;