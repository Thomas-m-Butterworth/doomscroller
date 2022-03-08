
import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://doomscroller.herokuapp.com/api/'
  });

  const getArticles = () => {    
    return newsApi.get(`/articles`)
        .then((response) => {
            // console.log(response.data)
            return response.data
        })
};

const getArticle = (article_id) => {
  return newsApi.get(`/articles`, {params: {article_id}})
  .then((response) => {
      return response.data
  })
}

export {newsApi, getArticles}