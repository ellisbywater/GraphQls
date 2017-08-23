import React, { Component } from 'react';
import { Link } from 'react-router';

class ListPage extends Component{
    render(){
        return (
            <div className="w-100 flex justify-center">
                <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
                    + New Post
                </Link>
                <div className='w-100' style={{ maxWidth: 400 }}>
                    TODO: Display all posts...
                </div>
            </div>
        )
    }
}

export default ListPage;