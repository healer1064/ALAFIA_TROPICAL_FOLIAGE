import React, { useState, useEffect } from 'react'
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

function App() {

  const [ authUser, setAuthUser ] = useState(intialState)

  useEffect(() => {
    let authListener = null
    authListener = auth.onAuthStateChanged(async userAuth => {
      // if(!userAuth) setAuthUser({
      //   ...authUser
      // })
      setAuthUser(userAuth)
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setAuthUser({
            id: snapshot,
            ...snapshot.data(),
            ...authUser
          })
        })
      }
      setAuthUser(authUser)
    })
  },[])
  
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <MainLayout currentUser={authUser}>
              <Homepage />
            </MainLayout>
          )} />
          <Route exact path="/registration" render={() => (
            <MainLayout currentUser={authUser}>
              <Registration />
            </MainLayout>
          )} />
          <Route exact path="/login" 
            render={() => authUser ? <Redirect to='/'/> : (
              <MainLayout currentUser={authUser}>
                <Login />
              </MainLayout>
          )} />
      </Switch>
    </div>
  )
}

export default App;
