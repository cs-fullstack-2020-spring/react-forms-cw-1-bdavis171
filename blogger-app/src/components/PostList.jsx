import React, {Component} from 'react';
import BlogPost from './BlogPost';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogTitle : '',
            blogPost : '',
            postList : []
        }
    }

    //record blog title
    titleEntry = (event) => {
        this.setState(
            {
                blogTitle : event.target.value
            }
        )
    }
    //record blog post
    postEntry = (event) => {
        this.setState(
            {
                blogPost : event.target.value
            }
        )
    }
    //push blog into the array postList
    submitBlog = (event) => {
        let blog = `Title: ${this.state.blogTitle}\nPost: ${this.state.blogPost}`;
        this.state.postList.push(blog);
        //display array in the DOM
        const list = document.querySelector('#post-list');
        let emptyTemp = ''
        this.state.postList.forEach(
            (el) => {
                emptyTemp = `${emptyTemp} ${el}`;
                list.innerText = emptyTemp;
            }
        )
    }
    render() {
        return(
            <div id = 'post-list'>
                <BlogPost title={this.titleEntry} post={this.postEntry} submit={this.submitBlog}/>
            </div>
        )
    }
}

export default PostList;