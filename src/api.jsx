
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

export {newsApi, getArticles}