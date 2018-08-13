import React, { Component } from 'react'


export class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const description = event.target.elements.description.value;
        const imageLink = event.target.elements.link.value;
        const post = {
            id: Number(new Date()),
            description : description,
            imageLink : imageLink
        }
        if (description && imageLink) {
            //emitting action about adding photo
            this.props.addPost(post);
            this.props.history.push('/');
        }

    }
    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> Post </button>
                    </form>
                </div>

            </div>

        )
    }
}

export default AddPhoto
