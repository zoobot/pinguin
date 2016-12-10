import React from 'react';

var feed = {urls: ['http://www.evilmadscientist.com/feed/','http://boingboing.net/feed', 'http://hackaday.com/feed/']}

class Feed extends React.Component {

  handFeeds(feedArr){
    const textarea = document.getElementById('feeds')
    feedArr.map(function(url) {
      feednami.load(url)
        .then(feed => {
          console.log(feed)
          textarea.value = ''
          for(let entry of feed.entries) {
            textarea += `${entry.title}\n${entry.link}\n\n`
          }
          console.log(textarea)
        })
    })
  }

  handleGet(event) {
    Util.getFeed()
  }

  render() {
    return (
      <form onSubmit={this.handleFeeds}>
        <button type="submit" value="Submit">REFRESH</button>
      </form>
      <div id="feeds"></div>
    )
  }
}

export default Feed;