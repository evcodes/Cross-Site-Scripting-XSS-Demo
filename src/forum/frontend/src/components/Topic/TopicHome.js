import React, {Component} from 'react';
import {Container, Row, Col,Button, ListGroup, ListGroupItem} from 'reactstrap';

//connecting with redux
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import PropTypes from 'prop-types'

class TopicHome extends Component{

    componentDidMount(){
        this.props.getPosts();
    }

    render(){
        const { posts } = this.props.post;
        
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
                        <Button color = "success">
                            Write a new article
                        </Button>
                    </Col>
                </Row>
                <ListGroup>
                    {posts.map(({_id, title})=>
                        <ListGroupItem>
                            <h1>{title}</h1>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </Container> 
        )
    }
}

TopicHome.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(TopicHome);