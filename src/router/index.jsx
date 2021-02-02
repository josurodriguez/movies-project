import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import MovieDetail from '../pages/MovieDetail'
import Login from '../pages/Login'
import { useUser} from 'reactfire'

const Router = () => {
  const user = useUser();
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            {user?.data?.email &&
              <Layout>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/movie/:id" component={MovieDetail} />
              </Layout>
            }
        </Switch>
    </BrowserRouter>
  )
}

export default Router;