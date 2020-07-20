import axios from "axios";

const fetchArticlesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=16655451-1d4b73a3cb2e7a7815df66a14&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
