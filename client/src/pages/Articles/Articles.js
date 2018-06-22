import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Query } from "mongoose";

class Articles extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        results: [],
        saved: []
    };

    componentDidMount() {

    };

    loadBooks = () => {

    };

    deleteBook = id => {

    };

    handleInputChange = event => {

    };

    handleFormSubmit = event => {
        event.preventDefault();
        let { topic, startYear, endYear } = Query
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest`
        let apiKey = `dc2c63a1cbf543afb6e0c3e13c834812`
    }; //handleFormSubmit
    
    getArticles = query => {

    }; //getArticles


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        <Jumbotron>
                            <form>
                                <div>
                                    <label htmlFor="topic">Enteer a topic to search for:</label>
                                    <Input
                                        onChange={this.handleInputChange}
                                        name='topic'
                                        value={this.state.topic}
                                        placeholder='topic'
                                    />
                                </div>
                            </form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    };

}; //articles