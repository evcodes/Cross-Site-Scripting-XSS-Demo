import React, {Component} from 'react';

import {Col, Card, CardBody, CardTitle,Button} from 'reactstrap';
import {Link} from "react-router-dom";
export default class Topic extends Component{

    
    render(){

    
        return(
            <Col sm = "8" md = "6" lg = "4" xl = "3">
                <Card>
                    <CardBody>
                        <CardTitle>
                            {this.props.title}
                        </CardTitle>
                        <Link to ={this.props.title}>
                            <Button size = "sm" block active>{this.props.topic} forums</Button>
                        </Link>
                    </CardBody>
                </Card>
                <br/>
            </Col>
        )
    }
}