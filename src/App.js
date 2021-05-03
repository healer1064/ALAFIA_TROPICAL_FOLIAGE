import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import "fontsource-open-sans"

// ACTION CREATORS
import { setCurrentUser } from './redux/user/user.actions'

// FIREBASE 
import { auth, handleUserProfile } from './firebase/utils'

// LAYOUTS
import MainLayout from './Layouts/Mainlayout'

// PAGES
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Recovery from './pages/Recovery'

class App extends Component {

  authListener = null
  componentDidMount(){

    const { setCurrentUser } = this.props

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
            ...userAuth
          })
        })
      }

      setCurrentUser(userAuth)
      
    })
  }

  componentWillUnmount(){
    this.authListener()
  }
  
  render(){
    const { currentUser } = this.props
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() => (
              <MainLayout>
                <Homepage />
              </MainLayout>
            )} />
            <Route exact path="/registration"
              render={() =>  currentUser ? <Redirect to='/'/> : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )} />
            <Route exact path="/login" 
              render={() => currentUser ? <Redirect to='/'/> : (
                <MainLayout>
                  <Login />
                </MainLayout>
            )} />
            <Route exact path="/recovery" 
             render={() => (
               <MainLayout>
                 <Recovery />
               </MainLayout>
             )}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App)
