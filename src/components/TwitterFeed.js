import React, { Component } from 'react';

class TwitterFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      error: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=YOUR_SCREEN_NAME&count=5')
      .then(response => response.json())
      .then(data => this.setState({ tweets: data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { tweets, error, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div className="twitter-feed">
        <h2>Latest Tweets</h2>
        {tweets.map(tweet => (
          <div key={tweet.id}>
            <p>{tweet.text}</p>
            <p><em>{new Date(tweet.created_at).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    );
  }
}

export default TwitterFeed;
