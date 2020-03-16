import React, {Component} from 'react';
import Header from './HeaderComponent';
import BlogPost from './BlogPost';
import PostList from './PostList';
import Footer from './FooterComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <BlogPost/>
                <PostList/>
                <Footer/>
            </div>
        )
    }
}

export default AppContainer;