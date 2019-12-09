import React from 'react';

import {Col, Card, CardBody, CardTitle,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function TopicCard(props){
    return(
        <Col sm = '8' md = '6' lg = '4' xl = '3'>
            <Card>
                <CardBody>
                    <CardTitle>
                        {props.title}
                    </CardTitle>
                    <Link topic = {props.title} to ={props.title}>
                        <Button size = 'sm' block active>{props.topic} forums</Button>
                    </Link>
                </CardBody>
            </Card>
            <br/>
        </Col>
    )
}

export default TopicCard;