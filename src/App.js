import React from 'react'
import { connect } from 'react-redux'

const Page = (props) => {
  return (
    <div> App funcionando </div>
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