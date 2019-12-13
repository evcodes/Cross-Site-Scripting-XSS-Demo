import React, { Component } from 'react';

//Reactstrap components for page
import { Container } from 'reactstrap';

//need to connect this application with redux */
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';
import PropTypes from 'prop-types'

// axios for requests
import axios from 'axios';

/**
 * 
 * Renders an individual post from the id in the path
 * Fetch request temporarily, eventually will work with axios.
 * 
 */

class PostView extends Component {
    state ={
        id: null,
        post: {
            title: "",
            body:""
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.state.id = id        
        
        axios.get(`http://localhost:5000/api/forum/${this.state.id}`)
            .then(res => {
            const fetchedPost = res.data;
            console.log(fetchedPost)

            this.setState({
                post:fetchedPost
            })
        })
    }

    //this function will rerender the body 
    createMarkup (post){
        return {__html: post }
    }
    
    render(){
        return(
            <Container>
                <h1>{this.state.post["title"]}</h1>
                <p dangerouslySetInnerHTML = {this.createMarkup(this.state.post["body"])}/>
            </Container>
        )
    }
}

PostView.propTypes = {
    getPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps, {getPost})(PostView);