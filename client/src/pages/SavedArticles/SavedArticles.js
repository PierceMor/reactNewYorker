import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class SavedArticles extends Component {
    state= {
        article: {} 
    };

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-10 md-offset-1" >
                        <article>
                                <h1>Synopsis</h1>
                                <p>{}</p>
                        </article>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-2">
                        <Link to="/">Back to Authors</Link>
                    </Col>
                </Row>

            </Container>
        )
    };//render
};//SavedArticles


export default SavedArticles;