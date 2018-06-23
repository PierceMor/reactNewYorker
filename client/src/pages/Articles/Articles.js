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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let { topic, startYear, endYear } = this.state;
        let query =  { topic, startYear, endYear }
        this.getArticles(query)
    }; //handleFormSubmit

    getArticles =  query => {
        let { topic, startYear, endYear } = query
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest`
        let apiKey = `&api-key=dc2c63a1cbf543afb6e0c3e13c834812`

        if ( topic ) {
            queryURL+=`&fq=${topic}`
        }
        if (startYear){
            queryURL+=`&begin_date=${startYear}`
        }
        if (endYear){
            queryURL+=`&end_date=${endYear}`
        }
        queryURL+=apiKey

        API.queryNYT(queryURL)
            .then(res => {
                console.log(res.data.response.docs);
                this.setState({
                    results: [...this.state.results, ...res.data.response.docs],
                    topic: "",
                    startYear: "",
                    endYear: ""
                }).catch(err => console.log(err));
            })
    }; // getArticles
    



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
                                        placeholder='Topic'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="startYear">Enter a beginning Year (optional)</label>
                                    <Input 
                                        onChange={this.handleInputChange}
                                        name="startYear"
                                        value={this.state.startYear}
                                        placeholder='Start Year'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="endYear">Enter an Ending Date (optional)</label>
                                    <Input 
                                        onChange={this.handleInputChange}
                                        name="endYear"
                                        value={this.state.endYear}
                                        placeholder='End Year'
                                    />
                                </div>
                                
                                <FormBtn
                                    disabled={!(this.state.topic)}
                                    onClick={this.handleFormSubmit}
                                    type="info"
                                    >Submit
                                </FormBtn>
                            </form>
                        </Jumbotron>
                    </Col>

                    <Col size="sm-12">
                        <Jumbotron>
                            <h1> Results </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    };

}; //articles

export default Articles;