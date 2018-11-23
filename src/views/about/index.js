import React from 'react';
import { connect } from 'react-redux';


class About extends React.Component {
  render(){
    const { message } = this.props
    return (
      <div>about
        {message}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    message: state.currentTime.currentTime
  }
}

export default connect(mapStateToProps)(About);