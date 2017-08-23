import React, { Component } from 'react';

class Post extends Component{

    handleDelete(){
        //TODO: delete post before reloading posts
        this.props.refresh();
    }

    render(){
        return (
            <div className="pa3 bg-black-05 ma3">
                <div
                className='w-100'
                style={{
                    backgroundImage: `url(${this.props.post.imageUrl})`,
                    backgroundSize: 'cover',
                    paddingBottom: '100%'
                }}
                />
                <div className='pt3'>
                    {this.props.post.description} &nbsp;
                    <span className='red f6 pointer dim'
                    onClick={this.handleDelete}>Delete</span>
                </div>
            </div>
        )
    }
}

export default Post;    