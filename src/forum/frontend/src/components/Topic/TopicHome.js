import React from 'react';
import {Container} from 'reactstrap';

function TopicHome(props){
    return(
        <Container>
            <h1>
                {this.props.topic}
            </h1>
        </Container> 
    )
}

export default TopicHome;