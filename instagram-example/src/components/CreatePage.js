import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CreatePage extends Component {
    state = {
        description: '',
        imageUrl: ''
    }

    handlePost(){
        //TODO: create post before going back to ListPage
        console.log(this.state);
        this.props.router.push('/');
    }

    render(){
        return (
            <div className="w-100 pa4 flex justify-center">
                <div style={{maxWidth: 400}} className="">
                    <input 
                    className='w-100 pa3 mv2'
                    value={this.state.description}
                    placeholder='Description'
                    onChange={ e => this.setState({description: e.target.value})}
                    />
                    <input
                    className='w-100 pa3 mv2'
                    value={this.state.imageUrl}
                    placeholder='Image Url'
                    onChange={ e => this.setState({imageUrl: e.target.value})}
                     />

                    {
                        this.state.imageUrl &&
                        <img src={this.state.imageUrl} role='presentation'
                            className='w-100 mv3' />
                    }
                    {
                        this.state.description && this.state.imageUrl &&
                        <button className='pa3 bg-black-10 bn dim ttu pointer'
                        onClick={this.handlePost}>Post</button>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(CreatePage);