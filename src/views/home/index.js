import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime } from '../../redux/action';

class Home extends React.Component {

  render() {
    const { count, fetchNewTime } = this.props;
    return (
      <div>Home
        <div>current time:{count}</div>
        <button onClick={()=>
          fetchNewTime()}>
          Update time
        </button>
      </div>
    )
  }
}



export default connect(
  state=>({
    count: state.currentTime.currentTime
  }),
  { fetchNewTime },
)(Home);