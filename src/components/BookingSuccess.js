import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookingSuccess extends Component {
  componentWillMount() {
    console.log(this.props)
  }

  render () {
    return ( 
      <div className='success-msg'>
        {this.props.bookingStatus ?
          <div>
            <h1>Pesanan Berhasil</h1>
            <p>Terima kasih pesanan anda akan segera kami proses.</p>
            <p>{JSON.stringify(this.props.bookingStatus)}</p>
          </div>
          :
          <p>Loading...</p>
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