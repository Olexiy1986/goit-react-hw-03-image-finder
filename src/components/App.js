import React, { Component } from "react";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Spinner from "./Spinner";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import articlesApi from "../services/articlesApi";

class App extends Component {
  state = {
    articles: [],
    loading: false,
    searchQuery: "",
    page: 0,
    largeImageUrl: "",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  handleOpenModal = (url) => {
    this.setState({
      largeImageUrl: url,
    });
  };

  handleCloseModal = () => {
    this.setState({
      largeImageUrl: "",
    });
  };

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((articles) =>
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: [],
    });
  };

  render() {
    const { articles, loading, largeImageUrl } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {articles.length > 0 && (
              <ImageGallery
                articles={articles}
                openModal={this.handleOpenModal}
              />
            )}
            {articles.length > 0 && <Button onClick={this.fetchArticles} />}
          </div>
        )}
        {largeImageUrl && (
          <Modal largeUrl={largeImageUrl} closeModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default App;
