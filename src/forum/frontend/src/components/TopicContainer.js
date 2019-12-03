import React, {Component }from 'react';
import {Container, Row} from 'reactstrap';
import Topic from './Topic';
export default class TopicContainer extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Topic title = "News" topic = "Security news"/>
                    <Topic title = "Exploits"/>
                    <Topic title = "Research"/>
                </Row>
            </Container>
        )
    }
}