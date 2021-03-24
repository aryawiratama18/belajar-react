import React, {Component,Fragment} from  'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import API from '../../../services/index';

class BlogPost extends Component{
    state ={
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            description: ''
        },
        isUpdate: false
    }

    // Pengambilan data dari API
    getAPI = () => {
        // Pemanggilan Fake API menggunakan axios
        // axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        // .then((res) => {
        //     this.setState({
        //         post: res.data
        //     })
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        // GET Menggunakan Global API
        API.getNewsBlog().then(result => {
            this.setState({
                post: result // Karena pada global API, result bernilai result.data, maka tinggal pamggil result saja
            })
        })

    }

    // Menghapus data dari db
    deleteAPI = (id) =>{
        // console.log(id);
        // axios.delete('http://localhost:3001/posts/' + id)
        // .then((res) => {
        //     console.log(res);
        //     this.getAPI()
        // })

        // DELETE Menggunakan Global API
        API.deleteNewsBlog(id)
        .then((result) => {
            this.getAPI()
        })
    }

    // Edit/update data db
    putAPI = () => {
        // axios.put('http://localhost:3001/posts/' + this.state.formBlogPost.id,this.state.formBlogPost)
        // .then((res) => {
        //     console.log(res);
        //     this.getAPI()
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             description: ''
        //         },
        //     })
        // })

        // PUT Menggunakan Global API
        API.updateNewsBlog(this.state.formBlogPost,this.state.formBlogPost.id)
        .then((result) => {
            this.getAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    description: ''
                }
            })
        })
        
    }

    // Posting data baru ke database
    postAPI = () => {
        // console.log(this.state.formBlogPost)
        // axios.post('http://localhost:3001/posts/',this.state.formBlogPost)
        // .then((response)=>{
        //     console.log(response)
        //     this.getAPI()
        //     this.setState({
        //         isUpdate: false,
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             description: ''
        //         },
        //     })
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        // POST Menggunakan Global API
        API.postNewsBlog(this.state.formBlogPost).then((result)=> {
            this.getAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    description: ''
                }
            })
        })

    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putAPI(this.state.formBlogPost.id)
        }
        else{
            this.postAPI()
        }
    }

    handleRemove = (data) => {
        this.deleteAPI(data)
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost : data,
            isUpdate: true
        })
    }

    handleDetail = (dataID) => {
        this.props.history.push('/detail-post/' + dataID)
    }

    handlerFormChange = (event) => {
        // console.log(event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        // console.log(timestamp);
        if(!this.state.isUpdate){
            formBlogPostNew["id"] = timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost : formBlogPostNew
        })
    }

    componentDidMount(){
        // Pemanggilan API menggunakan fetch
        // fetch('http://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // Pemanggilan API menggunakan axios
        // axios.get('http://http://jsonplaceholder.typicode.com/posts')
        // .then((res) => {
        //     // console.log(res.data);
        //     this.setState({
        //         post: res.data
        //     })
        // })
        this.getAPI();
    }

    render(){
        return(
            <Fragment>
                <h3>Blog Post page</h3>
                <hr/>
                <p className="section-title">Ini adalah Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handlerFormChange} value={this.state.formBlogPost.title}/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="add description" onChange={this.handlerFormChange} value={this.state.formBlogPost.description}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>
                </div>
                {
                    this.state.post.map(post => {
                        // return <Post key={post.id} title={post.title} desc={post.body}/>
                        return <Post key={post.id} data={post} update={this.handleUpdate} remove={this.handleRemove} detail={this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;