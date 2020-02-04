import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export default class ComponentCollapse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "Click to expand",
            angle: "down"
        }

    }

    //setState to update view according to expand or collapse click
    handleClick = () => {
        if (this.state.title === "Click to expand") {
            this.setState({
                title: "Click to collapse",
                angle: "up"
            })
        } else {
            this.setState({
                title: "Click to expand",
                angle: "down"
            })
        }
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle onClick={this.handleClick} as={Button} variant="Light" eventKey="collapse">
                        <div className="accordionToggle">
                            <div className="accordionTitle">{this.state.title}</div>
                            <div><i className={"collapseIcon fas fa-angle-" + this.state.angle + " fa-lg"}></i></div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="collapse">
                        <Card.Body>
                            <p>To contact tech team, please send an email to <span className="mailAddress">tech@make.org</span><br />
                                We will respond as soon as possible except if your request is about a bug.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion >
        )
    }
}



