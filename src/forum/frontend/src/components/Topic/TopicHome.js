import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

//connecting with redux
import { connect } from 'react-redux';
import { getPosts, deletePost} from '../../actions/postActions';
import PropTypes from 'prop-types'

// routing Topic Home to a single post

//Modal for new post within a topic
import  NewPost from '../Post/NewPost';

import PostView from '../Post/PostView';
class TopicHome extends Component{

    componentDidMount(){
        this.props.getPosts();
    }

    onDeleteClick = (id) => {
        this.props.deletePost(id)
    }

    createMarkup (post){
        return {__html: post }
    }

    loadPostView(PostID){
        return (ReactDOM.render(<PostView id = {PostID} />))
    }
    
    render(){
        const {posts} = this.props.post;
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>
                        {this.props.topic}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewPost/>
                    </Col>
                </Row>
                <ListGroup>
                {posts.map(({ _id, title, body }) => (
                    <ListGroupItem key = {_id}>

                        {/* dangerouslySetInnerHTML = {this.createMarkup(title)} */}
                        <h1 onClick = {()=>this.loadPostView(_id)}>
                            {title}
                        </h1>
                    </ListGroupItem>))}
                </ListGroup>
            </Container> 
        )
    }
}

TopicHome.propTypes = {
    getPosts: PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts, deletePost})(TopicHome);