import React from 'react';

    var subscriptions = {urls: ['http://www.evilmadscientist.com/feed/','http://boingboing.net/feed', 'http://hackaday.com/feed/']}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: {},
      defaultFeed: 'test'
    }
    // this.handleFeeds = this.handleFeeds.bind(this);
    // this.handleGet = this.handleFeeds.bind(this);
  }

  changeSubscription(video) {
    this.setState({defaultFeed: this.state.defaultFeed});
  }

  handFeeds(event){

    subscriptions.urls.map(function(url) {
      feednami.load(url)
        .then(feed => {
          for(let entry of feed.entries) {
            this.state.defaultFeed += `${entry.title}\n${entry.link}\n\n`
          }
        })
    })
    event.preventDefault();
  }

  handleChangeFeed(event) {
    console.log("handleChangeFeed triggered")
    var list = ''
    subscriptions.urls.map(function(url) {
        feednami.load(url)
          .then(feed => {
            for(let entry of feed.entries) {
              list += `${entry.title}\n${entry.link}\n\n`
            }
            console.log(list)
          })
      })
    this.setState({defaultFeed: list})
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>SIGNIN</h1>
        <button onClick={this.handleChangeFeed}>REFRESH</button>
        <div id="feed">{this.state.defaultFeed}</div>
      </div>
    )
  }
}

export default Feed;