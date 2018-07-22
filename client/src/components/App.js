import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'

const Landing = () => <h1>Landing</h1>
const Dashboard = () => <h1>Dashboard</h1>
const SurveyNew = () => <h1>SurveyNew</h1>;
class App extends React.Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
    </div>;
  }
}

export default connect(null, actions)(App)