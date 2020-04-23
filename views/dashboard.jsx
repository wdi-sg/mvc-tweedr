import React from 'react';
import _header from './partials/_header'

const Dashboard = (props)=> {
 const dummyTweets =  [
  {id:1,title:"hello",content:'bla',user_id: 1, likes:'20'},
  {id:2,title:"blabla",content:'bldfdfa',user_id: 1, likes:'30'}
 ]

  const displayTweets = data => {
   return data.map(item=> (
     <div key={item.id}>
       <h1>{item.title}</h1>
       <p>{item.content}</p>
       <p>{item.likes}</p>
     </div>
   ))
  }

 return (
   <React.Fragment>
    <_header/>
    <div className="section">
      <div className="container">
        {displayTweets(dummyTweets)}
      </div>
    </div>
   </React.Fragment>
 )

}

export default Dashboard