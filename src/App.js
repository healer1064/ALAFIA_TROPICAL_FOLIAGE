import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, handleUserProfile } from './firebase/utils'
import "fontsource-open-sans"

//Layouts 
import MainLayout from './Layouts/Mainlayout'

//Pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'

const intialState = {
  currentUser: null
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...intialState
    }
  }

  authListener = null
  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()

            }
          })
        })
      }

      this.setState({
        ...intialState
      })
      
    })
  }

  componentWillUnmount(){
    this.authListener()
  }
  
  render(){
    const { currentUser } = this.state
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            )} />
            <Route exact path="/registration" render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )} />
            <Route exact path="/login" 
              render={() => currentUser ? <Redirect to='/'/> : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
            )} />
        </Switch>
      </div>
    )
  }
}

export default App
