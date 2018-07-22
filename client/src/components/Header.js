import React from 'react'
import Payments from './Payments'
import { connect } from 'react-redux' 

class Header extends React.Component{
  renderLogin(){
    switch(this.props.auth){
      case null:
        return
      case false:
        return <li>
          <a href="/auth/google"> Login With Google  </a>
        </li>
      default:
        return [
          <li key="1"><Payments/></li>,
          <li key="3">Credits: {this.props.auth.credits}</li>,
          <li><a href="/api/logout"> Logout </a></li>
        ]
    }
  }
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emailey
          </a>
          <ul className="right">
            {this.renderLogin()} 
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}



export default connect(mapStateToProps)(Header)