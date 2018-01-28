import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import Spinner from 'react-spinkit';

class BookingSuccess extends Component {
  componentWillMount() {
    console.log(this.props)
  };

  render () {
    return ( 
      <div>
        {this.props.bookingStatus ?
          <div className='success-msg'>
            <h1>Pesanan Berhasil</h1>
            <p>Terima kasih pesanan anda akan segera kami proses.</p>
            <Image centered size='medium' src='https://www169.lunapic.com/do-not-link-here-use-hosting-instead/151706781616883573?8498162669'/>
          </div>
          :
          <div class='loading'>
            <Spinner name="ball-beat" color='orange' fadeIn='none'/>
          </div>
        }
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    bookingStatus: state.bookingReducers.bookingStatus
  };
};

const BookingSuccessConnect = connect(mapStateToProps, null)(BookingSuccess);

export default BookingSuccessConnect;