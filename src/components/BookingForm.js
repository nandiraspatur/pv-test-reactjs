import React, { Component } from 'react';
import { Form, Image, Divider, Table, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { saveContactData } from '../actions/booking'

class BookingForm extends Component {
  handleInput({target}) {
    console.log(target.value)
    this.setState({
      [target.name]: target.value
    });
  };

  handleClickSubmit() {
    if(this.state.fullname && this.state.phone && this.state.email) {
      this.props.saveContactData(this.state)
      this.props.history.push('/order/review')
    } else {
      alert('Mohon isi semua form yg tesedia!!!')
    }
  };

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

  getPrice() {
    let total = this.props.eventDetail.price * this.props.bookingData.amount;
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    this.setState({
      total: this.props.eventDetail.price * this.props.bookingData.amount,
      date: this.props.bookingData.date,
      amount: this.props.bookingData.amount,
      event: this.props.bookingData.event
    });
  }

  render () {
    let eventDetail = this.props.eventDetail;
    return (
      <div>
        <h1>Pesanan Anda</h1>
        <div className='form-booking'>
          <h3>Data Kontak Pemesan</h3>
          <p>Data yang Anda isi hanya akan digunakan untuk menghubungi Anda jika ada masalah dengan pesanan.</p>
          <div>
            <Form>
              <Form.Input fluid name='fullname' label='Nama Lengkap*' onChange={(e) => this.handleInput(e)}/>
              <Form.Group widths='equal'>
                <Form.Input fluid name='phone' label='No. Handphone*' onChange={(e) => this.handleInput(e)}/>
                <Form.Input fluid name='email' label='Alamat Email*' onChange={(e) => this.handleInput(e)}/>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className='detail-booking'>
          <div className='detail-event'>
            <h3>Detail Pesanan</h3>
            <Image fluid src={eventDetail.urlImage} />
            <h4>{eventDetail.name}</h4>
            <span>{eventDetail.location}</span>
            <Divider />
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Tanggal Kunjungan:</Table.Cell>
                  <Table.Cell>{this.getDate()}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jumlah Tamu:</Table.Cell>
                  <Table.Cell>{this.props.bookingData.amount} orang</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className='total-booking'>
            <h3>Rincian Harga</h3>
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Jumlah {this.props.bookingData.amount}x</Table.Cell>
                  <Table.Cell>Rp {this.getPrice()}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Pajak</Table.Cell>
                  <Table.Cell>Termasuk</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row className='total-price'>
                  <Table.Cell>Total</Table.Cell>
                  <Table.Cell>Rp {this.getPrice()}</Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table>
            <div className='review-button'>
              <Button color='orange' onClick={() => this.handleClickSubmit()}>Lanjut ke review</Button>
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

const mapDispatchToProps = (dispacth) => {
  return {
    saveContactData: (value) => dispacth(saveContactData(value))
  }
};

const BookingFormConnect = connect(mapStateToProps, mapDispatchToProps)(BookingForm);

export default BookingFormConnect;