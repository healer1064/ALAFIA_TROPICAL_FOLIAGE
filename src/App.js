import React, { useEffect } from 'react'
import { ThemeModeProvider } from './styles/theme'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "fontsource-open-sans"

// COMPONENTS
import AdminToolBar from './components/AdminToolBar'

// HIGHER ORDER COMPONENTS
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

// ACTION CREATORS
import { checkUserSession } from './redux/user/user.actions'

// LAYOUTS
import MainLayout from './Layouts/Mainlayout'
import AdminLayout from './Layouts/AdminLayout'
import DashboardLayout from './Layouts/DashboardLayout'

// PAGES
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Search from './pages/Search'
import ProductDetails from './pages/ProductDetails'

export default function App(){
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  },[])

    return (
      <ThemeModeProvider>
        <div className="App">
          <AdminToolBar />
          <Switch>

              <Route exact path="/" 
                render={() => (
                  <MainLayout>
                    <Homepage />
                  </MainLayout>
                )} 
              />

              <Route exact path="/search" 
                render={() => (
                  <MainLayout>
                    <Search />
                  </MainLayout>
                )}
              />

              <Route exact path="/product/:productID" 
                render={() => (
                  <MainLayout>
                    <ProductDetails />
                  </MainLayout>
                )} 
              />

              <Route exact path="/registration"
                render={() => (
                  <MainLayout>
                    <Registration />
                  </MainLayout>
                )} 
              />

              <Route exact path="/login" 
                render={() => (
                  <MainLayout>
                    <Login />
                  </MainLayout>
                )} 
              />

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
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                  </WithAuth>
                )}
              />

            <Route exact path="/admin" 
              render={() => (
                <WithAdminAuth>
                  <AdminLayout>
                    <Admin />
                  </AdminLayout>
                </WithAdminAuth>
              )}
            />

          </Switch>

        </div>
      </ThemeModeProvider>
    )
  
}


 
