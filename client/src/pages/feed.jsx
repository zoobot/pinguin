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
    // console.log("handleChangeFeed triggered")
    var textarea = document.getElementById('feed')
    var list = ''
    subscriptions.urls.map(function(url) {
        console.log(feednami.load(url))
          // .then(feed => {
          //   console.log(feed)
          //   for(let entry of feed.entries) {
          //     list = ''
          //     list += `${entry.title}\n${entry.link}\n\n`
          //     // textarea.value += `${entry.title}\n${entry.link}\n\n`
          //     // list.push(entry.title)
          //     // list.push(entry.link)
          //   }
          // console.log('handleFeed list',textarea)
          // })
          // .then(function(data) {
          //   // return data.json()
          //   console.log(data)
          //   // this.setState({defaultFeed: data.entries})
          //   // console.log(this.state.defaultFeed)
          // })
          // .bind(this))
      })

    // return listfeed

    event.preventDefault();
  }

  componentDidMount(query) {
    this.handleFetchFeed();
  }


  render() {
    const { title } = this.props;
    var List = []
    var textarea = document.getElementById('feed')
    var theList = subscriptions.urls.map(function(url) {
          feednami.load(url)
            .then(feed => {
              for(let entry of feed.entries) {
                // list += `${entry.title}\n${entry.link}\n\n`
                  var tempArr = []
                  // List.push(`${entry.title}\n${entry.link}\n\n`)
                // return (
                  // <a href={entry.title}>{entry.title}</a>,
                  // <a href={entry.link}>{entry.link}</a>,
                  List.push(`${entry.title}\n${entry.link}\n\n`)
                  // List.push(`${entry.title}\n${entry.link}\n\n`)
                // )
              }
              return List
            })
          })
    console.log('theList', theList)
    return (
      <div>
        <h1>{ title }</h1>
        <button onClick={this.handleFetchFeed}>REFRESH</button>
        <div id="feed">
            <ul>
                {subscriptions.urls.map(function(url){
                    feednami.load(url)
                    .then(feed => {
                      for(let entry of feed.entries) {
                        return <li key={ entry }>{entry.title}</li>
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