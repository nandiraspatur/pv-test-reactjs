import React, { Component } from 'react';
import { Image, Divider, Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { saveBookingData } from '../actions/booking';

class BookingReview extends Component {
  getDate() {
    let dateStr = this.props.bookingData.date;
    if(!dateStr) return ''
    let date = new Date(dateStr);

    var monthNames = [
      "Januari", "Februari", "Maret",
      "April", "Mei", "Juni", "Juli",
      "Agustus", "September", "Oktober",
      "November", "Desember"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  };

  handleClickSubmit() {
    this.props.saveBooking(this.props.bookingData)
    this.props.history.push('/order/success')
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    let bookingData = this.props.bookingData
    let eventDetail = this.props.eventDetail
    let total = bookingData.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return (
      <div>
        <h1>Review Pesanan</h1>
        <div className='booking-review'>
          <div className='detail-event'>
            <h3>Pesanan</h3>
            <Image fluid src={eventDetail.urlImage}/>
            <h4>{eventDetail.name}</h4>
            <span>{eventDetail.location}</span>
          </div>
          <div className='detail-review'>
            <h3>Detail</h3>          
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Tanggal Kunjungan:</Table.Cell>
                  <Table.Cell width={6}>{this.getDate()}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jumlah Tamu:</Table.Cell>
                  <Table.Cell>{bookingData.amount} orang</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Divider/>
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Nama Lengkap:</Table.Cell>
                  <Table.Cell width={6}>{bookingData.fullname}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Alamat Email:</Table.Cell>
                  <Table.Cell>{bookingData.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No. Handphone:</Table.Cell>
                  <Table.Cell>{bookingData.phone}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>   
            <Divider/>
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jumlah {bookingData.amount}x</Table.Cell>
                  <Table.Cell width={6}>Rp {total}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Pajak</Table.Cell>
                  <Table.Cell>Termasuk</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row className='total-price'>
                  <Table.Cell>Total</Table.Cell>
                  <Table.Cell>Rp {total}</Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table>
            <div className='review-button'>
              <Button color='orange' onClick={() => this.handleClickSubmit()}>Pembayaran</Button>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bookingData: state.bookingReducers.bookingData,
    eventDetail: state.eventReducers.eventDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveBooking: (value) => dispatch(saveBookingData(value))
  };
};

const BookingReviewConnect = connect(mapStateToProps, mapDispatchToProps)(BookingReview);

export default BookingReviewConnect;