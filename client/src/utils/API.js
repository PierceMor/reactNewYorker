import axios from "axios";

export default {

    //qureise NYT for articles
    queryNYT: (queryURL) => axios.get(queryURL),

    //Gets all articles
    getArticles: () => axios.get(`/api/articles`),

    //Gets specific article by ID
    getArticles: (id) => axios.get(`/api/articles/ ${id}` ),

    //Deletes articles by ID
    deleteArticle: (id) => axios.delete(`/api/articles/${id}`),

    //Saves article to database
    saveArticle: (articleData) => axios.post(`/api/articles`, articleData)
};