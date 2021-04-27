import React from 'react'
import { Route, Switch } from 'react-router-dom'
import "fontsource-open-sans"

//Layouts 
import MainLayout from './Layouts/Mainlayout'

//Pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route exact path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
      </Switch>
    </div>
  )
}

export default App;
