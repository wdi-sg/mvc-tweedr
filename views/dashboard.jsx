import React from 'react'
import _nav from './partials/_nav'
import { Head } from '@react-ssr/express';
import InputBoxComponent from './components/inputBox.component'
import Tweet from './components/tweet.component'
import axios from 'axios';

import '../styles/dashboard.scss'

class Dashboard extends React.Component {

  constructor (props) {
    super(props)
    // to workaround server side state is null
    // this.state.is null on server side
    // experimenting on running client only code without
    // static script
    this.state = {tweetsData : []}
  }

  componentDidMount () {
    axios.get('http://localhost:3000/tweets').then(response =>{
      this.setState({tweetsData: response.data})
    })
  }

  createTweets = () => {
    console.log(this.state.tweetsData)
    return this.state.tweetsData.map(tweetData=>(
      <Tweet tweetData = {tweetData} key={tweetData.id}/>
    ))
  }

  render () {

    return (
      <React.Fragment>
        <Head>
          <title>
            Dashboard
          </title>
        </Head>
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