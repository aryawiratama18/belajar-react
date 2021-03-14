import React,{Component,Fragment} from 'react';
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product.jsx';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import "./Home.css";
import YoutubePages from '../pages/YoutubePages/YoutubePages';

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
                    <Route path="/product" component={Product}/>
                    <Route path="/yt" component={YoutubePages}/>
                </Fragment>
            </Router>
        )
    }
}

export default Home;