import React, {Component} from 'react';

import {Col, Card, CardTitle} from 'reactstrap';
export default class Topic extends Component{
    render(){
        return(
            <Col md = "6" lg = "4" xl = "3">
                <Card>
                    <CardTitle>
                        {this.props.title}
                    </CardTitle>
                </Card>
            </Col>
           
        )
    }
}