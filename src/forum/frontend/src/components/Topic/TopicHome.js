import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                        <Link to={{
                            pathname: "News/"+_id,
                            state: {
                                id: _id
                            }
                            }}>
                            {title}    
                        </Link>
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