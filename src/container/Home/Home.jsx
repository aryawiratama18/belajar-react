// Library
import React,{Component,Fragment} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//Pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Product from '../pages/Product/Product.jsx';
import YoutubePages from '../pages/YoutubePages/YoutubePages';

// Styling
import "./Home.css";

class Home extends Component{
    render(){
        return (
            <Router>
                <Fragment>
                    <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/yt">Youtube Pages</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}/>
                    <Route path="/detail-post/:id" component={DetailPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/yt" component={YoutubePages}/>
                </Fragment>
            </Router>
        )
    }
}

export default Home;