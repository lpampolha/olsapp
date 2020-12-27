import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Template } from './components/MainComponents'

import Routes from './Routes'


const Page = (props) => {
  return (
    <BrowserRouter>  
      <Template>
        <Routes />
      </Template>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = (disptch) => {
  return {
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)