import React, { useEffect } from 'react'
import { ThemeModeProvider } from './styles/theme'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "fontsource-open-sans"

//HIGHER ORDER COMPONENTS
import WithAuth from './hoc/withAuth'

// ACTION CREATORS
import { checkUserSession } from './redux/user/user.actions'

// LAYOUTS
import MainLayout from './Layouts/Mainlayout'

// PAGES
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Dashboard from './pages/Dashboard'

export default function App(){
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  },[])

    return (
      <ThemeModeProvider>
        <div className="App">

          <Switch>
              <Route exact path="/" 
              render={() => (
                <MainLayout>
                  <Homepage />
                </MainLayout>
              )} />
              <Route exact path="/registration"
                render={() => (
                <MainLayout>
                  <Registration />
                </MainLayout>
              )} />
              <Route exact path="/login" 
                render={() => (
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
              <Route exact path="/dashboard" 
              render={() => (
                <WithAuth>
                  <MainLayout>
                      <Dashboard />
                  </MainLayout>
                </WithAuth>
                
              )}
              />
          </Switch>

        </div>
      </ThemeModeProvider>
    )
  
}


 
