import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react';
import Spinner from 'react-spinkit';

import { getAllBooking } from '../actions/booking';

class BookingList extends Component {
  getDate(dateStr) {
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

  componentWillMount() {
    this.props.getAllBooking()
  }

  render() {
    return (
      <div>
        <h1>Daftar Pesanan</h1>
        {this.props.bookingList ?
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID Pesanan</Table.HeaderCell>
                <Table.HeaderCell>Nama Pemesan</Table.HeaderCell>
                <Table.HeaderCell>Tanggal Kunjungan</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.bookingList.length === 0 ?
                <Table.Row>
                  <Table.Cell colspan='5' textAlign='center'>Data Kosong</Table.Cell>
                </Table.Row>
                :
                this.props.bookingList.map((booking, i) => {
                  return  <Table.Row key={i}>
                            <Table.Cell>{booking._id}</Table.Cell>
                            <Table.Cell>{booking.fullname}</Table.Cell>
                            <Table.Cell>{this.getDate(booking.date)}</Table.Cell>
                            <Table.Cell>Rp {booking.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Table.Cell>
                            <Table.Cell textAlign='center'><Button color='orange'>Detail</Button></Table.Cell>
                          </Table.Row>
                })
              }
            </Table.Body>
          </Table>
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
    bookingList: state.bookingReducers.bookingList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooking: () => dispatch(getAllBooking())
  }
};

const BookingListConnect = connect(mapStateToProps, mapDispatchToProps)(BookingList);

export default BookingListConnect;