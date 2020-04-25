import React,{useState} from 'react';
import _nav from './partials/_nav'
import Landing from './components/landing.component'
const SHOW_SIGNUP = 0
const SHOW_LOGIN = 1
const Index = (props) => {

  const [whichForm, setForm] = useState(SHOW_SIGNUP)

  const signUpLoginBtnHandler = (e) => {
    const whichBtn = e.target.id
    whichBtn === 'navSignUpBtn' ?
      setForm(SHOW_SIGNUP):setForm(SHOW_LOGIN)
  }

  return (
    <React.Fragment>
      <_nav loginSignUpClick = {signUpLoginBtnHandler} />
      <Landing displayForm = {whichForm}/>
    </React.Fragment>
  );
};

export default Index;