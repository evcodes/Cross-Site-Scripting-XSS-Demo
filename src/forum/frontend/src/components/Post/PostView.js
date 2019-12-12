import React, {Component} from 'react';

//need to connect this application with redux */
import { connect } from 'react-redux';
import { getPost} from '../../actions/postActions';
import PropTypes from 'prop-types'

class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.id};
      }


    componentDidMount(){
        this.props.getPost(this.state.id);
    }
    
    render(){
        const {post} = this.props.post;

        return(
            <div>
                <h1>TEST</h1>
                <p2>TEST BODY</p2>
            </div>
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