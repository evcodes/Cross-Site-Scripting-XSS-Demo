import React, {Component} from 'react';

import {Container} from 'reactstrap';

export default class TopicPage extends Component{
    render(){
        return(
            <Container>
                <h1>
                    {this.props.topic}
                </h1>
            </Container>
            
        )
    }
}