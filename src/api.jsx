
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

const getArticle = (id) => {
  return newsApi.get(`/articles/${id}`)
  .then((response) => {
    console.log(response.data)
      return response.data.article
  })
}

export {newsApi, getArticles, getArticle}