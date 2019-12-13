import React, {Component} from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';


/**
 * 
 * If a user clicks on the "create new post button" on the Topic Home,
 * Open a new modal with two fields with the title and body for a new post
 * After the user has finished, submit the post onto the database
 * 
 */
class NewPost extends Component{
     state = {
        modalIsOpen: false,
        title: '',
        body: ''
    }

    toggle = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit = e => {
        e.preventDefault();
    
        const newPost = {
          title: this.state.title,
          body: this.state.body
        };
    
        // Add item via addPost action
        this.props.addPost(newPost);
    
        // Close modal
        this.toggle();
    }

    render(){
        return (
            <div>
                <Button color = "success" onClick = {this.toggle}>Add Post</Button>

                <Modal isOpen={this.state.modalIsOpen} toggle = {this.toggle}>
                    <ModalHeader toggle = {this.toggle}>
                        Add to Topic
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for = "post">
                                    Title
                                </Label>
                                <Input type = "text" 
                                name = "title" 
                                id="post" 
                                placeholder = "Post Title" 
                                onChange = {this.onChange}/>
                                <br/>
                                <Label for = "post">
                                    Body
                                </Label>
                                <Input type = "textarea" 
                                name = "body" 
                                id="post" 
                                placeholder = "Post Body (don't enter anything malicious here)"
                                onChange = {this.onChange}/>
                            </FormGroup>
                            <Button
                            block
                            color = "dark"> 
                            Submit post
                        </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps, { addPost })(NewPost);