import React, {Component} from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

//connecting with redux
import { connect } from 'react-redux';
import { getPosts, deletePost} from '../../actions/postActions';
import PropTypes from 'prop-types'

//Modal for new post within a topic
import  NewPost from '../Post/NewPost';

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
                <ListGroup >
                    <h1 dangerouslySetInnerHTML = {this.createMarkup(posts[0].title)}/>
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