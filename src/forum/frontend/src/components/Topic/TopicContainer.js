import React, {Component }from 'react';
import {Container, Row} from 'reactstrap';
import Topic from './TopicCard';

function TopicContainer(){
    return(
        <Container>
            <Row>
                <Topic title = "News" topic = "Security news"/>
                <Topic title = "Exploits" topic = "Recent exploit"/>
                <Topic title = "Research" topic = "Research"/>
                <Topic title = "Opportunities" topic = "Job"/>
            </Row>
        </Container>
    )
}

export default TopicContainer;