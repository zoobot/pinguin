import React from 'react';
import { Router, Route, Link } from 'react-router'

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

  handleFetchFeed(event) {
    console.log("handleChangeFeed triggered")
    var textarea = document.getElementById('feed')
    var list = ''
    list = subscriptions.urls.map(function(url) {
        feednami.load(url)
          .then(feed => {
            for(let entry of feed.entries) {
              // list += `${entry.title}\n${entry.link}\n\n`
              // textarea.value += `${entry.title}\n${entry.link}\n\n`
              list.push(entry.title)
              list.push(entry.link)
              console.log('handleFeed list',list)
            }

          })
      })

    return list
    // this.setState({defaultFeed: list})
    event.preventDefault();
  }


  render() {
    const { title } = this.props;
    var List = []
    var textarea = document.getElementById('feed')
    var theList = subscriptions.urls.map(function(url) {
          feednami.load(url)
            .then(feed => {
              for(let entry of feed.entries) {
                textarea.value += `${entry.title}\n${entry.link}\n\n`
                  var tempArr = []
                  List.push(`${entry.title}\n${entry.link}\n\n`)
                // return (
                  // <a href={entry.title}>{entry.title}</a>,
                  // <a href={entry.link}>{entry.link}</a>,
                  // List.push(`${entry.title}\n${entry.link}\n\n`)
                  // List.push(`${entry.title}\n${entry.link}\n\n`)
                // )
              }
              // return List
            })
          })
    console.log('theList', List)
    return (
      <div>
        <h1>{ title }</h1>
        <button onClick={this.handleFetchFeed}>REFRESH</button>
        <div id="feed">
            <ul>
              {subscriptions.urls.map(function(url) {
                feednami.load(url)
                .then(feed => {
                  for(let entry of feed.entries) {
                    return (
                      <li key={ entry.title }>{entry.title}</li>,
                      <li key={ entry.link }>{entry.title}</li>
                    )
                  }
                })
              })}
            </ul>
        </div>
      </div>
    )
  }
}

export default Feed;