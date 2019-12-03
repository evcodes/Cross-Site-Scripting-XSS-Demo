import React, {Component} from 'react';

import {Col, Card, CardBody, CardTitle,Button} from 'reactstrap';
export default class Topic extends Component{
    render(){
        return(
            <Col sm = "8" md = "6" lg = "4" xl = "3">
                <Card>
                    <CardBody>
                        <CardTitle>
                            {this.props.title}
                        </CardTitle>
                        <Button size = "sm" block href = "\${this.props.topic}">{this.props.topic} forums</Button>
                    </CardBody>
                </Card>
                <br/>
            </Col>
           
        )
    }
}