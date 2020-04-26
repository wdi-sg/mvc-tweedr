import React from 'react'
import _nav from './partials/_nav'
import InputBoxComponent from './components/inputBox.component'
import Tweet from './components/tweet.component'
import axios from 'axios';

import '../styles/dashboard.scss'

class Dashboard extends React.Component {

  constructor (props) {
    super(props)
    // this is to avoid server side error caused by sweetsData null
    this.state = {tweetsData : []}
  }

  componentDidMount () {
    this.setState({tweetsData: this.props.tweetsData})

  }

  createTweets = () => {
    return this.state.tweetsData.map(tweet=>{
      console.log(tweet)
    })
  }

  render () {
    const dummyTweets = [
      { id: 1, title: 'hello', content: 'bla', user_id: 1, likes: '20' },
      { id: 2, title: 'blabla', content: 'bldfdfa', user_id: 1, likes: '30' }
    ]
    const displayTweets = data => {
      return data.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <p>{item.likes}</p>
        </div>
      ))
    }

    return (
      <React.Fragment>
        <_nav userData={this.props.userData}/>
        <div className="section">
          <div className="container">
            <div className="columns">

              <div className="column is-three-quarters">
                <InputBoxComponent/>

                <div className="container">
                  {this.createTweets()}
                </div>

              </div>

              <div className="column">
              </div>

            </div>
          </div>
        </div>


      </React.Fragment>
    )

  }
}

export default Dashboard