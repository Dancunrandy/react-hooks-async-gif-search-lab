import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      query: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ query: e.target.value }, () => {
      this.fetchData()
    })
  }

  fetchData = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=orgmcAUeFowFw5NAubB7T6dvarXn3C6a&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: data.data.slice(0, 3) });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
