import React from 'react';
import { connect } from 'dva';

@connect((state) => ({
  currentUser: state.user,
  pet: state.pet,
}))
export default class Pet extends React.Component {
  componentDidMount = () => {
    this.getPets();
  };

  getPets = () => {
    const { dispatch } = this.props;
    const userId = JSON.parse(localStorage.getItem('user')).userId;
    dispatch({
      type: 'pet/getPets',
      payload: userId,
    });
  };

  render() {
    const {
      pet: { pets },
    } = this.props;
    console.log('pet from mock: ', pets);
    return <div>Your pets information</div>;
  }
}
